---
title: Get schemas for a connection
permalink: /api/Metadata/Get schemas for a connection/
tags:
  - api
  - Metadata
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/metadata/schemas
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user needs **read privileges** to the database connection.

---

### **Parameters Schema**

| Name          | Location | Type   | Required | Description |
|--------------|----------|--------|----------|-------------|
| `Accept`     | header   | string | **No**   | The expected response content type (e.g., `application/json`). |
| `body`       | body     | object | **No**   | The request payload containing the connection name. |
| ├── `connection` | body | string | **No**   | The name of the database connection for which schemas will be retrieved. |

### **Request Example**

```yaml
connection: foodmart
```

---

### **Response Examples**

```json
{
  "msg": "success",
  "databaseTypeName": "PostgreSQL",
  "default": "foodmart",
  "data": [
    {
      "default": true,
      "name": "foodmart"
    },
    {
      "default": false,
      "name": "information_schema"
    },
    {
      "default": false,
      "name": "pg_catalog"
    },
    {
      "default": false,
      "name": "public"
    }
  ],
  "dbname": "foodmart",
  "success": true,
  "expresions": {
    "quoteField": "\"${v}\"",
    "quoteDate": "DATE '${v}'",
    "quoteTime": "TIME '${v}'",
    "specialMap": {
      "'": "''"
    },
    "quoteString": "'${v}'",
    "joinTypes": [
      "inner",
      "left",
      "right",
      "full"
    ],
    "allowsBetween": true,
    "quoteTimestamp": "TIMESTAMP '${v}'"
  }
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data schema |
|------------------|---------|-------------|-------------|
| `200`           | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful, and the response contains the list of schemas. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `msg`     | string  | **No**   | Message indicating the status of the request (e.g., `"success"`). |
| `databaseTypeName` | string | **Yes**  | The type of database (e.g., `"PostgreSQL"`). |
| `default` | string  | **Yes**  | The default schema name for the connection. |
| `data`    | array   | **Yes**  | A list of available schemas in the database. |
| ├── `default` | boolean | **No** | `true` if the schema is the default schema, otherwise `false`. |
| ├── `name` | string | **Yes** | The schema name. |
| `dbname`  | string  | **Yes**  | The name of the database associated with the connection. |
| `success` | boolean | **Yes**  | A boolean flag indicating whether the request was processed successfully. |
| `expresions` | object | **Yes** | A collection of SQL expression formatting rules used by the database. |
| ├── `quoteField` | string | **Yes** | SQL syntax for quoting field names (e.g., `"\"${v}\""` replaces `${v}` with the field name). |
| ├── `quoteDate` | string | **Yes** | SQL syntax for quoting date values (e.g., `"DATE '${v}'"`). |
| ├── `quoteTime` | string | **Yes** | SQL syntax for quoting time values (e.g., `"TIME '${v}'"`). |
| ├── `specialMap` | object | **Yes** | A mapping of special characters to their escaped representations. |
| │   ├── `'` | string | **Yes** | The single quote character (`'`) is replaced with double single quotes (`''`). |
| ├── `quoteString` | string | **Yes** | SQL syntax for quoting string values (e.g., `"'${v}'"`). |
| ├── `joinTypes` | array | **Yes** | A list of supported SQL join types (e.g., `"inner"`, `"left"`, `"right"`, `"full"`). |
| ├── `allowsBetween` | boolean | **Yes** | Indicates whether the `BETWEEN` operator is allowed in SQL expressions. |
| ├── `quoteTimestamp` | string | **Yes** | SQL syntax for quoting timestamp values (e.g., `"TIMESTAMP '${v}'"`). |