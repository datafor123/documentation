---
title: List the Trash
permalink: /api/Files/List the Trash/
tags:
  - api
  - Files
description: List the items in the caller's Trash.
createTime: 2026/10/10 10:00:00
---
Lists deleted items in the caller's Trash, with where each one was deleted from.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/repo/files/deleted` |
| Permission | Any signed-in user |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `all` | query | boolean | No | Default `false`: only items the caller deleted, with `originalPathTitle` filled in. `true`: every deleted item the repository returns for the caller. |

## Example

```bash
curl -u admin:password \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/deleted"
```

```json
[
  {
    "name": "Revenue.datafor",
    "id": "66666666-7777-8888-9999-000000000000",
    "title": "Revenue",
    "folder": false,
    "originalParentFolderPath": "/public/Sales",
    "originalPathTitle": "/Public/Sales/Revenue",
    "deletedDate": "1760083200000"
  }
]
```

Use `id` with [Restore items from the Trash](/api/Files/Restore%20items%20from%20the%20Trash/) or [Permanently delete items](/api/Files/Permanently%20delete%20items/).

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "msg": "..."}` | The Trash could not be read. |

Related: [Delete folders or files](/api/Files/Delete%20folders%20or%20files/), [Quick tour of the console](/documentation/Console/Quick-Tour-of-the-Console/)
