# Quick Start

## Preconditions

To complete this guide, you will need:  
- About 15 minutes
- Git
- Docker compose

:::caution
Please ensure you have [docker compose](https://docs.docker.com/compose/install/) installed before continuing.
:::

## Overview

In this guide, you will learn how to run an **already configured stack** of all the components needed to run a local instance of Right Consents based on docker compose.

![Start Server Guide - Overview](/img/startserverguide-overview.jpg)

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


