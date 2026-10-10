---
title: Download a model
permalink: /api/Models/Download a model/
tags:
  - api
  - Models
description: Download the Mondrian schema XML of one analysis model.
createTime: 2026/10/10 10:00:00
---
Returns the schema of one analysis model as an XML file named after its display name. If the model also has annotations, both files come back in a zip.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/datasource/analysis/{catalog}/download` |
| Permission | **Read** on the model |
| Content type | none |

The schema is returned in the current table-link format, as [Upgrade a model](/api/Models/Upgrade%20a%20model/) would produce. To get the file exactly as stored, call `GET /plugin/datafor-modeler/api/datasource/analysis/catalog/{catalog}?raw=true`.

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `catalog` | path | string | Yes | Model name (not the display name), URL-encoded. |

## Example

```bash
curl -u admin:password \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/datasource/analysis/SalesModel/download" \
  -o SalesModel.xml
```

On success the body is the XML (`application/xml`) or a zip (`application/zip`).

## Errors

| HTTP status | When |
| --- | --- |
| `401` | Access to the model was denied. |
| `400` or `500` | The model does not exist or could not be read. |

Related: [Download models](/api/Models/Download%20models/), [Add or modify a model](/api/Models/Add%20or%20modify%20a%20model/)
