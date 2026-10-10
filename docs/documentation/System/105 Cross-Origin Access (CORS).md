---
title: Cross-Origin Access (CORS)
permalink: /documentation/System/CORS/
tags:
  - Settings
  - Embedded
  - Security
description: Allow web pages on other origins, such as a page that embeds a report with the JavaScript SDK, to call the Datafor server from the browser.
createTime: 2026/10/10 10:00:00
---

# Cross-Origin Access (CORS)

A browser lets JavaScript on one origin (scheme, host and port, such as `https://app.example.com`) call a server on another origin only if that server allows it with CORS response headers. These settings decide which origins Datafor allows and what they may send.

You need them when a page outside Datafor calls the Datafor server from the browser, most commonly the [JavaScript SDK](/documentation/Embedded/SDK-Embedding/). A report shown in an `iframe`, a [share link](/documentation/Embedded/Share-link/) and [XDM](/documentation/Embedded/Embedding-Reports-Using-XDM/) messages do not need CORS, because the report's own requests come from the Datafor page inside the frame.

## Settings

Open **Settings › Access & Integration › Cross-origin access (CORS)**. The settings apply to the current tenant.

| Group | Setting | Shipped value | What it does |
| --- | --- | --- | --- |
| **Basic settings** | **Enable CORS** | Off | While off, Datafor sends no CORS headers and browsers block calls from other origins. |
| | **Allowed origins** | Empty | Origins allowed to call Datafor, written exactly as the browser sends them: scheme, host and port if it is not the default, without a path or trailing `/`, for example `https://app.example.com` or `http://localhost:5173`. Separate several origins with commas. `*` allows every origin; don't use it in production. |
| | **Allowed methods** | GET, HEAD, POST | HTTP methods other origins may use. Click **Add**, type a method and press Enter. |
| **Request and response headers** | **Allowed request headers** | Content-Type, X-CSRF-Token | Headers other origins may send; click **Add header** to add one. Add `Authorization` for the SDK. If you remove every entry, Datafor allows whatever headers the browser asks for. |
| | **Exposed response headers** | Empty | Response headers that scripts on other origins may read, for example `Content-Disposition`. |
| | **Allow credentials** | On | Lets the browser send and receive cookies on calls from allowed origins. While it is on, **Allowed origins** cannot contain `*`; saving shows "Allowed domains cannot be * when credentials are allowed. Enter explicit origin domains." |

Click **Save**. **Discard changes** restores the saved values.

::: warning Separate origins with commas
The hint under **Allowed origins** says "One per line", but Datafor splits the list only at commas. Two origins on separate lines without a comma are read as one value, and neither is allowed. Write `https://app.example.com, https://portal.example.com`.
:::

## How Datafor answers

When **Enable CORS** is on and a request carries an `Origin` header that is in **Allowed origins**, Datafor adds to the response:

- `Access-Control-Allow-Origin` with that origin, and `Vary: Origin`;
- `Access-Control-Allow-Credentials: true` while **Allow credentials** is on;
- `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` and, if set, `Access-Control-Expose-Headers` from the settings above.

Datafor answers the browser's `OPTIONS` preflight requests itself with status 200. Requests from origins that are not allowed get no CORS headers, so the browser blocks them.

## Set up CORS for the SDK

The SDK sends the embed token in an `Authorization: Bearer <jwt>` header. A cross-origin request with that header always triggers a preflight, so the server must allow both the origin and the header:

1. Turn on **Enable CORS**.
2. In **Allowed origins**, enter the origin of the page that hosts the SDK, for example `https://app.example.com`.
3. In **Allowed request headers**, add `Authorization`. Keep `Content-Type` and `X-CSRF-Token`.
4. If the browser console reports a blocked method, for example while saving a report in edit mode, add it to **Allowed methods**.
5. Click **Save**.

To check the result, send a preflight request from a terminal and look for `Access-Control-Allow-Origin` and `Authorization` in the response headers:

```bash
curl -i -X OPTIONS \
  -H "Origin: https://app.example.com" \
  -H "Access-Control-Request-Method: GET" \
  -H "Access-Control-Request-Headers: authorization" \
  https://bi.example.com/datafor/plugin/datafor/api/extension/auth/fetchUser
```

## Troubleshooting

| Browser console message | Likely cause | What to do |
| --- | --- | --- |
| No `Access-Control-Allow-Origin` header is present | **Enable CORS** is off, or the page's origin is not in **Allowed origins** exactly (different scheme or port, a path or trailing `/`, or origins separated only by line breaks) | Turn on **Enable CORS** and enter the origin as the browser shows it in the request's `Origin` header. |
| Request header field `authorization` is not allowed | `Authorization` is missing from **Allowed request headers** | Add it and save. |
| Method `PUT` (or another method) is not allowed | The method is missing from **Allowed methods** | Add it and save. |
| Calls work in one tenant but not in another | Settings are per tenant | Repeat the settings in that tenant. |
