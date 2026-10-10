---
title: Modify favorites
permalink: /api/Favorites/Modify favorites/
tags:
  - api
  - Favorites
description: Replace, extend or remove entries of the signed-in user's favorites.
createTime: 2026/09/01 22:03:26
---

Stores the signed-in user's favorites. Without parameters the body replaces the whole list, which is what the console does after it has changed its copy.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user-settings/favorites` |
| Permission | Any signed-in user (own favorites) |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | object[] | Yes | Entries with `fullPath`, `title` and `lastUse`, as returned by [Get favorites](/api/Favorites/Get%20favorites/). |
| `append` | query | boolean | No | `true` puts the body entries in front of the stored list instead of replacing it. |
| `distinct` | query | boolean | No | With `append=true`: drop stored entries whose `fullPath` is also in the body, so a file is listed once. |

Without `distinct`, `append` does not check for duplicates.

## Example

Add one file to the front of the list:

```bash
curl -u analyst1:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/user-settings/favorites?append=true&distinct=true" \
  -H "Content-Type: application/json" \
  -d '[{"fullPath": "/public/Sales/Sales overview.datafor", "title": "Sales overview", "lastUse": 1722844154850}]'
```

```json
{
  "success": true,
  "data": "[{\"fullPath\":\"/public/Sales/Sales overview.datafor\",\"title\":\"Sales overview\",\"lastUse\":1722844154850}]"
}
```

`data` is the stored list after the change, as a JSON string. Posting `[]` without parameters clears the list.

To remove entries, post them to `/plugin/datafor-modeler/api/user-settings/favorites/deleteBatch`. Stored entries whose `fullPath` matches an entry in the body are removed; `?key=<field>` matches on another field instead.

```bash
curl -u analyst1:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/user-settings/favorites/deleteBatch" \
  -H "Content-Type: application/json" \
  -d '[{"fullPath": "/public/Sales/Sales overview.datafor"}]'
```

## Errors

The response always has `"success": true`; if storing failed, it also has `msg`.

Related: [Get favorites](/api/Favorites/Get%20favorites/)
