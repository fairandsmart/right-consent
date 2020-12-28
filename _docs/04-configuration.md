---
title: Configuration
permalink: /docs/configuration/
excerpt: "Detailed elements of configuration to consider when installing Right Consents"
last_modified_at: 2020-12-21
toc: true
---

The configuration of the whole composition is not available in a single place. Each component of the system holds a part of the configuration. Nevertheless, the bckend configuration is probably the most important as it concerns directly behaviour and functionnal aspects of the main part of the software.

## IdP (keycloak) configuration

The configuration of the IdP is available using the manager interface <http://localhost:4285/auth>.

You can find dedicated Keycloak documentation on the [product website](https://www.keycloak.org/docs/latest/server_admin/index.html)

## SMTP Server

## Backend

Backend configuration is located in a specific file : 

```bash
$ consent-manager-back/src/main/resources/application.properties
```

### HTTP server

First part of the file allows to set specific HTTP server configuration options like ports, CORS, proxy header management, and logs.

#### ports

```properties
quarkus.http.port=8087
quarkus.http.test-port=8083
```

#### CORS

```properties
quarkus.http.cors.origins=
quarkus.http.cors.methods=OPTIONS,GET,PUT,POST,DELETE
quarkus.http.cors.exposed-headers=Content-Disposition
quarkus.http.cors.access-control-max-age=24H
```

#### proxy

```properties
quarkus.http.proxy.proxy-address-forwarding=true
```

#### authentication


## Web Application
