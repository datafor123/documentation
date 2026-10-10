---
title: Get folder's children
permalink: /api/Folders/Get folder's children/
tags:
  - api
  - Folders
description: List the files and folders directly inside a folder.
createTime: 2026/09/01 22:03:26
---
Lists the items directly inside a folder (one level), with display titles and, optionally, the caller's permissions on each item.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/repo/files/children` |
| Permission | **Read** on the folder; items the caller cannot read are left out |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | query | string | Yes | Folder path, for example `/public/Sales`. |
| `filter` | query | string | No | Name pattern and type, for example `*\|FILES` or `*\|FOLDERS`. Default: all. |
| `showHidden` | query | boolean | No | Include hidden items. |
| `includeAccessMap` | query | boolean | No | Default `false`. Add `accessMap`: which of the `permissions` the caller has on each item. |
| `permissions` | query | string | No | Default `0\|1\|2\|4` (Read, Edit, Delete, Full control). |
| `includeMetadata` | query | boolean | No | Default `false`. Add each item's metadata. |
| `includeAcls` | query | boolean | No | Default `false`. Include each item's ACL. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/children" \
  --data-urlencode "pathId=/public/Sales" \
  --data-urlencode "includeAccessMap=true"
```

```json
[
  {
    "name": "2026",
    "id": "11111111-2222-3333-4444-555555555555",
    "path": "/public/Sales/2026",
    "title": "2026",
    "pathTitle": "/Public/Sales/2026",
    "folder": true,
    "hidden": false,
    "fileSize": -1,
    "createdDate": "1759900000000",
    "accessMap": [ { "name": "0", "value": "true" }, { "name": "1", "value": "true" }, { "name": "2", "value": "true" }, { "name": "4", "value": "true" } ]
  },
  {
    "name": "Revenue.datafor",
    "id": "66666666-7777-8888-9999-000000000000",
    "path": "/public/Sales/Revenue.datafor",
    "title": "Revenue",
    "pathTitle": "/Public/Sales/Revenue",
    "folder": false,
    "hidden": false,
    "fileSize": 4120,
    "createdDate": "1759900100000",
    "lastModifiedDate": "1759986500000",
    "accessMap": [ { "name": "0", "value": "true" }, { "name": "1", "value": "true" }, { "name": "2", "value": "false" }, { "name": "4", "value": "false" } ]
  }
]
```

`pathTitle` is the path built from display titles. In `accessMap`, `name` is the permission code and `value` is `"true"` or `"false"`.

Related: [Get file tree](/api/Files/Get%20file%20tree/)
