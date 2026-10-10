---
title: Verify a rule
permalink: /api/Data Security/Rows/Verify a rule/
tags:
  - api
  - Data Security
description: Check Row access conditions against the database without saving them.
createTime: 2026/09/01 22:03:26
---
Runs each Row access condition against its table, with the caller's own account substituted for system variables, and reports per condition whether it is valid. This is **Validate expression** in the console. Nothing is saved.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/row/verify` |
| Permission | **Full control** on the connection, and permission to use SQL fragments on it |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `dbconn` | body | string | Yes | Connection name. |
| `configList` | body | array | Yes | Conditions to check, each with `schema`, `tbname` and `sql`, as in [Add or modify a rule for rows](/api/Data%20Security/Rows/Add%20or%20modify%20a%20rule%20for%20rows/). |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/row/verify" \
  -H "Content-Type: application/json" \
  -d @verify.json
```

with `verify.json`:

```json
{
  "dbconn": "Sales DW",
  "configList": [
    { "schema": "public", "tbname": "stores", "sql": "\"store_manager\" = #{system.username}" },
    { "schema": "public", "tbname": "orders", "sql": "\"regoin\" = 'North'" }
  ]
}
```

The response echoes the request. Each `configList` entry gains `success`, a `msg` when it failed, `data` with at most one sample row when it passed, and `resolvedSql` when a system variable was substituted:

```json
{
  "dbconn": "Sales DW",
  "configList": [
    {
      "schema": "public",
      "tbname": "stores",
      "sql": "\"store_manager\" = #{system.username}",
      "resolvedSql": "\"store_manager\" = 'admin'",
      "data": [ [ 12, "Downtown", "admin" ] ],
      "success": true
    },
    {
      "schema": "public",
      "tbname": "orders",
      "sql": "\"regoin\" = 'North'",
      "success": false,
      "msg": "ERROR: column \"regoin\" does not exist"
    }
  ]
}
```

There is no top-level `success` when the conditions were checked; read it from each entry.

## Errors

When the request itself is rejected, the response is the usual envelope with `success: false`:

| `code` | `msg` | When |
| --- | --- | --- |
| `401` | `No administrative privileges:<connection>` | The caller lacks Full control on the connection. |
| `403` | `SQL_FRAGMENT_FORBIDDEN:<connection>` | The caller may not use SQL fragments on this connection. |
| `400` | `configList cannot be empty` | No conditions were sent. |
| `500` | (reason) | The connection could not be opened. |

Related: [Data Security](/documentation/Datasource/Data-Security/)
