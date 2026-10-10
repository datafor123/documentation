---
title: Patch system settings
permalink: /api/System-Settings/Patch-settings/
tags:
  - api
  - System Settings
description: Change report and modeling defaults with validation and protection against concurrent edits.
createTime: 2026/10/10 12:00:00
---

Changes some of the defaults of **Settings › General › System configuration**. The values are checked, and the change is refused if the settings have changed since you read them. New in 10.00; it replaces [Set System Config](/api/System%20Settings/Set%20System%20Config/) for these keys.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/system/settings/patch` |
| Permission | Administrator |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `revision` | body | string | Yes | The `revision` from [Get system settings snapshot](/api/System-Settings/Get-settings-snapshot/) (or from the previous patch). |
| `settings` | body | object | Yes | The keys to change, with string values. Keys you leave out keep their value. |

Accepted keys and values (all values are strings):

| Key | Allowed values |
| --- | --- |
| `report-default-font` | Font name, up to 200 characters. |
| `report-default-color-scheme` | `default`, `classic`, `colorblind`, `pastel`, `paired`, `dark` |
| `report-default-tooltip-style` | `dark`, `light` |
| `report-default-empty-show` | `true`, `false` |
| `report-default-empty-text` | Up to 100 characters. |
| `measure-default-number-format` | `#,##0`, `#,##0.0`, `#,##0.00` |
| `measure-default-percent-format` | `0%`, `0.0%`, `#,##0.00%` |
| `model-default-cache-expire` | Whole number of seconds, 0 or more (0 = never). |
| `week-start-day` | `monday`, `sunday` |
| `chart-default-max-rows` | Whole number from 100 to 200000. |
| `auto-refresh-min-interval` | Whole number of seconds from 1 to 86400. |
| `ai-index-auto-build-on-model-save` | `true`, `false` |

What each setting does is described in [System Configuration](/documentation/System/System-Configuration/).

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor/api/system/settings/patch" \
  -H "Content-Type: application/json" \
  -d '{
    "revision": "<revision-from-snapshot>",
    "settings": {"week-start-day": "sunday", "chart-default-max-rows": "10000"}
  }'
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "settings": {
      "week-start-day": "sunday",
      "chart-default-max-rows": "10000"
    },
    "revision": "<new-revision>",
    "tenant": "/pentaho/tenant0"
  }
}
```

`data` is the new snapshot; keep its `revision` for the next patch. If nothing actually changes, the current snapshot comes back unchanged. With the audit log recording **System settings changes**, each changed key is logged with its old and new value; if writing the audit entry fails, the change is still saved and `data.auditWarning` is `true`.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `"400"` | `No settings to update` | `settings` is missing or empty. |
| `"400"` | `Missing revision` | `revision` is missing. |
| `"400"` | `Invalid setting: <key>` | Unknown key, or a value that is not a string. |
| `"400"` | `Invalid setting value`, `Expected an integer`, `Setting outside allowed range`, `Font name too long`, `Empty message too long` | A value is not allowed. |
| `"403"` | `no permission` | The caller is not an administrator. |
| `"409"` | `System settings have changed` | `revision` is out of date. `data` holds the current snapshot: review it, then send your change again with its `revision`. |
| `"500"` | reason | The settings could not be stored. |

Nothing is saved when any key or value is rejected.

Related: [System Configuration](/documentation/System/System-Configuration/), [Query System Config](/api/System%20Settings/Query%20System%20Config/)
