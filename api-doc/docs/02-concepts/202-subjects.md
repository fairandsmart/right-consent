# Subjects

This section will detail the concept and use of subjects.



## Definition

The word "subject" is used for three closely related concepts in Right Consents:
* it may be used as **a synonym to end-user**: the subject is the entity (generally a person) whose consent and preferences are collected
* in transactions, the "subject" field holds **an identifying string which represents the end-user** (internal ID, name, phone number, email address, social security number, passport number, etc)
* through the API, the **subject object** holds this identifying string in its "name" field, as well as some other information of interest



## Lifecycle



### Subject creation

Subjects are usually **created automatically** from the "subject" field of a newly submitted [**transaction**](/docs/concepts/transactions), but they can also be created (and updated) manually through the operator page or the API.



### Unicity and permanency

It is your responsibility to ensure each of your end-users is **mapped to exactly one** subject object.
For example, if an end-user is registered as a subject based on their last name and also as a subject based on their phone number, the two subjects will absolutely be treated as separate entities.

In order to ensure the preservation of all [**records**](/docs/concepts/records), **subjects cannot be deleted**, even through the API.



### Additional information

Subject objects provide some fields designed to hold useful information:
* the **preferred email address** of the subject, to which eventual confirmation and notification emails should be sent
* the **preferred language** of the subject, in case you are using Right Consents in a multilingual environment

These fields may be edited or cleared at any time using either the operator page or directly the API.



## Use



### Operator page

In the Right Consents Community backoffice, all the information and records related to a subject can be accessed through the subject's **operator page**.
To access this page, simply type the subject name in the search bar in the top-right corner of the backoffice.

![Quick Start Guide - Operator Page](/img/getting-started/operator-page.png)

From this page, operators can edit a subject's email address, submit new consents in their name, view their records history and access any PDF consent receipt of the subject.



### Subject consent memory

Every time values are submitted for a [**transaction**](/docs/concepts/transactions) linked to one subject, new [**records**](/docs/concepts/records) are created for each [**data element**](/docs/concepts/models) of the context.

This means that if a new transaction is created for this subject, with a completely different context holding some elements appearing in a previous transaction, the subject's **current valid answers** to each element will be **loaded and pre-answered** in the form.

To **avoid conflicting** consents, you can:
* be careful to create as many processing or conditions models as needed for all of your use cases instead of reusing them
* use different "object" values for your transactions contexts
* use the "silent" consent context attribute to disable the pre-answering of elements based on previous records

On the contrary, you can take advantage of this feature to **simplify your user experiences**:
* since previous answers are pre-loaded, subjects may hit "Submit" on a consent form without having to select again their choices
* the "existing elements visible" consent context layout attribute allows you not to display in forms elements which already have a valid record for the current subject, making the forms easier to process for end-users
