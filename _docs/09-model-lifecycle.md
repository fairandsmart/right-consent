---
title: Model Lifecycle
permalink: /docs/model-lifecycle/
excerpt: "What is the lifecycle of a model and how it is versionned ?"
last_modified_at: 2020-12-15
toc: true
---

Models are designed to **ensure content preservation**. More or less like existing versionning systems, **models are versionned** and some specific business rules defines their lifecycle mostly to ensure that previous versions **won't be modified**.

A model is made of three parts : 
  - the model **entry** which is mainly a pointer that carry a **unique key** and defines a **content type**, 
  - a list of **versions**, 
  - for each version a list of language based **content**.

![Model Structure](/right-consents/assets/images/model-structure.png)

A model version is identified with a **unique serial number** that will be used in forms and records. When a version goes in state **ACTIVE**, no more modification can be done on the content without creating a new **DRAFT** version. Previous version content is then duplicated in the new one.

It is possibile to set the type of a version to MINOR or MAJOR. **MINOR versions** should be used for simple modifications and **will not imply invalidation** of previous records collected whereas **MAJOR version** should be used in case of big modification and **will imply invalidation** of all previous records collected for all previous versions. 

## Create a new model

By creating a new model, you have to set the **model type** (processing) and the **model unique key** (market.1). You can then start working on the **first DRAFT** version. A **unique serial** is generated for that version (2bc1e).

![Model Lifecycle 1](/right-consents/assets/images/model-lifecycle-1.png)

As long as version is DRAFT, it is possible to update its content.
{: .notice--info}

## Activate the version

Once all your work is done on the content, you have to **ACTIVATE the version** in order to use that model key in forms. Records are stored using the model key but also the version serial. Only one version can be ACTIVE at a time for a model entry.

![Model Lifecycle 3](/right-consents/assets/images/model-lifecycle-3.png)

As soon as the version is ACTIVE, you won't be able to modify the content anymore for that specific version (serial).
{: .notice--warning}

## Update content

If you need to **perform some content updates** on an already ACTIVATED version, a new one will be generated and its content duplicated. You can operate changes on the DRAFT version until you decide to ACTIVATE it.

![Model Lifecycle 4](/right-consents/assets/images/model-lifecycle-4.png)

As long as version is DRAFT, records are stored using the ACTIVE one and its serial.
{: .notice--info}

## Activate the new version

When the new version is ACTIVE, records are now stored using that version and its serial.

![Model Lifecycle 5](/right-consents/assets/images/model-lifecycle-5.png)

All records with either serial 2bc1e and f2dc3 will be considered valid because of the MINOR version type that preserve validity of records stored with previous versions.
{: .notice--danger}

## Perform a major update

If the update includes deep content changes you may want that previously collected Records will not be considered as valid anymore. In that case you need to use a MAJOR version. 

![Model Lifecycle 7](/right-consents/assets/images/model-lifecycle-7.png)

As soon as the MAJOR version is activated, records stored with all previous serials will be considered obsolete.
{: .notice--danger}

## Manage multi lingual content

In order to have some content translated in different languages, versions are able to store translated versions of the content. Even if you add some suported language for a model, if you decide to use a MINOR version, previously stored records stay valid.

![Model Lifecycle 10](/right-consents/assets/images/model-lifecycle-10.png)

If API supports content translation, Graphical User Interface of the community edition does not support multiple content languages.
{: .notice--warning}
