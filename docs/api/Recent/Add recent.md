---
title: Add recent
permalink: /api/Recent/Add recent/
tags:
  - api
  - Recent
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/datafor/plugin/datafor/api/user-settings/recent
```

**Authorization**  
Authentication is required to use this API. For details on the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API adds recently accessed items to the user’s history. It allows tracking of frequently used resources for improved accessibility.

---

## **Parameters**

### **Query Parameters Schema**
| Name     | Location | Type   | Required | Description |
|----------|----------|--------|----------|-------------|
| `append`  | query   | string | No       | Determines whether to append the new recent item to the existing list. |
| `distinct` | query   | string | No       | Specifies whether duplicate entries should be filtered out. |

### **Body Parameters Schema**
| Name      | Location | Type        | Required | Description |
|----------|----------|------------|----------|-------------|
| `body`   | body     | array[object] | No       | A list of recently accessed items. |
| ├── `fullPath` | body | string  | **Yes**  | The absolute path of the accessed resource. |
| ├── `title`    | body | string  | **Yes**  | The display name of the accessed resource. |
| ├── `lastUse`  | body | integer | **Yes**  | The timestamp (in milliseconds) of the last access. |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "data": "[{\"fullPath\":\"/public/workshop.datafor\",\"lastUse\":1722844149964,\"title\":\"workshop\"}]",
  "success": true
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
| `data`    | string  | **Yes**  | JSON string representing the added recent items. |
| `success` | boolean | **Yes**  | Indicates whether the request was successful. |
