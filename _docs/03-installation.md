---
title: Detailed Installation
permalink: /docs/installation/
excerpt: "Instructions for building and installing right consent in a local environment."
last_modified_at: 2020-12-15
toc: true
---

## Docker installation

As mentionned in the quick start guide, docker installation is based on a docker-compose deployment configuration that does all the stuff for you.

Assuming you have a already installed docker-composed you can start a local instance with following commands : 

```bash
$ git clone git@github.com:fairandsmart/right-consent.git
$ cd right-consent
$ docker-compose up
```

As soon as the composition is up, you can go to the [web application](http://localhost:4286)

## Source installation

For development purpose or to have a more configurable installation, you can install a local instance. Some components will be deployed using docker and others using source code directly.

## Requirements

In order to build projects you will need : 
- JDK 11
- Maven >= 3.6.3
- NodeJS >= 12.20.0
- npm >= 6.14.8

### Keycloak

Keycloak is not developped by us and we are using a docker based installation. If you want to use a local instance (wildfly) you can visit [keycloak website](https://www.keycloak.org/docs/latest/server_installation/index.html) for details. 

Starting keycloak in a docker container is better if you use a dedicated volume allowing to preserve data if container is destroyed and recreated.

```bash
$ mkdir /var/keycloak
$ 
```

### Backend

### SMTP server

### Web Application


