---
title: Add a role
permalink: /api/Roles/Add a role/
tags: ["api","Roles"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/roles/insert
```

**Authorization**  
Authentication is **required** to use this API. The current user **must have Administrator privileges**.

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Preconditions**
- The current user's **user type must be "Administrator"** to execute this API.

---

## **Description**
This API creates a new user role with the specified authority level. Roles define user permissions and access control within the system.

---

### **Request Example**
```yaml
authority: DEV
```

### **Parameters Schema**

| Name        | Location | Type   | Required | Description |
|------------|----------|--------|----------|-------------|
| `authority` | body    | string | **Yes**  | The role name or authority level to be assigned. |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "success": true
}
```

### **Failure Response (Example)**
```json
{
  "msg": "Permission denied",
  "success": false
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `success` | boolean | **Yes**  | Indicates whether the role was successfully added. |
| `msg`     | string  | No       | Response message (only present when the request fails). |
