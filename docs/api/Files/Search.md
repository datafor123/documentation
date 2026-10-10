---
title: Search
permalink: /api/Files/Search/
tags:
  - api
  - Files
description: Find reports, files, folders, and models whose display name contains a keyword.
createTime: 2026/09/01 22:03:26
---
Searches the display names (titles) of items the caller can read in `/public`, the caller's home folder, and the analysis models. Matching is case-insensitive and finds the keyword anywhere in the title. Results are a flat list.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/repo/files/search` |
| Permission | Any signed-in user; only readable items are returned |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `word` | query | string | Yes | Keyword. An empty value returns every readable item. |
| `showHidden` | query | boolean | No | Default `false`. Include hidden items. |
| `includeAccessMap` | query | boolean | No | Default `false`. Compute which of the `permissions` the caller has on each item. |
| `permissions` | query | string | No | Default `0\|1\|2\|4` (Read, Edit, Delete, Full control). |
| `includeMetadata` | query | boolean | No | Default `false`. Compute the item's metadata. |
| `includeAcls` | query | boolean | No | Default `false`. Include each item's ACL. |
| `includeSysDirs` | query | boolean | No | Default `false`. Include system folders. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/search" \
  --data-urlencode "word=revenue"
```

```json
{
  "success": true,
  "data": [
    {
      "name": "Revenue.datafor",
      "id": "66666666-7777-8888-9999-000000000000",
      "path": "/public/Sales/Revenue.datafor",
      "title": "Revenue",
      "folder": false,
      "fileSize": 4120,
      "creatorId": "admin",
      "createdDate": "1759900100000",
      "lastModifiedDate": "1759986500000"
    },
    {
      "name": "Revenue",
      "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "path": "/etc/mondrian/Revenue",
      "title": "Revenue",
      "folder": true
    }
  ]
}
```

Analysis models appear as folders under `/etc/mondrian`.

Related: [Get file tree](/api/Files/Get%20file%20tree/), [Quick tour of the console](/documentation/Console/Quick-Tour-of-the-Console/)
