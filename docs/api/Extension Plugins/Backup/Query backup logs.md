---
title: Query backup logs
permalink: /api/Extension Plugins/Backup/Query backup logs/
tags:
  - api
  - Extension Plugins
  - Backup
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-backup/api/log/query
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user's user type **must be** `Administrator`.

---

## **Params**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `Cookie`     | header   | string  | Yes      | Session cookie for authentication. |
| `Content-Type` | header | string  | Yes      | Must be set to `application/json`. |

---

### **Request Example**

```json
{}
```

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "msg": "",
  "data": [
    {
      "cron": "{\"complexJobTrigger\":{\"endTime\":null,\"startTime\":\"2024-11-15T11:12:00.000+08:00\",\"uiPassParam\":\"DAILY\",\"repeatCount\":-1,\"daysOfWeek\":[\"1\",\"2\",\"3\",\"4\",\"5\"]}}",
      "update_time": "2025-02-26 11:12:00.35",
      "folder": "backup/",
      "add_by": "admin",
      "backupid": "51b51905fc0b482f995f0f32b48105ba",
      "name": "ll",
      "id": "Backup_2025.02.26-11.12.00.205+0800",
      "update_by": "admin",
      "config": "[{\"id\":\"upload\"}]",
      "add_time": "2025-02-26 11:12:00.207",
      "status": "1"
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Backup logs retrieved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |