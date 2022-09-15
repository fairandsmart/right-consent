# Quick Start Guide

Welcome to the Right Consents quickstart page!
This guide will explain how to set up a full Right Consents stack with docker-compose, import demo data and use the backoffice to discover the simplicity of Right Consents.

![Quick Start Guide - Overview](/img/startserverguide-overview.jpg)



## Preconditions

To complete this guide, you will need:  
- About 15 minutes
- Git
- Docker compose

:::caution
Please ensure you have [docker compose](https://docs.docker.com/compose/install/) installed before going on.
:::



## Get and start the project

All the required components are available as **Docker images**, which is *de facto* the easiest way to start a local instance.
You can find a **ready-to-use Docker compose** configuration in the Right Consents [GitHub repository](https://github.com/fairandsmart/right-consents).
Clone it using the commands:

```bash
$ git clone https://github.com/fairandsmart/right-consents.git
$ cd right-consents
$ docker-compose up #for French use: docker-compose --env-file ./config/fr.env up
```

Wait for everything to start, then you can access the different components:
- URL: [http://localhost:4286](http://localhost:4286)
- Username: `demo@demo.com`
- Password: `demo42`

![Quick Start Guide - Home](/img/getting-started/home.png)



## Demo data

Check that the demo models have been successfully imported by going through the Configuration section **libraries**, you should find:
- One model in the Information library
- Four models in the Processing library
- Four models in the Preferences library
- One model in the Emails library

![Quick Start Guide - Home](/img/getting-started/configuration-processing.png)

This guide will not go in depth about models, but you can check the [**models concept page**](/docs/concepts/models) for more information about them.



## Your first consent form


### Elements selection

Click on the Integration section to reach the Collect page.
This will give you access to a **graphical editor** which will help you create your first consent form.

![Quick Start Guide - Layout](/img/getting-started/collect-layout.png)

On the right side of the screen, you should see four **libraries**.
The first one holds the *information* model, which is selected by default in the central **layout**.

The next two libraries are the *processing* and the *preferences* libraries.
Drag and drop two *processing* models and one *preference* model into the layout.
You can modify their order easily, as well as change your mind by simply dragging and dropping model cards back into their own library.

Then, click on the "Next" button.


### Customization

This second step shows you a preview of the consent form and allows some customization.
To keep this guide simple, we will ignore this step for now, so click on the "Next" button.

![Quick Start Guide - Preview](/img/getting-started/collect-preview.png)


### Context creation

This last step will allow you to generate a real consent form for one person, identified by the [**subject**](/docs/concepts/subjects) field.
Write the demo identifier ```test-subject``` into this field.

![Quick Start Guide - Context](/img/getting-started/collect-context.png)

You can ignore the other fields for now (check the [**consent context documentation**](/docs/concepts/transactions) for more information).
Finally, click on the "Get API call URL" button, then copy the URL which appeared.

![Quick Start Guide - URL](/img/getting-started/collect-url.png)



## Consent submission

Open a private window in your browser (or a window in another browser) to ensure you are not logged anymore, for the sake of the demo.
Paste the URL and your form should appear: you are now authenticated as ```test-subject``` by the embedded **token**.

![Quick Start Guide - Consent Form](/img/getting-started/consent-form.png)

Accept one *processing* and refuse the other, and select a choice for the *preference*, then click on "Submit".

![Quick Start Guide - Consent Transaction](/img/getting-started/consent-transaction.png)

You should be redirected to the transaction hub, which means your consent has been submitted successfully.
Click on "View receipt" to access an HTML representation of the [**consent receipt**](/docs/concepts/receipts) which has been generated from the [**records**](/docs/concepts/records).

![Quick Start Guide - Consent Receipt](/img/getting-started/consent-receipt.png)



## Consent use


### View subject records

Head back to the admin backoffice and type ```test-subject``` in the search bar in the top-right corner of the screen.

![Quick Start Guide - Search User](/img/getting-started/search-user.png)

This will give you access to the **operator page** of this subject. You can check that the records are present and valid for each *processing* and *preference* element.

![Quick Start Guide - Operator Page](/img/getting-started/operator-page.png)


### Submit consent as operator

Click on the "Actions" button on the line of the refused *processing*, then on the "Edit" button.
Select "Accept" in the dropdown: a log displays your selection on the right side of the screen.

![Quick Start Guide - Operator Submit](/img/getting-started/operator-log.png)

Click on "Save my changes", uncheck the "Notify the user by email" checkbox for now and hit "Save".


### Consents history and receipts

Back on the operator page, you should see that both *processing* elements are now marked as valid.
Click again on the "Actions" button on the line of the previously refused *processing*, then on the "History" button.

![Quick Start Guide - Operator Page History](/img/getting-started/operator-page-history.png)

There, you can see the records history with their origin - "web form" and "operator" to ensure transparency.
Click on the "View receipt" button of a line to get the [**PDF receipt**](/docs/concepts/receipts), which is a legal proof of the end user's consent.

![Quick Start Guide - PDF Receipt](/img/getting-started/pdf-receipt.png)


### Search by model

If you wish to interrogate the database to gather all the subjects who answered to one model, you can dive into the **Search page** in the Integration section.

![Quick Start Guide - Search Page](/img/getting-started/search-page.png)



## What's next?

Now that you are familiar with using Right Consents, you might be interested in further reads:
* [Global overview](/docs/getting-started/overview)
* [Concepts & Terminology](/docs/concepts/guide)
* [Guides](/docs/guides/first-consent-form-guide)
* [API documentation](/docs/techdoc)
