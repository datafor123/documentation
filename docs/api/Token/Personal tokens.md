---
title: Personal tokens
permalink: /api/Token/Personal-tokens/
tags:
  - api
  - Authentication
  - Token
description: Let a signed-in user check whether personal tokens are on and issue a JWT for themselves.
createTime: 2026/10/10 12:00:00
---

Issues a JWT for the signed-in user, for an AI client or a script that acts as that user. This is what **Generate token** in **Connect AI** calls. It works only after an administrator has set `self_service` to `"1"` on an enabled `HS*` embed token configuration (see [Turn on personal tokens](/documentation/AI-Agent/Connect-AI-Clients/#_8-1-turn-on-personal-tokens)).

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/token/personal/config` (check) and `POST /plugin/datafor-modeler/api/token/personal` (issue) |
| Permission | Any signed-in user. Not from a session opened with a token or a share link. |
| Content type | None for the check; `application/json` for issuing |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | body | string | No | Embed token configuration to issue from. Leave it out (or send no body) to use the first configuration with personal tokens on. |

The token carries only two claims: the user name, under the claim named by the configuration's `fieldmap.username` (default `username`), and `exp`. Roles and passwords cannot be put in it, so a personal token never gives more than the user's own permissions.

## Example

Check whether personal tokens are on:

```bash
curl -u analyst1:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/personal/config"
```

```json
{
  "success": true,
  "enabled": true,
  "name": "ai-connect",
  "expire": 7776000
}
```

`enabled` is `false`, without `name` and `expire`, when no configuration allows personal tokens. `expire` is the token lifetime in seconds (here 90 days).

Issue a token:

```bash
curl -u analyst1:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/personal" \
  -H "Content-Type: application/json" -d '{}'
```

```json
{
  "success": true,
  "token": "<signed-jwt>",
  "expire": 7776000,
  "username": "analyst1",
  "name": "ai-connect"
}
```

Send the token as `Authorization: Bearer <signed-jwt>`. A personal token cannot be revoked on its own: it stays valid until it expires, or until an administrator changes the configuration's secret or deletes the configuration, which invalidates every token issued from it. With the audit log on, each token issued is recorded as **Token personal**.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"401"` | `not logged in` | The call is anonymous, or comes from a share-link session. |
| `"403"` | `a session opened with a token cannot issue tokens` | The caller signed in with a token. Sign in with a password first. |
| `"403"` | `self-service token is not enabled` | No enabled `HS*` configuration (or not the one in `name`) has `self_service` set to `"1"`. |

Related: [Connect AI Clients](/documentation/AI-Agent/Connect-AI-Clients/), [Add or modify a token configuration](/api/Token/Add%20or%20modify%20a%20token%20configuration/)
