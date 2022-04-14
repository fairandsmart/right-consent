---
title: Quick start guide
permalink: /docs/start-server-guide/
excerpt: "Instructions for starting a ready to run version of Right Consents in 5 minutes."
toc: true
menu: true
gallery:
- url: /assets/images/startserverguide-sc-01.png
  image_path: /assets/images/startserverguide-sc-01.png
  alt: "Back office dashboard"
  title: "The back office dashboard display some basic but useful metrics about consent API usage"
- url: /assets/images/startserverguide-sc-02.png
  image_path: /assets/images/startserverguide-sc-02.png
  alt: "Back office models libraries"
  title: "You can define as many models as needed in the dedicated libraries"
- url: /assets/images/startserverguide-sc-08.png
  image_path: /assets/images/startserverguide-sc-08.png
  alt: "Back office processing model"
  title: "Each library model has specific content and lifecycle (with conservation) for common collection processes (processing, preference, terms of use) and proven existence"
- url: /assets/images/startserverguide-sc-03.png
  image_path: /assets/images/startserverguide-sc-03.png
  alt: "Back office consent collection context"
  title: "You can assemble library models in a specific context that will be embeddable in any application"
- url: /assets/images/startserverguide-sc-04.png
  image_path: /assets/images/startserverguide-sc-04.png
  alt: "Back office consent collection URL"
  title: "A specific URL is generated for each collection transaction with a secure token, preventing any element from being changed by end users"
- url: /assets/images/startserverguide-sc-05.png
  image_path: /assets/images/startserverguide-sc-05.png
  alt: "Consent collect receipt"
  title: "A standard consent collection receipt is generated and summarizes all required information elements"
- url: /assets/images/startserverguide-sc-06.png
  image_path: /assets/images/startserverguide-sc-06.png
  alt: "Back office customer page"
  title: "A customer dedicated page gives an overview of all collected elements regarding defined models and access to proof"
- url: /assets/images/startserverguide-sc-07.png
  image_path: /assets/images/startserverguide-sc-07.png
  alt: "Back office custom export"
  title: "The back office embeds a module that allows to export a group of customers that are eligible for a specific processing"
---

Learn how to start your own Right Consent server locally in 5 minutes.  
This guide covers:
- Getting the latest docker compose script
- Starting the docker compose elements
- Use built-in credentials to authenticate
- A brief tour of the back office

## Preconditions

To complete this guide, you will need:  
- About 15 minutes
- Git
- Docker compose

<i class="fa fa-exclamation-triangle"></i> <b>Please</b> ensure you have [docker compose](https://docs.docker.com/compose/install/) installed before continuing.
{: .notice--warning}

## Overview

In this guide, you will learn how to run an **already configured stack** of all the components needed to run a local instance of Right Consents based on docker compose.

{% include figure image_path="/assets/images/startserverguide-overview.jpg" alt="Start Server Guide - Overview" %}

This guide also covers a guided tour of the authentication process and the deployed back office.

## Get and start components

All required components are available as **Docker images**, which is *de facto* the easiest way to start a local instance.

Right Consents comes with a **ready-to-use docker compose** configuration. The first step is to clone the github repository which contains the necessary elements to start the docker compose configuration.

```bash
$ git clone https://github.com/fairandsmart/right-consents.git
$ cd right-consents
$ docker-compose up #for french use: docker-compose --env-file ./config/fr.env up
```

Wait for everything to start...

## Access the back office GUI

When everything is set up (check the video above), you can access the different components with the following URL:
  - **Back office web application** is visible at url [http://localhost:4286](http://localhost:4286)
    - **Username & password**: *demo@demo.com / demo42*

## Discover the app

{% include gallery caption="Back office screenshots" %}

The main GUI is the **back office**, it administers many aspects of **consent and preference management**, including:

  - A **dashboard** for displaying some basic but useful metrics about consent API usage
  - **Dedicated libraries** to define as many models as necessary
  - Specific **lifecycle** for each library (processing, preference, terms of use, notification email, themes) and built-in mechanisms to ensure **legal compliance**
  - A **graphical editor** to assemble library models in a specific collection context that will be embedded into any existing application
  - A collection **URL generator** for each collection transaction with a **secure token** that prevents any element from being modified by the end user
  - A **standard consent collection receipt** format that summarises all required information and is retained for as long as necessary
  - A **page dedicated to the customer** to have an overview of all the elements collected concerning the defined models and to access the preserved proof
  - An **export module** that allows you to extract a group of customers eligible for specific processing

The solution also offers an **API** directly accessible by **client applications** or systems requiring confirmation of consent for actions.

If pre-built HTML forms aren't enough, a **typescript SDK** is the out-of-the-box option to integrate Right Consent in a more **controlled way**.

## What’s next?

In this guide, we saw how to start a local instance of Right Consents to discover the solution.

Additionally, you can now check out other guides such as:
  - Define my own processing models (coming soon)
  - [Insert consent collect into existing HTML form]({{ site.baseurl }}/docs/collect-into-form-guide/)
  - [Deploy Right Consent from source]({{ site.baseurl }}/docs/full-install-guide/)
