---
title: Query System Config
permalink: /api/System Settings/Query System Config/
tags:
  - api
  - System Settings
description: Read the tenant's system settings; non-administrators get only the report and modeling defaults.
createTime: 2026/09/01 22:03:26
---

Returns the system settings of the current tenant as one flat object: server address, CORS, login captcha, and the report and modeling defaults of **Settings › General › System configuration**.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/system/settings/query` |
| Permission | Any signed-in user. Administrators get every key; other users get only the report, modeling, query and AI defaults. |
| Content type | None |

## Parameters

None.

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor/api/system/settings/query"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "fully-qualified-server-url": "http://localhost:28080/datafor/",
    "cors-requests-allowed": "true",
    "cors-requests-allowed-domains": "https://app.example.com",
    "cors-requests-allowed-methods": "GET,HEAD,POST",
    "cors-requests-allowed-headers": "Content-Type,Authorization",
    "cors-requests-allow-credentials": "true",
    "cors-requests-exposed-headers": "",
    "captcha-enable": "false",
    "report-default-color-scheme": "default",
    "week-start-day": "monday",
    "chart-default-max-rows": "5000"
  }
}
```

Keys that were never set are left out. All values are strings.

| Key | Meaning | Who sees it |
| --- | --- | --- |
| `fully-qualified-server-url` | Public address of the server, ending in `/`. | Administrators |
| `cors-requests-allowed`, `cors-requests-allowed-domains`, `cors-requests-allowed-methods`, `cors-requests-allowed-headers`, `cors-requests-allow-credentials`, `cors-requests-exposed-headers` | Cross-origin access, as on **Cross-origin access (CORS)**. | Administrators |
| `captcha-enable`, `captcha-try-count` | Login captcha, and the failed attempts after which it is required. See [Log in](/api/Authentication/Restful%20Login/#captcha). | Administrators |
| `trusted-domains`, `backup-reserve-sec`, `locale-language`, `locale-country` | Other server settings. | Administrators |
| `report-default-font`, `report-default-color-scheme`, `report-default-tooltip-style`, `report-default-empty-show`, `report-default-empty-text`, `measure-default-number-format`, `measure-default-percent-format`, `model-default-cache-expire`, `week-start-day`, `chart-default-max-rows`, `auto-refresh-min-interval`, `ai-index-auto-build-on-model-save` | The defaults of **System configuration**. Change them with [Patch system settings](/api/System-Settings/Patch-settings/). | Everyone |
| `report-default-table-style` | Table style of new reports. | Everyone |

## Errors

None specific; a non-administrator simply gets fewer keys.

Related: [System Configuration](/documentation/System/System-Configuration/), [Get system settings snapshot](/api/System-Settings/Get-settings-snapshot/)
