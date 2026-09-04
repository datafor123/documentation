---
title: Add or modify a rule for objects
permalink: /api/Data Security/Objs/Add or modify a rule for objects/
tags:
  - api
  - Data Security
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/auth/obj/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

**Preconditions**
- The current user’s type **cannot** be `SYS_Reader`.
- The current user must have **administrative privileges** for the connection.

---

### **Parameters Schema**

| Name                        | Location | Type     | Required | Description                                               |
|-----------------------------|----------|----------|----------|-----------------------------------------------------------|
| **body**                    | body     | object   | Yes      | JSON payload containing the rule details                  |
| ├── **dbconn**              | body     | string   | Yes      | Name of the database connection                           |
| ├── **enable**              | body     | string   | Yes      | `1` to enable, `0` to disable                             |
| ├── **desc**                | body     | string   | No       | Description of the rule                                   |
| ├── **configList**          | body     | array    | Yes      | List of object configurations                            |
| │   ├── **schema**         | body     | string   | Yes      | Schema name                                              |
| │   ├── **tbname**         | body     | string   | Yes      | Table name                                               |
| │   ├── **obj_type**       | body     | string   | Yes      | `1` for table, `2` for column                            |
| │   ├── **colname**        | body     | string   | No       | Column name (if `obj_type` is `2`)                       |
| │   ├── **visible**        | body     | string   | Yes      | `1`: Selected is visible, unselected is invisible        |
| │   │                     |          |          |          | `0`: Selected is invisible, unselected is visible        |
| │   ├── **grantedList**    | body     | array    | No       | List of users/roles granted access                       |
| │   │   ├── **name**       | body     | string   | Yes      | User or role name                                        |
| │   │   ├── **type**       | body     | string   | Yes      | `0` for user, `1` for role                               |

---

## **Response Examples**

```json
{
  "msg": "success",
  "endQuote": "\"",
  "success": true,
  "id": "371063d227944c5386fbe81faf8c3bc0",
  "startQuote": "\""
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name         | Type    | Required | Description                |
|-------------|---------|----------|----------------------------|
| `msg`       | string  | No       | Success message            |
| `endQuote`  | string  | No       | End quote character        |
| `success`   | boolean | Yes      | Indicates if the request was successful |
| `id`        | string  | Yes      | Unique identifier of the rule |
| `startQuote`| string  | No       | Start quote character      |