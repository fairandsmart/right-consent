---
title: Model Store
permalink: /docs/model-store/
excerpt: "Model store defines elements that needs end user choice or consent on"
last_modified_at: 2020-12-21
toc: true
---

Right Consent has some similarities with Content Management Systems but with a more specific goal : collecting user consent and preferences.

In order to produce end user's consent forms, organisation has to **define its processes** and/or preferences that need end user consent collection. Right Consent comes with 3 models of elements that can be put together within forms : Processings, Preferences and Terms of use. Moreover, there is also a more generic type of model that includes **commons information** needed in forms for collecting consent, such as the link to your privacy policy for example.

Others models exists (themes and email) but they have another goal than just creating forms and they will be detailed later on in the documentation.

## Processing

**Processing** element model allows to defines processes as the European GDPR defines it. It is based on the French CNIL recommendations in terms of processings registry. Even if all the processing registry could be defined in Right Consent, only processings that needs user consent as a legal basis are concerned here.

All processings needs to gives end user specific informations that will make him confident in giving consent. For exemple it contains the **data concerned by the processing**, the **data retention period** and the main information : **the processing purpose**. 

Some satelite informations are also availables but mainly optional (a specific **treatment processor**, if data processed are sensitives or medical, ...)

The **possible values** of a processing element are **accepted** or **rejected** and empty values are NOT allowed.

A processing model can also be linked with a list of preferences models making those preferences not accessible until consent is given for the processing and/or a specific layout in the form (preferences appears just behind the processing).

## Preference

Preference element model allows to define **user based preferences** in a way that allows **different types of user choices**. 

Preference model is much simplier that processing because it **does not include data information**, it simplfy consists of a label and description. Response type can be different depending on the preference type.

The **possible values** of a preference can be very different depending on the type of value : yes/no, multiple choice, radio button, single choice list, mltiple choice list. Some options are possible : if the preference can be ignore or not and if a default value need to be applied.

Preferences are **NOT** included in Consent Receipts and if a context is made only of preferences elements, it won't generate any Receipt but only Records.
{: .notice--info}

## Conditions

Condition element model is a very **generic model** that contains a title and a body (html). It has to be used for **terms of service** or similar elements that need to be accepted prior to any service usage. 

The **possible values** of a condition are accepted or refused only and the value is mandatory. Labels of those values can be customized.

Conditions are usualy used as a single element form because of the mandatory aspect of the response.
{: .notice--info}

## Generic Information

Generic informations element model contains all informations that are common to any kind of element. It is mainly used to defined headers and footer in forms but also legal informations that are mandatory in consent form regarding GDPR regulation : data controller and privacy policy url.

Some information are automatically included in the generated forms and in the receipt where some can be configured to only appear in the receipt.

It is NOT possible to define multiple instance of generic informations.
{: .notice--info}




