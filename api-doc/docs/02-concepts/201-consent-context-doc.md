# Consents
Consents are sent to the end-user using our Consent Form. To generate a Consent Form, you first need to generate a consent transaction using a `ConsentContext`.

:::info
For the API Reference, check the [/consents resource](/apiReference#tag/Consent)
:::

## Attributes

```json title="The ConsentContext object"
{
  "subject": "sheldon",
  "callback": "http://www.fairandsmart.com",
  "iframeOrigin": "http://www.fairandsmart.com",
  "language": "fr",
  "origin": "webform",
  "validity": "P6M",
  "updatable": true,
  "cancellable": true,
  "silent": false,
  "userinfos": "{'emailAddress': 'sheldon@domain.net'}",
  "attributes": {},
  "layout": "layout.001",
  "layoutData": {
    "type": "string",
    "info": "string",
    "elements": [
      "string"
    ],
    "theme": "string",
    "notification": "string",
    "orientation": "VERTICAL",
    "existingElementsVisible": true,
    "validityVisible": true,
    "includeIFrameResizer": true,
    "acceptAllVisible": true,
    "acceptAllText": "string",
    "submitText": "string",
    "cancelVisible": true,
    "cancelText": "string",
    "footerOnTop": true
  },
  "author": "string",
  "confirmation": "NONE",
  "confirmationConfig": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```



