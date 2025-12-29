---
title: Register
permalink: /api/Register/Register/
tags: ["api","Users","Register"]
description: 
---

Here is the fully **translated and professional** version of your API documentation in **English** while maintaining completeness and clarity:

---

## **User Registration API**

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user/register
```

**Authorization**  
Authentication is **not required** to use this API.

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API registers a new user account by providing user details and a verification code. The email address must be unique, and the registration code must be valid.

---

### **Request Example**
```json
{
  "company": "Datafor",
  "dept": "IT",
  "description": "dev",
  "dob": "2001-01-01",
  "email": "a@a.com",
  "mobile": "111",
  "name": "Administrator",
  "password": "password",
  "title": "Developer",
  "username": "dev",
  "code": "037173"
}
```

### **Parameters Schema**

| Name        | Location | Type   | Required | Description |
|------------|----------|--------|----------|-------------|
| `company`  | body    | string | No       | The name of the company the user belongs to. |
| `dept`     | body    | string | No       | The department the user is associated with. |
| `description` | body | string | No       | A brief description of the user. |
| `dob`      | body    | string | No       | The user's date of birth (format: `YYYY-MM-DD`). |
| `email`    | body    | string | **Yes**  | The email address used for registration. |
| `mobile`   | body    | string | No       | The user's mobile phone number. |
| `name`     | body    | string | **Yes**  | The full name of the user. |
| `password` | body    | string | **Yes**  | The password for the new account. |
| `title`    | body    | string | No       | The user's job title. |
| `username` | body    | string | **Yes**  | The username for login. |
| `code`     | body    | string | **Yes**  | The registration verification code sent to the email. |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "success": true
}
```

### **Failure Response (HTTP 200)**
```json
{
  "msg": "Email already exists",
  "code": 409,
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
| `msg`     | string  | No       | Response message (only present when the request fails). |
| `code`    | integer | No       | HTTP status code indicating the failure reason. |
| `success` | boolean | **Yes**  | Indicates whether the request was successful. |

---

This version ensures clarity, professionalism, and consistency with industry-standard API documentation. Let me know if you need further adjustments! 🚀