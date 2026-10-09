---
title: SAML2 Authentication
permalink: /documentation/System/SAML2/
tags:
  - SAML
  - Authentication
description: Let users sign in to Datafor through a SAML 2.0 identity provider, configured on the Single sign-on settings page.
createTime: 2026/09/01 22:03:26
---

## Single sign-on page

LDAP, OAuth 2.0, SAML 2.0 and CAS are configured on one page: **Settings › Access & Integration › Single sign-on**. A card per method at the top shows its status: **On** (enabled), **Off** (configured but not enabled), or **Not set up** (the method's address field is empty: **LDAP URL**, **Authorization endpoint**, **IdP SSO URL** or **CAS server URL**); **Unknown** means the status could not be read. Select a card to show that method's settings below it; if the current method has unsaved changes, Datafor asks you to save or discard them first. The cards refresh after each save. Each method has an **Enable** switch; while it is off, the fields are locked and the page shows "Turn on to edit." The **New users** group sets up accounts for first-time users: **Create users on first sign-in**, **Default user type** and **Default role**.

See [LDAP](/documentation/System/LDAP/) for a screenshot of the page.

## 1. SAML 2.0 settings

Select the **SAML 2.0** card ("Sign in through a SAML identity provider"). Fields marked * are required while **Enable** is on. Take the IdP values from your identity provider (for example Microsoft Entra ID / Azure AD or Okta).

| Section | Field | What to enter | Notes |
| --- | --- | --- | --- |
| Identity provider (IdP) | **Enable** | Turn on to use SAML 2.0 sign-in. | Turn on before editing the other fields. |
| Identity provider (IdP) | **IdP SSO URL** * | Single sign-on URL of the IdP, e.g. `https://login.microsoftonline.com/9fdff6f1-4338...`. | While empty, the card shows **Not set up**. |
| Identity provider (IdP) | **IdP entity ID** * | Entity ID of the IdP, e.g. `https://sts.windows.net/9fdff6f1-4338...`. | |
| Identity provider (IdP) | **IdP signing certificate** * | X.509 certificate the IdP signs its responses with. | Paste it including `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`. |
| Service provider (SP) | **SP entity ID** * | Entity ID of Datafor as registered at the IdP, e.g. `bi`. | Must match the IdP configuration. |
| Service provider (SP) | **Allowed clock skew** * | Tolerated time difference between Datafor and the IdP, in minutes, e.g. `2`. | |
| Service provider (SP) | **Message lifetime** * | How long a SAML message is accepted, in seconds, e.g. `300`. | Protects against replayed messages. |
| User attribute mapping | **Username attribute** * | Assertion attribute that holds the username, e.g. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`. | |
| User attribute mapping | **Email attribute** | Attribute that holds the email address, e.g. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`. | |
| User attribute mapping | **Name attribute** | Attribute that holds the full name, e.g. `http://schemas.microsoft.com/identity/claims/displayname`. | |
| URL management | **Paths that skip single sign-on** | Paths that never go through single sign-on. | One path per line, or separated by commas. |
| URL management | **Paths that require single sign-on** | Paths that always go through single sign-on. | One path per line, or separated by commas. |
| New users | **Create users on first sign-in** | Select to create the Datafor user automatically the first time an IdP user signs in. | |
| New users | **Default user type** | User type given to users created this way, e.g. `Reader`. | Available only when **Create users on first sign-in** is selected. |
| New users | **Default role** | One or more roles given to users created this way. | Same as above. |

## 2. Save and test

1. Click **Save**. The button is available once something has changed.
2. Sign in through the IdP in a separate browser session to check the setup. There is no **Test connection** button for SAML 2.0.

- To switch SAML 2.0 off, turn off **Enable** and click **Save**. With **Enable** off, Datafor saves without checking the required fields.
- If **Create users on first sign-in** is cleared when you save, **Default user type** and **Default role** are cleared as well.

## 3. Troubleshooting

| Problem | Likely cause | What to do |
| --- | --- | --- |
| The SAML response is rejected | Wrong **IdP SSO URL**, **IdP entity ID** or **IdP signing certificate** | Copy the values again from the IdP metadata; paste the full certificate with its BEGIN and END lines. |
| The IdP does not recognize Datafor | **SP entity ID** differs from the value registered at the IdP | Use the same entity ID on both sides. |
| Sign-in fails with time-related errors | Clocks of Datafor and the IdP differ | Synchronize the server clocks, or increase **Allowed clock skew**. |
| Username, email or name are missing | Attribute names do not match the assertion | Compare **Username attribute**, **Email attribute** and **Name attribute** with the claims the IdP sends. |
| No Datafor user is created on first sign-in | **Create users on first sign-in** is off | Select it, set **Default user type** and **Default role**, then save. |
