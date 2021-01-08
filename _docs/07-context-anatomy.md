---
title: Consent Context Anatomy
permalink: /docs/context-anatomy/
excerpt: "Anatomy of the Consent Context that will define the content, look'n'feel and behaviour of the Consent Form"
last_modified_at: 2021-01-08
toc: true
---

The Consent Context is the entry point of any consent collection process. It can define all aspects of the Consent Form content, behaviour and look'n'feel.

![Context Anatomy](/right-consents/assets/images/context-anatomy.png)

## Content

### Validity date

Setting the validity date (ISO 8601 duration format) will define how long the Records are valid. After that date, the records will be considered OBSOLETE. This parameter is mandatory but can appear or not within the Receipts sent to the end-user, depending of the operator choice.  

### Elements

It is mandatory to set the model keys of elements that need to be visible in that Consent Form. With that parameter, it is possible to collect the consent for only one processing at a time or for a whole bunch of processings, depending on the integration target. 

<i class="fa fa-info-circle"></i> <b>Info:</b> Basic information is always integrated in Consent Forms as it contains mandatory information.
{: .notice--info}

### Form Type

Form Type can be either FULL or PARTIAL. In a partial form, only elements that do not have a previous Record for that end-user will be displayed.

### Context Attributes

It is possible to set any Context Attributes (key/value). Those attributes will be included in the Records generated while submitting the form and could be used later on when querying the record base. 

It is mainly used to split the records for consent collected by a specific zone, or by a specific version of a product...

<i class="fa fa-exclamation-circle"></i> <b>Notice:</b> Using a lot of attributes can generate heavy tokens, use with caution
{: .notice--warning}

### End-User Information

It is possible to set any End-User Personal Information in the context. This information will be included in the Receipt only. 

The goal is to identify the subject providing specific end-user information that could enforce the identification of the subject with the Receipt. 

<i class="fa fa-exclamation-circle"></i> <b>Notice:</b> Using a lot of information can generate heavy tokens, use with caution
{: .notice--warning}

## Behaviour

### Callback

If you set a callback url, the end-user will be redirected to that URL after consent submission or receipt display. 

<i class="fa fa-info-circle"></i> <b>Info:</b> If the form is displayed in an IFrame, this parameter is not necessary.
{: .notice--info}

### Receipt Delivery Type

The receipt delivery type [NONE, GENERATE, DISPLAY, STORE, DOWNLOAD] allows to control if a receipt is generated and if it is pushed or not to the end-user.

### Receipt Display Type

The receipt display type [NONE, HTML, PDF, TXT, XML] allows to choose if the receipt is going to be displayed after the Consent Form submission and using which mime type.

<i class="fa fa-exclamation-circle"></i> <b>Notice:</b> Setting Receipt Delivery Type to NONE implies a Receipt Display Type of NONE
{: .notice--warning}

### Notification

If a notification model (email type) is set, a notification email will be sent to the specified notification recipient (email address).

A Notification Report will also be included in the Record keeping track of the delivery status of the email.

## Look'n'feel

### Language

Multiple language support is not available in the community edition.

<i class="fa fa-info-circle"></i> <b>Info:</b> If you want to know more about the Enterprise edition, please contact us.
{: .notice--info}

### Layout

2 types of layout are supported in the community edition HORIZONTAL and VERTICAL. Using the preview you should be able to have a look at the differences between those 2 layouts.

<i class="fa fa-info-circle"></i> <b>Info:</b> More layouts are included in the enterprise edition
{: .notice--info}

### Theme

It is possible to apply an existing theme model element key to change the appearence of all elements of a consent collection process (form, email, receipt). 

<i class="fa fa-info-circle"></i> <b>Info:</b> Themes are mostly composed of css customization elements.
{: .notice--info}

### Options

Other options allow specific customization like displaying an 'Accept All' button, placing the footer on top of the form instead of on the bottom and associating preferences with processing elements.


