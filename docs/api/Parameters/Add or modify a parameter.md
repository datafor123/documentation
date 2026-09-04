---
title: Add or modify a parameter
permalink: /api/Parameters/Add or modify a parameter/
tags:
  - api
  - Parameters
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/parameter/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

### **Request Example**

```yaml
id: dev
name: dev
desc: for develop
datatype: "2"
type: "3"
dbconn: ""
schema: ""
default: "3"
detail: '[{"name":"dev","value":"a"},{"name":"dev","value":"b"}]'
```

---

### **Parameters Schema**

| Name       | Location | Type     | Required | Description |
|------------|----------|----------|----------|-------------|
| `body`     | body     | object   | no       | The request body containing the parameter data. |
| ├── `id`   | body     | string   | no       | If empty, the parameter will be added; otherwise, it will be updated. |
| ├── `name` | body     | string   | yes      | The name of the parameter. |
| ├── `desc` | body     | string   | no       | A description of the parameter. |
| ├── `datatype` | body  | string   | no       | The datatype of the parameter. Possible values: `1` (NUMBER), `2` (STRING), `9` (TIMESTAMP). |
| ├── `type` | body     | string   | yes      | The type of the parameter. Possible values: `1` (list), `2` (SQL), `3` (filter). |
| ├── `dbconn` | body   | string   | no       | Database connection string, if applicable. |
| ├── `schema` | body   | string   | no       | The schema name, if applicable. |
| ├── `default` | body  | string   | no       | The default value for the parameter. |
| ├── `detail` | body   | string   | no       | A JSON array or SQL query detailing the parameter values. |

---

### **Enum Values**

| Name        | Value   |
|-------------|---------|
| `datatype`  | `1`     |
| `datatype`  | `2`     |
| `datatype`  | `9`     |
| `type`      | `1`     |
| `type`      | `2`     |
| `type`      | `3`     |

---

### **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning                                                                  | Description | Data Schema |
|------------------|--------------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | none        | Inline      |

---

### **Response Data Schema (HTTP 200)**

| Name        | Type    | Required | Description                            |
|-------------|---------|----------|----------------------------------------|
| `msg`       | string  | No       | The message indicating the result.     |
| `success`   | boolean | Yes      | Indicates whether the operation was successful. |
