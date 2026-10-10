---
title: Get register code
permalink: /api/Register/Get register code/
tags:
  - api
  - Users
  - Register
description: Email a registration code to an address, the first step of self-registration.
createTime: 2026/09/01 22:03:26
---

Sends a registration code to an email address. Self-registration takes three calls: this one, [Verify register code](/api/Register/Verify%20register%20code/) (optional, to check the code before the form is complete) and [Register](/api/Register/Register/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/sendRegisterCode` |
| Permission | Anyone (no sign-in). Registration must be allowed with **Show 'Sign up'** in the branding settings, and a mail server must be configured. |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `email` | form | string | Yes | Address to send the code to. |
| `locale` | form | string | No | Language of the email: `zh-CN` or `en-US`. Anything else sends English. |

The code is valid for 30 minutes. A new code for the same address can be requested after 1 minute and replaces the previous one.

## Example

```bash
curl -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/sendRegisterCode" \
  -d "email=new.user@example.com" -d "locale=en-US"
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
| `"403"` | `register forbidden` | Registration is not allowed. |
| `"400"` | `invalid parameter` | `email` is missing. |
| `send.later` | `email already sent,if not received,please send 1 min later` | A code was sent to this address less than 1 minute ago. |
| `"409"` | `email already existed` | A user already has this email. |
| `"500"` | `check email config or concat administrator` | The email could not be sent. |

Related: [Mail Server Configuration](/documentation/System/Mail-Server-Configuration/)
