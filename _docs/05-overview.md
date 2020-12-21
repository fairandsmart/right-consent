---
title: Overview
permalink: /docs/overview/
excerpt: "Overview of the plateform concepts and structure"
last_modified_at: 2020-12-21
toc: true
gallery:
  - url: /assets/images/collect-process.png
    image_path: /assets/images/collect-process.png
    alt: "Collect Process Schema"
    title: "Collect Process Schema"
---

**Collecting consent** is the principal feature of the application. The process is designed to allows **integration in existing application** but some alternatives, based on dedicated interfaces, exists and will be detailed later on. The folling schema summarize the **differents steps** of the process.

{% include gallery %}


## 1. Define a Consent Context

First step is made by collector entity (organisation, processing officer, ...) and consist of defining the **context** of the consent collect. 

That context defines : **subject** of the consent's collect (aka the destinated user), **elements** that need to be collected (processing, preferences, usage conditions), **look and feel** of the form (language, layout, position of elements), **attributes** of the collect, personal **user information** to include in receipt, **reaction** to the submission (display the receipt, go back to a specific page, interact with UI, send notification email, ...).

## 2. Forge a Consent Collect URL

Once the context is defined, it is **encapsulated** in a [JSON Web Token](https://jwt.io/) and associated with a collect URL than can be **pushed** to **the consent subject** in any existing user experience. The **subject id** contained in the token ensure **predefined authentication** and avoid complex authentication scheme for the consent subject. Other authentication schemes are supported and are detailed later in the documentation.

## 3. Submit the values

The Consent Subject can then use that Consent Collect URL to access a **Secured Consent Form**. Depending on the context choices, form will be displayed in a popup, IFrame, redirect page. The form will also contains only **elements specified in the context** allowing to display only needed processing consent or preference choice at a user experience point (we don't have to ask for all preferences at a starting point of an application).

If the subject is already known in the records base, **old values are populated** in the form. According to its choices, the Consent Subject can know submit values.

## 4. Store subject choices

A **unique transaction id** is generated. The submitted values are divided into two parts : a set of Consent Records and the Consent Receipt. 

### Consent Records

Each element of the form will generate **a specific Consent Record** : if the context was collecting values for 5 elements, 5 records will be generated for the same transaction id. Thus, a specific element can be included in another Consent Context ensuring that **previous submited value is preserved**.

The Consent Record does not hold personal information and its content is minimized to serve as a **ground truth** for consented processing or preference choices. More thant using records to populate futur forms, it aims to be queried, synchronized or exported **by third part applications** to take into account subject consent and choices.

Records Store acts more or less like a **decentralized access control system** but for consent or preference checking purpose.

### Consent Receipt

A single Consent Receipt is generated for the transaction id to fullfil three obejctives : preserve, prove and transport.

The Consent Receipt is an XML document that holds all aspects of the subject consent form and values and it will be **preserved as long as needed**. It includes non repudiation artefacts like **Digital Fingerprint** using hash generation, **Certified Timestamp** or **Electronic Signature**. It increase the confidence that the consent has been given at a specific date, that nothing has changed and that consent subject is the original user that submit values. The Consent Receipt can act as a proof of consent in case of misagreement.

Applying XSL Transformation to that XML Receipt allows to transport the receipt in the desired format, human readable and/or machine readable like HTML, Text, XML or PDF.
 
The Consent Receipt also acts as a **token holder for choice modification**. A unique token is included in the receipt in order to allows the carrier (consent subject) to use it at any moment of its lifecycle to access the same form (same consent context) and **submit new choices**.
 
## 5. Subject notification

Depending on the Consent Context Choice, a Consent Notification is then pushed to the subject. In the common case, this notification takes the form of an email with the receipt as a pdf attachment. 

A dedicated event bus allows to plug any other kind of notification mechanism (instant messaging or sms). 
 

