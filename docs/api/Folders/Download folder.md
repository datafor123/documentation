---
title: Download folder
permalink: /api/Folders/Download folder/
tags:
  - api
  - Folders
description: Download a folder as a zip, or a single file as a zip or as the raw file.
createTime: 2026/09/01 22:03:26
---
Downloads one folder or file. A folder is always returned as a zip; a file is returned as a zip unless `withManifest=false`. To download several items at once, see [Download folders and files](/api/Files/Download%20folders%20and%20files/).

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/repo/files/download` |
| Permission | **Read** on the item |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | query | string | Yes | Repository path, for example `/public/Sales`. |
| `withManifest` | query | boolean | No | Default `true`: the zip includes an export manifest with ACLs and metadata, so it can be imported with [Upload files](/api/Files/Upload%20files/). `false` for a file returns the file itself. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/download" \
  --data-urlencode "pathId=/public/Sales" \
  -o Sales.zip
```

On success the body is the zip (`application/zip`) or the file, with its name in `Content-Disposition`.

## Errors

Errors are returned with HTTP 200 as a plain-text attachment named `error.txt`. Check the `Content-Disposition` header before saving the body.

| `error.txt` content | When |
| --- | --- |
| `Invalid Parameter` | `pathId` is empty. |
| `Forbidden` | The path is not valid. |
| `Not Found` | The item does not exist or the caller cannot read it. |
| Other text | Export failed for another reason. |

Related: [Backup and restore](/documentation/System/backup/)
