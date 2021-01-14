---
title: Global Structure Description
permalink: /docs/global-structure/
excerpt: "Global description of concepts and architecture used in Right Consents"
last_modified_at: 2021-01-06
toc: true
gallery:
  - url: /assets/images/global-structure.png
    image_path: /assets/images/global-structure.png
    alt: "Global Structure Schema"
    title: "Global Structure Schema"
---

In its minimal form, the Right Consents stack consists of 3 main components :
* an authentication server;
* a web application;
* and a backend; 

The provided docker-based example stack purpose is for demonstration or testing purpose and will be used through this documentation to explain Right Consents internals. 

<i class="fa fa-exclamation-triangle"></i> Obviously this example stack **should NOT be used in production** regarding the lack of many aspects (SSL termination, HA storage, laod balancing and so on).
{: .notice--warning}

## Default deployment infrastructure

The provided docker compose stack deploys a set of components described in the following schema : 

{% include gallery %}

### Keycloak (localhost:4285)

In Right Consents, the authentication is fully decoupled from other components allowing to plug any other type of Identity Server.

We chose to use [Keycloak](https://www.keycloak.org/), a ready to run Identity Provider compliant with OpenID Connect, OAuth 2.0 and SAML 2.0. In order to provide something ready for testing and because it is the *de facto* solution for [quarkus](https://quarkus.io) based applications, we included this solution in the default deployment scheme.

The container is populated with a provided user realm (RightConsents) that includes an existing admin account (demo@demo.com / demo42).

The storage subsystem is an embedded H2 database for testing purpose and should not be used in production also, stored on a named docker volume to ensure persistence across deployments.

Outgoing SMTP server is set to the provided smtp container.

<i class="fa fa-info-circle"></i> The IdP manager is accessible via the [dedicated web interface](http://localhost:4285/auth) (admin / admin). This url is also used to authenticate user when accessing RightConsents web app, like any SSO solution.
{: .notice--info}

### Angular Web Application (localhost:4286)

The responsive web application is served using a classic nginx server and is developed using Angular. It is a single page web application that calls directly the backend and the IdP via http/REST protocols. For demonstration, http communications are not secured (no ssl).

Form-based consents & preferences collection and receipts consultation URLs are served directly from the backend.

### Quarkus Backend (localhost:4287)

All business logic is included in a single backend application that uses several subcomponents. That application mainly uses the quarkus framework. It also relies on an external Timestamp Authority (TSA) configured to use (freetsa.org). That TSA is free of charge for a very limited traffic and should be replaced or disabled if needed. 

As for the IdP, the backend is configured to use an embedded H2 database and a local (folder based) receipt storage provider, both stored on a named docker volume to ensure persistence across deployments.
 
Outgoing SMTP server is set to the provided smtp container.

### Mail Display/Relay (localhost:4288)

Right Consents may needs to send emails to end users, for instance when you want the user to get the receipt by email. For the purpose of the demonstration, we provide a simple SMTP display/relay ([maildev](https://github.com/maildev/maildev)) to browse Right Consents generated emails.
