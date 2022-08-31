---
title: First models with Right Consents
permalink: /docs/first-models-guide/
excerpt: "Instructions for defining some consent model elements using Right Consents backoffice"
header:
  og_image: /assets/images/first-models-guide-overview.jpg
toc: false
menu: true
---

Learn how to define your first consent element models using Right Consents **backoffice**

- Understand how **consent collection** is modelized in Right Consents
- Discover the backoffice and define some **consent model elements**
- Use the assembly tool to try various **consent form layout**

## Prerequisites

To complete this guide you need :

- Roughly 25 minutes
- A running Right Consents

## Overview

In this guide you will use the backoffice application to start defining your consent library elements.

{% include figure image_path="/assets/images/first-models-guide-overview.jpg" alt="First models with Right Consents - Overview" %}

This guide also covers some basic aspects of designing consent form layout by assembling your consent library elements in various way.

## Consent Model Elements

As explained in the overview, before any other operation, the first stage consist of defining consent model elements.

Right Consents consent collection is based on an assembly of pieces of small elements. Elements that can takes part in collecting consents are information (contains generic information about privacy), processings (describe a single processing), preferences (store the user preferences but does not appear in the receipt) and terms of services (can only be used alone in an assembly). Those elements have specific rules depending on their specificity.

There is also two other elements that does not takes part directly in the consent collection : themes (to modify the html style) and emails (to setup sample confirmation email)

In order to collect consent, you have to setup at least the information element and one processing. In this tutorial we are going to create an information model, two processings and one preference in order to be able to create different assembly.

### Information

Information models are designed to store some information about privacy, data policy or an information regarding the company data processing information that need to be visibile in the consent and in the receipt. Some mandatory legal information like the data processor contact are also included in that model.

Some fields are free text and are designed to be visible in the consent header and in the footer allowing some flexibility in the information delivered to the enduser.

