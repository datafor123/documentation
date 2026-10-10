---
title: Get configList for a rule
permalink: /api/Data Security/Rows/Get configList for a rule/
tags:
  - api
  - Data Security
description: Return the tables and conditions of one Row access policy.
createTime: 2026/09/01 22:03:26
---
Returns the tables and conditions of one Row access policy. [Get rule list](/api/Data%20Security/Rows/Get%20rule%20list/) with `withConfig: true` returns the same data for several policies at once.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/row/config/query` |
| Permission | **Full control** on the connection |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `dbconn` | body | string | Yes | Connection name. |
| `group_id` | body | string | Yes | Policy ID. |
| `schema` | body | string | No | Only conditions on this schema. |
| `tbname` | body | string | No | Only conditions on this table. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/row/config/query" \
  -H "Content-Type: application/json" \
  -d '{ "dbconn": "Sales DW", "group_id": "8699a11df24c49ddab9451e249ff2c97" }'
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    {
      "id": "c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
      "group_id": "8699a11df24c49ddab9451e249ff2c97",
      "dbconn": "Sales DW",
      "schema": "public",
      "tbname": "stores",
      "sql": "\"store_manager\" = #{system.username}"
    }
  ]
}
```

`rows` is also returned when the policy was built in the console's condition builder.

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `400` | `dbconn cannot be empty` / `group_id cannot be empty` | A required field is missing. |
| `401` | `No administrative privileges:<connection>` | The caller lacks Full control on the connection. |

Related: [Data Security](/documentation/Datasource/Data-Security/)
