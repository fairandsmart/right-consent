---
title: Confirming a user's consent
permalink: /docs/confirmation/
toc: true
todo:
  - relire
---

## Why use a confirmation process?

Confirmation is absolutely **not mandatory** to create a form. However, it is the best solution to **ensure the identity** of the end-user submitting their consent.

If no confirmation method is provided to a [consent context](/docs/consent-context), the [record](/docs/records-receipts) created upon hitting the submission button will have the state **COMMITTED**.

If a confirmation method is provided, on the other hand, the record will first have the state **PENDING**, which indicates it is not valid - yet. The **COMMITTED** state will be granted to the record when the end-user submits a valid value through the confirmation form.

## Confirmation methods

### Form code

This method is the simplest : a randomized confirmation code is written in a hidden input field in the confirmation form, all the user needs to do is click on the button.

### Email code

To use this method, you will need to provide the user's email address to the consent context.

    var myContext = {
        "subject": "<user ID>",
        ...
        "userinfos": {
            "emailAddress": "<user email address>"
        }
    }

When the user hits the submission button, a basic email will be sent to them with the randomized confirmation code. All they have to do is to enter this code in the confirmation form's input field and click on the button.

<i class="fa fa-info-circle"></i> <b>Warning:</b> This email has nothing to do with the [email](/docs/model-types) models!
{: .notice--info}

<i class="fa fa-info-circle"></i> <b>Info:</b> Neither content nor style can be customized in confirmation emails.
{: .notice--info}

### SMS code

To use this method, you will need to provide the user's phone number to the consent context.

    var myContext = {
        "subject": "<user ID>",
        ...
        "userinfos": {
            "phoneNumber": "<user phone number>"
        }
    }

When the user hits the submission button, a basic SMS will be sent to them with the randomized confirmation code. All they have to do is to enter this code in the confirmation form's input field and click on the button.

<i class="fa fa-info-circle"></i> <b>Info:</b> Content cannot be customized in confirmation SMS.
{: .notice--info}

### Signature

TODO

### Audio recording

TODO

### Video recording

TODO

### Digital signature

TODO
