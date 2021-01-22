---
title: Quick-Start guide
permalink: /docs/quick-start-guide/
last_modified_at: 2021-01-05
toc: true
---

Right Consents is composed of :  
* a **web application** (Angular);  
* a **java/REST backend** (jboss/Quarkus);  
* an external **Identity Provider** (Redhat/Keycloak/OpenID);  
* a convenient **outgoing SMTP** server/relay;

## Installing the software

All required components are available as **docker images** that is the *de facto* simplest way to start a local instance. 

Right Consents comes with a **ready-to-run docker compose** configuration.
The first step is to clone the github repository which contains the elements needed to start the docker compose configuration.

<i class="fa fa-exclamation-triangle"></i> please ensure [docker](https://docs.docker.com/get-docker/) is installed before proceeding further.
{: .notice--warning}

```bash
$ git clone git@github.com:fairandsmart/right-consents.git
$ export FS_INSTANCE_LANG=fr #Only if you want demo content in french instead of english
$ cd right-consents
$ docker-compose up
```

{% include video id="feb45b33-8a01-4d1c-990c-c0b4e01c9437" provider="fairandsmart" %}


When everything is up (check video above) you can access the different components with the following urls : 

**Backoffice web application** is visible at url [http://localhost:4286](http://localhost:4286) using username & password: *demo@demo.com / demo42*

<b>Other components dedicated interface:</b>  
<i class="fa fa-users"></i> Identity Provider manager [http://localhost:4285/auth](http://localhost:4285/auth)  
<i class="fa fa-desktop"></i> Backend API health check url: [http://localhost:4287/health](http://localhost:4287/health)  
<i class="fa fa-inbox"></i> MailDev Outgoing SMTP interface url: [http://localhost:4288](http://localhost:4288)  


<i class="fa fa-info-circle"></i> <b>Info:</b> More installation options are available in the [Installation](/docs/installation/) documentation page.
{: .notice--info}

## First steps

As soon as the main components are started, you should be able to **access the provided backoffice** and start using consents & preferences collection and interrogation. A sample test dataset is provided.

Backoffice access allows to apply some modifications to any existing or non-existing end-user. In the search field, specify a end-user id to access his dedicated consents & preferences page :

{% include video id="70626fef-c03b-4c2c-b32f-674a400e57e5" provider="fairandsmart" %}

By the way, by "end-user" we mean the final user, who can be a citizen, a customer, a member...
If that end-user has never setup his preferences or consents before, the page is empty but the account has been created and activity date is recorded as the end-user's activity starting point .

Now, **perform some modifications** on the available sample consents and/or preferences. Notice that changes are stacked, waiting until you commit those modifications. As long as the stacked operations are not actually committed, nothing is effective for the end-user. 

When everything is done you can **commit changes** and you may choose to **notify the end-user** that something has changed on his consents/preferences by sending him an email. That email will contain an attached receipt but also a link that will allow the end-user to **make his own choices**. There are two types of user access provided by the software : a dedicated web interface similar to the operator one (which requires authentication at user level) and a simple online form (no authentication required). In the quick start instance, you can access the outgoing SMTP server interface to check "send email" without using a real recipient as shown in the screencast.

{% include video id="39f262ed-fc9b-48ec-b2a2-7fcf2ac05f21" provider="fairandsmart" %}

## Doing more

When you are comfortable with the operator interface and the modification of existing consents and preferences you can go through the **configuration section** to register new processings and preferences and see how they integrate with the existing ones.

{% include video id="17c867d3-2c4a-4f9e-9457-3a89da0f174b" provider="fairandsmart" %}

## Integrate with other apps

Everything we have seen so far is inside of the application itself and is not dedicated to your end-users directly (except receipts and inmail form links). You probably want to see now how you could **integrate a consent collection form** in an existing application ?

We have setup a dedicated project that includes integration samples. Here is a small demonstration of a consent collect form integration in an external php page using API key and custom form context.

{% include video id="1f634d82-ce1a-450d-a8d8-736e09f1b3ed" provider="fairandsmart" %}

<i class="fa fa-info-circle"></i> <b>Info:</b> The dedicated project needed for that sample integration is located in a [specific repository](https://github.com/fairandsmart/consent-manager-samples).
{: .notice--info}


