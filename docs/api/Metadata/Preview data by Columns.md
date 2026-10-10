---
title: Preview data by Columns
permalink: /api/Metadata/Preview data by Columns/
tags:
  - api
  - Metadata
description: Return sample rows from a table or SQL query, with data security applied.
createTime: 2026/09/01 22:03:26
---
Returns sample rows from a table (optionally only some columns, with a filter) or from a SQL query. **Row access** and **Table & column access** rules apply unless `all=true`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/metadata/previewcolumn` |
| Permission | **Read** on the connection. A `where` or a column expression needs permission to use SQL fragments on the connection; `sql` needs permission to run raw SQL; `all=true` needs **Full control**. |
| Content type | `application/x-www-form-urlencoded` |

`POST /plugin/datafor-modeler/api/metadata/preview` takes the same parameters and returns the same result.

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `connection` | form | string | Yes | Connection name. |
| `schema` | form | string | With `table` | Schema of the table. |
| `table` | form | string | `table` or `sql` | Table or view name. |
| `sql` | form | string | `table` or `sql` | A query to preview instead of a table. Takes precedence over `table`. |
| `columns` | form | string | No | Table only. JSON array of columns: `{"name": "region"}`, or `{"name": "year", "detail": "extract(year from order_date)"}` for an expression. Default: all columns the caller may see. |
| `where` | form | string | No | Filter condition, without the `WHERE` keyword. |
| `start` | form | integer | No | Default `0`. Rows to skip. |
| `limit` | form | integer | No | Default `50`. Capped at the server's maximum preview rows (default 1,000). |
| `isEncode` | form | boolean | No | Default `false`. `true` when `sql`, `where`, and each `detail` are Base64-encoded (UTF-8). |
| `withParams` | form | string | No | Default `0`. `1` fills in global parameters used in the SQL with their default values when they are not in `params`. |
| `params` | form | string | No | JSON array of parameter values: `{"name": "...", "value": "..."}`. |
| `isMoreDetail` | form | boolean | No | Default `false`. Add formatting details to `meta`. |
| `all` | form | boolean | No | Default `false`. `true` skips Row access and Table & column access rules. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/metadata/previewcolumn" \
  --data-urlencode "connection=Sales DW" \
  --data-urlencode "schema=public" \
  --data-urlencode "table=orders" \
  --data-urlencode 'columns=[{"name":"order_id"},{"name":"region"}]' \
  --data-urlencode "limit=2"
```

```json
{
  "success": true,
  "msg": "success",
  "meta": [
    { "name": "order_id", "typeDesc": "Integer", "type": 5, "originalColumnTypeName": "int4" },
    { "name": "region", "typeDesc": "String", "type": 2, "originalColumnTypeName": "varchar", "length": 30 }
  ],
  "data": [
    { "order_id": 1001, "region": "North" },
    { "order_id": 1002, "region": "West" }
  ]
}
```

## Errors

HTTP 200 with `success: false`.

| `code` / `msg` | When |
| --- | --- |
| `msg`: `parameter table or sql cannot be both empty` | Neither `table` nor `sql` was sent. |
| `code` `"403"`, `msg`: `SQL_EXECUTE_FORBIDDEN:<connection>` | `sql` was sent by a caller who may not run raw SQL on this connection. |
| `code` `"403"`, `msg`: `SQL_FRAGMENT_FORBIDDEN:<connection>` | `where` or a column expression was sent by a caller who may not use SQL fragments on this connection. |
| `code` `"401"`, `msg`: `no table privileges` / `no column privileges` | Table & column access hides the table or a requested column. |
| `code` `"401"`, `msg`: `No admin privileges:<connection>` | `all=true` without Full control. |
| `code` `"404"`, `msg`: `table not found` | The table does not exist. |
| `code` `"400"`, `msg`: `column not found:<name>` | A requested column does not exist, or the condition is not allowed. |

Related: [Get connection sensitivity](/api/Connections/Get%20connection%20sensitivity/), [Row-Level Security in Analytics](/documentation/Datasource/Row-Level-Security-in-Analytics/)
