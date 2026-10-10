---
title: Get tables of a schema
permalink: /api/Metadata/Get tables of a schema/
tags:
  - api
  - Metadata
description: List the tables and views in one or more schemas of a connection, filtered by data security.
createTime: 2026/09/01 22:03:26
---
Lists the tables and views in one or more schemas, grouped by schema. Tables hidden from the caller by **Table & column access** rules are left out.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/metadata/tables` |
| Permission | **Read** on the connection. `all=true` needs **Full control** on the connection. |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `connection` | form | string | Yes | Connection name. |
| `schema` | form | string | No | A schema name, or a JSON array of names such as `["public","staging"]`. Ignored for file dataset connections. |
| `tables` | form | string | No | Instead of listing schemas, look up specific objects: a JSON array of `{"schema": "...", "name": "...", "type": "1"}`. Objects that do not exist are left out. |
| `includeCaption` | form | boolean | No | Default `false`. Add `caption` from the table dictionary. |
| `includeQuery` | form | boolean | No | Default `false`. Also list saved queries (`type` `3`) in the requested schemas. |
| `all` | form | boolean | No | Default `false`. `true` skips Table & column access filtering. |
| `refresh`, `usemeta` | form | boolean | No | Default `true`. Accepted for compatibility; they do not change the result. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/metadata/tables" \
  --data-urlencode "connection=Sales DW" \
  --data-urlencode 'schema=["public"]'
```

```json
{
  "success": true,
  "msg": "success",
  "databaseTypeName": "PostgreSQL",
  "databaseTypeShortName": "POSTGRESQL",
  "startQuote": "\"",
  "endQuote": "\"",
  "data": {
    "public": [
      { "schema": "public", "name": "orders", "fullname": "\"public\".\"orders\"", "type": "1" },
      { "schema": "public", "name": "v_customers", "fullname": "\"public\".\"v_customers\"", "type": "2" }
    ]
  },
  "typeCatalog": "..."
}
```

`type` is `1` for a table, `2` for a view, `3` for a saved query.

## Errors

HTTP 200 with `success: false`.

| `code` / `msg` | When |
| --- | --- |
| `msg`: `parameter connection cannot be empty` | `connection` is missing. |
| `msg`: `parameter tables is invalid` | `tables` is not a JSON array of objects. |
| `code` `"401"`, `msg`: `No administrative privileges:<connection>` | `all=true` without Full control on the connection. |
| `msg`: `CONNECTION_READ_FORBIDDEN: ...` | The caller lacks Read on the connection. |

Related: [Get Columns of tables](/api/Metadata/Get%20Columns%20of%20tables/), [Data Security](/documentation/Datasource/Data-Security/)
