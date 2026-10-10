---
title: Register
permalink: /api/Register/Register/
tags:
  - api
  - Users
  - Register
description: Create your own Creator account with an emailed registration code.
createTime: 2026/09/01 22:03:26
---

Creates a user account with the code emailed by [Get register code](/api/Register/Get%20register%20code/). Registered users get the user type `SYS_Creator` and no business roles.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/register` |
| Permission | Anyone (no sign-in) |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | body | string | Yes | Login name. Must not contain `?`, `/`, `'` or `"`. Check it first with [Verify username can be registered](/api/Register/Verify%20username%20can%20be%20registered/). |
| `email` | body | string | Yes | The address the code was sent to. |
| `code` | body | string | Yes | The code from the email. |
| `password` | body | string | Yes | Password. |
| `name` | body | string | No | Full name. |
| `company`, `dept`, `title`, `dob`, `mobile`, `description` | body | string | No | Profile fields. |

`roles` and `usertype` in the body are ignored.

## Example

```bash
curl -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/register" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "new.user",
    "email": "new.user@example.com",
    "code": "<code-from-email>",
    "password": "<password>",
    "name": "New User",
    "company": "Example Corp"
  }'
```

```json
{
  "success": true,
  "username": "new.user"
}
```

The user can sign in at once with [Log in](/api/Authentication/Restful%20Login/).

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"400"` | `invalid parameter` | `username` or `email` is missing or invalid, or the body is not JSON. |
| `"428"` | `Send verify code please` | No code was sent to this address, or it expired. |
| `"412"` | `Check verify code please` | Wrong code. |
| `"406"` | `you have tried too many times,please 1 min later` | Too many wrong codes. Wait a minute. |
| `"409"` | `<value> already existed` | The user name or email is taken. |

Related: [Get register code](/api/Register/Get%20register%20code/)
