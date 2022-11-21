# Global Overview

Learn the main concepts of consent collect in Right Consents and how to start using it.

- Discover the overall process of consent collect
- Understand the main steps of collecting and managing users consents in Right consents

## Prerequisites

To complete this guide you need :

- Roughly 10 minutes

## Overview

In this guide you will discover the overall process of consent collect and the differents steps that compose that process.

This guide also covers how that process is defined in Right Consents and especially the **Consent Transaction** resource and its lifecycle.

## Consent Collection

Consent collection is a more or less complex operation in the fact that it has multiple facets :
  - It is a **legal part** of a **data processing**,
  - It is a **software piece** that captures enduser choices at a specific time,
  - It is an **audit system** that holds user choices for a relative long time in a standard way,
  - It is a **truth base** that needs to be queried by other pieces of information system.

According to that facets, the global process of collecting consent is composed of three major steps :
  - define and manage the elements (processing, legal informations) that needs to be communicated to customers for collecting consent,
  - design the form designs that need to be displayed according to company services,
  - integrate collect and query of consents at all needed places in the existing company websites or softwares.

## Consent element definition

The first step in putting in place a consent manager is to defines the elements that needs to be communicated to customers when consent collect is needed.

This stage is mainlly handled by the **data controller** itself or the **data protection officer**. It is an administrative task and Right Consents offer a great and specific content management solution for that purpose. Differents models of consent elements are defined (legal informations, processing, preferences, terms of service) and can be used to build a long term preserved **consent elements library**.

Like a CMS, Right Consents will handle consent elements **lifecycle** to ensure the **legal validity** by assuming **auditing** and **versionning** but also by generating some **digital proofs** of any produced content.

![Consent Library](/img/consent-library_s.jpg)

:::info
Consent elements are **accessibles throught the API** for any kind of dissemination goals.
:::

### Consent form design

By using the consent elements library, the consent form design allows you to choose the right elements that needs to be displayed together at a specific point of your existing user experience.

For exemple, Terms of Service needs to be collected at startup of an application or at signup. Some processing consent could be collected only when a specific service is requested. Some processings may concerns a specific application where some others will concerns all of them. All your defined processings may not be consented at the same time and displayed in a single huge form with many entries. If an action performed by a customer only need a single process consent, then only the required element should be displayed. Rights Consents allows to define different **consent layouts** in order to adapt the consent collect for all existing situations.

![Consent Form](/img/consent-form.jpg)

Right Consents **backoffice** propose a **graphical tool** to design Consent Forms. When your design is ready, you can then extract the layout definition for **integration** in any **external application**.

:::info
Consent form design can be used **directly throught the API** by using them in the consent context layout data field.
:::


### Consent collect integration

Once your elements library and your differents layouts and forms are defined you are ready to integrate the consent collect into your existing applications by using the dedicated API.

Right Consents defines the notion of **Consent Transaction** in order to manage the consent collect lifecycle. A transaction is build using a **Consent Context** that will hold all the transaction configuration aspects but also the targeted subject identifier.

![Consent Records](/img/consent-transaction_s.jpg)

During creation, a unique identifier is assigned to the transaction. The trnnsaction handles the whole **consent submission workflow**. Forms and notifications are generated at each step of the transaction lifecycle. At the end of the process, some **Consent Records** are generated for dissemination and a unique **Consent Receipt** is stored for preservation.

![Consent Records](/img/consent-records_s.jpg)

:::info
Generated records will be queryable by **any other piece of software** that rely on user consent value.
The transaction is accessible from its identifier to retrieve receipt at any moment or for changing mind about consent.
:::

## What's next?

Now that you are familiar with Right Consents process, you might be interested in further reads:
* [Concepts & Terminology](/docs/concepts/guide)
* [Guides](/docs/guides/first-consent-form-guide)
* [API documentation](/apiReference)
