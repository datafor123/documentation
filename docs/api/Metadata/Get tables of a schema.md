---
title: Get tables of a schema
permalink: /api/Metadata/Get tables of a schema/
tags:
  - api
  - Metadata
description: null
createTime: 2026/09/01 22:03:26
---

## **POST Get tables of a schema**

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/metadata/tables
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

| Name            | Location | Type    | Required | Description |
|----------------|----------|---------|----------|-------------|
| `body`         | body     | object  | **No**   | The request payload containing details about the schema and connection. |
| ├── `connection` | body   | string  | **No**   | The name of the database connection for which tables will be retrieved. |
| ├── `schema`   | body     | string  | **No**   | The schema from which to retrieve table metadata. |
| ├── `includeQuery` | body | boolean | **No**   | Whether to include additional query-related metadata. |
| ├── `includeCaption` | body | boolean | **No**   | Whether to include captions for table names. |
| ├── `all`      | body     | boolean | **No**   | If `true`, the user must be an **administrator** of the connection. |

### **Request Example**

```yaml
connection: foodmart
schema: public
includeQuery: "false"
includeCaption: "false"
all: "false"
```

---

### **Response Examples**

```json
{
  "msg": "success",
  "endQuote": "\"",
  "data": {
    "foodmart": [
      {
        "schema": "foodmart",
        "name": "agg_l_03_sales_fact_1997",
        "fullname": "\"foodmart\".\"agg_l_03_sales_fact_1997\"",
        "type": "1"
      },
      {
        "schema": "foodmart",
        "name": "agg_lc_06_sales_fact_1997",
        "fullname": "\"foodmart\".\"agg_lc_06_sales_fact_1997\"",
        "type": "1"
      }
    ]
  },
  "success": true,
  "startQuote": "\""
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data schema |
|------------------|---------|-------------|-------------|
| `200`           | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful, and the response contains the list of tables. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `msg`     | string  | **Yes**  | Message indicating the status of the request (e.g., `"success"`). |
| `endQuote` | string  | **Yes**  | The character used for quoting identifiers at the end (e.g., `"`). |
| `data`    | object  | **Yes**  | The retrieved table metadata, grouped by schema name. |
| ├── `schemaName` | object | **Yes** | An object containing tables under a specific schema. |
| │   ├── `schema` | string | **Yes** | The name of the schema to which the table belongs. |
| │   ├── `name` | string | **Yes** | The name of the table. |
| │   ├── `fullname` | string | **Yes** | The fully qualified name of the table, including schema (e.g., `"foodmart"."agg_l_03_sales_fact_1997"`). |
| │   ├── `type` | string | **Yes** | The type of the table (`1` indicates a regular table). |
| `success` | boolean | **Yes**  | A boolean flag indicating whether the request was processed successfully. |
| `startQuote` | string | **Yes**  | The character used for quoting identifiers at the start (e.g., `"`). |