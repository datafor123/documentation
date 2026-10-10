---
title: Add or modify a model
permalink: /api/Models/Add or modify a model/
tags:
  - api
  - Models
description: Publish an analysis model from a Mondrian schema XML or zip, or replace an existing one.
createTime: 2026/09/01 22:03:26
---
Publishes an analysis model from a Mondrian schema file. The same call replaces an existing model when `overwrite` is `true`, and renames one when `origCatalogName` differs from the new name.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/mondrian/postAnalysis` |
| Permission | New model: Creator or Administrator user type. Existing model: **Edit** on the model. Both need **Read** on the connection named in `parameters` when it is new or changed. |
| Content type | `multipart/form-data` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `uploadAnalysis` | form | file | Yes | The schema as `.xml`, or a `.zip` containing the `.xml` (and optionally `annotations.xml`). `.xmi` files are rejected. |
| `catalogName` | form | string | No | Model name. Default: the `name` of the `<Schema>` element. If it differs, the XML's schema and cube names are changed to match. |
| `catalogCaption` | form | string | No | Display name. Default: the schema's `caption`, or the name. |
| `origCatalogName` | form | string | No | Current name of the model when renaming it. The old model is removed after the new one is saved. |
| `overwrite` | form | string | No | `true` to replace an existing model with the same name. Without it, publishing over an existing model fails with `Overwrite Denied`. |
| `parameters` | form | string | No | Model settings as `key=value` pairs separated by `;`, for example `DataSource=Sales DW;EnableXmla=false`. `DataSource` is the connection name. `useAuth=false` turns data policies off for the model and needs Full control on the connection. Default for an existing model: its current settings. |
| `acl` | form | JSON | No | ACL in the format of [Change acl for a model](/api/Models/Change%20acl%20for%20a%20model/), sent as a part with type `application/json` (in curl: `-F 'acl={...};type=application/json'`). A new model without `acl` gets Full control for the caller only. |
| `notUpdateAcl` | form | string | No | `true` to keep the existing model's ACL and ignore `acl`. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/mondrian/postAnalysis" \
  -F "uploadAnalysis=@SalesModel.xml" \
  -F "catalogName=SalesModel" \
  -F "catalogCaption=Sales" \
  -F "overwrite=true" \
  -F "parameters=DataSource=Sales DW;EnableXmla=false"
```

```json
{ "success": true, "status": 3 }
```

## Errors

HTTP 200 with `success: false`, a numeric `status` and a `msg`.

| `status` | Meaning | Typical `msg` |
| --- | --- | --- |
| `5` | Permission denied | `Overwrite Denied` (model exists and `overwrite` is not `true`), `Edit Denied`, `Create Denied`, `Connection READ permission is required: <connection>`, `Connection MANAGE permission is required to disable data policies` |
| `2` | Any other error, including an invalid schema file | `SQL_FRAGMENT_FORBIDDEN:<connection>` when the model contains SQL (SQL views, calculated column expressions) and the caller may not use SQL fragments on the connection |
| Other | Codes passed through from the platform importer, for example `6` (data source problem) or `8` (schema already exists) | |

`status` `3` means success.

Related: [Creating an analysis model](/documentation/Model/Creating-an-Analysis-Model/), [Verify a model](/api/Models/Verify%20a%20model/)
