---
title: Quick-Start guide
permalink: /docs/quick-start-guide/
last_modified_at: 2020-12-11
toc: true
---

Right Consent is composed of a web application (angular), 
a java/REST backend (jboss/quarkus) and an external identity provider (Redhat/Keycloak/OpenID).

## Installing the software

All required components are available as docker images ; using docker compose becomes de facto the simplier way to start a local instance.

### docker method

Right Consents comes with a ready to run docker compose configuration.
First step is to clone the github repository which contains elements needed to start the docker compose configuration.

```bash
$ git clone git@github.com:fairandsmart/right-consent.git
$ cd right-consent
$ docker-compose up
```

This should make all components running in docker.

{% include video id="1NS4eueAFqihJ-dnQQu7NnG_hBZvntHy9" provider="google-drive" %}

Then you can open backoffice url <http://localhost:4200> using imported accounts (admin/admin, operator/operator, user/user).  
You can also access Identity Provider service in order to manage accounts : <http://localhost:8080/auth> (admin/admin123).  
API is accessible via http://localhost:9080/api/health


### local method

Local installation requires specific tools (JDK and Maven) and skills. Please visit the dedicated [documentation page](../installation/) for this type of installation.


## First steps

As soon as the main components are started, you should be able to access the provided backoffice and start using consent & preferences collection and interrogation. 

Backoffice access allows to apply some modification to any existing or non-existing customer. In the search field, specify a customer id to access its consent & preferences page :

//TODO Screencast 1 - Access customer page

As that customer as never setup any preferences or consents, the page is empty but the account has been created and activity date is recorder as a starting point.

Now, perform some modifications on the available sample consent and/or preferences. Notice that changes are stacked, waiting unti you commit those modifications. While stacked operations
are not commited, nothing is effective for that customer. 

//TODO Screencast 2 - Cha

Many more elements and aspects

<http://localhost:4000/right-consent/docs/basic-info/>




