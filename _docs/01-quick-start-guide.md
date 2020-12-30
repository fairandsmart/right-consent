---
title: Quick-Start guide
permalink: /docs/quick-start-guide/
last_modified_at: 2020-12-21
toc: true
---

Right Consents is composed of :  
a **web application** (Angular),  
a **java/REST backend** (jboss/Quarkus),  
an external **Identity Provider** (Redhat/Keycloak/OpenID),  
a convenient **outgoing SMTP** server.

## Installing the software

All required components are available as **docker images** that is the de facto simpliest way to start a local instance. 

Right Consents comes with a **ready-to-run docker compose** configuration.
The first step is to clone the github repository which contains the elements needed to start the docker compose configuration.

```bash
$ git clone git@github.com:fairandsmart/right-consent.git
$ cd right-consent
$ docker-compose up
```

When everything is up (check vidéo) you can access component with the following urls : 

{% include video id="1ca--eXQost8BZDL28xqPg7i2q1Nl10ji" provider="google-drive" %}

**Backoffice web application** is visible at url [http://localhost:4286](http://localhost:4286) using <b>Username & password:</b> *demo@demo.com/demo42*

<b>Other components dedicated interface:</b>  
<i class="fa fa-users"></i> Identity Provider manager [http://localhost:4285/auth](http://localhost:4285/auth)  
<i class="fa fa-desktop"></i> Backend API health check url: [http://localhost:4287/health](http://localhost:4287/health)  
<i class="fa fa-inbox"></i> MailDev Outgoing SMTP interface url: [http://localhost:4288](http://localhost:4288)  
{: .notice}


<i class="fa fa-info-circle"></i> <b>Info:</b> More installation options are available in the [Installation](/docs/installation/) documentation page.
{: .notice--info}

## First steps

As soon as the main components are started, you should be able to **access the provided backoffice** and start using consent & preferences collection and interrogation. 

Backoffice access allows to apply some modifications to any existing or non-existing customer. In the search field, specify a customer id to access his dedicated consent & preferences page :

//TODO Screencast 1 - Access customer page

If that customer has never setup his preferences or consents before, the page is empty but the account has been created and activity date is recorded as a starting point.

Now, **perform some modifications** on the available sample consent and/or preferences. Notice that changes are stacked, waiting until you commit those modifications. As long as the stacked operations are not commited, nothing is effective for the end-customer. 

//TODO Screencast 2 - Perform changes

When everything is done you can **commit changes** and you may choose to **notify the customer** that something as changed on his consent/preferences by sending an email. That email will contains an attached receipt but also a link that will allows the customer to access a specific user interface, similar to the operator one, allowing him to **make its own choices**. That user interface can be disable. You can also access the outgoing SMTP server interface to check sent email.

//TODO Screencast 3 - Commit changes and notify by email, consult email in outgoing smtp

## Doing more

When you are confortable with the operator interface and the modification of existing consent and preferences you can go throught the **configuration section** to declare new treatments and processings and see how it integrate with the existing ones.

//TODO Screencast 4 - Adding a processing model

## Integrate with other apps

ALl we have seen yet is inside the application itselft and is not dedicated to customers directly. You probably want to see now how you could **integrate consent collect form** in any existing application ?

// TODO Screencast 5 - Integration in external app



