---
title: Overview
permalink: /about/overview/
toc: false
menu: false
gallery:
- url: /assets/images/collect-process.png
  image_path: /assets/images/collect-process.png
  alt: "Collect Process Schema"
  title: "Collect Process Schema"
features:
- img: '../assets/images/fair_and_smart_logo.png'
  title: "Consent Models"
  text: "Right Consents consent forms are designed to be **modular**, which means that collector entities can create and manage models of various **types**: information, processings, preferences, terms and conditions, emails, and themes. Each model has **its own lifecycle** with drafts and versions archiving for better traceability."
- img: '../assets/images/fair_and_smart_logo.png'
  title: "Consent Models"
  text: "Right Consents consent forms are designed to be **modular**, which means that collector entities can create and manage models of various **types**: information, processings, preferences, terms and conditions, emails, and themes. Each model has **its own lifecycle** with drafts and versions archiving for better traceability."
  
todo:
  - relire
---

Right Consents is a tool designed for **collecting consent** in compliance with the **GDPR**.  
The dedicated **backoffice** allows to modelise elements that need to be consented by a user (processings, preferences, ...) ; those elements are directly aligned with the **processing registry** described in the GDPR.
An **API** allows **integration** in an existing application or a website for collecting consent keeping an optimal **user experience**. It also allows to query consent base to enforce **processing conformity check** in any other piece of software.    
The collect process is almost like a payment transaction and generates a standard **consent receipt**.  
A specific **operator interface** ensure that end-user consent could be collected or changed by a third person (call center operator, DPO, ...).  
Finally, Right Consents also offer a **customer privacy platform** designed for the end-user to **group all its consents** and preferences in a single page.

{% include gallery %}

//TODO Simplifier la présentation en se focalisant sur les étapes clés :
1. Modéliser ses traitements et assembler un formulaire  
2. Définir un contexte de collecter et l'utiliser en HTML form ou via l'API (JSON)  
3. Afficher un reçu  
4. Vérifier qu'un traitement est autorisé  




## 1. Consent Models

Right Consents consent forms are designed to be **modular**, which means that collector entities can create and manage models of various **types**: information, processings, preferences, terms and conditions, emails, and themes. Each model has **its own lifecycle** with drafts and versions archiving for better traceability.

## 2. Consent Context

Collector entities can easily create consent forms through **consent contexts**, which are composed of:
- The **subject ID** of the consent collection (aka the end-user ID) and necessary personal **end-user information** (email address, phone number...);
- The **list of elements** (processings, preferences, terms and conditions) that need to be collected, along with **parameters** such as default preferences values or whether only unanswered processings or preferences should be displayed to the end-user;
- The **look and feel** of the form (layout, elements positioning, theme...);
- The **attributes** of the collection;
- The **expected behaviour** following the form submission (callback URL, notification email...).

## 3. Consent Form URL

Once the context is defined, it is **encapsulated** in a [JSON Web Token](https://jwt.io/) and associated with a consent form URL that can be **shared** with the **end-user** using any existing user experience. The **subject ID** contained in the token ensures the **predefined authentication** of the end-user and avoids complex authentication scheme for the end-user, however other authentication schemes are also supported.

## 4. Consent Submission

Upon receiving the URL, the **end-user** can access a **secured consent form**, which will be displayed in a popup, an IFrame or a redirect page (depending on the context). If the subject is already known in the records base, **previous answers are pre-populated** within the form. Once the end-user has read the form and selected their choices, they can submit the values.

## 5. Consent Storage

A **unique transaction ID** is generated upon consent submission. The submitted values are divided into two parts: a set of consent records and the consent receipt.

### Consent Records

Each element of the form will spawn a separate, **specific Consent Record** linked to the transaction ID. Thus, any of these elements can be included in another consent context and load its preserved **latest submitted value**.

The consent record does not hold personal information and its content is minimized to serve as a **ground truth** for consented processing or preference choices. More than using records to populate future forms, it aims to be queried, synchronized or exported by **third parties applications** to take into account subject consents and choices.

Right Consents' records store acts as a **decentralized access control system**, but for consent or preference checking purpose.

### Consent Receipt

A **single consent receipt** is generated for the transaction ID to fulfill three objectives: preserve, prove and transport.

The consent receipt is an XML document that holds all aspects of the consent context and subject answers and is meant to be **preserved as long as needed**. It can include non repudiation artifacts such as **digital fingerprint** using hash generation, **certified timestamp** or **electronic signature**. It increases the confidence that the consent has been given at a specific date, that nothing has changed since and that the consent subject is the original user who has submitted the values. The consent receipt can act as a **proof of consent** in case of control or disagreement.

Applying XSL Transformation to an XML receipt allows transporting the receipt into the desired human-readable and/or machine-readable format like HTML, Text, XML or PDF.

The consent receipt also acts as a **token holder for choice modification**. An unique token is included within the receipt in order to allow the carrier (end-user) to use it at any time to access the same form (generated with the same consent context) and **submit new choices**.

## 6. Consent Notification

Depending on the consent context parameters, a **consent notification** may then be pushed to the end-user. In the most common case, this notification would be an email with the receipt as a PDF attachment, but a dedicated event bus allows to plug any other kind of **notification mechanism** (instant messaging, SMS...).

## 7. Consent Access

The collector entity can **consult at any time** the end-user's consents and preference choices using the **subject ID**. Processing officers are allowed to submit new values in the name of the end-user, but the ensuing records and receipt will be marked as generated by an **operator** instead of the end-user themselves.
