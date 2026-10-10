---
title: Personal tokens
permalink: /api/Token/Personal-tokens/
tags:
  - api
  - Authentication
  - Token
description: Let a signed-in user check whether personal tokens are on, issue a JWT for themselves, list their tokens and revoke one.
createTime: 2026/10/10 12:00:00
---

Issues, lists and revokes JWTs for the signed-in user, for an AI client or a script that acts as that user. This is what **My account › Personal tokens** in the portal calls. It works only after an administrator has enabled **Allow users to issue personal tokens** on an enabled `HS*` embed token configuration (see [Turn on personal tokens](/documentation/AI-Agent/Connect-AI-Clients/#_8-1-turn-on-personal-tokens)).

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/token/personal/config` (check), `POST /plugin/datafor-modeler/api/token/personal` (issue), `GET /plugin/datafor-modeler/api/token/personal/list` (list), `POST /plugin/datafor-modeler/api/token/personal/revoke` (revoke) |
| Permission | Any signed-in user. Not from a share-link session. Issuing and revoking are refused from a session that was itself opened with a token; checking and listing work there. |
| Content type | None for the check and the list; `application/json` for issuing and revoking |

## Parameters

Issue (`POST …/token/personal`):

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | body | string | No | Embed token configuration to issue from. Leave it out (or send no body) to use the first configuration with personal tokens on. |
| `label` | body | string | No | A name for the token, shown in the list; up to 64 characters. Default `AI client`. |
| `expire` | body | integer | No | Lifetime in seconds. Capped at the configuration's expiration time, which is also the default. |

Revoke (`POST …/token/personal/revoke`):

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `jti` | body | string | Yes | The token's id, from the issue response or the list. Only the caller's own tokens can be revoked. |

The token carries three claims: the user name, under the claim named by the configuration's `fieldmap.username` (default `username`), `exp`, and `jti`. Roles and passwords cannot be put in it, so a personal token never gives more than the user's own permissions.

## Example

Check whether personal tokens are on:

```bash
curl -u analyst1:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/personal/config"
```

```json
{
  "success": true,
  "enabled": true,
  "token_session": false,
  "name": "ai-connect",
  "expire": 7776000
}
```

`enabled` is `false`, without `name` and `expire`, when no configuration allows personal tokens. `expire` is the longest lifetime in seconds (here 90 days). `token_session` is `true` when the current session was opened with a token, in which case issuing and revoking are refused.

Issue a token valid for 30 days:

```bash
curl -u analyst1:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/personal" \
  -H "Content-Type: application/json" -d '{"label":"Claude Code","expire":2592000}'
```

```json
{
  "success": true,
  "token": "<signed-jwt>",
  "jti": "6f1c0b1e-5c2a-4d7e-9a3b-1e2f3a4b5c6d",
  "label": "Claude Code",
  "expire": 2592000,
  "issued_at": 1760080000000,
  "expires_at": 1762672000000,
  "username": "analyst1",
  "name": "ai-connect"
}
```

Send the token as `Authorization: Bearer <signed-jwt>`. The token itself is returned once and not stored; keep it in the client's configuration.

List the caller's tokens (newest first, without the token values):

```bash
curl -u analyst1:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/personal/list"
```

```json
{
  "success": true,
  "data": [
    {
      "jti": "6f1c0b1e-5c2a-4d7e-9a3b-1e2f3a4b5c6d",
      "label": "Claude Code",
      "config": "ai-connect",
      "issued_at": 1760080000000,
      "expires_at": 1762672000000,
      "revoked_at": null,
      "last_used_at": 1760083600000,
      "status": "active"
    }
  ]
}
```

`status` is `active`, `expired` or `revoked`. `last_used_at` is updated when the token signs in, at most once an hour. Revoked and expired entries are kept for 90 days.

Revoke one:

```bash
curl -u analyst1:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/personal/revoke" \
  -H "Content-Type: application/json" -d '{"jti":"6f1c0b1e-5c2a-4d7e-9a3b-1e2f3a4b5c6d"}'
```

```json
{ "success": true }
```

A revoked token stops working at once on the node that handled the revocation, and the sessions opened with it there end; other nodes of a cluster follow within a minute. Changing the configuration's secret or deleting the configuration still invalidates every token issued from it at once. With the audit log on, each token issued is recorded as **Token personal** and each revocation as **Token personal revoke**.

Tokens issued before Datafor 10.00 carry no `jti`: they keep working until they expire, are not listed and cannot be revoked individually.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"401"` | `not logged in` | The call is anonymous, or comes from a share-link session. |
| `"403"` | `a session opened with a token cannot issue tokens` / `… cannot revoke tokens` | The caller signed in with a token. Sign in with the account first. |
| `"403"` | `self-service token is not enabled` | No enabled `HS*` configuration (or not the one in `name`) allows personal tokens. |
| `"400"` | `jti is required` | Revoke was called without a `jti`. |
| `"404"` | `token not found` | The `jti` is not one of the caller's tokens, or it is already revoked. |

Related: [Connect AI Clients](/documentation/AI-Agent/Connect-AI-Clients/), [Add or modify a token configuration](/api/Token/Add%20or%20modify%20a%20token%20configuration/)
