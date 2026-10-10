---
title: Log in
permalink: /api/Authentication/Restful Login/
tags:
  - api
  - Authentication
description: Sign in with a user name and password and get a session cookie for later calls.
createTime: 2026/09/01 22:03:26
---

Signs a user in and binds the session to the `JSESSIONID` cookie; send that cookie with later calls.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/extension/auth/login` |
| Permission | Anyone (no prior sign-in) |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | form | string | Yes | User name or email address. User names are matched case-insensitively. |
| `password` | form | string | Yes | Password. |
| `tenantId` | form | string | No | Tenant to sign in to, as `tenant1` or `/pentaho/tenant1`. Leave it out for the default tenant. |
| `captchaCode` | form | string | When required | The text of the captcha image. Needed only when the captcha is on and the user has failed too often (see below). |

## Example

```bash
curl -c cookies.txt -X POST "http://localhost:28080/datafor/plugin/datafor/api/extension/auth/login" \
  -d "username=admin" -d "password=password"
```

```json
{
  "success": true,
  "msg": "login success",
  "data": "1",
  "jsessionid": "<session-id>"
}
```

`data` tells what happened:

| `data` | Meaning |
| --- | --- |
| `"1"` | Signed in. |
| `"2"` | The session was already signed in as this user; nothing changed. The response is then `{"success": true, "code": "200", "data": "2"}`. |
| `"0"` | Sign-in failed (`success` is `false`). |

Reuse the stored cookie with `curl -b cookies.txt ...`. The response also carries the header `Authorization: Session <session-id>`.

A failed sign-in:

```json
{
  "success": false,
  "data": "0",
  "msg": "wrong password",
  "needCaptcha": true
}
```

`msg` is `wrong password` for an unknown user and for a wrong password alike.

## Captcha

When an administrator turns the login captcha on (system settings `captcha-enable` and `captcha-try-count`), a user name that has failed `captcha-try-count` times must also send `captchaCode`; failures are counted until 5 minutes after the last one. A count of 0 or less asks for the captcha on every sign-in.

1. Fetch the image with the same cookie jar you use for the login call, because the expected text is kept in the session:
   ```bash
   curl -c cookies.txt -b cookies.txt -o captcha.jpg \
     "http://localhost:28080/datafor/plugin/datafor/api/extension/auth/captcha.jpg"
   ```
2. Send the text as `captchaCode` (case-insensitive) with `-b cookies.txt`.

`needCaptcha: true` in a failed response means the next attempt needs a captcha. Scripts that sign in unattended should use [HTTP Basic or a token](/api/index/#authentication) instead.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"400"` | `username cannot be empty`, `password cannot be empty` | A field is missing. |
| `"403"` | `tenant not exist` | `tenantId` names no tenant. |
| `"403"` | `tenant is disabled` | The tenant is disabled. |
| (none) | `wrong password` | Unknown user or wrong password. `data` is `"0"`. |
| (none) | `please get captcha code first`, `captcha code cannot be empty`, `captcha code is wrong` | A captcha is required and was not fetched, not sent, or wrong. |

Related: [Log out](/api/Authentication/Restful%20Logout/), [Getting Started](/api/index/), [Multi-tenancy](/documentation/Multi-tenancy/Multi-tenancy/)
