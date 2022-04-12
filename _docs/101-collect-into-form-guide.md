---
title: Collecting consent without technical skills guide
permalink: /docs/collect-into-form-guide/
excerpt: "Instructions for integrating Right Consents collect in an existing HTML Form without any specific technical skill."
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

Right Consents Community is designed to be integrated in digital solutions, but if you are **not a developer**, you can still use the back office to collect consents manually.

## Overview

In this guide you will learn how to use the SDK to integrate Consent Collect in an existing online HTML Form.

//TODO Add an illustration for the global process

This guide also covers some basic aspects of consent form building for some desired processing and preferences.


## Start a local online HTML form 


//TODO after here we need to write everything !!


### Create the models

First, define the [processings, preferences or terms and conditions](/docs/model-types) you want to use. The terms and conditions body supports HTML, but plain text will work just fine.

You will also need to create an **information** model, especially if you intend to use processings.

You can create an **email** model if you want to send a [consent receipt](/docs/records-receipts) to your users. This is not mandatory. Again, some fields support HTML as well as plain text.

If you are well-versed in CSS, you can play with a **theme** model to customize your form's look'n'feel, otherwise the default theme will be applied. Even if CSS is a mystery for you, don't hesitate to create a theme simply to register your own **logo** which will appear in your forms, receipts and emails.

Don't forget to [activate](/docs/model-lifecycle) each model!

### The one-shot form approach

Use the [form editor](/docs/consent-context) to create the form of your dreams:
- Elements section:
  - your **information** model will be automatically selected
  - assemble your **processings and preferences** in the desired order or select your **terms and conditions**
- Preview section:
  - choose an [orientation](/docs/themes), whether the footer should be sticky (always visible) and select your **theme**
- Options section:
  - enter your **end-user's subject ID**: it can be a simple number, the user's first and last names... but it cannot be changed afterwards and it MUST be **unique**
  - choose a lifespan for the consent
  - choose a [confirmation method](/docs/confirmation) if you want to double-check your user's identity or reassure them on the process
  - choose whether the users should receive a **notification email** (with the **receipt**) upon submitting their consent: if so, choose the **email** model and enter the user's email address

Finally, click on the **"Get API call URL"** button, and simply send the generated URL to your user - or directly open the form in your browser if they are standing next to you. Have then fill in the form, submit and voilà!

### The operator approach

If you found the previous process cumbersome, and/or if you really have few data elements, you may prefer to collect consent **without even generating any form**.

To do this, enter your **end-user's subject ID** in the search bar at the top of the back office. This will create a specific [operator page](/docs/operator-access) where you can manually enter the user's consent on their behalf. You have the possibility to have the system send them a **notification email**, but it is again optional.
