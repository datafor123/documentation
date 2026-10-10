---
title: Get rule list for objects
permalink: /api/Data Security/Objs/Get rule list for objects/
tags:
  - api
  - Data Security
description: List Table & column access policies, optionally with their objects and subjects.
createTime: 2026/09/01 22:03:26
---
Lists Table & column access policies. Without `dbconn`, policies on connections the caller cannot manage are left out.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/obj/query` |
| Permission | **Full control** on the connection |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `dbconn` | body | string | No | Only policies on this connection. |
| `id` | body | string | No | Only this policy. |
| `enable` | body | string | No | `1` active only, `0` drafts only. |
| `withConfig` | body | boolean | No | Default `false`. Include `configList` (tables and columns). |
| `withGranted` | body | boolean | No | Default `false`. With `withConfig`, add `grantedList` and `visible` to each object. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/obj/query" \
  -H "Content-Type: application/json" \
  -d '{ "dbconn": "Sales DW", "withConfig": true, "withGranted": true }'
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    {
      "id": "371063d227944c5386fbe81faf8c3bc0",
      "dbconn": "Sales DW",
      "desc": "Salary - Finance only",
      "enable": "1",
      "editable": "1",
      "add_by": "admin",
      "update_by": "admin",
      "configList": [
        {
          "obj_key": "\"public\".\"employees\".\"salary\"",
          "schema": "public",
          "tbname": "employees",
          "obj_type": "2",
          "colname": "salary",
          "visible": "1",
          "grantedList": [ { "name": "Finance", "type": "1" } ]
        }
      ]
    }
  ]
}
```

`desc` is the **Policy name**. `visible` `1` means **Only selected subjects can view**, `0` **Selected subjects cannot view**.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `401` | `No administrative privileges:<connection>` | `dbconn` was sent and the caller lacks Full control on it. |

Related: [Data Security](/documentation/Datasource/Data-Security/)
