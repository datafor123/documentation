---
title: Get models
permalink: /api/Models/Get models/
tags:
  - api
  - Models
description: List the analysis models the caller can read, with their connection and owner.
createTime: 2026/10/10 10:00:00
---
Lists the analysis models the caller can read. Use `name` in the other Models endpoints; `title` is the display name.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/mondrian/list` |
| Permission | Any signed-in user; models without Read are left out |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `includeAccessMap` | query | boolean | No | Default `false`. Add `accessMap`: which of the `permissions` the caller has on each model. |
| `permissions` | query | string | No | Default `0\|1\|2\|4` (Read, Edit, Delete, Full control). |

## Example

```bash
curl -u admin:password \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/mondrian/list"
```

```json
{
  "success": true,
  "data": [
    {
      "name": "SalesModel",
      "title": "Sales",
      "owner": "admin",
      "ownerType": 0,
      "modifierId": "admin",
      "createdDate": 1759900000000,
      "lastModifiedDate": 1759986500000,
      "dataSourceStr": "DataSource=Sales DW;EnableXmla=false",
      "dataSource": { "name": "Sales DW", "canRead": true }
    }
  ]
}
```

`dataSource.canRead` tells whether the caller can read the model's connection, which is needed to query the model. Dates are epoch milliseconds.

`GET /plugin/datafor-modeler/api/mondrian/simplelist` returns a shorter list: `name`, `caption` and `description` (when they differ from the name) and `DataSource`, wrapped as `{"success": true, "code": "200", "data": [...]}`.

Related: [Analysis Model Overview](/documentation/Model/Analysis-Model-Overview/)
