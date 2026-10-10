---
title: Get user settings and system information
permalink: /api/User Settings/Get user settings and system information/
tags:
  - api
  - User Settings
description: Find out whether the caller is signed in, who they are, and what the server offers them.
createTime: 2026/09/01 22:03:26
---

Returns the sign-in state of the caller and the information the console loads at start-up: user, roles, locale, enabled plugins and features. Call it without credentials to learn what the login page should show, for example whether a captcha is needed.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/extension/auth/fetchUser` |
| Permission | Anyone |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `includeSysauth` | query | string | No | `true` adds `sysauth`, the list of system actions the user may perform. |

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor/api/extension/auth/fetchUser"
```

```json
{
  "code": 200,
  "islogged": true,
  "userid": "admin",
  "username": "admin",
  "roles": ["Administrator", "Authenticated"],
  "plugins": ["datafor", "datafor-modeler", "datafor-backup"],
  "canEdit": true,
  "canAdminister": true,
  "locale": "en",
  "localeList": ["en", "es", "zh"],
  "serverNameFull": "http://localhost:28080/datafor/",
  "contextPath": "/datafor/",
  "ver": "C",
  "ai-enable": true,
  "canAI": true
}
```

The response is not wrapped in `success`/`data`, and `code` is a number here. The main fields:

| Field | When present | Description |
| --- | --- | --- |
| `islogged` | Always | `true` when the caller is signed in. |
| `serverNameFull`, `contextPath` | Always | Server address and web application path. |
| `allowRegister`, `allowGoogleLogin` | Not signed in | Whether the login page offers sign-up and Google sign-in. |
| `captchaEnable`, `needCaptcha` | Not signed in, captcha on | `needCaptcha` is `true` when every sign-in needs a captcha. See [Log in](/api/Authentication/Restful%20Login/#captcha). |
| `userid`, `username`, `tenantId` | Signed in | The user. `tenantId` is the short tenant id. |
| `roles` | Signed in | User type, business roles and built-in roles. |
| `plugins` | Signed in | Installed server plugins. |
| `canEdit` | Signed in | `true` when the user may create content (Creator or Administrator). |
| `canAdminister` | Administrators only | `true`. Missing for other users. |
| `locale`, `localeList` | Signed in | Current interface language and the languages the server offers. |
| `ai-enable`, `canAI` | Signed in | Whether the AI Agent is on for the server, and for this user. |
| `lic` | Signed in | License state of the tenant. |
| `sysauth` | With `includeSysauth=true` | System actions the user may perform. |

Other fields (`ver`, `globalFont`, `__LOAD_VARIABLE__`, `systemDefaults`, `ai-service-url`, `license`) serve the console itself.

## Errors

None; the call always answers. Check `islogged`.

Related: [Getting Started](/api/index/), [Get user's own information](/api/Users/Get%20user's%20own%20information/)
