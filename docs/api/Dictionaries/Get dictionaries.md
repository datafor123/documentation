---
title: Get dictionaries
permalink: /api/Dictionaries/Get dictionaries/
tags:
  - api
  - Dictionaries
description: List data dictionaries, or find one by name or ID.
createTime: 2026/09/01 22:03:26
---
Lists the data dictionaries, newest first, or returns the one matching `name` or `id`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/dict/query` |
| Permission | Any signed-in user |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | form | string | No | Exact dictionary name. |
| `id` | form | string | No | Dictionary ID. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/dict/query"
```

```json
{
  "success": true,
  "msg": "",
  "data": [
    {
      "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "name": "product_names",
      "type": "2",
      "dbconn": "Sales DW",
      "detail": "select product_id, product_name from public.product",
      "default": "Unknown product",
      "expire": "3600",
      "add_time": "2026-10-08 09:30:00.0",
      "update_time": "2026-10-09 14:12:00.0",
      "update_by": "admin"
    }
  ]
}
```

Field meanings are on [Add or modify a dictionary](/api/Dictionaries/Add%20or%20modify%20a%20dictionary/). Empty fields are omitted.

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "msg": "..."}` | The dictionary store could not be read. |

Related: [Data Dictionary](/documentation/Tools/Data-Dictionary/)
