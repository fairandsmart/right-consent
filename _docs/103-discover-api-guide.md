---
title: Discover API guide
permalink: /docs/discover-api-guide/
excerpt: "Discovery tour of the API for basic operations"
header:
  og_image: /assets/images/discover-api-overview.jpg
toc: false
menu: true
---

Learn how to use Right Consents **API** for basic operations:

- Understand **API basic concepts** and ressources
- Create a **Consent Transaction**
- Follow the transaction Workflow
- Use **curl** to make basic API calls for consent collection simple scenario

## Prerequisites

To complete this guide you need :

- Roughly 45 minutes
- Git
- Docker
- Right Consents running
- Curl
- Some elements already created in the backoffice

## Overview

In this guide you will discover the basic concepts and resources of the API and the operations that are necessary in order to integrate Right Consents in existing applications and start collecting consent.

{% include figure image_path="/assets/images/discover-api-overview.jpg" alt="Discover RIght Consents API" %}

## Perform a Consent Collect over the API using curl

According to the modelised elements and the predefined consent collect transaction skeleton we can perform direct API calls.

### Authenticate test user

Use the testuser credentials in curl over the Identity Provider to retrieve an access token allowing authenticated calls on the API:

{% highlight bash %}
RESPONSE=`curl -v -d "client_id=cmclient" \
                  -d "username=usertest" \
                  -d "password=test" \
                  -d "grant_type=password" \
                  http://localhost:4285/auth/realms/RightConsents/protocol/openid-connect/token`
ACCESS_TOKEN=`echo ${RESPONSE} | jq -r '.access_token'`
REFRESH_TOKEN=`echo ${RESPONSE} | jq -r '.refresh_token'`
{% endhighlight %}

The refresh token can be used later avoiding reusing password:

{% highlight bash %}
RESPONSE=`curl -v -d "client_id=cmclient" \
                  -d "refresh_token=${REFRESH_TOKEN}" \
                  -d "grant_type=refresh_token" \
                  http://localhost:4285/auth/realms/RightConsents/protocol/openid-connect/token`
ACCESS_TOKEN=`echo ${RESPONSE} | jq -r '.access_token'`
REFRESH_TOKEN=`echo ${RESPONSE} | jq -r '.refresh_token'`
{% endhighlight %}

<i class="fa fa-info-circle"></i> You can also create new user directly from the login screen of the GUI http://localhost:4286 or via the IdP admin console available at http://localhost:4285/auth/admin (admin/admin)
{: .notice--info}

The access token have a short time validity and yo umay have to renew it during the guide, just replay those requests when needed.

### Create a consent transaction

Using the generated context, call the API to start a consent transaction:

{% highlight bash %}
TXID=`curl -v --header "Content-Type: application/json" \
              --header "Authorization: Bearer ${ACCESS_TOKEN}" \
              --request POST \
              --data '{"subject":"usertest","layoutData":{"type":"layout","elements":["processing.001"],"orientation":"VERTICAL","info":"information.001"}}' \
              http://localhost:4287/consents`
echo ${TXID}
{% endhighlight %}

The result is a transaction creation attached to a unique ID that will be used to access transaction. The response contains the transacton ID in its body but also a complete link to the created transaction inthea Location header.

<i class="fa fa-info-circle"></i> If you don't want to use the same IdP for your users than for the consent API, you'll have to insert a kind of Proxy (server side) to ensure Consent API authentication process (as admin or operator) and generates transactions for the enduser without its own authentication. More informations about authentication solutions are describes in the {% link _docs/106-authentication-guide.md %}
{: .notice--info}


### Get the transaction

Transaction API supports 2 mimetypes : html or json. In HTML, client is supposed to be a browser and getting the transaction resource will send a redirection to the next human action needed for that transaction (submit consent, confirm consent, show receipt, restart a new transaction).

{% highlight bash %}
TX_HTML=`curl -v --header "Authorization: Bearer ${ACCESS_TOKEN}" \
                 --header "Accept: text/html" \
                 http://localhost:4287/consents/${TXID}`
echo ${TX_HTML}
{% endhighlight %}

In JSON, only a representation of the transaction is send including the link to the next action.

{% highlight bash %}
TX_JSON=`curl -v --header "Authorization: Bearer ${ACCESS_TOKEN}" \
                 --header "Accept: application/json" \
                 http://localhost:4287/consents/${TXID}`
echo ${TX_JSON}
FORM_URL=`echo ${TX_JSON} | jq -r '.task'`
echo ${FORM_URL}
{% endhighlight %}

In both case, an authentication token is included avoiding to use the OIDC Bearer token for the transaction process, making it easyer to integrate in a popup or an IFrame. The token can be joined to all action as a query param (/submit?t=$token).

A short version of the transaction just after creation is:

{% highlight json %}
{
   "id":"P6f1JU6LjKoUwR5QBEYPgf",
   "subject":"usertest",
   "state":"CREATED",
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQNmYxSlU2TGpLb1V3UjVRQkVZUGdmIiwiZXhwIjoxNjYwOTMwMzMyfQ.0pGomVcjvGGWshhovRpCKjP6BVOt2K6-W6QXLCVlwsA",
   "task":"http://localhost:4287/consents/P6f1JU6LjKoUwR5QBEYPgf/submit",
   "breed":"http://localhost:4287/consents/P6f1JU6LjKoUwR5QBEYPgf/child"
}
{% endhighlight %}

### Get consent form and submit values

When the transaction is in the state CREATED, the next step is submission of consent, calling the url of the task field will produce the form needed for consent submission.

{% highlight bash %}
FORM_JSON=`curl -v --header "Authorization: Bearer ${ACCESS_TOKEN}" \
                   --header "Accept: application/json" \
                   ${FORM_URL}`
echo ${FORM_JSON}
{% endhighlight %}

Many informations are included in the JSON representation of the form mainly for disaplying legal information to the enduser. The Html version is fully operationnal without any interpretation. Important parts are the serial numebrs of elements. Only few informations need to be submitted or consent:

{% highlight bash %}
FORM_INFO_KEY=`echo ${FORM_JSON} | jq -r '.info.entry.key'`
FORM_INFO_SERIAL=`echo ${FORM_JSON} | jq -r '.info.serial'`
FORM_PROC_KEY=`echo ${FORM_JSON} | jq -r '.elements[0].entry.key'`
FORM_PROC_SERIAL=`echo ${FORM_JSON} | jq -r '.elements[0].serial'`
FORM_VALUES="\"{'info':['element/information/${FORM_INFO_KEY}/${FORM_INFO_SERIAL}'],'element/processing/${FORM_PROC_KEY}/${FORM_PROC_SERIAL}':['accepted']}\""
SUBMIT_JSON=`curl -v --header "Content-Type: application/json" \
                     --header "Authorization: Bearer ${ACCESS_TOKEN}" \
                     --header "Accept: application/json" \
                     --request POST \
                     --data ${FORM_VALUES} \
                     ${FORM_URL}`
{% endhighlight %}
