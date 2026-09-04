---
title: Query backup configs
permalink: /api/Extension Plugins/Backup/Query backup configs/
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
/plugin/datafor-backup/api/query
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
(Empty body request)

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "msg": "",
  "data": [
    {
      "cron": "{\"complexJobTrigger\":{\"endTime\":null,\"startTime\":\"2024-11-15T11:12:00.000+08:00\",\"uiPassParam\":\"DAILY\",\"repeatCount\":-1,\"cronString\":\"TO_BE_GENERATED\",\"repeatInterval\":259200}}",
      "add_by": "admin",
      "trigger": "0 12 11 */3 * ? *",
      "nextRun": 1740712320000,
      "jobid": "admin\tBackupTaskAction\td90a02fa-f4b3-11ef-833b-14755bc39e02",
      "update_time": "2025-02-27 10:37:54.827",
      "folder": "backup/",
      "enable": "1",
      "name": "ll",
      "id": "51b51905fc0b482f995f0f32b48105ba",
      "state": "NORMAL",
      "update_by": "admin",
      "config": "[{\"id\":\"upload\"}]",
      "add_time": "2024-11-15 11:02:41.876"
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Backup configuration query successful. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---
