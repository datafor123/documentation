---
title: SAML Consumer
permalink: /api/Extension Plugins/SAML2/saml consumer/
tags:
  - api
  - Extension Plugins
  - Authentication
  - SAML2
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/datafor/saml/consumer
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

**Description**
- This API is used as the **SAML Assertion Consumer Service (ACS)**, responsible for processing SAML authentication responses.
- Configure this URL in the **redirectUrl** section of your SAML2 Identity Provider (IdP).
- After successful authentication via SAML2, the system redirects the user to the initial requested URL.

---

## **Params**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `Cookie`     | header   | string  | Yes      | Session cookie for authentication. |
| `Content-Type` | header | string  | Yes      | Must be `application/x-www-form-urlencoded`. |

---

### **Request Example**

```yaml
SAMLResponse: PHNhbWxwXXXXXXXX==
ReadyState: f92cdfec-782c-XXXXXX-a33edbf88f67
```

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `SAMLResponse` | body   | string  | Yes      | The **Base64-encoded SAML response** received from the IdP. |
| `ReadyState`  | body   | string  | No       | A state token to maintain session tracking after authentication. |

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | SAML authentication processed successfully. |
| 400              | Bad Request                                             | Invalid request or missing parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |