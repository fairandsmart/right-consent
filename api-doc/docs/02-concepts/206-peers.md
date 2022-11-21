# Peers



## Definition

A **peer** is a **partner Consent Manager instance**.
New peers must be registered with their **base API URL** and an [**API key**](/docs/concepts/keys) to ensure authentication to it.
When an instance registers another instance as peer, **the same process is mirrored** on the second instance, so that each instance is recognized as a peer by the other (the API key is automatically generated).



## Peer transactions

Peers are allowed to **reference in their Consent Contexts** [**shared models**](/docs/concepts/models) from Consent Manager instances where they are registered as peers.
The form generated from such a context will display the main information, then the peer information, followed by the main elements and lastly, the peer elements.

Subjects who submit their consent through this form will receive one notification email from the main Consent Manager and one from each peer (if notifications were enabled in the context), each holding a **separate receipt** with data concerning only the elements they own.
[**Records**](/docs/concepts/records) are stored exclusively in Consent Manager instances which own the relevant elements.

:::info
For more information, check the [**transactions guide**](/docs/concepts/transactions).
:::
