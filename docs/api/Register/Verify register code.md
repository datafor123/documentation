---
title: Verify register code
permalink: /api/Register/Verify register code/
tags:
  - api
  - Users
  - Register
description: Check a registration code before submitting the registration.
createTime: 2026/09/01 22:03:26
---

Checks that a registration code matches the one emailed by [Get register code](/api/Register/Get%20register%20code/). It does not use up the code; [Register](/api/Register/Register/) checks it again.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/verifyRegisterCode` |
| Permission | Anyone (no sign-in) |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `email` | body | string | Yes | The address the code was sent to. |
| `code` | body | string | Yes | The code from the email. |

## Example

```bash
curl -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/verifyRegisterCode" \
  -H "Content-Type: application/json" \
  -d '{"email": "new.user@example.com", "code": "<code-from-email>"}'
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
| `"400"` | `invalid parameter` | A field is missing or the body is not JSON. |
| `"428"` | `Send verify code please` | No code was sent to this address, or it expired (after 30 minutes). |
| `"412"` | `Check verify code please` | Wrong code. |
| `"406"` | `you have tried too many times,please resend code 1 min later` | More than 5 wrong codes within a minute. Wait a minute. |

Related: [Register](/api/Register/Register/)
