---
title: Add recent
permalink: /api/Recent/Add recent/
tags:
  - api
  - Recent
description: Record files as recently opened for the signed-in user, or replace the whole list.
createTime: 2026/09/01 22:03:26
---

Adds entries to the front of the signed-in user's recent list, or replaces the list. The console calls it each time a user opens a file.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user-settings/recent` |
| Permission | Any signed-in user (own list) |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | object[] | Yes | Entries with `fullPath` (repository path), `title` and `lastUse` (milliseconds since 1970-01-01 UTC). |
| `append` | query | boolean | No | `true` puts the body entries in front of the stored list. Without it, the body replaces the list. |
| `distinct` | query | boolean | No | With `append=true`: drop stored entries whose `fullPath` is also in the body, so a reopened file moves to the top instead of appearing twice. |

The list has no length limit on the server; trim it by replacing the whole list.

## Example

```bash
curl -u analyst1:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/user-settings/recent?append=true&distinct=true" \
  -H "Content-Type: application/json" \
  -d '[{"fullPath": "/public/Sales/Sales overview.datafor", "title": "Sales overview", "lastUse": 1722844149964}]'
```

```json
{
  "success": true,
  "data": "[{\"fullPath\":\"/public/Sales/Sales overview.datafor\",\"title\":\"Sales overview\",\"lastUse\":1722844149964}]"
}
```

`data` is the stored list after the change, as a JSON string. Entries can be removed with `POST /plugin/datafor-modeler/api/user-settings/recent/deleteBatch`, as described for [favorites](/api/Favorites/Modify%20favorites/).

## Errors

The response always has `"success": true`; if storing failed, it also has `msg`.

Related: [Get recent](/api/Recent/Get%20recent/)
