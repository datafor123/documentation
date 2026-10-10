---
title: Get Columns of tables
permalink: /api/Metadata/Get Columns of tables/
tags:
  - api
  - Metadata
description: Return the columns and types of one or more tables, or of a SQL query.
createTime: 2026/09/01 22:03:26
---
Returns the columns of one or more tables or SQL queries on a connection. Columns hidden from the caller by **Table & column access** rules are left out.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/metadata/columns` |
| Permission | **Read** on the connection. `all=true` needs **Full control**; a `sql` entry needs permission to run raw SQL on the connection. |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `connection` | form | string | Yes | Connection name. |
| `pairs` | form | string | Yes | JSON array of objects to describe: `{"schema": "public", "table": "orders"}` for a table, or `{"sql": "select ..."}` for a query. |
| `isEncode` | form | boolean | No | Default `false`. `true` when each `sql` is Base64-encoded (UTF-8). |
| `isMoreDetail` | form | boolean | No | Default `false`. Add formatting details to each column, such as `formatMask`, `decimalSymbol`, `groupingSymbol` and locale. |
| `refresh` | form | boolean | No | Default `true`. Read the columns from the database instead of the server's metadata cache. |
| `usemeta` | form | boolean | No | Default `true`. Read columns through JDBC metadata; `false` reads them by running an empty query on the table. |
| `all` | form | boolean | No | Default `false`. `true` skips Table & column access filtering. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/metadata/columns" \
  --data-urlencode "connection=Sales DW" \
  --data-urlencode 'pairs=[{"schema":"public","table":"orders"}]'
```

```json
{
  "success": true,
  "msg": "success",
  "databaseTypeName": "PostgreSQL",
  "startQuote": "\"",
  "endQuote": "\"",
  "data": [
    {
      "schema": "public",
      "table": "orders",
      "exist": true,
      "fields": [
        { "name": "order_id", "typeDesc": "Integer", "dataType": 1, "originalColumnTypeName": "int4", "originalPrecision": 10, "originalScale": 0 },
        { "name": "region", "typeDesc": "String", "dataType": 2, "originalColumnTypeName": "varchar", "originalPrecision": 30 }
      ]
    }
  ]
}
```

Primary key columns have `primary: true`. `exist` is `false` when the table cannot be found or is hidden from the caller; `fields` is then empty.

## Errors

HTTP 200 with `success: false`.

| `code` / `msg` | When |
| --- | --- |
| `msg`: `parameter pairs must be json` / `must be not empty` | `pairs` is missing or empty. |
| `code` `"401"`, `msg`: `No administrative privileges:<connection>` | `all=true` without Full control. |
| `code` `"403"`, `msg`: `SQL_EXECUTE_FORBIDDEN:<connection>` | A `sql` entry was sent by a caller who may not run raw SQL on this connection. |
| `msg`: `CONNECTION_READ_FORBIDDEN: ...` | The caller lacks Read on the connection. |

Related: [Get connection sensitivity](/api/Connections/Get%20connection%20sensitivity/), [Data Security](/documentation/Datasource/Data-Security/)
