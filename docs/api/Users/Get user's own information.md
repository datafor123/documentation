---
title: Get user's own information
permalink: /api/Users/Get user's own information/
tags:
  - api
  - Users
description: Read the profile of the signed-in user, or of any user for an administrator.
createTime: 2026/09/01 22:03:26
---

Returns the profile of the signed-in user. Administrators can name another user.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/user/detail` |
| Permission | Any signed-in user for their own profile; Administrator for other users |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | query | string | No | User to read. Default: the signed-in user. |

## Example

```bash
curl -u analyst1:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/detail"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "user": {
      "userid": "analyst1",
      "username": "analyst1",
      "name": "Analyst One",
      "title": "Analyst",
      "company": "Example Corp",
      "dept": "Sales",
      "email": "analyst1@example.com",
      "mobile": "555-0100",
      "enabled": "1",
      "ai_enabled": "0",
      "create_time": 1737601114115,
      "update_time": 1740013039357
    }
  }
}
```

The fields are those of [Get Users](/api/Users/Get%20Users/) without the role fields; empty fields are left out, and the password is never returned. `data` is `{}` when the user does not exist, or when the call is anonymous.

## Errors

| `code` | When |
| --- | --- |
| `"401"` | `username` names another user and the caller is not an administrator (`msg`: `no auth`). |

Related: [Add or modify a user](/api/Users/Add%20or%20modify%20a%20user/)
