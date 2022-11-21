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

Consent API is more or less like a Online Paiment one, an privileged user create the transaction and forward it to the customer. It is not mandatory to have an authentified customer to fulfill the transaction.

{% include figure image_path="/assets/images/discover-api-overview.jpg" alt="Discover RIght Consents API" %}

## Authentication

Right Consents define 5 application roles: admin, operator, user, transaction or anonymous. In order to gain a role, calls to the API need to be authentified. Right Consents supports 3 differents authentication schemes: OIDC token, API KEY and embedded token.

In this guide we will initiate a transaction as an admin user and let the target subject follow the transaction workflow using embedded tokens. You can either use a OIDC token or an API Key to access API.

### Retreive an Access Token

Use curl to retrieve an Access Token on the Identity Provider (IdP):

{% highlight bash %}
TOKEN="Bearer "+`curl -v -d "client_id=cmclient" -d "username=demo@demo.com" -d "password=demo42" -d "grant_type=password" \
        http://localhost:4285/auth/realms/RightConsents/protocol/openid-connect/token | jq -r '.access_token'`
{% endhighlight %}

The access token have a short time validity (5mn) and you'll have to renew it during the guide, just replay that requests when needed.

### Generate an API Key

Instead of retrieving an OIDC token from IdP you can generate a Key from the backoffice and use that key directly in a specific request header. The API KEY will never expires and has a specific role that is not admin and you can revoke key if you think it has been corrupted or disclosed.

To generate an API KEY, go to the backoffice in the 'Integration' section and the 'Security' subsection and create a new API Key with a scope "Owner". The key is only visible at generation, feel free to store it somewhere.

You can create a bash variable allowing nexts command to succeed:

{% highlight bash %}
KEY="<PUT THE GENERATED KEY HERE>"
{% endhighlight %}

<i class="fa fa-info-circle"></i> Be aware that using an API KEY is not as secure as an OIDC token and you **only used in HTTPS calls** to API and never sent to any client side code.
{: .notice--warning}

## Create a Consent Transaction

The transaction is created by an API Admin or Operator for a particular subject. The transaction creation needs to be performed server side to ensure admin access to the API to not be disclosed in client code and to ensure the best integration scenario capabilities. Once created, the transaction URL needs to be forwarded to the targetted subject in the desired channel (email, web redirection, ...).

<i class="fa fa-info-circle"></i> It is possible for a simple user to create a transaction by itself for itself. This allows client side deployment but it implies to have a unified authentication scheme and an Ajax aware client application. This integration will be detailed in other guides.
{: .notice--info}

### Define a Consent Context

In order to create a consent transaction, we have to send a **Consent Context** (subject, layout and configuration) to the API.
The context can be designed using the **backoffice form designer** and then adapted to your integration use case; if you are familiar with its format, you can also generate one from scratch.

Here is the simpliest Consent Context possible with a full default configuration.

{% highlight json %}
{
  "subject": "testuser@demo.com",
  "layoutData": {
    "type":"layout",
    "elements":["processing.001"],
    "orientation":"VERTICAL",
    "info":"information.001"}
}
{% endhighlight %}

<i class="fa fa-info-circle"></i> This context uses elements already created in the [First Consent Form Guide]({% link _docs/102-first-consent-form-guide.md %}): information.001, processing.001
{: .notice--info}

### Create the transaction

Use the previously retrieved token to create the transaction for the target subject: testuser@demo.com by posting the context payload to the consents resource of the API:

{% highlight bash %}
TX=`curl -v --header "Content-Type: application/json" \
            --header "CM_KEY: ${KEY}" \
            --header "Authorization: ${TOKEN}" \
            --request POST \
            --data '{"subject":"testuser@demo.com","layoutData":{"type":"layout","elements":["processing.001"],"orientation":"VERTICAL","info":"information.001"}}' \
            http://localhost:4287/consents` && TX_ID=`echo $TX | jq -r .id` && TX_TOKEN=`echo $TX | jq -r .token`
{% endhighlight %}

The response will contains the created transaction representation in its body. That representation contains transaction id and transaction token for authorization. The response also contains a 'Location' header with the resource URI already formatted.

<i class="fa fa-info-circle"></i> If you try to create the same transaction again, the API will detect an existing one with same context and return the existing one instead of creating a new one avoiding orphean and costly resource consumption.
{: .notice--info}

The transaction workflow lifecycle follow 6 states : CREATED, SUBMITTED, COMMITTED, CANCELLED, TIMEOUT, ROLLBACK. After creation, the transaction is now in state CREATED.

