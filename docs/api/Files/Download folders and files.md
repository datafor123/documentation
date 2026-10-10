---
title: Download folders and files
permalink: /api/Files/Download folders and files/
tags:
  - api
  - Files
description: Download several repository files and folders as one zip archive.
createTime: 2026/09/01 22:03:26
---
Downloads several repository files and folders in one zip archive. To download a single item, see [Download folder](/api/Folders/Download%20folder/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/repo/files/downloadList` |
| Permission | **Read** on every item |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathList` | form | string | Yes | A JSON array of repository paths, sent as one string, for example `["/public/Sales","/public/Finance/Budget.datafor"]`. |

The zip is named after the item when all paths share one title, otherwise after the closest common parent folder. Paths inside the zip are relative to that folder.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/downloadList" \
  --data-urlencode 'pathList=["/public/Sales","/public/Finance/Budget.datafor"]' \
  -o export.zip
```

On success the response body is the zip file (`Content-Type: application/zip`, file name in `Content-Disposition`).

## Errors

Errors are also returned with HTTP 200, as a plain-text attachment named `error.txt` instead of the zip. Check the `Content-Disposition` header before saving the body.

| `error.txt` content | When |
| --- | --- |
| Parser message | `pathList` is not a JSON array. |
| Other text | Export failed for another reason. |

A path that does not exist, or that the caller cannot read, makes the whole request fail. Check paths with [Get file tree](/api/Files/Get%20file%20tree/) first.

Related: [Upload files](/api/Files/Upload%20files/)
