---
title: Getting Started with the REST API
createTime: 2025/02/10 17:14:56
permalink: /api/index/
author: Datafor
tags:
  - API
description: Base URL, authentication, response format and a first call for the Datafor REST API.
---

# Getting Started with the REST API

The Datafor console is built on the endpoints in this reference, so a script can do what an administrator or user does in the console: manage users and roles, read and write settings, list files, and so on. This page covers what every call has in common.

## Base URL

All paths in this reference are relative to the web application:

```text
http(s)://<host>:<port>/datafor
```

A default local installation listens on `http://localhost:28080/datafor`, which the examples use. So the path `/plugin/datafor-modeler/api/user/detail` is called as `http://localhost:28080/datafor/plugin/datafor-modeler/api/user/detail`.

Paths start with one of:

| Prefix | What it is |
| --- | --- |
| `/plugin/datafor/api/...`, `/plugin/datafor-modeler/api/...` | Datafor endpoints. Most of this reference. |
| `/plugin/<other-plugin>/api/...` | Endpoints of extension plugins such as backup, LDAP or SAML. |
| `/api/...` | Endpoints inherited from the Pentaho platform that Datafor is built on. They keep the Pentaho behavior (plain HTTP status codes, XML or JSON). |

## Authentication

Choose one of three ways to identify the caller. Every call then runs with that user's permissions: an endpoint marked "Administrator" needs a user of type **Administrator**.

### Session login

Sign in once, keep the `JSESSIONID` cookie, and send it with later calls. Use this for scripts that make many calls, and for users of a tenant other than the default one.

```bash
# Sign in and store the session cookie
curl -c cookies.txt -X POST "http://localhost:28080/datafor/plugin/datafor/api/extension/auth/login" \
  -d "username=admin" -d "password=password"

# Call with the cookie
curl -b cookies.txt "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/detail"
```

A successful login returns `"success": true` and `"data": "1"`. See [Log in](/api/Authentication/Restful%20Login/) for the fields, the captcha and tenant errors, and [Log out](/api/Authentication/Restful%20Logout/) to end the session.

### HTTP Basic

Send the user name and password with every request. This works on `/plugin/...` and `/api/...` paths and needs no login call.

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/detail"
```

curl builds the header `Authorization: Basic <base64 of user:password>` for you. Wrong credentials return HTTP 401. Use HTTPS outside a test machine, because Basic credentials are only encoded, not encrypted.

### JSON Web Token (JWT)

Send a signed JWT, either in the `Authorization: Bearer` header or in a URL parameter whose name is the configuration's **Token name** (default `token`). Datafor accepts tokens on `/plugin/...` paths only.

```bash
curl -H "Authorization: Bearer <signed-jwt>" \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/detail"
```

Tokens come from one of three places:

- Your own system signs them with an embed token configuration set up by an administrator. See [JSON Web Token (JWT)](/documentation/System/JWT/) for the claims Datafor reads.
- An administrator issues a test token with [Generate a token](/api/Token/Generate%20a%20token/).
- A signed-in user issues one for themselves with [Personal tokens](/api/Token/Personal-tokens/), when the administrator has allowed it.

## Requests

Each page states the content type an endpoint expects. Sending the wrong one is the most common cause of a call that "does nothing".

| Content type | How to send it with curl | Used by |
| --- | --- | --- |
| `application/x-www-form-urlencoded` | `-d "name=value"` (one `-d` per field) | Login, most create and delete calls that take a few fields |
| `application/json` | `-H "Content-Type: application/json" -d '{"name":"value"}'` | Calls that take an object or a list |
| `multipart/form-data` | `-F "file=@users.xlsx"` | File uploads |

Query parameters go in the URL. Encode spaces and special characters (`curl -G --data-urlencode "filter=sales team" URL` does it for you).

## Responses

Datafor endpoints answer with HTTP 200 and report the outcome in the body:

```json
{
  "success": true,
  "code": "200",
  "data": { }
}
```

```json
{
  "success": false,
  "code": "403",
  "msg": "no permission",
  "type": "1"
}
```

| Field | Meaning |
| --- | --- |
| `success` | `true` or `false`. Always check it; the HTTP status is 200 in both cases. |
| `code` | A string. `"200"` on success. On failure usually `"400"` (invalid parameter), `"401"` (not signed in, or not allowed), `"403"` (no permission), `"404"` (not found), `"409"` (conflict, for example a name that already exists), `"500"` (server error) or `"503"` (a required configuration is missing). Some endpoints use their own codes; their pages list them. |
| `msg` | Error text, in English. |
| `data` | The result. Its shape depends on the endpoint. |
| `type` | On failures: `"1"` for an error, `"2"` for a warning that still succeeded. |

Not every endpoint wraps its result. Some return `success` and their fields at the top level, a plain JSON array, or a file. Each page shows the actual response.

Exceptions to "always HTTP 200":

- Wrong Basic credentials return HTTP 401 before the endpoint runs.
- `/api/...` platform endpoints return ordinary HTTP status codes, and HTTP 401 when the call is not authenticated.
- A call to `/plugin/...` without credentials is not rejected up front: it runs as an anonymous user, and the endpoint answers with `"code": "401"` or `"403"`, or with an empty result.
- Download endpoints return the file itself; a few connection endpoints return HTTP 403 or 404 directly. Their pages say so.

## Tenants

On a server with [multi-tenancy](/documentation/Multi-tenancy/Multi-tenancy/), every call works inside the tenant of the signed-in user. To sign in to another tenant, pass `tenantId` to [Log in](/api/Authentication/Restful%20Login/), either the short id (`tenant1`) or the full path (`/pentaho/tenant1`). Without `tenantId`, the user is looked up in the default tenant.

## Calls from a browser

A page on another origin can call Datafor only after an administrator allows that origin under **Settings › Access & Integration › Cross-origin access (CORS)**: add the origin to **Allowed origins** and any extra request header, such as `Authorization`, to **Allowed request headers**. The default allowed methods are GET, HEAD and POST. [SDK Embedding](/documentation/Embedded/SDK-Embedding/) walks through these settings for embedded reports. Server-side scripts and curl do not need CORS.

## A first call

Check that authentication works by asking who you are:

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/detail"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "user": {
      "userid": "admin",
      "username": "admin",
      "name": "Administrator",
      "email": "admin@example.com",
      "enabled": "1",
      "ai_enabled": "0"
    }
  }
}
```

If `data` is empty (`{}`), the call ran as an anonymous user: check the credentials or the cookie.

## Stability

These endpoints are the ones the Datafor console itself calls. They are not a versioned public API: parameters and responses can change between releases, and the release notes do not list every change. Pin your integration to a release, and re-test it after upgrading. Where an endpoint has a newer replacement, its page says so.
