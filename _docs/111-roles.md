---
title: Roles
permalink: /docs/roles/
toc: false
todo:
  - relire
  - un mot sur l'auth keycloak?
---

## Admin

Administrators have **unlimited access** to the backoffice and the API endpoints. They can create and edit [models](/docs/model-types), [forms](/docs/consent-context), query and create [consent records](/docs/records-receipts) and manage [API keys](/docs/api-keys).

## Operator

Operators have **restricted access** to the backoffice and the API endpoints. They can view [models](/docs/model-types) (in read-only mode), and above all query and create [consent records](/docs/records-receipts) on the [operator interface](/docs/user-queries).

## User

Users have **no access** to the backoffice, but can reach a dedicated [user page](/docs/user-access) if the configuration enables it. This role represents **end-users** who will receive and answer your consent forms.
