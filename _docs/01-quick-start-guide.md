---
title: Quick-Start guide
permalink: /docs/quick-start-guide/
last_modified_at: 2020-12-11
toc: true
---

Right Consent is composed of a web based (angular) GUI, 
a quarkus (java/REST) backend and an external identity provider (redaht/keycloak/OIDC).

## Installing the software

As all components are available throught docker, building a local instance is the simplier solution to built a running instance.

### docker-compose method

Project source includes a docker-compose file and specific imports files.

```bash
$ git clone git@github.com:fairandsmart/right-consent.git
$ cd right-consent
$ docker-compose up
```

Once all containers are up, please go to visit <http://localhost:4200> using already imported accounts (admin/admin, operator/operator, user/user).  
You can also access Identity Provider service in order to manage accounts : <http://localhost:8080/auth> (admin/admin123)


### local method

Local installation requires a JDK and Maven. Go to specific [local installation](../installation/) documentation page for detailed instructions.


## First steps



Feel free to visit specific documentation sections to use your Right Consent : 

<http://localhost:4000/right-consent/docs/basic-info/>




