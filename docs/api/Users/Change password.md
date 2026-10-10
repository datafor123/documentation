---
title: Change password
permalink: /api/Users/Change-password/
tags:
  - api
  - Users
description: Change a password by giving the current one.
createTime: 2026/10/10 12:00:00
---

Changes a user's password after checking the current one, as **Change password** on the My Account page does. Administrators who need to set a password without knowing the old one use [Add or modify a user](/api/Users/Add%20or%20modify%20a%20user/) with `password`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/updatePassword` |
| Permission | Anyone who knows the current password |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | form | string | No | Login name. Default: the signed-in user. |
| `oldPwd` | form | string | Yes | Current password. |
| `newPwd` | form | string | Yes | New password. |

## Example

```bash
curl -u analyst1:<current-password> -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/updatePassword" \
  --data-urlencode "oldPwd=<current-password>" \
  --data-urlencode "newPwd=<new-password>"
```

```json
{
  "success": true,
  "code": "200"
}
```

Sessions that are already signed in stay signed in. Calls that use HTTP Basic need the new password from now on.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"404"` | `user not found` | No user has this login name. |
| `""` (empty) | `wrong password` | `oldPwd` is not the current password. |
| `"500"` | reason | The password could not be saved. |

Related: [My Account](/documentation/Console/My-Account/)
