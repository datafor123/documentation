---
title: Get dictionary values
permalink: /api/Dictionaries/Get value range/
tags:
  - api
  - Dictionaries
description: Run a stored dictionary's SQL and return its key and value rows.
createTime: 2026/09/01 22:03:26
---
Runs a stored dictionary's SQL and returns its rows, as **Preview** does in the dictionary editor.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/dict/data` |
| Permission | Any signed-in user, with **Read** on the dictionary's connection |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | form | string | `name` or `id` | Dictionary name. |
| `id` | form | string | `name` or `id` | Dictionary ID. |

At most the server's maximum preview rows (default 1,000) are returned. Without `name` or `id`, the first dictionary in the list is used.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/dict/data" \
  --data-urlencode "name=product_names"
```

```json
{
  "success": true,
  "msg": "",
  "config": {
    "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    "name": "product_names",
    "type": "2",
    "dbconn": "Sales DW",
    "detail": "select product_id, product_name from public.product",
    "default": "Unknown product",
    "expire": "3600"
  },
  "data": [
    { "product_id": 1, "product_name": "Desk lamp" },
    { "product_id": 2, "product_name": "Office chair" }
  ]
}
```

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `CONNECTION_READ_FORBIDDEN: ...` | The caller lacks Read on the dictionary's connection. |
| Database message | The SQL failed. |

A name that does not exist returns `success: true` with empty `data` and no `config`.

Related: [Data Dictionary](/documentation/Tools/Data-Dictionary/)
