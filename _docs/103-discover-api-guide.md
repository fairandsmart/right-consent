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
- Right Consents running with existing models
- Curl

## Overview

In this guide you will discover the basic concepts and resources of the API. We will use some existing consent elements models to build a transaction and follow the transaction workflow using only API calls.

{% include figure image_path="/assets/images/discover-api-overview.jpg" alt="Discover RIght Consents API" %}

## Authentication

Right Consents define 5 application roles: admin, operator, user, transaction or anonymous. In order to gain a role, calls to the API need to be authentified. Right Consents supports 3 different authentication scheme: OIDC/OAuth, API KEY and embedded token.

In this guide we will perform all the operations as a single user authentified using OIDC over kecloak. First thing is to create a user in the IdP by visiting http://localhost:4285/auth/realms/RightConsents/account and follow the 'Register' link. You just have to create an account for the test user.

<i class="fa fa-info-circle"></i> You can access the IdP admin console available at http://localhost:4285/auth/admin (admin/admin)
{: .notice--info}

### Retreive OIDC token

Use the created user credentials in curl over the Identity Provider (IdP) to retrieve an access token that you will use later for calling API:

{% highlight bash %}
RESPONSE=`curl -v -d "client_id=cmclient" \
                  -d "username=usertest" \
                  -d "password=test" \
                  -d "grant_type=password" \
                  http://localhost:4285/auth/realms/RightConsents/protocol/openid-connect/token`
ACCESS_TOKEN=`echo ${RESPONSE} | jq -r '.access_token'`
REFRESH_TOKEN=`echo ${RESPONSE} | jq -r '.refresh_token'`
{% endhighlight %}

The refresh token can also be used later avoiding reusing password and consuming algorithm:

{% highlight bash %}
RESPONSE=`curl -v -d "client_id=cmclient" \
                  -d "refresh_token=${REFRESH_TOKEN}" \
                  -d "grant_type=refresh_token" \
                  http://localhost:4285/auth/realms/RightConsents/protocol/openid-connect/token`
ACCESS_TOKEN=`echo ${RESPONSE} | jq -r '.access_token'`
REFRESH_TOKEN=`echo ${RESPONSE} | jq -r '.refresh_token'`
{% endhighlight %}

The access token have a short time validity and you may have to renew it during the guide, just replay those requests when needed.

### Define a consent context

In order to create a consent transaction, we have to send a **Consent Context** to the API that will define the transaction layout and configuration. The context can be generated using the **backoffice form designer** but if you are familiar with its format, you can also generate one from scratch.

Here is the simpliest Consent Context possible with a full default configuration. This context uses elements already created in the [First Consent Form Guide]({% link _docs/102-first-consent-form-guide.md %}): information.001, processing.001, preference.001, processing.002

{% highlight json %}
{
  "layoutData": {
    "type":"layout",
    "elements":["processing.001"],
    "orientation":"VERTICAL",
    "info":"information.001"}
}
{% endhighlight %}

### Create a transaction

In order to create a transaction for that context, you juste have to post the context payload to the consents resource on the API using the Access Token retreived before.

Transaction API generate 2 mimetypes representation: HTML or JSON. In HTML, client is supposed to be a browser and getting the transaction resource will send a redirection to the next human action needed for that transaction.

{% highlight bash %}
TXID=`curl -v --header "Content-Type: application/json" \
              --header "Accept: application/json" \
              --header "Authorization: Bearer ${ACCESS_TOKEN}" \
              --request POST \
              --data '{"layoutData":{"type":"layout","elements":["processing.001"],"orientation":"VERTICAL","info":"information.001"}}' \
              http://localhost:4287/consents`
echo ${TXID}
{% endhighlight %}

The response will contains the transacton ID in its body but also a complete link to the created transaction in the Location header. The complete link embed a transaction access token that will prevent the use of a Bearer Token by giving access to that transaction only. This is usefull if you generate the transaction as an admin for another subject to push the link by email or in anonymous environment.

As explained before, depending on the Accept header you provided (text/html or application/json) you'll received either 201 (created) code or a 301 (redirect) code for HTML automatic redirection to next human task.

<i class="fa fa-info-circle"></i> If you try to create the same transaction again the API will find the existing one and return the same id again avoiding performance issues and orphean transactions.
{: .notice--info}

The transaction workflow lifecycle follow 6 states : CREATED, SUBMITTED, COMMITTED, CANCELLED, TIMEOUT, ROLLBACK. After creation, the transaction is now in state CREATED.

### Get the transaction

To retreive the transaction representation, you just have to perform a GET on the transaction resource.

{% highlight bash %}
TX_HTML=`curl -v --header "Authorization: Bearer ${ACCESS_TOKEN}" \
                 --header "Accept: text/html" \
                 http://localhost:4287/consents/${TXID}`
echo ${TX_HTML}
{% endhighlight %}

In HTML, a redirect (201) code is sent back including the location of the next human task to perform on the transaction according to its state.

{% highlight bash %}
TX_JSON=`curl -v --header "Authorization: Bearer ${ACCESS_TOKEN}" \
                 --header "Accept: application/json" \
                 http://localhost:4287/consents/${TXID}`
echo ${TX_JSON}
FORM_URL=`echo ${TX_JSON} | jq -r '.task'`
echo ${FORM_URL}
{% endhighlight %}

In JSON, only a representation of the transaction is send including the link to the next action.

In both case, an authentication token is included avoiding to use the OIDC Bearer token for the transaction process, making it easyer to integrate in a popup or an IFrame. The token can be joined to all action as a query param (?t=$token) or in a header (CM_TOKEN: $token)

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

### Get the consent form and submit values

When the transaction is in the state CREATED, the next step is *submit*: the submission of consent. Calling the url of the task field will produce the form needed for consent submission and will include a submission link with a fresh token if needed.

{% highlight bash %}
FORM_JSON=`curl -v --header "Authorization: Bearer ${ACCESS_TOKEN}" \
                   --header "Accept: application/json" \
                   ${FORM_URL}`
echo ${FORM_JSON}
{% endhighlight %}

By default, transaction API is supposed to be accessed in HTML making the workflow evolution smooth and easy. Thus, representation of form contains many informations that will be processed by a template in order to produce a beautifull and embeddable HTML code. By the way, it is also possible to use it in JSON,
many informations are then included in the representation of the form. Important parts are the serial numebrs of elements. Only few informations need to be submitted for consent:

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
