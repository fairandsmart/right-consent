# Connecting to the API

# Server Endpoint

```uri title="API Root Path"
http://localhost:4287
```

```uri title="Keycloak Auth Path"
http://localhost:4285
```

# Security

For requests that require authentication, you will need to have your users authenticate via our OAuth mechanisms handled with Keycloak.
See [Keycloak](https://www.keycloak.org/) for more information.

There are many libraries available for a lot of languages to help you with this.

If you want to manually integrate, here are the OAuth2 relevant URls:

```uri title="Authorization URL"
http://localhost:4285/auth/realms/consent-manager/protocol/openid-connect/auth
```
```uri title="Token URL"
http://localhost:4285/auth/realms/consent-manager/protocol/openid-connect/token
```
```uri title="Refresh URL"
http://localhost:4285/auth/realms/consent-manager/protocol/openid-connect/token
```

# Headers

For requests that require authentication, you need to provide a Bearer token, obtained from Keycloak (see above).

**Authorization**: `Bearer TOKEN`

# Javascript library

We provide a Javascript library to help you use the API. Sources are available on [Github](https://github.com/fairandsmart/consent-manager-lib-ce).

To install the library, you can use npm:

```bash
npm install @fairandsmart/consents-ce
```

Or you can include the library in your HTML page:

```html
<script src="https://assets.fairandsmart.tech/consent.js"></script>
```
When the consent.js file is imported via a script tag, the SDK features are available in the `window.FairAndSmart` global variable of your web page.

:::info
The full documentation for the library is available [here](/docs/techdoc/sdk#api-calls).
:::




