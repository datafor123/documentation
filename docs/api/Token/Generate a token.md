---
title: Generate a token
permalink: /api/Token/Generate a token/
tags:
  - api
  - Authentication
  - Token
description: Have Datafor sign a JWT for any user with an embed token configuration, to test embedding or token sign-in.
createTime: 2026/09/01 22:03:26
---

Signs a JWT with an embed token configuration, for a user you name. Use it to test token sign-in or embedding before your own system issues tokens, or for a server-side integration that has no signing code of its own. To let users get a token for themselves, use [Personal tokens](/api/Token/Personal-tokens/) instead.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/token/generate` |
| Permission | Administrator |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | body | string | Yes | Name of the embed token configuration. |
| `privateKey` | body | string | Yes | The configuration's secret. Datafor signs with the value you send and does not compare it with the stored secret, so a wrong value gives a token that Datafor later rejects. |
| `payload` | body | object | Yes | Claims to put in the token. `payload.username` (the Datafor login name) is required. |

Every key of `payload` becomes a claim. A key that has an entry in the configuration's `fieldmap` is renamed to the mapped claim: with `"fieldmap": {"username": "loginname"}`, `"username": "analyst1"` becomes the claim `"loginname": "analyst1"`, which is what Datafor looks for when the token comes back. Arrays stay arrays; other values become strings. Datafor adds `exp`, set to now plus the configuration's `expire`.

Only `HS256`, `HS384` and `HS512` configurations can sign here. For `RS*` and `ES*` configurations Datafor holds only the public key, so sign the token in your own system.

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/generate" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ERP",
    "privateKey": "<the-configuration-secret>",
    "payload": {"username": "analyst1", "name": "Analyst One", "email": "analyst1@example.com"}
  }'
```

```json
{
  "success": true,
  "token": "<signed-jwt>",
  "expire": 86400
}
```

`token` is the JWT; `expire` is its lifetime in seconds. Send it as described in [JSON Web Token (JWT)](/documentation/System/JWT/#_3-send-a-token), for example:

```bash
curl -H "Authorization: Bearer <signed-jwt>" \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/detail"
```

The configuration must be enabled (`"enable": "1"`) for Datafor to accept the token.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"403"` | `no permission` | The caller is not an administrator. |
| (none) | `secret can not be empty` | `privateKey` is missing. |
| (none) | `username can not be empty` | `payload.username` is missing. |
| (none) | `name does not exist` | No configuration has this `name`. |
| (none) | other text | Signing failed, for example with an `RS*` or `ES*` configuration. |

Errors without a `code` have `"success": false`.

Related: [JSON Web Token (JWT)](/documentation/System/JWT/), [Get token configurations](/api/Token/Get%20token%20configurations/)
