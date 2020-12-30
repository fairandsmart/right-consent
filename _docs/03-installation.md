---
title: Detailed Installation
permalink: /docs/installation/
excerpt: "Instructions for building and installing right consents in a local environment."
last_modified_at: 2020-12-21
toc: true
---

## Docker installation

As mentionned in the quick start guide, the docker installation is based on a docker-compose deployment configuration that does everything for you.

Assuming you have a already installed docker-compose you can start a local instance with the following commands : 

```bash
$ git clone git@github.com:fairandsmart/right-consent.git
$ cd right-consent
$ docker-compose up
```

As soon as the composition is up, you can go to the [web application](http://localhost:4286)

## Source installation

For development purpose or to have a more configurable installation, you can install a local instance. Some components will be deployed using docker and others using the source code directly.

### Requirements

In order to build projects you will need : 
- JDK 11
- Maven >= 3.6.3
- NodeJS >= 12.20.0
- npm >= 6.14.8

### Keycloak

Keycloak is not developped by us and we are using a docker based installation. If you want to use a local instance (wildfly) you can visit [keycloak website](https://www.keycloak.org/docs/latest/server_installation/index.html) for details. 

Starting keycloak in a docker container is better if you use a dedicated volume allowing to preserve data if the container is destroyed and recreated.

```bash
$ mkdir /var/keycloak
$ mkdir /var/keycloak/data
$ mkdir /var/keycloak/import
$ cd /var/keycloak/import
$ wget https://raw.githubusercontent.com/fairandsmart/right-consents/main/imports/right-consents.json
$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/opt/jboss/keycloak/imports/right-consents.json -v /var/keycloak/data:/opt/jboss/keycloak/standalone/data -v /var/keycloak/imports:/opt/jboss/keycloak/imports jboss/keyloak 
```

<i class="fa fa-exclamation-circle"></i> <b>Notice:</b> Be aware that created host folders (/var/keycloak/*) must grant read/write/execute permissions to the user that starts the container.
{: .notice--warning}

### SMTP server

Outgoing SMTP Service is also an external tool we use to avoid any SMTP configuration, it is based on [MailDev](http://maildev.github.io/maildev/). A dedicated web interface allows to consult outgoing emails, if you configure the relay, email will be also routed to any external SMTP relay (you may have to provide credentials for some smtp relay).

```bash
$ docker pull djfarrelly/maildev
$ docker run -p 1080:80 -p 1025:25 djfarrelly/maildev
```

<i class="fa fa-info-circle"></i> <b>Info:</b> You can also replace this component by using a postifx local install as an alternative (or any existing outgoing smtp server by changing configuration).
{: .notice--info}

### Backend

Backend service is developed in Java using quarkus. It exposes a REST API that is accessed front other services. It also integrate configuration elements for working with keycloak.

In order to run the backend, you need to clone the github repository and to run a local instance using Java and Maven :

```bash
$ git clone git@github.com:fairandsmart/consent-manager-back.git
$ cd consent-manager-back
$ mvn clean package -DskipTests quarkus:dev
```

This could take a while as maven is going to download all dependencies but after all you should see the server running : 

//TODO include a small screen cast of that steps and the final screen state while server running

### Web Application

Front Web Application is developped using Angular. It is also built to work with keycloak by default.

In order to run the frontend, you need to clone the github repository and to run a local instance using NodeJS, npm and angular cli : 

```bash
$ git clone git@github.com:fairandsmart/consent-manager-gui.git
$ cd consent-manager-gui
$ npm install
$ ng serve -c local
```

This could take a while as maven is going to download all dependencies but after all you should see the server running : 

//TODO include a small screen cast of that steps and the final screen state while server running


