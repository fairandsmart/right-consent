---
title: Installation
permalink: /docs/installation/
excerpt: "Instructions for building and installing right consents in a local environment."
toc: true
todo:
  - relire
---

## Docker installation

As mentioned in the quick start guide, the docker installation is based on a docker-compose deployment configuration that does everything for you.

Assuming you have a docker already installed you can start a local instance with the following commands: 

```bash
$ git clone git@github.com:fairandsmart/right-consent.git
$ cd right-consent
$ docker-compose up
```

As soon as the stack is up, you can go to the [web application](http://localhost:4286)

## Source installation

For development purpose or to have a more configurable installation, you can install a local instance. Some components will be deployed using docker and others using the source code directly.

### Requirements

In order to build projects you will need: 
- JDK 11;
- Maven >= 3.6.3;
- NodeJS >= 12.20.0;
- npm >= 6.14.8;

### Keycloak

Unless needed, use keycloak in a dedicated container with either a named volume or (as below) a mapped folder to allow data persistence when the container is redeployed.

```bash
$ wget https://raw.githubusercontent.com/fairandsmart/right-consents/main/imports/right-consents.json
$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/tmp/right-consents.json  -v keycloak-data:/opt/jboss/keycloak/standalone/data --mount type=bind,source=$PWD/right-consents.json,target=/tmp/right-consents.json jboss/keycloak:11.0.3
```

<i class="fa fa-info-circle"></i> <b>Notice:</b> to delete keycloak data, stop the container then run `docker volume rm keycloak-data`
{: .notice--info}

If you want to use a local instance (wildfly) you can visit [keycloak website](https://www.keycloak.org/docs/latest/server_installation/index.html) for details. 

### SMTP server

Outgoing SMTP Service is also an external tool used to avoid any SMTP configuration, it is based on [MailDev](http://maildev.github.io/maildev/). A dedicated web interface that allows to consult outgoing emails, and email will be also routed to any external SMTP relay if you configure the relay (check [upstream](https://hub.docker.com/r/maildev/maildev)) for some docs) .

```bash
$ docker run -p 1080:80 -p 1025:25 maildev/maildev
```

<i class="fa fa-info-circle"></i> <b>Info:</b> You can also replace this component by any existing outgoing smtp server by changing configuration, or even a postifx local install if you are the kind of person running a local SMTP server on your computer.
{: .notice--info}

### Backend

Backend service is developed in Java using quarkus. It exposes a REST API that is accessed from other services. It also integrates configuration elements for working with keycloak.

In order to run the backend, you need to clone the github repository and to run a local instance using Java and Maven:

```bash
$ git clone git@github.com:fairandsmart/consent-manager-back.git
$ cd consent-manager-back
$ mvn clean package -DskipTests quarkus:dev
```

This could take a while as maven is going to download all dependencies but in the end you should see the server running: 

{% include video id="85e9e806-c131-4c55-8efb-f6cc67ebab5f" provider="fairandsmart" %}

### Web Application

Front Web Application is developed using Angular. It is also built to work with keycloak by default.

In order to run the frontend, you need to clone the github repository and to run a local instance using NodeJS, npm and angular cli: 

```bash
$ git clone git@github.com:fairandsmart/consent-manager-gui.git
$ cd consent-manager-gui
$ npm install
$ ng serve
```

This could take a while as maven is going to download all dependencies but in the end you should see the server running: 

{% include video id="79478a8e-df07-4860-9d17-7a54dc205987" provider="fairandsmart" %}


