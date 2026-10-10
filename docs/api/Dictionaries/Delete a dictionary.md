---
title: Delete a dictionary
permalink: /api/Dictionaries/Delete a dictionary/
tags:
  - api
  - Dictionaries
description: Delete a data dictionary by name or ID.
createTime: 2026/10/10 10:00:00
---
Deletes a data dictionary. Models that use it as a member formatter are not changed, so check where it is used first.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/dict/delete` |
| Permission | The dictionary's creator, or an administrator |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | form | string | `name` or `id` | Dictionary name. |
| `id` | form | string | `name` or `id` | Dictionary ID. When both are sent, both must match. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/dict/delete" \
  --data-urlencode "name=product_names"
```

```json
{ "success": true, "msg": "success" }
```

The response is also `success: true` when nothing was deleted, for example because the name does not exist or the dictionary belongs to another user. Confirm with [Get dictionaries](/api/Dictionaries/Get%20dictionaries/).

## Errors

| `msg` | When |
| --- | --- |
| `one condition at least` | Neither `name` nor `id` was sent. |

Related: [Data Dictionary](/documentation/Tools/Data-Dictionary/)
