---
title: Quick Start guide
permalink: /docs/start-server-guide/
excerpt: "Instructions for starting a ready to run version of Right Consents in 5 minutes."
toc: true
menu: true
gallery:
- url: /assets/images/startserverguide-sc-01.png
  image_path: /assets/images/startserverguide-sc-01.png
  alt: "Backoffice Dashboard"
  title: "The backoffice dashboard display some basic but usefull metrics about consent API usage"
- url: /assets/images/startserverguide-sc-02.png
  image_path: /assets/images/startserverguide-sc-02.png
  alt: "Backoffice Models Libraries"
  title: "You can define as much as needed models in the dedicated libraries like processing one."
- url: /assets/images/startserverguide-sc-08.png
  image_path: /assets/images/startserverguide-sc-08.png
  alt: "Backoffice Processing Model"
  title: "Each library models have specific content and lifecycle (with conservation) for common collect processes (processing, preference, usage conditions) and proven existence"
- url: /assets/images/startserverguide-sc-03.png
  image_path: /assets/images/startserverguide-sc-03.png
  alt: "Backoffice Consent Collect Context"
  title: "You can assemble library models in a specific collect context that will be embeddable in any application"
- url: /assets/images/startserverguide-sc-04.png
  image_path: /assets/images/startserverguide-sc-04.png
  alt: "Backoffice Consent Collect URL"
  title: "A specific URL is generated for each collect transaction with a secure token avoiding any element to be changed by end user"
- url: /assets/images/startserverguide-sc-05.png
  image_path: /assets/images/startserverguide-sc-05.png
  alt: "Consent Collect Receipt"
  title: "A standard consent collect receipt is generated and summarize all required information elements."
- url: /assets/images/startserverguide-sc-06.png
  image_path: /assets/images/startserverguide-sc-06.png
  alt: "Backoffice Customer Page"
  title: "A customer dedicated page gives an overview of all collected elements regarding defined models and access to proof"
- url: /assets/images/startserverguide-sc-07.png
  image_path: /assets/images/startserverguide-sc-07.png
  alt: "Backoffice custom export"
  title: "The backoffice embed a module that allows to export a group of customers that are eligible for a specific processing"
---

Learn how to start your own Right Consent server locally in 5 minutes.  
This guide covers :

- Getting the latest docker compose script
- Starting the docker compose elements
- Use builtin credential to authenticate
- Small tour of the backoffice

## Prerequisites

To complete this guide you need :

- Roughly 15 minutes
- Git
- Docker compose

<i class="fa fa-exclamation-triangle"></i> <b>please</b> ensure [docker compose](https://docs.docker.com/compose/install/) is installed before proceeding further.
{: .notice--warning}

## Overview

In this guide you will learn how to run an already configured stack of all components needed to run a local instance of Right Consents based on docker compose

{% include figure image_path="/assets/images/startserverguide-overview.jpg" alt="Start Server Guide - Overview" %}

This guide also covers a guided tour of the authentication process and the deployed backoffice.

## Get and start the components

All required components are available as **docker images** that is the *de facto* simplest way to start a local instance.  

Right Consents comes with a **ready-to-run docker compose** configuration.  
The first step is to clone the github repository which contains the elements needed to start the docker compose configuration.  

```bash
$ git clone https://github.com/fairandsmart/right-consents.git
$ cd right-consents
$ docker-compose up #for french use: docker-compose --env-file ./config/fr.env up
```

Wait as long as everything is started up...

## Go to the Backoffice GUI

When everything is up (check video above) you can access the different components with the following urls:

**Backoffice web application** is visible at url [http://localhost:4286](http://localhost:4286)  
**username & password:** *demo@demo.com / demo42*

## Discover the app

{% include gallery caption="Backoffice screenshots" %}

The principal GUI is the **backoffice**, it ensures administration of many aspects of **consent & preferences management** including :

- A **dashboard** for displaying some basic but usefull metrics about consent API usage,
- Some **dedicated libraries** to define as much as needed models, 
- Specific **content lifecycle** for each library (processing, preference, usage conditions, notification email, themes) and integrated mecanism to ensure **legal compliance**,
- A **graphical editor** to assemble library models in a **specific collect context** that will be embedded in any existing application,
- A collect **URL generator** for each collect transaction with a **secured token** that avoid any element to be changed by end user,
- A **standard consent collect receipt** format that summarize all required information elements and that is preserved as long as needed,
- A **customer dedicated page** to have an overview of all collected elements regarding defined models and access to preserved proof,
- An **export module** that allows to extract a group of customers that are eligible for a specific processing

The solution is also offering an **API** that can be directly accessed by **client applications** or systems that need consent confirmation for actions.

If the predefined HTML forms are not enough, a **typescript SDK** is the ready to use option for integrating Right Consent in a more **fashion controlled way**.     

## What's next ?

In this guide we have seen how to start a local instance of Right Consents to discover the solution. 

In addition you could now check other guides like :

- Define my own processing Models (coming soon)
- Insert consent collect into existing HTML Form (coming soon)
- [Deploy Right Consent from source](/docs/full-install-guide/)
