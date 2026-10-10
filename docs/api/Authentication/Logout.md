---
title: Form logout
permalink: /api/Authentication/Logout/
tags:
  - api
  - Authentication
description: The browser sign-out endpoint, which ends the session and redirects to the start page.
createTime: 2026/09/01 22:03:26
---

Ends the session of the `JSESSIONID` cookie and redirects the browser to the start page. Scripts should use [Log out](/api/Authentication/Restful%20Logout/), which answers in JSON.

| | |
| --- | --- |
| Method and path | `GET /Logout` (POST also works) |
| Permission | Anyone |
| Content type | None |

## Parameters

None. The session is taken from the cookie.

## Example

```bash
curl -i -b cookies.txt "http://localhost:28080/datafor/Logout"
```

```text
HTTP/1.1 302
Location: /datafor/index.jsp
```

## Errors

None. Without a session the call still redirects.

Related: [Log out](/api/Authentication/Restful%20Logout/), [Form login](/api/Authentication/Login/)
