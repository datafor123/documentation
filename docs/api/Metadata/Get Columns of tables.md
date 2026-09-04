---
title: Get Columns of tables
permalink: /api/Metadata/Get Columns of tables/
tags:
  - api
  - Metadata
description: null
createTime: 2026/09/01 22:03:26
---

### **Method**
`POST`

### **Request URL**
```html
/plugin/datafor-modeler/api/metadata/columns
```

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/json`

---

### **Preconditions**
- The current user needs **read privileges** to the database connection.

---

### **Parameters Schema**

| Name          | Location | Type   | Required | Description |
|--------------|----------|--------|----------|-------------|
| `body`       | body     | object | **No**   | The request payload containing the connection name and table details. |
| ├── `connection` | body | string | **No**   | The name of the database connection from which table metadata will be retrieved. |
| ├── `pairs`  | body     | string | **No**   | A JSON string containing a list of schema-table pairs that specify the target tables. |
| ├── `includeField` | body | string | **No**   | Boolean (`"true"`/`"false"`) indicating whether to include field metadata in the response. |

### **Request Example**

```yaml
connection: foodmart
pairs: '[{"schema":"public","table":"customer"},{"schema":"public","table":"inventory_fact_1997"},{"schema":"public","table":"sales_fact_1997"},{"schema":"public","table":"store"},{"schema":"public","table":"time_by_day"},{"schema":"public","table":"warehouse"},{"schema":"public","table":"warehouse_class"},{"schema":"public","table":"product_class"},{"schema":"public","table":"product"}]'
includeField: "true"
```

---

### **Response Examples**

```json
{
  "msg": "success",
  "endQuote": "\"",
  "data": [
    {
      "schema": "foodmart",
      "fields": [
        {
          "typeDesc": "Integer",
          "name": "customer_id",
          "dataType": 1,
          "originalColumnTypeName": "int4",
          "originalPrecision": 10,
          "originalScale": 0
        },
        {
          "typeDesc": "String",
          "name": "lname",
          "dataType": 2,
          "originalColumnTypeName": "varchar",
          "originalPrecision": 30
        }
      ],
      "table": "customer"
    }
  ],
  "success": true,
  "startQuote": "\""
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data schema |
|------------------|---------|-------------|-------------|
| `200`           | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful, and the response contains the table column metadata. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `msg`     | string  | **No**   | Message indicating the status of the request (e.g., `"success"`). |
| `endQuote` | string | **Yes**  | The character used as the end quote in SQL queries (e.g., `"\""` for double quotes). |
| `data`    | array   | **Yes**  | A list of database schemas and their corresponding table metadata. |
| ├── `schema` | string | **Yes** | The name of the database schema where the table is located. |
| ├── `fields` | array  | **Yes** | A list of column definitions within the table. |
| │   ├── `typeDesc` | string | **Yes** | A human-readable description of the column's data type (e.g., `"Integer"`, `"String"`). |
| │   ├── `name` | string | **Yes** | The column name as defined in the database. |
| │   ├── `dataType` | integer | **Yes** | The internal data type representation: `1` (Number), `2` (String), `3` (Date), `9` (Timestamp), `11` (Time). |
| │   ├── `originalColumnTypeName` | string | **Yes** | The native SQL column type (e.g., `"int4"`, `"varchar"`). |
| │   ├── `originalPrecision` | integer | **No** | The precision of numeric columns, if applicable. |
| │   ├── `originalScale` | integer | **No** | The scale of numeric columns, if applicable. |
| `table`   | string  | **Yes**  | The name of the table for which column metadata is returned. |
| `success` | boolean | **Yes**  | A boolean flag indicating whether the request was processed successfully. |
| `startQuote` | string | **Yes** | The character used as the start quote in SQL queries (e.g., `"\""` for double quotes). |

---
