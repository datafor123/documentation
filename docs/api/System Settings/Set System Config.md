---
title: Set System Config
permalink: /api/System Settings/Set System Config/
tags:
  - api
  - System Settings
description: Write system settings such as the server address and CORS without validation; legacy for the report and modeling defaults.
createTime: 2026/09/01 22:03:26
---

Writes the keys you send into the system settings of the current tenant. The console uses it for the server address, CORS and login settings.

::: warning Legacy for the System configuration defaults
For the twelve report and modeling defaults (`report-default-*`, `measure-default-*`, `model-default-cache-expire`, `week-start-day`, `chart-default-max-rows`, `auto-refresh-min-interval`, `ai-index-auto-build-on-model-save`), use [Patch system settings](/api/System-Settings/Patch-settings/) instead. This endpoint checks no values and no concurrent edits, so it can store values the console cannot display and overwrite another administrator's change.
:::

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/system/settings/update` |
| Permission | Administrator |
| Content type | `application/json` |

## Parameters

The body is an object of key/value pairs; see [Query System Config](/api/System%20Settings/Query%20System%20Config/) for the keys. Only the keys you send change. Values are stored as strings.

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fully-qualified-server-url` | body | string | No | Public address of the server. A missing trailing `/` is added. |
| `cors-requests-allowed` | body | string | No | `"true"` to allow cross-origin calls. |
| `cors-requests-allowed-domains` | body | string | No | Allowed origins, comma-separated, such as `https://app.example.com`. Do not use `*` while credentials are allowed. |
| `cors-requests-allowed-methods` | body | string | No | Allowed methods, default `GET,HEAD,POST`. |
| `cors-requests-allowed-headers` | body | string | No | Extra request headers to allow, for example `Authorization`. |
| `cors-requests-allow-credentials` | body | string | No | `"true"` lets browsers send cookies and the `Authorization` header. |
| `cors-requests-exposed-headers` | body | string | No | Response headers that browser scripts may read. |
| `captcha-enable` | body | string | No | `"true"` turns the login captcha on. |
| `captcha-try-count` | body | string | No | Failed sign-ins before the captcha is required; `0` requires it always. |

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor/api/system/settings/update" \
  -H "Content-Type: application/json" \
  -d '{
    "cors-requests-allowed": "true",
    "cors-requests-allowed-domains": "https://app.example.com",
    "cors-requests-allowed-headers": "Content-Type,Authorization",
    "cors-requests-allow-credentials": "true"
  }'
```

```json
{
  "success": true,
  "code": "200"
}
```

With the audit log recording **System settings changes**, changes to the report and modeling defaults made here are logged as with patch; changes to other keys are not.

## Errors

| `code` | When |
| --- | --- |
| `"403"` | The caller is not an administrator (`msg`: `no permission`). |
| `"500"` | The body is not a JSON object, or the settings could not be stored. |

Related: [Settings Overview](/documentation/System/Settings-Overview/), [SDK Embedding](/documentation/Embedded/SDK-Embedding/)
