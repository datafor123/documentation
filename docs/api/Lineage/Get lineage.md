---
title: Get lineage
permalink: /api/Lineage/Get-lineage/
tags:
  - api
  - Lineage
  - Connections
  - Models
description: Get the lineage graph that links connections, models and report pages.
createTime: 2026/09/01 22:03:26
---

Returns the lineage graph of connections, models and pages (report files): which model reads from which connection, which page uses which model, and which page links to which other page. It is the data behind [Lineage Analysis](/documentation/Analysis/Lineage-Analysis/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/lineage/link` |
| Permission | Any signed-in user. The graph contains only the models and files the caller can read. |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathIds` | body | string[] | No | Repository paths of pages, such as `/public/Sales/Sales overview.datafor`. |
| `schemas` | body | string[] | No | Model names. |
| `connections` | body | string[] | No | Connection names. |

The starting point is the first non-empty list in the order `pathIds` > `schemas` > `connections`; a later list then only narrows the result:

| You send | You get |
| --- | --- |
| `pathIds` | Those pages, the pages they link to, the models they use and those models' connections. With `schemas` as well, only the pages that use one of the listed models. |
| `schemas` | Those models, their connections, the pages that use them and the pages those link to. With `connections` as well, only the models that read from a listed connection. |
| `connections` | Those connections, the models that read from them, and the pages that use those models. |
| Nothing (`{}`) | All readable pages in `/public` and in the caller's home folder, and all readable models. Connection nodes are not included in this case; the `connection/...` ids appear only in `links`. |

Without `pathIds`, pages are looked for in `/public` and the caller's home folder only.

## Example

The pages that depend on one model, with the model's connection:

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/lineage/link" \
  -H "Content-Type: application/json" \
  -d '{"schemas": ["Sales"]}'
```

```json
{
  "success": true,
  "objs": [
    {
      "lid": "schema/Sales",
      "type": "schema",
      "name": "Sales",
      "title": "Sales",
      "canRead": true,
      "dataSource": {"name": "SalesDB", "canRead": true, "canManage": true}
    },
    {
      "lid": "/public/Sales/Sales overview.datafor",
      "type": "page",
      "id": "<file-id>",
      "name": "Sales overview.datafor",
      "title": "Sales overview",
      "path": "/public/Sales/Sales overview.datafor",
      "canRead": true,
      "schemas": ["Sales"]
    },
    {
      "lid": "connection/SalesDB",
      "type": "connection",
      "name": "SalesDB",
      "title": "SalesDB",
      "canRead": true
    }
  ],
  "links": [
    {"sourceLid": "connection/SalesDB", "targetLid": "schema/Sales"},
    {"sourceLid": "schema/Sales", "targetLid": "/public/Sales/Sales overview.datafor"}
  ]
}
```

The response is not wrapped in `code`/`data`.

| Field | Description |
| --- | --- |
| `objs` | The nodes. `type` is `connection`, `schema` (model) or `page`. |
| `objs[].lid` | Node id used in `links`: `connection/<name>`, `schema/<name>`, or the file path for a page. |
| `objs[].schemas` | Pages: the models the page uses. |
| `objs[].refFiles` | Pages: the pages it links to (for example through drill-through). |
| `objs[].exist` | `false` on a linked page that no longer exists. |
| `objs[].canRead`, `objs[].msg` | `false` with a reason on a connection the caller cannot read. |
| `links` | The edges, from `sourceLid` to `targetLid`: connection → model, model → page, page → linked page. |

Pages also carry `pathTitle`, `createdDate`, `lastModifiedDate`, `versionId` and `hidden`; models carry the fields of the model list, such as `owner` and `lastModifiedDate`.

## Errors

The call does not fail for unknown names: a model that does not exist or that the caller cannot read is left out, and a page path that cannot be read is skipped. A body that is not JSON gives an HTTP 500 error.

Related: [Lineage Analysis](/documentation/Analysis/Lineage-Analysis/)
