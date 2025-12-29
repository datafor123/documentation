---
title: Delete a role
permalink: /api/Roles/Delete a role/
tags: ["api","Roles"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/roles/delete
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
This API deletes an existing user role from the system. Only users with administrative privileges can perform this operation.

---

### **Request Example**
```yaml
authority: DEV
```

### **Parameters Schema**

| Name        | Location | Type   | Required | Description |
|------------|----------|--------|----------|-------------|
| `authority` | body    | string | **Yes**  | The name of the role to be deleted. |

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
  "msg": "Role not found",
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
| `success` | boolean | **Yes**  | Indicates whether the role was successfully deleted. |
| `msg`     | string  | No       | Response message (only present when the request fails). |

---
