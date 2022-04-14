---
title: Collecting consent from an existing HTML form 
permalink: /docs/collect-into-form-guide/ 
excerpt: "Instructions for integrating Right Consents collect in an existing HTML Form without any specific technical skill."
header:
  og_image: /assets/images/integratehtml-overview.jpg
toc: true 
menu: true
---

Learn how to integrate a **Right Consents Collect Form** in an existing HTML Form that handle personal information.

- Start a local docker image to host an HTML Form for collecting personal information
- Define specific processing and preferences for the collected data in the Right Consent Backoffice
- Test the consent form generated until desired result
- Integrate Javascript SDK in the HTML Form
- Consult and export collected consents

## Prerequisites

To complete this guide you need :

- Roughly 30 minutes
- Git
- Docker
- Right Consents running

Right Consents Community is designed to be integrated in digital solutions, but if you are **not a developer**, you can
still use the back office to collect consents manually.

## Overview

In this guide you will learn how to **use the SDK** to integrate Consent Collect in an existing online HTML Form.

{% include figure image_path="/assets/images/integratehtml-overview.jpg" alt="Full Install Guide - Overview" %}

This guide also covers some basic aspects of consent form building for some desired processing and preferences.

## SDK integration guide

// TODO little introduction

### Create the models

// TODO repair links

First, define the [processings, preferences or terms and conditions](/docs/model-types) you want to use. The terms and
conditions body supports HTML, but plain text will work just fine.

You will also need to create an **information** model, especially if you intend to use processings.

You can create an **email** model if you want to send a [consent receipt](/docs/records-receipts) to your users. This is
not mandatory. Again, some fields support HTML as well as plain text.

If you are well-versed in CSS, you can play with a **theme** model to customize your form's look'n'feel, otherwise the
default theme will be applied. Even if CSS is a mystery for you, don't hesitate to create a theme simply to register
your own **logo** which will appear in your forms, receipts and emails.

Don't forget to [activate](/docs/model-lifecycle) each model!

### Create an HTML From

The basic use case here, is collecting the consent from users before collecting their data.

We need an HTML form to plug the SDK to it, either you take an existing one from your personal project, or you follow
along with the given bascic HTML form available here

// TODO link to html form example

This given HTML form can be served using docker or docker-compose

```bash
$ docker run --name apache -v /path/to/consent-example:/app bitnami/apache:latest -p 1180:1180
```

or

```bash
$ docker-compose up -d
```

Once the docker container up and running, go to this [page](http://localhost:1180/index.html)

- wget on html file located in github => use it throughout the example or

### Integrate Javascript SDK in the HTML Form

At this point you have a simple HTML form, with some input elements that can be filled with personal data, for example.

The next step is to connect this form to the SDK and the `ConsentCollector`. It will create a consent
form based on a **subject ID** (basically a phone number, an email address ...) and a **consent context**.

You will need, first, to import the script file in your HTML file like so :

```html
<!-- With consent.js stored locally -->
<script src="/path/to/consent.js"></script>

<!-- With consent.js from Fair&Smart CDN -->
<script src="https://assets.fairandsmart.tech/consent.js"></script>
```

Then, write a function that calls the Consent Collector. This function has to declare a
new ```FairAndSmart.ConsentCollector``` instance (see how to configure it [here](/docs/sdk)) and call the collect()
method from the `ConsentCollector` object :

```javascript
 function collect() {

    /** Page is awaiting the response from the consent window: disabling submit button **/
    const submitBtnElement = document.getElementById('submit');
    const formElement = document.getElementById('demo-form');
    const message = document.getElementById('message');
    const subject = document.getElementById('input-email').value;

    submitBtnElement.setAttribute('disabled', 'true');

    /** Collect objet creation */
    const consentCollector = new FairAndSmart.ConsentCollector({
        tokenBrokerEndpoint: 'http://localhost:3001/profile/form',
        consentContext: {
            subject: subject,
            author: subject,
            origin: "WEBFORM",
            confirmation: "NONE",
            language: "en",
            userinfos: {},
            validity: "P6M",
            layout: "layout.001"
        },
        mode: 'window'
    });

    /** Consent collection can begin **/
    consentCollector.collect()
        .then(() => {
            /** Sucess callback : collect is done */
            submitBtnElement.classList.add('hidden');
            formElement.classList.add('hidden');
            message.classList.remove('hidden');
            /** We can check the collect reponse here */

        })
        .catch((err) => {
            /** Error callback, something went wrong. Reset button to retry the consent collect */
            console.error(err);
            submitBtnElement.setAttribute('disabled', 'false');
        })
}
```

<i class="fa fa-info-circle"></i> <b>Notice:</b> The **subject ID** here is retrieved from the email input, it can be another identifier such as a phone number, a unique ID from your platform ...
{: .notice--info}


Finally, create a button in your HTML Form that will call the function ```collect()``` :

```html
<button id="submit" class="submit-btn" onclick="collect()">Send</button>
```

### Test, validate and generate a consent

Once everything is setup, you are ready to test the consent collection.

Go to the following [web page](http://localhost:1180/index.html), fill the form and click on the submit button at the bottom of the page.

A **popup window** will appear with the desired consent form. Submit your preferences, processings and/or terms and conditions of your choice and click on the submit button.

Done, you have attached a consent collector to an existing HTML form !


[comment]: <> (### Consult collected consents via the back-office)

[comment]: <> (- access backoffice, see consent list / by user)

[comment]: <> (- export list of consents)

[comment]: <> (### The one-shot form approach)

[comment]: <> (Use the [form editor]&#40;/docs/consent-context&#41; to create the form of your dreams:)

[comment]: <> (- Elements section:)

[comment]: <> (  - your **information** model will be automatically selected)

[comment]: <> (  - assemble your **processings and preferences** in the desired order or select your **terms and conditions**)

[comment]: <> (- Preview section:)

[comment]: <> (  - choose an [orientation]&#40;/docs/themes&#41;, whether the footer should be sticky &#40;always visible&#41; and select your **theme**)

[comment]: <> (- Options section:)

[comment]: <> (  - enter your **end-user's subject ID**: it can be a simple number, the user's first and last names... but it cannot be changed afterwards and it MUST be **unique**)

[comment]: <> (  - choose a lifespan for the consent)

[comment]: <> (  - choose a [confirmation method]&#40;/docs/confirmation&#41; if you want to double-check your user's identity or reassure them on the process)

[comment]: <> (  - choose whether the users should receive a **notification email** &#40;with the **receipt**&#41; upon submitting their consent: if so, choose the **email** model and enter the user's email address)

[comment]: <> (Finally, click on the **"Get API call URL"** button, and simply send the generated URL to your user - or directly open the form in your browser if they are standing next to you. Have then fill in the form, submit and voilà!)

[comment]: <> (### The operator approach)

[comment]: <> (If you found the previous process cumbersome, and/or if you really have few data elements, you may prefer to collect consent **without even generating any form**.)

[comment]: <> (To do this, enter your **end-user's subject ID** in the search bar at the top of the back office. This will create a specific [operator page]&#40;/docs/operator-access&#41; where you can manually enter the user's consent on their behalf. You have the possibility to have the system send them a **notification email**, but it is again optional.)
