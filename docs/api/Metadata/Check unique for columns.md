---
title: Check unique for columns
permalink: /api/Metadata/Check unique for columns/
tags:
  - api
  - Metadata
description: Check whether a column or combination of columns has unique values in a table or query.
createTime: 2026/09/01 22:03:26
---
Checks whether the values of one column, or a combination of columns, are unique in a table or SQL query. Use it to confirm a key before relating tables in a model.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/metadata/checkunique` |
| Permission | **Read** on the connection, and the columns must be visible under Table & column access. `sql` needs permission to run raw SQL on the connection. |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `connection` | body | string | Yes | Connection name. |
| `schema` | body | string | With `table` | Schema of the table. |
| `table` | body | string | `table` or `sql` | Table name. |
| `sql` | body | string | `table` or `sql` | A query to check instead of a table. |
| `isEncode` | body | boolean | No | Default `false`. `true` when `sql` is Base64-encoded (UTF-8). |
| `fields` | body | string array | Yes | Column names whose combined values must be unique. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/metadata/checkunique" \
  -H "Content-Type: application/json" \
  -d '{ "connection": "Sales DW", "schema": "public", "table": "orders", "fields": ["order_id"] }'
```

```json
{ "success": true, "code": "200", "data": true }
```

`data` is `false` when at least one combination of values occurs more than once. The request still succeeds.

## Errors

HTTP 200 with `success: false`.

| `code` | When |
| --- | --- |
| `400` | `connection`, `fields`, `schema` or `table` is missing, or a column does not exist (`column not found:<name>`). |
| `403` | `no table privileges` or `no column privileges`, or `SQL_EXECUTE_FORBIDDEN:<connection>` for `sql`. |
| `404` | `table not found`. |
| `500` | The query failed. |

Related: [Establishing table relationships](/documentation/Model/Establishing-Table-Relationships/)
