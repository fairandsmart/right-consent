# Webhooks



## Definition

**Webhooks** allow you to trigger **automated HTTP requests** to other websites based on **Consent Manager events**.
The Webhook object consists in:
* an **identifier**
* a **name**
* a **target URL** to which the HTTP POST request will be sent as JSON
* a list of **actions** upon which the webhook will be triggered
* a list of **delivery reports** to keep history of the webhook's behaviour

:::info
This feature is still in early development phase.
As such, there is no graphical interface for webhooks in the backoffice, you must go through the [/webhooks resource](/apiReference#tag/Webhook) directly.
The only action which can be subscribed to yet is CONSENT_COMMIT, which is triggered every time a subject submits a validated consent.
:::
