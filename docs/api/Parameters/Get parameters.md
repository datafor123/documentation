---
title: Get parameters
permalink: /api/Parameters/Get parameters/
tags:
  - api
  - Parameters
description: List global parameters, or find one by name or ID.
createTime: 2026/09/01 22:03:26
---
Lists the global parameters, newest first, or returns the one matching `name` or `id`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/parameter/query` |
| Permission | Any signed-in user |
| Content type | `application/x-www-form-urlencoded` |

System parameters such as `system.username` are not in this list; see [Get system parameters](/api/Parameters/Get%20system%20parameters/).

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | form | string | No | Exact parameter name. |
| `id` | form | string | No | Parameter ID. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/parameter/query" \
  --data-urlencode "name=region"
```

```json
{
  "success": true,
  "msg": "",
  "data": [
    {
      "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "name": "region",
      "datatype": "2",
      "type": "2",
      "dbconn": "Sales DW",
      "detail": "select distinct region from public.orders",
      "default": "North",
      "desc": "Sales region",
      "add_time": "2026-10-08 09:30:00.0",
      "update_time": "2026-10-09 14:12:00.0",
      "update_by": "admin",
      "source": "1"
    }
  ]
}
```

Field meanings are on [Add or modify a parameter](/api/Parameters/Add%20or%20modify%20a%20parameter/). `source` is `1` for global parameters. Empty fields are omitted. If the parameter store cannot be read, the response is `success: true` with an empty `data`.

Related: [Creating parameters](/documentation/Analysis/Creating-Parameters/)
