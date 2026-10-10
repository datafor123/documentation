---
title: Get token configurations
permalink: /api/Token/Get token configurations/
tags:
  - api
  - Authentication
  - Token
description: List the embed token (JWT) configurations, with their secrets masked.
createTime: 2026/09/01 22:03:26
---

Lists the embed token (JWT) configurations of the current tenant, as shown on **Settings › Access & Integration › Embed tokens (JWT)**.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/token/list` |
| Permission | Administrator |
| Content type | None |

## Parameters

None.

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/list"
```

```json
{
  "success": true,
  "data": [
    {
      "name": "ERP",
      "token_name": "token",
      "secret": "************",
      "expire": 86400,
      "algorithm": "HS256",
      "fieldmap": {
        "username": "loginname",
        "name": "name",
        "email": "email"
      },
      "enable": "1",
      "inituser": "1",
      "initroles": ["SYS_Reader"],
      "self_service": "0",
      "createdDate": 1737599864898,
      "lastModifiedDate": 1737601114115,
      "creatorId": "admin"
    }
  ]
}
```

| Field | Description |
| --- | --- |
| `name` | Name of the configuration. Identifies it in the other token calls. |
| `token_name` | URL parameter that carries the token. `token` when not set. |
| `secret` | Always `************` when a secret is stored. The real value is never returned. |
| `expire` | Lifetime, in seconds, of tokens that Datafor issues from this configuration. |
| `algorithm` | `HS256`, `HS384`, `HS512`, `RS256`, `RS384`, `RS512`, `ES256`, `ES384` or `ES512`. |
| `fieldmap` | Token claims that hold the user name, full name and email. |
| `enable` | `"1"` accepts tokens; `"0"` (the default) does not. |
| `inituser` | `"1"` (the default) creates unknown users on first sign-in. |
| `initroles` | User type and roles given to users created that way. `["SYS_Reader"]` when not set. |
| `self_service` | `"1"` lets signed-in users issue [personal tokens](/api/Token/Personal-tokens/) from this configuration; `"0"` (the default) does not. |
| `createdDate`, `lastModifiedDate`, `creatorId` | Repository metadata of the stored configuration. |

To read one configuration, call `GET /plugin/datafor-modeler/api/token/content?name=ERP`. It returns the fields as stored, at the top level of the response next to `"success": true`, with the secret masked. Unlike the list, it does not fill in defaults for missing fields and has no repository metadata.

## Errors

| `code` | When |
| --- | --- |
| `"403"` | The caller is not an administrator (`msg`: `no permission`). |

Related: [JSON Web Token (JWT)](/documentation/System/JWT/), [Add or modify a token configuration](/api/Token/Add%20or%20modify%20a%20token%20configuration/)
