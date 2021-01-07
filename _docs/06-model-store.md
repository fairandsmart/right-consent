---
title: Model Store
permalink: /docs/model-store/
excerpt: "Model store defines the elements that need end user choice or consent on"
last_modified_at: 2021-01-07
toc: true
---

Right Consents has some similarities with Consent Management Systems but with a more specific goal : collecting user consent and preferences.

In order to create end user's consent forms, the organisation has to **define its processes** and/or preferences that need end user consent collection. Right Consents comes with 3 models of elements that can be put together within forms : Processings, Preferences and Terms and Conditions. Moreover, there is also a more generic type of model that includes **common information** needed in forms for collecting consent, such as the link to your privacy notice for example.

Other models exist (themes and emails) but they have another goal than just creating forms and they will be detailed later on in the documentation.

## Processings

**Processing** element model allows to define processes as the European GDPR defines it. It is based on the French CNIL recommendations in terms of processings registry. Even if the whole processings registry could be defined with Right Consents, only processings that need end-user consent as a legal basis are concerned here.

All processings need to give the end user specific information that will make him confident in giving his consent. For example, it contains the **data concerned by the processing**, the **data retention period** and the most relevant information : **the processing purpose**. 

Some additional information is also available but mainly optional (a specific **data controller**, if the data processed is sensitive or concerns medical data, ...)

The **possible values** of a processing element are **accepted** or **rejected** and empty values are NOT allowed.

A processing model can also be linked with a list of preference models making those preferences not accessible until consent is given for the processing and/or a specific layout within the form (linked preferences appear just below the processing they are linked to).

## Preferences

Preference element model allows to define **end-user based preferences** in a way that allows **different types of end-user choices**. 

Preference model is much simpler than the processing model because it **does not include data information**, it simply consists of a label and a description. The response type can be different depending on the preference type.

The **possible values** of a preference can be very different depending on the type of value : yes/no, multiple choice, radio button, single choice list, multiple choice list. Some options are possible : if the preference can be ignored or not and if a default value needs to be applied.

<i class="fa fa-info-circle"></i> <b>Info:</b> Preferences are **NOT** included in Consent Receipts and if a context is made only of preferences elements, it will not generate any Receipt but only Records.
{: .notice--info}

## Terms and Conditions

Terms and Conditions element model is a very **generic model** that contains a title and a body (html). It has to be used for **terms and conditions** or similar elements that need to be accepted prior to any service usage. 

The **possible values** of Terms and Conditions models are accepted or refused only and the value is mandatory. The labels of those values can be customized.

<i class="fa fa-info-circle"></i> <b>Info:</b> Terms and Conditions are usually used as a single element form because of the mandatory aspect of the response.
{: .notice--info}

## Generic Information

Generic information element model contains the information that is common to any kind of element. It is mainly used to define the header and the footer within forms but also legal information that is mandatory in consent forms regarding the GDPR regulation : data controller and privacy notice url.

Some information is automatically included in the generated forms and in the receipt where some can be configured to appear in the receipt only.

<i class="fa fa-info-circle"></i> <b>Info:</b> It is NOT possible to define multiple instances of generic information.
{: .notice--info}




