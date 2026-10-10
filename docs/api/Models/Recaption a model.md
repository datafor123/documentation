---
title: Recaption a model
permalink: /api/Models/Recaption a model/
tags:
  - api
  - Models
description: Change the display name of an analysis model.
createTime: 2026/09/01 22:03:26
---
Changes the display name (caption) of a published model. The model name used in API calls and reports does not change.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/mondrian/recaption` |
| Permission | **Edit** on the model |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `catalogName` | form | string | Yes | Model name. |
| `catalogCaption` | form | string | Yes | New display name. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/mondrian/recaption" \
  --data-urlencode "catalogName=SalesModel" \
  --data-urlencode "catalogCaption=Sales (2026)"
```

```json
{ "success": true, "msg": "success" }
```

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `catalogName cannot be blank` | `catalogCaption` is empty (the message names the wrong field). |
| `origCatalogName cannot be blank` | `catalogName` is empty. |
| `error occured:Edit Denied` | The caller lacks Edit on the model. |
| `error occured:<reason>` | The model does not exist, or saving failed. |

Related: [Get models](/api/Models/Get%20models/)
