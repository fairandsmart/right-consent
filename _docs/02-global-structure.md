---
title: Global Structure Description
permalink: /docs/global-structure/
excerpt: "Global description of concepts and architecture used in Right Consent"
last_modified_at: 2020-12-15
toc: true
---

The default composition of Right Consents is made of 3 main components : an authentication server, a web application and a backend. 

This instance is for demonstration or **testing purpose only** and should NOT be used in production regarding the lake of many aspects like secured connections (https).

## Default deployment infrastructure

The provided docker compose environment deploy a set of components describe in the following schema : 

{% include figure image_path="/assets/images/global-structure.png" alt="Global Structure Schema" %}

### Keycloak (localhost:4285)

In Right Consents authentication is fully decoupled from other components allowing to plug any other type of Identity Server.

[Keycloak](https://www.keycloak.org/) is a ready to run Identity Provider compliant with OpenID Connect, OAuth 2.0 and SAML 2.0. In order to provide something ready for testing and because it is the defacto solution for [quarkus](https://quarkus.io) applications, we have decide to include this solution in the default deployment scheme.

Container is populated with a provided user realm (RightConsents) that include an existing admin account (demo@demo.com/demo42). Storage subsystem is an embedded H2 database for testing purpose and should not be used in production also. Outgoing SMTP server is NOT configured. All files are located in a specific docker volume avoiding loss of data between different runs.

IdP manager is accessible via the [dedicated web interface](http://localhost:4285/auth) (admin/admin). This url is also used to authenticate user when accessing RightConsent web app, like any SSO solution.


### Quarkus Backend (localhost:4287)

All business logic is included in a single backend application that use several subcomponents. That application mainly use quarkus framework. It also rely on an external Timestamp Authority (TSA) configured to use (freetsa.org). That TSA is free of charge in a very limited traffic and should be replaced or deactivated if needed. 

As for IdP, backend is configured to use an embedded H2 database, a local (folder based) receipt storage provider and an outgoing SMTP server that is NOT configured.

### Angluar Web Application (localhost:4286)

Responsive web application is served using a classic nginx server and is developed using Angular. It is a single page web application that calls directly backend and IdP via http/REST protocole. For demonstration, http communications are not secured (no ssl).

Form based consent & preference collect and receipt consultation URL are served directly from the backend.





