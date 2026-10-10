---
title: Log out
permalink: /api/Authentication/Restful Logout/
tags:
  - api
  - Authentication
description: End the session of the current cookie and get the result in JSON.
createTime: 2026/09/01 22:03:26
---

Ends the session identified by the `JSESSIONID` cookie.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/extension/auth/logout` |
| Permission | Anyone |
| Content type | None |

## Parameters

None. The session is taken from the cookie.

## Example

```bash
curl -b cookies.txt "http://localhost:28080/datafor/plugin/datafor/api/extension/auth/logout"
```

```json
{
  "success": true,
  "code": "200",
  "data": "1"
}
```

| `data` | Meaning |
| --- | --- |
| `"1"` | The session was signed in and is now closed. |
| `"2"` | The session was not signed in; nothing changed. |

## Errors

| `code` | When |
| --- | --- |
| `"500"` | The session could not be closed; `msg` has the reason. |

Related: [Log in](/api/Authentication/Restful%20Login/)
