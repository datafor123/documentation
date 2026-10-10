---
title: Add or modify a token configuration
permalink: /api/Token/Add or modify a token configuration/
tags:
  - api
  - Authentication
  - Token
description: Create an embed token (JWT) configuration, or replace an existing one with the same name.
createTime: 2026/09/01 22:03:26
---

Creates an embed token (JWT) configuration, or replaces the configuration with the same `name`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/token/update` |
| Permission | Administrator |
| Content type | `application/json` |

## Parameters

The body is one configuration object.

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | body | string | Yes | Name of the configuration. An existing name is replaced; a new name creates a configuration. To rename, create the new one and delete the old one. |
| `token_name` | body | string | No | URL parameter that carries the token. Default `token`. |
| `secret` | body | string | Yes, on create | For `HS*` algorithms, the shared secret. For `RS*` and `ES*`, the issuer's public key, Base64-encoded (the body of a PEM `PUBLIC KEY` without the `BEGIN`/`END` lines). On update, leave it out or send `************` to keep the stored secret. |
| `expire` | body | integer | Yes | Lifetime, in seconds, of tokens that Datafor issues from this configuration. Tokens from your own system expire by their `exp` claim. |
| `algorithm` | body | string | Yes | `HS256`, `HS384`, `HS512`, `RS256`, `RS384`, `RS512`, `ES256`, `ES384` or `ES512`. |
| `fieldmap` | body | object | Yes | Claim names in the token: `username` (required), `name`, `email`. |
| `enable` | body | string | No | `"1"` to accept tokens. Default `"0"`. |
| `inituser` | body | string | No | `"1"` creates unknown users on first sign-in; `"0"` does not. Default `"1"`. |
| `initroles` | body | string[] | No | User type (`SYS_Reader`, `SYS_Creator` or `Administrator`) and roles for users created that way. Default `["SYS_Reader"]`. |
| `self_service` | body | string | No | `"1"` lets signed-in users issue [personal tokens](/api/Token/Personal-tokens/). Works only with an `HS*` algorithm. Default `"0"`. |

The stored configuration is replaced as a whole, except for the secret. A field you leave out falls back to its default, so to change one field, read the configuration first ([Get token configurations](/api/Token/Get%20token%20configurations/)), change the field and send the whole object back. Leaving out `self_service` turns personal tokens off.

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/update" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ERP",
    "token_name": "token",
    "secret": "<at-least-32-random-characters>",
    "expire": 86400,
    "algorithm": "HS256",
    "fieldmap": {"username": "loginname", "name": "name", "email": "email"},
    "enable": "1",
    "inituser": "1",
    "initroles": ["SYS_Reader"],
    "self_service": "0"
  }'
```

```json
{
  "success": true,
  "msg": "success"
}
```

The change applies to the next token that arrives. With the audit log on, it is recorded as **Token add** or **Token edit**.

## Errors

| `code` | When |
| --- | --- |
| `"403"` | The caller is not an administrator (`msg`: `no permission`). |
| (none) | The configuration could not be stored: `success` is `false` and `msg` has the reason. |

Related: [JSON Web Token (JWT)](/documentation/System/JWT/), [Delete token configurations](/api/Token/Delete%20token%20configurations/)
