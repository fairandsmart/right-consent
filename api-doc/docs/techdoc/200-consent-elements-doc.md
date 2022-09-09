# Consent Elements Documentation

This guide is an introduction to the six types of models used by Right Consents to build consent forms.

These types can be divided into two categories: the data types, which hold everything related to the user's consent and choices, and the customization types, which are not related to consent but help create forms as suited as possible to each case.

## Data models

### Processing

The **Processing** model type represents processing activities as the European GDPR defines them. Any processing relying on consent as a legal basis can be defined with this type.

Specific information shall be provided to the end-user for each processing to make sure their **consent is informed**:
- the (type of) **data used** by the processing
- whether these data are considered **sensitive** and more specifically whether they are **medical data**
- the **intended usage** and **storage period** of the data
- the **purpose(s)** and **legal bases** of the processing
- the dedicated **data controller** (if necessary)
- if relevant, the contact information of all the involved **third parties**

The only **possible values** for a processing element are **"accepted"** or **"rejected"** - empty values are **NOT** allowed.

:::info
 A Processing **MUST** be accompanied by an Information model to create a valid consent form.
:::

### Preference

The **Preference** model type represents end-users' preferences through a variety of input options, namely:
- toggle button
- checkboxes (multiple choice)
- radio buttons (single choice)
- single-choice list
- multiple-choice list
- free text

This type of model is much simpler than the processing model type because it **does not include data information**. Its parameters consist in:
- the **input type** (see above) and **available options** (except for free text inputs)
- the **default values** (if needed)
- whether answering the preference is **mandatory or optional**

:::info
 Preferences are **NOT** included in consent receipts and if a Consent Context is made only of preferences elements, it will not generate any receipt but only records.
:::

### Terms and Conditions

The **Terms and Conditions** model type is obviously designed for **terms and conditions**, **terms of service**, or similar elements that need to be accepted prior to any service usage.

This type of model has almost **no constraint** as it contains only three configuration elements:
- a **title**
- an **HTML body**
- whether it may be **refused or not**

The only **possible values** for a Terms and Conditions element are **"accepted"** or **"rejected"** (only if the element is marked as refusable) - empty values are **NOT** allowed.

:::info
 Terms and Conditions are usually used as a single element form and cannot be mixed with Processing or Preference elements.
:::

## Customization models

### Information

The **Information** model type contains all information common to all the data elements of a form. It is mainly used to define the header and the footer of the forms, but also to add legal information which may be required, such as:
- the main **data controller** (if needed)
- the links to the regular and the short **privacy notices**

Some parts of the Information element are automatically **included in the generated forms and receipts** (namely the data controller and the privacy notice link) but the others can be configured to appear in the receipt only.

:::info
 It is **NOT** possible to define multiple instances of Information in **Right Consents Community**.
:::

### Notification Email

Consent forms may be configured to send summary emails to end-users upon consent submission. These emails are customizable using the **Email** model type, which holds all the basic expected fields:
- **sender** email address
- **subject**
- **title**, **body**, **footer** and **signature**
- **link button** label

The **button label** refers to the link button integrated to the email, which allows the end-user to change their consents (if possible) and preferences, or to access their online receipt.

Notification emails also provide a **PDF receipt** as attachment.

### Theme

The **Theme** model type differs from the other model types as it does not hold any kind of information, but allows the creation of dedicated **stylesheets** for **forms**, **receipts** and **notification emails**.

Right Consents Community elements all have a default theme but with the Theme model type, you can freely apply your own **custom style** to forms, receipts and notification emails - as long as you brush up a little your **CSS** skills.

The Theme model editor provides **autocompletion** to help you navigate between the various classes, and allows you to **preview** the three views (forms, receipts and notification emails).

Themes support registering a logo which will be used in the three views.
