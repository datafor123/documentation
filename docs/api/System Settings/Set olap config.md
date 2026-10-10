---
title: Set olap config
permalink: /api/System Settings/Set olap config/
tags:
  - api
  - System Settings
description: Change one or more query engine settings; they take effect at once.
createTime: 2026/09/01 22:03:26
---

Changes query engine settings, as **Save** on **Settings › Data › Query engine** does. Values take effect at once.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/modeler/olap/config/updateBatch` (several) or `POST /plugin/datafor/api/modeler/olap/config/update` (one) |
| Permission | Administrator |
| Content type | `application/json` for `updateBatch`; `application/x-www-form-urlencoded` for `update` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | object[] | Yes, for `updateBatch` | Entries `{"code": "<property>", "value": "<value>"}`. |
| `code` | form | string | Yes, for `update` | Property name. |
| `value` | form | string | Yes, for `update` | New value. |

Use the `code` values from [Get olap config](/api/System%20Settings/Get%20olap%20config/) with `editable=true`. Values are strings, also for numbers and booleans (`"300"`, `"true"`). The server does not check codes or values, so a typo is stored as a new, unused property.

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor/api/modeler/olap/config/updateBatch" \
  -H "Content-Type: application/json" \
  -d '[{"code": "mondrian.rolap.queryTimeout", "value": "600"}, {"code": "mondrian.result.limit", "value": "1000000"}]'

curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor/api/modeler/olap/config/update" \
  -d "code=mondrian.olap.NullMemberCaption" --data-urlencode "value=(blank)"
```

```json
{
  "success": true,
  "msg": "success"
}
```

Aggregate table switches (`mondrian.rolap.aggregates.Use` and `Read`) reach models that are already loaded only after their cache is cleared or the server restarts.

## Errors

| `code` | When |
| --- | --- |
| `"403"` | The caller is not an administrator (`msg`: `no permission`). |
| (none) | The settings could not be stored: `success` is `false` and `msg` has the reason. |

Related: [Query Engine](/documentation/System/Query-Engine/)
