---
title: Overview
permalink: /docs/overview/
excerpt: "Overview of the plateform concepts and structure"
last_modified_at: 2021-01-07
toc: true
gallery:
  - url: /assets/images/collect-process.png
    image_path: /assets/images/collect-process.png
    alt: "Collect Process Schema"
    title: "Collect Process Schema"
---

**Collecting consent** is the main feature of the application. The process is designed to allow **integration in an existing application** but some alternatives, based on dedicated interfaces, exist and will be detailed later on. The following diagram summarizes the **different steps** of the process.

{% include gallery %}


## 1. Define a Consent Context

The first step is done by the collector entity (organisation, processing officer, ...) and consists in defining the **context** of the consent collect. 

That context defines : the **subject** of the consent's collection (aka the end user), the **elements** that need to be collected (processings, preferences, terms and conditions), the **look and feel** of the form (language, layout, positioning of elements), the **attributes** of the collection, the personal **end-user information** to include in the receipt and the **expected behaviour** following the form submission (display the receipt, go back to a specific page, interact with UI, send notification email, ...).

## 2. Forge a Consent Collect URL

Once the context is defined, it is **encapsulated** in a [JSON Web Token](https://jwt.io/) and associated with a collection URL than can be **pushed** to **the consent subject** in any existing user experience. The **subject id** contained in the token ensures the **predefined authentication** of the end-user and avoids complex authentication scheme for the consent subject. Other authentication schemes are supported and are detailed later in the documentation.

## 3. Submit the values

The Consent Subject can then use that Consent Collection URL to access a **Secured Consent Form**. Depending on the context choices, the form will be displayed in a popup, an IFrame or a redirect page. The form will also contain only **elements specified in the context**, allowing to display only needed processing consents or preference choices at a given time during the customer journey (you do not have to ask for all preferences at a starting point of an application).

If the subject is already known in the records base, **old values are pre-populated** within the form. Once the end user has read the form and performed or updated his choices, he can submit the values.

## 4. Store subject choices

An **unique transaction id** is then generated. The submitted values are divided into two parts : a set of Consent Records and the Consent Receipt. 

### Consent Records

Each element of the form will generate **a specific Consent Record** : if the context was collecting values concerning 5 elements, 5 records will be generated for the same transaction id. Thus, a specific element can be included in another Consent Context ensuring that the **previous submitted value is preserved**.

The Consent Record does not hold personal information and its content is minimized to serve as a **ground truth** for consented processing or preference choices. More than using records to populate future forms, it aims to be queried, synchronized or exported **by third parties applications** to take into account subject consents and choices.

Records Store acts more or less like a **decentralized access control system**, but for consent or preference checking purpose.

### Consent Receipt

A single Consent Receipt is generated for the transaction id to fulfill three objectives : preserve, prove and transport.

The Consent Receipt is an XML document that holds all aspects of the subject consent form and values and it will be **preserved as long as needed**. It includes non repudiation artefacts like **Digital Fingerprint** using hash generation, **Certified Timestamp** or **Electronic Signature**. It increases the confidence that the consent has been given at a specific date, that nothing has changed since and that the consent subject is the original user that has submitted the values. The Consent Receipt can act as a proof of consent in case of misagreement.

Applying XSL Transformation to that XML Receipt allows to transport the receipt into the desired format, human readable and/or machine readable like HTML, Text, XML or PDF.
 
The Consent Receipt also acts as a **token holder for choice modification**. An unique token is included within the receipt in order to allow the carrier (end-user) to use it at any moment of his customer journey to access the same form (same consent context) and **submit new choices**.
 
## 5. Subject notification

Depending on the Consent Context Choice, a Consent Notification is then pushed to the end-user. In the common case, this notification takes the form of an email with the receipt as a pdf attachment. 

A dedicated event bus allows to plug any other kind of notification mechanism (instant messaging or sms). 
 

