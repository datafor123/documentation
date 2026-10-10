---
title: Check a model if exists
permalink: /api/Models/Check a model if exists/
tags:
  - api
  - Models
description: Check whether an analysis model name is already in use.
createTime: 2026/09/01 22:03:26
---
Reports whether a model with the given name exists, whether or not the caller can read it. Use it before publishing to decide whether to send `overwrite=true` or pick another name.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/mondrian/checkexists` |
| Permission | Any signed-in user |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | query | string | Yes | Model name (not the display name). |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/mondrian/checkexists" \
  --data-urlencode "name=SalesModel"
```

```json
{ "success": true, "exists": true }
```

Related: [Add or modify a model](/api/Models/Add%20or%20modify%20a%20model/)
