---
title: Get system settings snapshot
permalink: /api/System-Settings/Get-settings-snapshot/
tags:
  - api
  - System Settings
description: Read the report and modeling defaults together with the revision needed to change them.
createTime: 2026/10/10 12:00:00
---

Returns the defaults of **Settings › General › System configuration** and a `revision` that identifies this state. Pass the revision to [Patch system settings](/api/System-Settings/Patch-settings/) so that a change made by someone else in the meantime is not overwritten. New in 10.00.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/system/settings/snapshot` |
| Permission | Administrator |
| Content type | None |

## Parameters

None.

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor/api/system/settings/snapshot"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "settings": {
      "report-default-color-scheme": "default",
      "week-start-day": "monday",
      "chart-default-max-rows": "5000"
    },
    "revision": "<64-hex-character-revision>",
    "tenant": "/pentaho/tenant0"
  }
}
```

| Field | Description |
| --- | --- |
| `settings` | The stored values of the twelve keys listed in [Patch system settings](/api/System-Settings/Patch-settings/). A key that was never set is left out; the console then shows its default. |
| `revision` | Fingerprint of the current values. It changes whenever one of the twelve keys changes. |
| `tenant` | Tenant the settings belong to. |

## Errors

| `code` | When |
| --- | --- |
| `"403"` | The caller is not an administrator (`msg`: `no permission`). |
| `"500"` | The settings could not be read. |

Related: [System Configuration](/documentation/System/System-Configuration/)
