---
title: Get recent
permalink: /api/Recent/Get recent/
tags:
  - api
  - Recent
description: List the files the signed-in user opened recently.
createTime: 2026/09/01 22:03:26
---

Returns the signed-in user's recently opened files, the `recent` user setting shown under **Recent** on the home page.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/user-settings/recent` |
| Permission | Any signed-in user (own list) |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `all` | query | boolean | No | `true` returns the stored list unchanged. By default, entries whose file no longer exists or that the user can no longer read are left out. |

## Example

```bash
curl -u analyst1:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/user-settings/recent"
```

```json
[
  {
    "fullPath": "/public/Sales/Sales overview.datafor",
    "title": "Sales overview",
    "lastUse": 1722219194406
  }
]
```

The response is the array itself, newest first, not wrapped in `success`/`data`; `[]` when the list is empty. The fields are those of [Get favorites](/api/Favorites/Get%20favorites/).

## Errors

On a server error the response is `{"success": false, "msg": "<reason>"}`.

Related: [Add recent](/api/Recent/Add%20recent/)