To define information model you have to go to the [backoffice webapp](http://localhost:4286) and login as admin (demo@demo.com/demo42). In the **Configuration** section you should be able to open the **Informations** sub section and click on the plus in order to create a new one. In the community version, only one information model can be setup for easyer understanding of application.

Choose a relevant name and description for that model (only for internal management). After model creation, a key is allocated to that model **(information.001)** that you'll have to use later as a reference to taht model. Then you can **populate** the model **data content**. One single model can have multiple version of data content.

{% highlight text %}
- Title: Legal Information
- Header Content : The Cheesecake Factory Incorporated and its parents, subsidiaries, and affiliated entities (“The Cheesecake Factory,” “the Company,” “we”, “us” or “our”) respects your privacy and we are committed to protecting it through our compliance with our privacy policy (“Privacy Policy”).
- Footer Content: Thanks for your confidence
- Data controller
  - Company: The CheeseCake Factory
  - Address: 26901 Malibu Hills Road, Calabasas Hills, CA 91301
  - Email: privacyofficer@thecheesecakefactory.com
  - Phone Number: 18664582951
- Privacy Policy URL: https://www.thecheesecakefactory.com/corporate-information/privacy-policy
{% endhighlight %}

<i class="fa fa-info-circle"></i> For full documentation about Information please visit the [Consent Elements Doc]({% link _docs/200-consent-elements-doc.md %})
{: .notice--info}

Now you are ready for **publishing** that version of the information model by clicking on **'Save Draft'** button and then on the **'Activate'** button.

By activating the version you will be able to use it for collecting consent. As soon as a consent is collected using that version of the information model, you will no longer be able to delete it.

Information about model lifecycle is visible in the top of the right panel. You may notice that version 1.0 is active and that a unique serial number has been allocated to that particular version.

If you perform modification on that model you will have to activate the next version and a popup will ask you for a **Major** or **Minor** release evolution. A Major one will result in considering already collected consent with that information to be stalled whereas a Minor one will be compatible with already collected consent but will replace previous one in the next generated consent transaction.



### Processings

As for the information model, we are now ready to create two processing ones in the relevant subsection. A first one will be related to user contact information for marketing usage. A second one will be related to user profile information transfer to partner for discount commercial offers.

In the **Configuration** section you should be able to open the **Processings** sub section and click on the plus in order to create the first one.

Choose a relevant name and description for that model (only for internal management). After model creation, a key is allocated to that model **(processing.001)** that you'll have to use later as a reference to taht model. Then you can **populate** the model **data content**.

{% highlight text %}
- Title: Contact Marketing
- Processed data : Your contact informations (name, surname, email, phone number)
- Data retention period: We are keeping your contact information 2 years
- Purpose: We will contact you according to your preferred channel (email, sms or phone) when we will lunch new product from our brand in order to give you special discount.
- Purpose Categories: Marketing
- This processing can be refused: true
{% endhighlight %}

The second one will contains also another data controller information as it is for a data transfer. Choose a relevant name and description for that model. After model creation, a key is allocated to that model **(processing.002)**

{% highlight text %}
- Title: Transfer data to partner
- Processed data : Information about items you have already purchased and/or visited on our website as your product interest categories.
- Data retention period: All the lifetime of your profile plus 6 month
- Purpose: We want to optimize the communications between you and our partners according to your interests in order to avoid useless ones and focus on the best relation experience we can offer.
- Purpose Categories: Improved service, Third part sharing
- Third Parties:
    - name: VoucherDiscount
    - description: This partner is producing discount vouchesr for all cake builders in the city.
- Data Controller:
    - company: VoucherDiscount
    - address: 11, another street, 21345 Same Town.
    - email: contact@voucher-discount.com    
- This processing can be refused: true
{% endhighlight %}


### Preference


## Consent Form Layout

The **second stage** is to assemble declared elements into specific layout that fits with the final integration goal.

For exemple, Terms of Service will be collected at startup of an application or at signup whereas some processing consent could be collected only when a specific service is requested. Some processings could be collected in the website where some other in a mobile application only.

Right Consents defines the notion of **Consent Context** that will holds all aspects of an application's pointcut that handles user consent need. Right Consents **backoffice** propose a **graphical tool** to design Consent Context.

At the end you can extract the generated JSON configuration for **integration** in any **external application**.

### Create the information element

Go to the bacokffice application : http://localhost:4286 (login using user/pass: demo@demo.com/demo42) and **create an information model** by going into the dedicated section : Menu > Configuration > Information  


### Create one processing element

All model types are following the same lifecycle management and only the model data content is changing. Then we need also to create a model for processing description.

Go to bacokffice application : http://localhost:4286 (login using user/pass: demo@demo.com/demo42) and create a processing model by going into the dedicated section : Menu > Configuration > Processing  
Choose a relevant name and description for the processing :
- Name: Marketing Communications
- Description: My Marketting Communications

Then you can populate the data content:
- Title: Contact Marketing
- Processed data: Your contact information (name, surname, email and phone number)
- Purpose: We will contact you according to your favorite channel (email, sms or phonecall) to propose discount regarding new products arrival.
- Data retention period: We are keeping your contact information during 2 years

<i class="fa fa-info-circle"></i> For full documentation about Information please visit the [Consent Elements Doc]({% link _docs/200-consent-elements-doc.md %})
{: .notice--info}

Now you are ready for publishing that version of the information model by clicking on 'Save Draft' button and then on the 'Activate' button.

## Design a collection form

### Use the backoffice to assemble defined elements

Go to bacokffice application : http://localhost:4286 (login using user/pass: demo@demo.com/demo42) and create a consent form design by going into the dedicated section : Menu > Integration > Collect  

The created elements are visible in the right panel and can be drag'n drop in the central design zone to assemble elements in the desired order.

By clicking on 'Next' you will access to the layout design of the choosen elements like a vertical or horizontal layout but also you can specify labels and some action availability. It is also possible to specify a "Theme" element that will apply a specific look'n feel if desired.

The 'Next' step will give you access to Consent Context data allowing you to test your layout for a particular end user (a test one).
- CustomerId: testuser
- Validity: 6 Months
- Confirmation Method: None

<i class="fa fa-info-circle"></i> For full documentation about Context please visit the [Consent Context Doc]({% link _docs/201-consent-context-doc.md %})
{: .notice--info}

Now you can click on the 'Get API Call Url' to test an HTML version of the form for the provided enduser and follow the consent collect workflow according to the configured design.

### Export the generated context

By clicking on the 'Get API Call Url' you have generate a Consent Transaction that holds all designed information for the specified enduser. A full JSON representation of all the configured elements and context has been provided to the API and stored in a unique transaction accessible with its id. A token has also be generated allowing to send the generated URL by email for exemple.

This operation can also be done by calling the API providing a specific consent collect JSON. If you are admin or operator you can create transactions for another endusers but as a simple user, you can ony generate transaction for yourself.

The generated context JSON can then serve as a basis for integration in existing target applications. Some parts of that context could be made variables depending on the integration needs. Here is a minimal version of a context:

{% highlight json %}
{
  "subject":"testuser",
  "layoutData":{
    "type":"layout",
    "elements":["processing.001"],
    "orientation":"VERTICAL",
    "info":"information.001"
  }
}
{% endhighlight %}

## Integrate a simple consent collect scenario with curl

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
