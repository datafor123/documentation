---
title: Get parameter value range
permalink: /api/Parameters/Get value range/
tags:
  - api
  - Parameters
description: Return the suggested values of a parameter definition by running its SQL or reading its list.
createTime: 2026/09/01 22:03:26
---
Returns the suggested values for a parameter definition: the rows of its SQL, or the entries of its value list. This is what **Run query** does in the parameter editor.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/parameter/data` |
| Permission | Any signed-in user. For SQL, **Read** on `dbconn`. |
| Content type | `application/x-www-form-urlencoded` |

Values are computed only from the `detail` sent in the request. With only `name` or `id`, the response contains the stored definition in `config` and an empty `data`; to get a stored parameter's values, read it with [Get parameters](/api/Parameters/Get%20parameters/) and send its `type`, `dbconn` and `detail` here.

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `detail` | form | string | Yes, for values | The SQL statement (`type` 2) or the JSON value list (other types). |
| `type` | form | string | With `detail` | `2` for SQL; anything else treats `detail` as a JSON array. |
| `dbconn` | form | string | With `type` 2 | Connection to run the SQL on. |
| `name` | form | string | No | Without `detail`: look up the stored definition. |
| `id` | form | string | No | Without `detail`: look up the stored definition. |

SQL is limited to one read-only `SELECT` (or `WITH ... SELECT`) statement, and at most 1,000 rows are returned.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/parameter/data" \
  --data-urlencode "type=2" \
  --data-urlencode "dbconn=Sales DW" \
  --data-urlencode "detail=select distinct region from public.orders"
```

```json
{
  "success": true,
  "msg": "",
  "config": { "type": "2", "dbconn": "Sales DW", "detail": "select distinct region from public.orders" },
  "data": [ { "region": "North" }, { "region": "West" } ]
}
```

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `type of sql must specify a connection` | `type` is `2` without `dbconn`. |
| `only SELECT statements are allowed` / `only one statement is allowed` / `only read-only SELECT statements are allowed (found "...")` | The SQL is not a single read-only query. |
| `no permission to read connection "<name>"` | The caller lacks Read on `dbconn`. |
| Parser or database message | The list is not valid JSON, or the query failed. |

Related: [Add or modify a parameter](/api/Parameters/Add%20or%20modify%20a%20parameter/)
