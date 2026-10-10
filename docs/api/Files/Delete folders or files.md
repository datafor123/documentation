---
title: Delete folders or files
permalink: /api/Files/Delete folders or files/
tags:
  - api
  - Files
description: Move one or more reports, files, or folders to the Trash by file ID.
createTime: 2026/09/01 22:03:26
---
Moves one or more repository items to the Trash. Items stay in the Trash until they are restored or permanently deleted.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/repo/files/deleteBatch` |
| Permission | **Delete** or **Full control** on every item, granted directly or inherited. **Edit** on the parent folder is not enough. |
| Content type | `text/plain` |

The request is all-or-nothing: the server checks every item first, and if any item lacks Delete permission, nothing is deleted and the response lists all refused paths.

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | string | Yes | Comma-separated file or folder IDs (the `id` field returned by [Get file tree](/api/Files/Get%20file%20tree/) or [Get folder's children](/api/Folders/Get%20folder's%20children/)). IDs that do not exist are skipped. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/deleteBatch" \
  -H "Content-Type: text/plain" \
  --data "11111111-2222-3333-4444-555555555555,66666666-7777-8888-9999-000000000000"
```

```json
{ "success": true }
```

Response when one item cannot be deleted:

```json
{
  "success": false,
  "msg": "no delete permission: /public/Sales/Revenue.datafor"
}
```

## Errors

The response is HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `no delete permission: <paths>` | The caller lacks Delete or Full control on one or more items. Nothing was deleted. |
| Other text | Repository error while moving an item to the Trash. |

Related: [Access Control List](/documentation/System/Access-Control-List/), [Deleting requires Delete or Full control](/documentation/System/Permission-Evaluation-Overview/#deleting-requires-delete-or-full-control), [List the Trash](/api/Files/List%20the%20Trash/)
