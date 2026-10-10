---
title: Permanently delete items
permalink: /api/Files/Permanently delete items/
tags:
  - api
  - Files
description: Remove items from the Trash permanently.
createTime: 2026/10/10 10:00:00
---
Permanently removes items from the Trash. This cannot be undone.

| | |
| --- | --- |
| Method and path | `PUT /plugin/datafor-modeler/api/repo/files/deletepermanent` |
| Permission | The caller's own Trash |
| Content type | `text/plain` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | string | Yes | Comma-separated IDs from [List the Trash](/api/Files/List%20the%20Trash/). Each ID is processed separately; one failure does not stop the others. |

## Example

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/deletepermanent" \
  -H "Content-Type: text/plain" \
  --data "66666666-7777-8888-9999-000000000000"
```

```json
{ "success": true, "code": "200" }
```

## Errors

| `code` | When |
| --- | --- |
| `500` | One or more items could not be deleted. `msg` lists them by position in the request, for example `[1]:<reason>`. |

Related: [Delete folders or files](/api/Files/Delete%20folders%20or%20files/)
