---
title: Verify a model
permalink: /api/Models/Verify a model/
tags:
  - api
  - Models
description: Validate a model schema against its data connection without publishing it.
createTime: 2026/10/10 10:00:00
---
Loads a model schema against a data connection and reports errors and warnings, without publishing anything. Run it before [Add or modify a model](/api/Models/Add%20or%20modify%20a%20model/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/mondrian/verify` |
| Permission | **Read** on the connection. A schema that contains SQL needs permission to use SQL fragments on the connection. |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `xml` | body | string | Yes | The schema XML. |
| `datasource` | body | string | Yes | Connection name to validate against. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/mondrian/verify" \
  -H "Content-Type: application/json" \
  -d '{ "datasource": "Sales DW", "xml": "<Schema name=\"SalesModel\" ...>...</Schema>" }'
```

```json
{ "success": true, "code": "200" }
```

The schema loaded with warnings (treated as a failure):

```json
{ "success": false, "code": "400", "type": "2", "msg": "<warning 1>\n<warning 2>\n" }
```

## Errors

HTTP 200 with `success: false`.

| `code` | When |
| --- | --- |
| `400` | The schema loaded with warnings, listed in `msg`. |
| `403` | `CONNECTION_READ_FORBIDDEN:<connection>`, or `SQL_FRAGMENT_FORBIDDEN:<connection>` when the schema contains SQL the caller may not use on this connection. |
| `500` | The schema is invalid; `msg` describes the error. |

Related: [Model Diagnostics](/documentation/Model/Model-Diagnostics/)
