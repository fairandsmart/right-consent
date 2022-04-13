---
title: Collecting consent from an existing HTML form
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

In this guide you will learn how to **use the SDK** to integrate Consent Collect in an existing online HTML Form.

{% include figure image_path="/assets/images/integratehtml-overview.jpg" alt="Full Install Guide - Overview" %}

This guide also covers some basic aspects of consent form building for some desired processing and preferences.


## SDK integration guide

 // TODO little introduction

### Create the models

First, define the [processings, preferences or terms and conditions](/docs/model-types) you want to use. The terms and conditions body supports HTML, but plain text will work just fine.

You will also need to create an **information** model, especially if you intend to use processings.

You can create an **email** model if you want to send a [consent receipt](/docs/records-receipts) to your users. This is not mandatory. Again, some fields support HTML as well as plain text.

If you are well-versed in CSS, you can play with a **theme** model to customize your form's look'n'feel, otherwise the default theme will be applied. Even if CSS is a mystery for you, don't hesitate to create a theme simply to register your own **logo** which will appear in your forms, receipts and emails.

Don't forget to [activate](/docs/model-lifecycle) each model!

### Create an HTML From

- wget on html file located in github => use it throughout the example
  or
- provide a docker-compose with apache server that serve the HTML example file 
  or
- DIY

### Integrate Javascript SDK in the HTML Form

- show how to get the sdk via a script tag
- show how to configure it (via redirect links)
- show how to make a link from a button to the consent-collector

### Test, validate and generate a consent
- Use case A to Z, from html form to consent response generation

### Consult collected consents via the back-office

- access backoffice, see consent list / by user
- export list of consents

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
