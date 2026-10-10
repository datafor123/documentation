---
title: Verify username can be registered
permalink: /api/Register/Verify username can be registered/
tags:
  - api
  - Users
  - Register
description: Check that a login name is valid and not taken.
createTime: 2026/09/01 22:03:26
---

Checks that a login name is valid and not used by another user, for example while a registration or user form is being filled in.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/isRightUsernameForAdd` |
| Permission | Anyone (no sign-in) |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | form | string | Yes | Login name to check. It is taken if it matches another user's login name (ignoring case) or email. |

## Example

```bash
curl -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/isRightUsernameForAdd" \
  -d "username=new.user"
```

```json
{
  "success": true,
  "code": "200"
}
```

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"400"` | `?/'" cannot be used` | The name is empty or contains `?`, `/`, `'` or `"`. |
| `"409"` | `<username> already existed` | The name is taken. |

Related: [Register](/api/Register/Register/)
