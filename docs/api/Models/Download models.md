---
title: Download models
permalink: /api/Models/Download models/
tags:
  - api
  - Models
description: Download one or more analysis models as a zip archive.
createTime: 2026/09/01 22:03:26
---
Downloads analysis models as a zip archive that can be imported with [Upload files](/api/Files/Upload%20files/) (`importDir` can be left empty for model zips). For the schema XML of one model, see [Download a model](/api/Models/Download%20a%20model/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/datasource/analysis/catalogs/downloadList` |
| Permission | **Read** on each model |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `nameList` | form | string | Yes | A JSON array of model names, sent as one string, for example `["SalesModel","Finance"]`. |

The zip is named after the model's display name when one model is requested, otherwise `Models.zip`.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/datasource/analysis/catalogs/downloadList" \
  --data-urlencode 'nameList=["SalesModel","Finance"]' \
  -o Models.zip
```

On success the body is the zip (`Content-Type: application/zip`).

## Errors

Errors are returned with HTTP 200 as a plain-text attachment named `error.txt`. Check the `Content-Disposition` header before saving the body.

| `error.txt` content | When |
| --- | --- |
| `Not Found` | A requested model does not exist or the caller cannot read it. |
| Other text | `nameList` is not a JSON array, or the export failed. |

Related: [Backup and restore](/documentation/System/backup/)
