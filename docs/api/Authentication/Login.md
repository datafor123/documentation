---
title: Form login
permalink: /api/Authentication/Login/
tags:
  - api
  - Authentication
description: The browser sign-in form endpoint, which answers with redirects instead of JSON.
createTime: 2026/09/01 22:03:26
---

Signs a user in the way an HTML login form does and redirects the browser. Scripts should use [Log in](/api/Authentication/Restful%20Login/), which answers in JSON; this endpoint is for a custom login page that posts a form.

| | |
| --- | --- |
| Method and path | `POST /j_spring_security_check` |
| Permission | Anyone (no prior sign-in) |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `j_username` | form | string | Yes | User name. |
| `j_password` | form | string | Yes | Password. |

## Example

```bash
curl -i -c cookies.txt -X POST "http://localhost:28080/datafor/j_spring_security_check" \
  -d "j_username=admin" -d "j_password=password"
```

```text
HTTP/1.1 302
Location: /datafor/Home
Set-Cookie: JSESSIONID=<session-id>; Path=/datafor; HttpOnly
```

The answer is always a redirect (HTTP 302):

| `Location` | When |
| --- | --- |
| The page the browser asked for before it was sent to the login page, otherwise `/datafor/Home` | Signed in. The `JSESSIONID` cookie now carries the session. |
| `/datafor/Login?login_error=1` | Wrong user name or password. |
| `/datafor/Login?login_error=2` | The request reused a session cookie that belongs to another sign-in. Drop the cookie and post again. |

## Errors

After 10 failed attempts from the same client address, further attempts from that address are refused for up to 24 hours; they also redirect to `login_error=1`.

Related: [Log in](/api/Authentication/Restful%20Login/), [Form logout](/api/Authentication/Logout/)
