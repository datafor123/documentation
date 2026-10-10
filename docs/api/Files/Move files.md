---
title: Move files
permalink: /api/Files/Move files/
tags:
  - api
  - Files
description: Move reports, files, or folders into another folder.
createTime: 2026/10/10 10:00:00
---
Moves one or more repository items into another folder, as **Cut** and **Paste** do in the console. Item IDs do not change. This is an inherited platform endpoint, so it uses HTTP status codes and returns no body.

| | |
| --- | --- |
| Method and path | `PUT /api/repo/files/{pathId}/move` |
| Permission | **Edit** on the target folder and on the folder the items are moved out of |
| Content type | `text/plain` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | path | string | Yes | Target folder in colon form: `/public/Archive` is written `:public:Archive`. |
| (body) | body | string | Yes | Comma-separated IDs of the items to move. |

## Example

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/api/repo/files/:public:Archive/move" \
  -H "Content-Type: text/plain" \
  --data "66666666-7777-8888-9999-000000000000"
```

A successful move returns HTTP 200 with an empty body.

## Errors

| HTTP status | When |
| --- | --- |
| `403` | The caller lacks permission on the source or target. |
| `404` | The target folder does not exist. |
| `500` | The move failed, for example because the target already contains an item with the same name. |

Related: [Copy files](/api/Files/Copy%20files/)