After creation, it is up to the target subject to interact with API. It supports 2 interaction modes: HTML and JSON.
- In HTML mode, client is supposed to be a browser and everything is done to simplify API interactions with automatic HTML redirections and rendering. This mode is designed to be integrated in existing web site or application with web views by using either IFrame or web redirections.
- In JSON mode, REST principles are applyed and Consent Transaction representation are generated. All the rendering of consent form and transaction representation needs to be implemented manually on the client side.

In the next steps we are going to explore both modes.

## Complete the transaction workflow (HTML mode)

In HTML, you have to use either the transaction URI returned in the 'Location' header or build the transaction URI from the returned resource representation. When text/html mimetype is required over API, a simpe call to the transaction root resource will perform needed redirection to the next workflow human task to fullfill.

{% highlight bash %}
TX_URI=http://localhost:4287/consents/${TX_ID}?t=${TX_TOKEN}
{% endhighlight %}

### Open the consent transaction HTML view

Following the transaction workflow in HTML mode is very easy and only require to open the transaction URI in a browser:

{% highlight bash %}
firefox ${TX_URI} &
{% endhighlight %}

The API is driven by browser to follow the workflow steps. At the final state and without callback url specified, the subject stay on the transaction representation. Depending on the configuration, that view allows to create a new transaction based on that one to change consent, retrieve the consent receipt or close the window.

## Complete the transaction workflow (JSON mode)

### Get the transaction representation

To retreive the transaction representation, you just have to perform a GET on the transaction resource.

{% highlight bash %}
TX=`curl -v --header "CM_KEY: ${KEY}" \
            --header "Authorization: ${TOKEN}" \
            --header "Accept: application/json" \
            http://localhost:4287/consents/${TX_ID}`
{% endhighlight %}

A short version of the transaction just after creation is like this:

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

When the transaction is in the state CREATED, the next step is *submit*: the submission of consent. Calling the url of the 'task' field will produce the form needed for consent submission and will include a submission link with a fresh token if needed.

You can build the next human task URI by getting the task field and the transaction token:

{% highlight bash %}
TX_TASK=`echo $TX | jq -r .task` && TX_TOKEN=`echo $TX | jq -r .token`
{% endhighlight %}

Now you can call the submit task representation which will return the Consent Form Representation:

{% highlight bash %}
TX_FORM=`curl -v --header "CM_KEY: ${KEY}" \
                 --header "Authorization: ${TOKEN}" \
                 --header "Accept: application/json" \
                 ${TX_TASK}?t=${TX_TOKEN}`
{% endhighlight %}

The Consent Form contains many information that is used in the HTML rendering. In JSON you have to do all the stuff by yourself for displaying form info and options. You also have to build the consent choices in a format that is suitable for the API, a Map of elements identifiers and choices answer:

{% highlight bash %}
FORM_VALUES='{"info":["element/information/'`echo ${TX_FORM} | jq -r '.info.entry.key'`/`echo ${TX_FORM} | jq -r '.info.serial'`'"],"element/processing/'`echo ${TX_FORM} | jq -r '.elements[0].entry.key'`/`echo ${TX_FORM} | jq -r '.elements[0].serial'`'":["accepted"]}' &&
SUBMIT_JSON=`curl -v --header "CM_KEY: ${KEY}" \
                     --header "Authorization: Bearer ${TOKEN}" \
                     --header "Content-Type: application/json" \
                     --header "Accept: application/json" \
                     --request POST \
                     --data ${FORM_VALUES} \
                     ${TX_TASK}?t=${TX_TOKEN}`
{% endhighlight %}

### Get the transaction representation again

{% highlight bash %}
TX=`curl -v --header "CM_KEY: ${KEY}" \
            --header "Authorization: ${TOKEN}" \
            --header "Accept: application/json" \
            http://localhost:4287/consents/${TX_ID}` &&
echo ${TX}
{% endhighlight %}

Notice that now the transaction is in state COMMITTED.

Depending on the context configuration, a validation step can also be necessary by sending a code via email or sms to the subject in order to double check identity.

## What's next?

In this guide we have seen how to use the API to create and complete a simple consent transaction in both mode HTML or JSON.

In addition you could now check other guides like:

- [Insert consent collect into existing HTML form]({% link _docs/104-collect-into-form-guide.md %})
- [Manage TOS in Mobile App]({% link _docs/105-manage-tos-mobile-app-guide.md %})
- [Detailed API Guide (upcoming...)]()
