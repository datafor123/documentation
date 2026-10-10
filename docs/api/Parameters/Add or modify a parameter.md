---
title: Add or modify a parameter
permalink: /api/Parameters/Add or modify a parameter/
tags:
  - api
  - Parameters
description: Create or update a global parameter (administrators only).
createTime: 2026/09/01 22:03:26
---
Creates a global parameter, or updates one when `id` is sent. Reports use global parameters by name, and model SQL references them as `${name}`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/parameter/update` |
| Permission | Administrator user type |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | form | string | To update | ID from [Get parameters](/api/Parameters/Get%20parameters/). Omit to create. |
| `name` | form | string | Yes | 1 to 32 letters, digits, underscores, dots or Chinese characters. Must not start with `system.` and must be unique. |
| `datatype` | form | string | Yes | `2` Text, `5` Numeric, `9` Date. |
| `type` | form | string | Yes | Suggested values: `1` Any value, `2` SQL, `3` List of values. A Date parameter uses `1`. |
| `detail` | form | string | With `type` 2 or 3 | For `2`: one read-only `SELECT` statement whose first column holds the values. For `3`: a JSON array such as `[{"name": "region", "value": "North"}, {"name": "region", "value": "West"}]`. |
| `dbconn` | form | string | With `type` 2 | Connection the SQL runs on. |
| `schema` | form | string | No | Schema for the SQL. |
| `default` | form | string | No | Default value. Numeric parameters need a number; Date parameters need `yyyy-MM-dd`. |
| `desc` | form | string | No | Description. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/parameter/update" \
  --data-urlencode "name=region" \
  --data-urlencode "datatype=2" \
  --data-urlencode "type=2" \
  --data-urlencode "dbconn=Sales DW" \
  --data-urlencode "detail=select distinct region from public.orders" \
  --data-urlencode "default=North" \
  --data-urlencode "desc=Sales region"
```

```json
{ "success": true, "msg": "success", "startQuote": "\"", "endQuote": "\"" }
```

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `Only administrators can manage global parameters` | The caller is not an administrator. |
| `parameter name is required` / `is too long (max 32 characters)` | Missing or long `name`. |
| `parameter name must not start with "system."` | The name collides with the system parameters. |
| `parameter name may only contain letters, digits, underscores, dots and Chinese characters` | Invalid character in `name`. |
| `The name already exists` | Creating a parameter whose name is taken. |
| `default value of a numeric parameter must be a number` | `datatype` 5 with a non-numeric `default`. |
| `default value of a date parameter must be in yyyy-MM-dd` | `datatype` 9 with another date format. |

Related: [Creating parameters](/documentation/Analysis/Creating-Parameters/), [Get value range](/api/Parameters/Get%20value%20range/)
