---
title: Install from Sources guide
permalink: /docs/full-install-guide/
excerpt: "Instructions for building and installing right consents in a local environment."
toc: true
menu: true
---

Learn how to build sources to start your own Right Consent server locally. This guide covers:

- Starting needed docker components (auth, smtp)
- Getting the latest sources
- Building components from source
- Starting built components
- Accessing the back office

## Prerequisites

To complete this guide you need:

- Roughly 20 minutes
- Git
- Java 11
- Docker
- Maven >= 3.8.4;
- NodeJS >= 12.20.0;
- npm >= 6.14.8;

## Overview

In this guide you will learn how to **install** needed external components (Keycloak, MailDev) and to **compile** and run Right Consents backend and frontend.

{% include figure image_path="/assets/images/fullinstallguide-overview.jpg" alt="Full Install Guide - Overview" %}

This guide also covers some basic aspects of configuration for the backend.

## Keycloak

Keycloak is a ready to run **Identification Provider (IdP)** compatible with OIDC protocol and wel integrated in Quarkus (Backend Framework).  
Unless needed, use keycloak in a dedicated container with either a named volume or (as below) a mapped folder to allow data persistence when the container is redeployed.

```bash
$ wget https://raw.githubusercontent.com/fairandsmart/right-consents/main/imports/right-consents.json
$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/tmp/right-consents.json  -v keycloak-data:/opt/jboss/keycloak/standalone/data --mount type=bind,source=$PWD/right-consents.json,target=/tmp/right-consents.json jboss/keycloak:11.0.3
```

<i class="fa fa-info-circle"></i> <b>Notice:</b> to delete keycloak data, stop the container then run `docker volume rm keycloak-data`
{: .notice--info}

If you want to use a local instance instead of the docker one you can visit [keycloak website](https://www.keycloak.org/docs/latest/server_installation/index.html) for details. 

## Mail Dev

Outgoing **SMTP Service** is also an external tool used to avoid any SMTP configuration, it is based on [MailDev](http://maildev.github.io/maildev/). A dedicated web interface that allows to consult outgoing emails, and email will be also routed to any external SMTP relay if you configure the relay (check [upstream](https://hub.docker.com/r/maildev/maildev)) for some docs) .

```bash
$ docker run -p 1080:80 -p 1025:25 maildev/maildev
```

<i class="fa fa-info-circle"></i> <b>Info:</b> You can also replace this component by any existing outgoing smtp server by changing configuration, or even a postifx local install if you are the kind of person running a local SMTP server on your computer.
{: .notice--info}

## Backend

Backend service is developed in Java using [Quarkus](https://quarkus.io). It exposes a REST API that is accessed from other services. It also integrates configuration elements for working with keycloak.

In order to run the backend, you need to **clone** the github repository and to **compile** and **run** a local instance using Java and Maven:

```bash
$ git clone git@github.com:fairandsmart/consent-manager-back.git
$ cd consent-manager-back
$ mvn clean package -DskipTests quarkus:dev
```

This could take a while as maven is going to download all dependencies but in the end you should see the server running with a message like: 

```
[io.quarkus] (Quarkus Main Thread) consent-manager-back 1.1.0-SNAPSHOT on JVM (powered by Quarkus 2.6.2.Final) started in 5.476s. Listening on: http://127.0.0.1:8087
```

## Web Application

Front Web Application is developed using [Angular](https://angular.io). It is also built to work with keycloak by default.

In order to run the frontend, you need to clone the github repository and to run a local instance using NodeJS, npm and angular cli: 

```bash
$ git clone git@github.com:fairandsmart/consent-manager-gui.git
$ cd consent-manager-gui
$ npm install
$ ng serve
```

This could take a while as maven is going to download all dependencies but in the end you should see the server running with a message like: 

```
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
```

Now you can use the backoffice by visiting [http://localhost:4200](http://localhost:4200)

## Configuration

In the backend, all the configuration is located in a dedicated file

```bash
$ nano src/main/resources/application.properties 
```

You can change some configuration aspects like port or public url if needed. A restart is sometimes needed for some configuration parameters where some of them apply directly if started in dev mode.    
More information on the configuration options can be found in the [configuraton reference](/docs/config-ref/)     

## What's next ?

In this guide we have seen how to build and start a local instance of Right Consents to gain more control about source code and maybe 
contribute by developing functionalities.

In addition you could now check other guides like :

- Understand the concepts of Right Consents (coming soon)
- Use the API for a deep integration (coming soon)
- Develop a webhook to synchronize consent records (coming soon)



