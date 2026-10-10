---
title: Get schemas for a connection
permalink: /api/Metadata/Get schemas for a connection/
tags:
  - api
  - Metadata
description: List the schemas of a data connection and the SQL quoting rules of its database.
createTime: 2026/09/01 22:03:26
---
Lists the schemas of a data connection, marks the default one, and returns how the database quotes identifiers and literals.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/metadata/schemas` |
| Permission | **Read** on the connection |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `connection` | form | string | Yes | Connection name. |
| `refresh` | form | boolean | No | Default `true`. Accepted for compatibility; schemas are always read from the database. |

For a file dataset connection, the only schema is the connection's own name.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/metadata/schemas" \
  --data-urlencode "connection=Sales DW"
```

```json
{
  "success": true,
  "msg": "success",
  "databaseTypeName": "PostgreSQL",
  "databaseTypeShortName": "POSTGRESQL",
  "dbname": "sales",
  "default": "public",
  "data": [
    { "name": "public", "default": true },
    { "name": "staging" }
  ],
  "expresions": {
    "quoteField": "\"${v}\"",
    "quoteString": "'${v}'",
    "quoteDate": "DATE '${v}'",
    "quoteTime": "TIME '${v}'",
    "quoteTimestamp": "TIMESTAMP '${v}'",
    "allowsBetween": true,
    "specialMap": { "'": "''" },
    "joinTypes": ["inner", "left", "right", "full"]
  },
  "typeCatalog": "..."
}
```

| Field | Description |
| --- | --- |
| `data` | Schemas. The schema named like the database, or else `public`, or else the first one, has `default: true`. |
| `expresions` | Templates for quoting: replace `${v}` with the value. The key is spelled `expresions` in the response. |
| `typeCatalog` | Column types the database supports, used by the console's table editor (abridged here). |
| `data2`, `data3` | Raw schema lists from the two lookup methods; normally ignore them. |

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `parameter connection cannot be empty` | `connection` is missing. |
| `CONNECTION_READ_FORBIDDEN: ...` | The caller lacks Read on the connection. |
| Other text | The database could not be reached. |

Related: [Get tables of a schema](/api/Metadata/Get%20tables%20of%20a%20schema/), [Creating an analysis model](/documentation/Model/Creating-an-Analysis-Model/)
