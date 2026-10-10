---
title: Restore items from the Trash
permalink: /api/Files/Restore items from the Trash/
tags:
  - api
  - Files
description: Put deleted items back in the folders they were deleted from.
createTime: 2026/10/10 10:00:00
---
Restores items from the Trash to their original folders. This is an inherited platform endpoint, so it uses HTTP status codes and returns no body.

| | |
| --- | --- |
| Method and path | `PUT /api/repo/files/restore` |
| Permission | The caller's own Trash; **Edit** on the original folder to restore there |
| Content type | `text/plain` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | string | Yes | Comma-separated IDs from [List the Trash](/api/Files/List%20the%20Trash/). |
| `overwriteMode` | query | integer | No | Only after a `406` or `409` response: restore into the caller's home folder instead. `1` overwrites items with the same name there, `2` adds a number to the restored item's name, `3` skips items whose name is taken. |

## Example

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/api/repo/files/restore" \
  -H "Content-Type: text/plain" \
  --data "66666666-7777-8888-9999-000000000000"
```

A successful restore returns HTTP 200 with an empty body.

## Errors

| HTTP status | When |
| --- | --- |
| `406` | The caller can no longer write to the original folder. The items can go to the home folder without name conflicts; repeat with `overwriteMode`. |
| `409` | As `406`, but the home folder already has items with the same names. |
| `500` | The restore failed. |

Related: [List the Trash](/api/Files/List%20the%20Trash/)
