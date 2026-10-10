---
title: Copy files
permalink: /api/Files/Copy files/
tags:
  - api
  - Files
description: Copy reports, files, or folders into another folder.
createTime: 2026/10/10 10:00:00
---
Copies one or more repository items into a folder, as **Copy** and **Paste** do in the console.

| | |
| --- | --- |
| Method and path | `PUT /plugin/datafor-modeler/api/repo/files/children` |
| Permission | **Read** on the items and **Edit** on the target folder |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | query | string | Yes | Target folder path, for example `/public/Archive`. |
| `fileId` | query | string | Yes | Comma-separated IDs of the items to copy. |
| `mode` | query | integer | No | What to do when the target already has an item with the same name: `1` overwrite, `2` (default) add a number to the new name, `3` skip. |
| (body) | body | object | Yes | An ACL to set on each copy, in the format of [Change ACLs for files](/api/Files/Change%20acl%20for%20files/). Send `{}` to keep the default ACL. |

## Example

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/children?pathId=/public/Archive&mode=2&fileId=66666666-7777-8888-9999-000000000000" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```json
{ "success": true, "responseCode": 200 }
```

## Errors

HTTP 200 with `success: false`; the reason is in `responseCode` (a number).

| `responseCode` | When |
| --- | --- |
| `401` | The caller cannot read an item or write to the target folder. |
| `409` | Invalid target, for example copying a folder into itself. |
| `500` | Any other failure. |

Related: [Move files](/api/Files/Move%20files/)
