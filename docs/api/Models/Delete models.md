---
title: Delete models
permalink: /api/Models/Delete models/
tags:
  - api
  - Models
description: Delete one or more analysis models by name.
createTime: 2026/09/01 22:03:26
---
Deletes analysis models. Each model is handled separately: models the caller may delete are deleted even if others in the list fail, and the failures are reported in `msg`. A name that does not exist counts as deleted.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/datasource/analysis/deleteBatch` |
| Permission | **Delete** or **Full control** on each model. **Edit** is not enough. |
| Content type | `application/json` |

Reports built on a deleted model stop working.

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | string array | Yes | Model names (not display names), for example `["SalesModel", "Finance"]`. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/datasource/analysis/deleteBatch" \
  -H "Content-Type: application/json" \
  -d '["SalesModel", "Finance"]'
```

```json
{ "success": true }
```

When some models could not be deleted:

```json
{ "success": false, "msg": "Finance:Delete Denied: Finance;" }
```

### Deleting one model

`POST /plugin/datafor-modeler/api/datasource/analysis/{catalog}/remove` deletes a single model with the same permission rules. It returns HTTP 200 with an empty body on success, and HTTP 401 when the caller may not delete the model.

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/datasource/analysis/SalesModel/remove"
```

## Errors

| Response | When |
| --- | --- |
| `success: false`, `msg` lists `<model>:<reason>;` | One or more models could not be deleted, for example `Delete Denied` when the caller lacks Delete. |

Related: [Deleting requires Delete or Full control](/documentation/System/Permission-Evaluation-Overview/#deleting-requires-delete-or-full-control)
