---
title: Add a folder
permalink: /api/Folders/Add a folder/
tags:
  - api
  - Folders
description: Create a folder, and any missing parent folders, with an optional ACL.
createTime: 2026/09/01 22:03:26
---
Creates a folder at the given path. Missing parent folders are created too.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/repo/dirs/add` |
| Permission | **Edit** on the parent folder |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | query | string | Yes | Full path of the new folder, for example `/public/Sales/2026`. Folders cannot be created directly under the root (`/`). |
| (body) | body | object | No | ACL for the new folder, in the format of [Change ACLs for files](/api/Files/Change%20acl%20for%20files/). Without a body the folder inherits its parent's ACL. An empty `owner` or `recipient` is filled in with the caller. |

## Example

Create a folder that only its creator and the `Sales` role can open:

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/dirs/add?pathId=/public/Sales/2026" \
  -H "Content-Type: application/json" \
  -d '{
    "owner": "admin",
    "ownerType": 0,
    "entriesInheriting": false,
    "aces": [
      { "recipient": "admin", "recipientType": 0, "permissions": [4], "modifiable": true },
      { "recipient": "Sales", "recipientType": 1, "permissions": [0], "modifiable": true }
    ]
  }'
```

```json
{ "success": true, "code": 200 }
```

## Errors

HTTP 200 with `success: false`. Here `code` is a number.

| `code` | `msg` | When |
| --- | --- | --- |
| `403` | `couldNotCreateRootLevelFolder` | The path is directly under `/`. |
| `409` | `couldNotCreateFolderDuplicate` | The folder already exists. |
| `410` | `pathId could not be null` | `pathId` is missing. |
| `410` | `containsIllegalCharacters` | The name contains a character that is not allowed, such as `\`. |
| `410` | `invalid acl` | The body is not a valid ACL. |
| `500` | (reason) | Any other failure, including missing Edit on the parent folder. |

Related: [Access Control List](/documentation/System/Access-Control-List/)
