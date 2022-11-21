# Keys



## Definition

You can generate **API keys** to easily handle authentication to the API via **Basic Auth**.
Simply put the API key value in the Authorization header of your HTTP requests:

`Authorization: Basic <API_KEY>`

You can delete API keys if necessary.



## Scopes

Two scopes are available for your API keys: **owner** and **peer**.

The **owner** scope should be exclusively used by your own applications as it has rights similar to an **operator**.

The **peer** scope should be used for keys destined to your [**partners**](/docs/concepts/peers): this will allow them to access your **shared models** and to init **peer transactions**, but not to meddle with unshared data.
