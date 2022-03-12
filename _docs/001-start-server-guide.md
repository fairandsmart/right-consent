---
title: Start server guide
permalink: /docs/start-server-guide/
toc: true
---

Learn how to start your own Right Consent server locally. This guide covers :

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

//TODO Insert image that shows a docker compose script -> then a start of some components -> then a view of the backoffice app

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

**Backoffice web application** is visible at url [http://localhost:4286](http://localhost:4286) using username & password: *demo@demo.com / demo42*

//TODO Screen shot of Backoffice

## Discover the app


## What's next ?

This guide cover the startup of a local instance of Right Consents to discover the solution.

In addition you could now check other guides like :

- Define my own processing Models
- Insert consent collect into existing HTML Form
- Deploy Right Consent from source
