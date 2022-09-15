# Models

This section will detail the concept and use of models.



## Models types

This part is an introduction to the six types of models used by Right Consents to build consent forms.

These types can be divided into two categories: the data types, which hold everything related to the user's consent and choices, and the customization types, which are not related to consent but help create forms as suited as possible to each case.



### Processing (data model)

The **Processing** model type represents processing activities as the European GDPR defines them. Any processing relying on consent as a legal basis can be defined with this type.

Specific information shall be provided to the end-user for each processing to make sure they will give **informed consent**:
- the (type of the) **data used** by the processing
- whether these data are considered **sensitive** and more specifically whether they are **medical data**
- the **intended usage** and **storage period** of the data
- the **purpose(s)** and **legal bases** of the processing
- the dedicated **data controller** (if necessary)
- if relevant, the contact information of all involved **third parties**

The only **possible values** for a processing element are **"accepted"** or **"refused"** - empty values are **NOT** allowed.

:::info
A Processing **MUST** be accompanied by an Information model to create a valid consent form.
:::

![Models Guide - Processing](/img/models/processing.png)



### Preference (data model)

The **Preference** model type represents end-users' preferences through a variety of input options, namely:
- toggle button
- free text
- checkboxes (multiple choice)
- radio buttons (single choice)
- single-choice list
- multiple-choice list

This type of model is much simpler than the processing model type because it **does not include personal data**. Its parameters consist in:
- the **input type** (see above) and the **available options** (except for free text inputs)
- whether answering the preference is **mandatory or optional**
- the **default values** (if relevant)

<!--:::info
Preferences are **NOT** included in consent receipts and if a Consent Context is made only of preferences elements, it will not generate any receipt but only records.
:::-->
<!-- TODO : preferences DO appear in both HTML and PDF receipts, though... -->

![Models Guide - Preference: toggle button](/img/models/preference-small-toggle.png)
![Models Guide - Preference: free text](/img/models/preference-small-free-text.png)
![Models Guide - Preference: checkboxes](/img/models/preference-small-checkbox.png)
![Models Guide - Preference: radio buttons](/img/models/preference-small-radiobutton.png)
![Models Guide - Preference: single choice list](/img/models/preference-small-single-list.png)
![Models Guide - Preference: multiple choice list](/img/models/preference-small-multiple-list.png)



### Terms and Conditions (data model)

The **Terms and Conditions** model type is designed for **terms and conditions**, **terms of service**, or similar elements that need to be accepted prior to any service usage.

This type of model has almost **no constraint** as it contains only three configuration elements:
- a **title**
- an **HTML body**
- whether it may be **refused or not**

The only **possible values** for a Terms and Conditions element are **"accepted"** or **"refused"** (only if the element is marked as refusable) - empty values are **NOT** allowed.

:::info
Terms and Conditions are usually used as a single element form and cannot be mixed with Processing or Preference elements.
:::

![Models Guide - Terms and Conditions](/img/models/conditions.png)



### Information (customization model)

The **Information** model type contains all information common to all the data elements of a form. It is mainly used to define the **header** and the **footer** of the forms, but also to add legal information which may be required, such as:
- the main **data controller** (if needed)
- the links to the regular and the short **privacy notices**

Some parts of the Information element are automatically **included in the generated forms and receipts** (namely the data controller and the privacy notice link) but the others can be configured to appear in the receipt only.

:::info
It is **NOT** possible to define multiple instances of Information in the **Right Consents Community** backoffice.
:::

![Models Guide - Information](/img/models/information.png)



### Notification Email (customization model)

Consent forms may be configured to send summary emails to end-users upon consent submission. These emails are customizable using the **Email** model type, which holds all the basic expected fields:
- **sender** email address
- **subject**
- **title**, **body**, **footer** and **signature**
- **link button** label

The **button label** refers to the link button integrated to the email, which allows the end-user to change their consents (if possible) and preferences, or to access their online receipt.

Notification emails also provide a **PDF receipt** as attachment.

![Models Guide - Notification Email](/img/models/email.png)



### Theme (customization model)

The **Theme** model type differs from the other model types as it does not hold any kind of information, but allows the creation of dedicated **stylesheets** for **forms**, **receipts** and **notification emails**.

Right Consents Community elements all have a default theme but with the Theme model type, you can freely apply your own **custom style** to forms, receipts and notification emails - as long as you brush up a little your **CSS** skills.

The Theme model editor provides **autocompletion** to help you navigate between the various classes, and allows you to **preview** the three views (forms, receipts and notification emails).

Themes support registering a logo which will be used in the three views.

![Models Guide - Theme](/img/models/theme-form.png)
![Models Guide - Theme](/img/models/theme-receipt.png)
![Models Guide - Theme](/img/models/theme-email.png)



### Layout (customization model)

The **Layout** model type holds the list of models used in a Consent Context, together with most of its visual configuration:
* the eventual **information** model
* the ordered list of **element** models (processing, preference and conditions types)
* the **orientation** of the form
* whether elements which are already linked to valid records should be displayed to the end-user or not
* the availability and labels of the various **footer buttons**: "accept all", "cancel" and of course "submit" (which obviously cannot be disabled)
* the **stickiness of the footer**: a sticky footer will always be visible instead of appearing after scrolling through all the elements; this allows end-users to quickly submit their answer, especially if used with the "accept all" button

Please note that email models and theme models cannot be stored in Layouts as they are handled directly by the Consent Context.

:::info
Layouts cannot be saved in the Right Consents Community backoffice, but they can be managed through the API.
:::

![Models Guide - Form Layout](/img/models/layout.png)



## Models lifecycle

All models follow the same **lifecycle** which has been designed to ensure no collected consent can be lost, altered or falsified.
If necessary, the consent form which had been displayed to a subject can be recreated exactly from the models serials stored in [**consent records**](/docs/concepts/records).

The lifecycle of a model can be described this way:
* creation of a **Model Entry**
* creation of a **Model Version**, initially in a **draft** state
* activation of the **Model Version**, setting its state to **active**
* as many iterations as needed of creating and activating new **versions**, each making either **minor** or **major** changes
* archiving of the model if it becomes irrelevant



### Creation

First, you must create a **Model Entry** with at least a **key**, a **type**, and an internal **name** to help you recognize easily your models in the backoffice.



### Drafting

Then, you will be able to access the **editor** and fill in all the fields and configuration of the specific type you choose.
A preview in the bottom-right corner of the page will help you check the result.

You can save your work at any time (given that no field is in an erroneous state) as a **draft**.

TODO - work in progress



### Activation

TODO - work in progress
<!-- minor/major version (effect on records) -->



### Version history

TODO - work in progress
<!-- previous version archiving/history read-only view -->



### Suppression

If no record references a Model Entry in the database, the model can be **safely erased** - forever.
However, if even a single record does reference the model, then it can only be **archived**.
This means that the model can still be accessed as read-only in the backoffice libraries and through the API.
