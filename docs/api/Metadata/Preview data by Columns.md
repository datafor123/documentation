---
title: Preview data by Columns
permalink: /api/Metadata/Preview data by Columns/
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
/plugin/datafor-modeler/api/metadata/previewcolumn
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

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `body`       | body     | object  | **No**   | The request payload containing table and column details. |
| ├── `connection` | body | string  | **No**   | The name of the database connection. |
| ├── `schema` | body     | string  | **No**   | The schema containing the table. |
| ├── `table`  | body     | string  | **No**   | The table from which data will be previewed. |
| ├── `columns` | body    | string  | **No**   | JSON array of columns to be retrieved. If `detail` is not empty, it means a calculated column. |
| ├── `limit`  | body     | string  | **No**   | The maximum number of rows to return. |

### **Request Example**

```yaml
connection: foodmart
schema: foodmart
table: time_by_day
columns: '[{"name":"day_of_month","detail":""},{"name":"fiscal_period","detail":""},{"name":"month_of_year","detail":""},{"name":"quarter","detail":""},{"name":"the_date","detail":""},{"name":"the_day","detail":""},{"name":"the_month","detail":""},{"name":"the_year","detail":""},{"name":"time_id","detail":""},{"name":"week_of_year","detail":""}]'
limit: "50"
```

---

### **Response Examples**

```json
{
  "msg": "success",
  "data": [
    {
      "the_month": "January",
      "time_id": 738,
      "the_year": 1998,
      "month_of_year": 1,
      "the_day": "Wednesday",
      "day_of_month": 7,
      "week_of_year": 4,
      "quarter": "Q1",
      "the_date": "1998-01-07 00:00:00.0"
    },
    {
      "the_month": "January",
      "time_id": 739,
      "the_year": 1998,
      "month_of_year": 1,
      "the_day": "Thursday",
      "day_of_month": 8,
      "week_of_year": 4,
      "quarter": "Q1",
      "the_date": "1998-01-08 00:00:00.0"
    }
  ],
  "meta": [
    {
      "typeDesc": "Integer",
      "comments": "day_of_month",
      "originalColumnType": 5,
      "originalNullable": 0,
      "length": 4,
      "type": 5,
      "originalColumnTypeName": "int2",
      "name": "day_of_month"
    },
    {
      "typeDesc": "String",
      "comments": "fiscal_period",
      "originalColumnType": 12,
      "originalNullable": 0,
      "length": 30,
      "type": 2,
      "originalColumnTypeName": "varchar",
      "name": "fiscal_period"
    }
  ],
  "success": true
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data schema |
|------------------|---------|-------------|-------------|
| `200`           | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful, and the response contains preview data. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `msg`     | string  | **Yes**  | Message indicating the status of the request (e.g., `"success"`). |
| `data`    | array   | **Yes**  | The previewed data in a tabular format. |
| ├── `column_name` | mixed | **Yes** | The value of each column in the previewed data. |
| `meta`    | array   | **Yes**  | Metadata about the columns returned in the preview. |
| ├── `typeDesc` | string | **Yes** | Description of the column type (e.g., `"Integer"`, `"String"`). |
| ├── `comments` | string | **Yes** | Column description or comment. |
| ├── `originalColumnType` | integer | **Yes** | The original column type as per the database. |
| ├── `originalNullable` | integer | **Yes** | Indicates if the column is nullable (`0` for not nullable, `1` for nullable). |
| ├── `length` | integer | **Yes** | The length of the column. |
| ├── `type` | integer | **Yes** | Internal representation of column type. |
| ├── `originalColumnTypeName` | string | **Yes** | The original column type name in the database. |
| ├── `name` | string | **Yes** | The column name. |
| `success` | boolean | **Yes**  | A boolean flag indicating whether the request was processed successfully. |