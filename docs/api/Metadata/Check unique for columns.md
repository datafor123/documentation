---
title: Check unique for columns
permalink: /api/Metadata/Check unique for columns/
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
/plugin/datafor-modeler/api/metadata/checkunique
```

**Authorization**  
The current user must have read privileges for the specified connection.

---

### **Request Example**

```json
{
  "connection": "foodmart",
  "schema": "foodmart",
  "table": "time_by_day",
  "fields": [
    "the_year",
    "the_month"
  ]
}
```

---

## **Params**

| Name          | Location | Type      | Required | Description      |
|--------------|----------|-----------|----------|------------------|
| `Accept`     | header   | string    | No       | None             |
| `body`       | body     | object    | No       | None             |
| `connection` | body     | string    | Yes      | Connection name  |
| `schema`     | body     | string    | Yes      | Schema name      |
| `table`      | body     | string    | Yes      | Table name       |
| `fields`     | body     | array[string] | Yes  | Column names to check for uniqueness |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "code": "200",
  "data": true,
  "success": true
}
```

#### ❌ **Failure Response**
```json
{
  "code": "400",
  "data": false,
  "success": false,
  "msg": "Duplicate values found in specified columns"
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Columns checked successfully. |
| 400              | Bad Request                                             | Invalid input or duplicate values found. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks required privileges. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---

## **Response Data Schema**

| Name      | Type    | Required | Description |
|----------|--------|----------|-------------|
| `success` | boolean | Yes      | `true` if request was successful, `false` otherwise. |
| `data`    | boolean | Yes      | `true` if columns are unique, `false` if duplicates exist. |
| `code`    | string  | No       | Response status code (`200` for success, `400` for failure). |
| `msg`     | string  | No       | Error message (if applicable). |
