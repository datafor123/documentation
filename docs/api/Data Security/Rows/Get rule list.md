---
title: Get rule list
permalink: /api/Data Security/Rows/Get rule list/
tags:
  - api
  - Data Security
description: List Row access policies, optionally with their conditions and subjects.
createTime: 2026/09/01 22:03:26
---
Lists Row access policies. Without `dbconn`, policies on connections the caller cannot manage are left out.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/row/query` |
| Permission | **Full control** on the connection |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `dbconn` | body | string | No | Only policies on this connection. |
| `id` | body | string | No | Only this policy. |
| `enable` | body | string | No | `1` active only, `0` drafts only. |
| `withConfig` | body | boolean | No | Default `false`. Include `configList` (tables and conditions). |
| `withGranted` | body | boolean | No | Default `false`. Include `grantedList` (subjects). |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/row/query" \
  -H "Content-Type: application/json" \
  -d '{ "dbconn": "Sales DW", "withConfig": true, "withGranted": true }'
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    {
      "id": "8699a11df24c49ddab9451e249ff2c97",
      "dbconn": "Sales DW",
      "desc": "Store managers - own stores",
      "enable": "1",
      "editable": "1",
      "add_by": "admin",
      "add_time": "2026-10-08 09:30:00.0",
      "update_by": "admin",
      "update_time": "2026-10-09 14:12:00.0",
      "configList": [
        { "id": "c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6", "dbconn": "Sales DW", "schema": "public", "tbname": "stores", "sql": "\"store_manager\" = #{system.username}" }
      ],
      "grantedList": [ { "name": "Store Managers", "type": "1" } ]
    }
  ]
}
```

`desc` is the **Policy name**. `editable` is `0` for locked policies that cannot be changed or deleted. In `grantedList`, `type` is `0` user, `1` role, `2` user type.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `401` | `No administrative privileges:<connection>` | `dbconn` was sent and the caller lacks Full control on it. |

Related: [Data Security](/documentation/Datasource/Data-Security/)
