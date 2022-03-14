---
title: Viewing a user's consents
permalink: /docs/user-queries/
toc: true
todo:
  - relire
---

## How can I query consents related to a user?

Specific user consents can be accessed through the **operator interface** by typing the user ID in the **search bar** at the top of the backoffice.

## Operator interface

The **operator interface** is composed of five parts: the **user information**, the **processings consents**, the **preferences choices**, the **terms and conditions consents** and the **modification panel**.

### User information

The user information consists in:
- the user ID
- the user registration date
- the user email address (if known)

### Consents

The processings table displays all the available processings and for each one:
- the **consent state** (invalid by default if no consent has been submitted)
- the **consent expiration date** (if any)
- the **consent collection method** (if any), to indicate whether the consent was submitted by the user or an operator
- the access to the **full consent history** (if any)
- a button to **change the user's consent** on their behalf

### Preferences

The preferences table displays all the available preferences and for each one:
- the **current values** (if any)
- the **last modification date** (if any)
- a button to **change the user's choices** on their behalf

### Terms and Conditions

The terms and conditions table displays all the available terms and conditions and for each one:
- the **consent date** (if any)
- the **consent state** (invalid by default if no consent has been submitted)

Terms and conditions consents cannot be altered by operators.

### Modification panel

The modification panel traces pending changes when the operator is altering the user's consents on their behalf. See more about operating consents [here](/docs/operator-access).

## API access

TODO

if you want to access it programmatically : use the API (with authentication)
