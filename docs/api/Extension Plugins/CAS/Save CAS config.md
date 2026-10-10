---
title: Save CAS config
permalink: /api/Extension Plugins/Cas/Save CAS config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - CAS
description: Save the CAS single sign-on settings.
createTime: 2026/09/01 22:03:26
---
Saves the CAS single sign-on settings.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-cas/api/update` |
| Permission | Administrator user type; the CAS plugin must be installed |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `enable` | body | string | Yes | `1` turns CAS sign-in on, `0` off. |
| `type` | body | string | Yes | **CAS server type**. `jasig` (Jasig/Apereo CAS) is currently the only supported type. |
| `center_url` | body | string | Yes | **CAS server URL**, for example `https://cas.example.com/cas`. |
| `login_url` | body | string | No | **Login URL**. Default: `center_url` followed by `/login`. |
| `logout_url` | body | string | No | **Logout URL**. Default: `center_url` followed by `/logout`. |
| `inituser` | body | string | No | `1` creates a Datafor user on a CAS user's first sign-in. |
| `initroles` | body | string array | With `inituser` | Default user type (`SYS_Reader`, `SYS_Creator` or `Administrator`) and roles for new users. |
| `ignoreList` | body | string array | No | **Paths that skip single sign-on**. A request matches when its URL contains the entry. |
| `includeList` | body | string array | No | **Paths that require single sign-on**. While empty, every path not in `ignoreList` goes through single sign-on. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-cas/api/update" \
  -H "Content-Type: application/json" \
  -d '{
    "enable": "1",
    "type": "jasig",
    "center_url": "https://cas.example.com/cas",
    "login_url": "https://cas.example.com/cas/login",
    "logout_url": "https://cas.example.com/cas/logout",
    "inituser": "1",
    "initroles": ["SYS_Reader"],
    "ignoreList": ["/plugin/datafor-modeler/api", "/Login"],
    "includeList": []
  }'
```

```json
{ "success": true }
```

On failure the response has `success: false` and a `msg`.

Related: [CAS Authentication](/documentation/System/CAS-Authentication/), [Single Sign-On Overview](/documentation/System/Single-Sign-On/)
