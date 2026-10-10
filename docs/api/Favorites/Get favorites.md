---
title: Get favorites
permalink: /api/Favorites/Get favorites/
tags:
  - api
  - Favorites
description: List the signed-in user's favorite files.
createTime: 2026/09/01 22:03:26
---

Returns the signed-in user's favorites, the `favorites` user setting.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/user-settings/favorites` |
| Permission | Any signed-in user (own favorites) |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `all` | query | boolean | No | `true` returns the stored list unchanged. By default, entries whose file no longer exists or that the user can no longer read are left out. |

## Example

```bash
curl -u analyst1:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/user-settings/favorites"
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

The response is the array itself, not wrapped in `success`/`data`; `[]` when there are no favorites.

| Field | Description |
| --- | --- |
| `fullPath` | Repository path of the file. |
| `title` | Display name. |
| `lastUse` | When the entry was added or last used, in milliseconds since 1970-01-01 UTC. |

Entries keep whatever other fields the client stored with them.

## Errors

On a server error the response is `{"success": false, "msg": "<reason>"}`.

Related: [Modify favorites](/api/Favorites/Modify%20favorites/)
