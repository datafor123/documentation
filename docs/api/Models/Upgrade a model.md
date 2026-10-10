---
title: Upgrade a model
permalink: /api/Models/Upgrade a model/
tags:
  - api
  - Models
description: Convert a model schema saved by an older modeler to the current format, without saving it.
createTime: 2026/09/01 22:03:26
---
Converts a Mondrian 4 schema saved by an older version of the modeler to the current format and returns the converted XML. Nothing is saved; publish the result with [Add or modify a model](/api/Models/Add%20or%20modify%20a%20model/).

The conversion turns `ForeignKeyLink` and `ReferenceLink` relationships into `TableLink`s (which carry join types and one-to-many and many-to-many relationships), adds a fact count measure, and removes generated attributes and empty annotations. Mondrian 3 schemas and schemas already in the current format are returned unchanged.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/mondrian/upgrade` |
| Permission | Any signed-in user |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `xml` | body | string | Yes | The schema XML. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/mondrian/upgrade" \
  -H "Content-Type: application/json" \
  -d '{ "xml": "<Schema name=\"SalesModel\" metamodelVersion=\"4.0\" ...>...</Schema>" }'
```

```json
{
  "success": true,
  "code": "200",
  "data": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Schema name=\"SalesModel\" ...>...</Schema>"
}
```

## Errors

| `code` | When |
| --- | --- |
| `500` | The XML could not be parsed or converted (`msg` has the reason). |

Related: [Download a model](/api/Models/Download%20a%20model/)
