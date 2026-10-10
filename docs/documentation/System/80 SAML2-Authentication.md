---
title: SAML2 Authentication
permalink: /documentation/System/SAML2/
tags:
  - SAML
  - Authentication
description: Let users sign in to Datafor through a SAML 2.0 identity provider, configured on the Single sign-on settings page.
createTime: 2026/09/01 22:03:26
---

SAML 2.0 is set up on **Settings › Access & Integration › Single sign-on**. For the page, the sign-in flow, the addresses to register at the provider and the **New users** settings, see [Single Sign-On Overview](/documentation/System/Single-Sign-On/).

## 1. Register Datafor at the identity provider

Create an application (service provider) for Datafor at your IdP with these values:

| IdP setting | Value |
| --- | --- |
| Assertion Consumer Service (ACS) / reply URL | `https://your-server/datafor/saml/consumer` (HTTP POST binding) |
| Entity ID / identifier | The same value you enter in **SP entity ID**, e.g. `bi` |

Use the address users open Datafor with, including the port if it is not the default, e.g. `http://your-server:28080/datafor/saml/consumer`. Datafor puts `fully-qualified-server-url` from `pentaho-solutions/system/server.properties` followed by `saml/consumer` into its sign-in requests as the ACS URL, so set that value to the same public address and restart Datafor (see [Protocol and host of the return addresses](/documentation/System/Single-Sign-On/#protocol-and-host-of-the-return-addresses)). After a successful sign-in, Datafor returns the user to the page they originally requested.

## 2. SAML 2.0 settings

Select the **SAML 2.0** card ("Sign in through a SAML identity provider"). Fields marked * are required while **Enable** is on. Take the IdP values from your identity provider (for example Microsoft Entra ID / Azure AD or Okta).

| Section | Field | What to enter | Notes |
| --- | --- | --- | --- |
| Identity provider (IdP) | **Enable** | Turn on to use SAML 2.0 sign-in. | Turn on before editing the other fields. |
| Identity provider (IdP) | **IdP SSO URL** * | Single sign-on URL of the IdP, e.g. `https://login.microsoftonline.com/<tenant-id>/saml2`. | While empty, the card shows **Not set up**. |
| Identity provider (IdP) | **IdP entity ID** * | Entity ID of the IdP, e.g. `https://sts.windows.net/<tenant-id>/`. | |
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

## 3. Save and test

1. Click **Save**. The button is available once something has changed.
2. Sign in through the IdP in a separate browser session to check the setup. There is no **Test connection** button for SAML 2.0.

- To switch SAML 2.0 off, turn off **Enable** and click **Save**. With **Enable** off, Datafor saves without checking the required fields.
- If **Create users on first sign-in** is cleared when you save, **Default user type** and **Default role** are cleared as well.

## 4. Troubleshooting

| Problem | Likely cause | What to do |
| --- | --- | --- |
| The SAML response is rejected | Wrong **IdP SSO URL**, **IdP entity ID** or **IdP signing certificate** | Copy the values again from the IdP metadata; paste the full certificate with its BEGIN and END lines. |
| The IdP does not recognize Datafor | **SP entity ID** differs from the value registered at the IdP | Use the same entity ID on both sides. |
| The IdP reports an invalid reply URL | The ACS URL registered at the IdP is not Datafor's | Register `https://your-server/datafor/saml/consumer` with the address users actually use. |
| Sign-in fails with time-related errors | Clocks of Datafor and the IdP differ | Synchronize the server clocks, or increase **Allowed clock skew**. |
| Username, email or name are missing | Attribute names do not match the assertion | Compare **Username attribute**, **Email attribute** and **Name attribute** with the claims the IdP sends. |
| No Datafor user is created on first sign-in | **Create users on first sign-in** is off | Select it, set **Default user type** and **Default role**, then save. |
