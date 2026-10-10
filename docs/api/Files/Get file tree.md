---
title: Get file tree
permalink: /api/Files/Get file tree/
tags:
  - api
  - Files
description: Return a folder and its descendants as a nested tree.
createTime: 2026/09/01 22:03:26
---
Returns a folder and its descendants as a nested tree, limited to what the caller can read.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/repo/files/tree` |
| Permission | **Read** on the folder; items the caller cannot read are left out |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | query | string | No | Repository path of the root folder, for example `/public` or `/home/alice`. Default: the repository root. |
| `depth` | query | integer | No | Levels to return. Omit or `-1` for all levels. |
| `filter` | query | string | No | Name pattern and type, for example `*\|FILES`, `*\|FOLDERS`, `*.datafor\|FILES`. Default: all files and folders. |
| `showHidden` | query | boolean | No | Include hidden items. |
| `includeAccessMap` | query | boolean | No | Default `false`. Add `accessMap` to each item: which of the permissions in `permissions` the caller has. |
| `permissions` | query | string | No | Permissions to check for `accessMap`, separated by `\|`. Default `0\|1\|2\|4` (Read, Edit, Delete, Full control). |
| `includeMetadata` | query | boolean | No | Default `false`. Add the item's metadata. |
| `includeAcls` | query | boolean | No | Default `false`. Include each item's ACL. |
| `includeSysDirs` | query | boolean | No | Default `false`. Include system folders such as `/etc`. |
| `runuser` | query | string | No | Administrators only: build the tree as this user would see it. |
| `runrole` | query | string | No | Administrators only: build the tree as a member of this role would see it. Ignored when `runuser` is set. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/tree" \
  --data-urlencode "pathId=/public/Sales" \
  --data-urlencode "depth=1" \
  --data-urlencode "includeAccessMap=true"
```

```json
{
  "file": {
    "name": "Sales",
    "id": "11111111-2222-3333-4444-555555555555",
    "path": "/public/Sales",
    "title": "Sales",
    "folder": true,
    "hidden": false,
    "createdDate": "1759900000000",
    "accessMap": [ { "name": "0", "value": "true" }, { "name": "1", "value": "true" }, { "name": "2", "value": "false" }, { "name": "4", "value": "false" } ]
  },
  "children": [
    {
      "file": {
        "name": "Revenue.datafor",
        "id": "66666666-7777-8888-9999-000000000000",
        "path": "/public/Sales/Revenue.datafor",
        "title": "Revenue",
        "folder": false,
        "fileSize": 4120,
        "createdDate": "1759900100000",
        "lastModifiedDate": "1759986500000"
      },
      "children": []
    }
  ]
}
```

`name` is the name in the repository path; `title` is the name shown in the console. Dates are epoch milliseconds as strings.

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "msg": "..."}` | `runuser` or `runrole` was sent by a non-administrator, or the tree could not be built. |

A path the caller cannot read returns an empty body or no `children`, not an error.

Related: [Get folder's children](/api/Folders/Get%20folder's%20children/), [Search](/api/Files/Search/)
