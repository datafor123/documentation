---
title: Add or modify a dictionary
permalink: /api/Dictionaries/Add or modify a dictionary/
tags:
  - api
  - Dictionaries
description: Create or update a data dictionary that maps stored keys to display values with a SQL query.
createTime: 2026/09/01 22:03:26
---
Creates a data dictionary, or updates one when `id` is sent. A dictionary's SQL returns the key in the first column and the display value in the second; models apply it to an attribute as a member formatter.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/dict/update` |
| Permission | Any signed-in user, with **Read** on `dbconn`. Updating needs to be the dictionary's creator or an administrator. |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | form | string | To update | ID from [Get dictionaries](/api/Dictionaries/Get%20dictionaries/). Omit to create. |
| `name` | form | string | Yes | Dictionary name, unique. Models refer to the dictionary by this name. |
| `type` | form | string | Yes | `2` (SQL). This is the type the console creates. |
| `dbconn` | form | string | Yes | Connection the SQL runs on. |
| `detail` | form | string | Yes | One read-only `SELECT` returning the key column first and the display value second. |
| `schema` | form | string | No | Schema for the SQL. |
| `default` | form | string | No | Text shown for keys the dictionary does not contain. |
| `expire` | form | integer | No | How long the values are cached, in seconds. Empty, `0` or negative: one day. |
| `desc` | form | string | No | Description. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/dict/update" \
  --data-urlencode "name=product_names" \
  --data-urlencode "type=2" \
  --data-urlencode "dbconn=Sales DW" \
  --data-urlencode "detail=select product_id, product_name from public.product" \
  --data-urlencode "default=Unknown product" \
  --data-urlencode "expire=3600"
```

```json
{ "success": true, "msg": "success", "startQuote": "\"", "endQuote": "\"" }
```

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `type of sql must specify a connection` | `dbconn` is missing. |
| `no permission to read connection "<name>"` | The caller lacks Read on `dbconn`. |
| SQL validation message | `detail` is not a single read-only `SELECT`, or a non-administrator used a function that is not allowed. |
| `no permission` (`code` 403) | Updating a dictionary created by someone else without being an administrator. |
| `not exist` | No dictionary has this `id`. |

Related: [Data Dictionary](/documentation/Tools/Data-Dictionary/)
