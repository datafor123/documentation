---
title: Verify email can be registered
permalink: /api/Register/Verify email can be registered/
tags:
  - api
  - Users
  - Register
description: Check that an email address is valid and not used by another user.
createTime: 2026/09/01 22:03:26
---

Checks that an email address looks valid and is not used by another user.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/isRightEmailForAdd` |
| Permission | Anyone (no sign-in) |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `email` | form | string | Yes | Address to check. The only format check is that it contains `@`. It is taken if it matches another user's email or login name. |

## Example

```bash
curl -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/isRightEmailForAdd" \
  -d "email=new.user@example.com"
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
| `"400"` | `not invalid email` | The address is empty or has no `@`. |
| `"409"` | `<email> already existed` | The address is taken. |

Related: [Get register code](/api/Register/Get%20register%20code/)
