---
title: CAS Authentication
permalink: /documentation/System/CAS-Authentication/
tags: null
description: Let users sign in to Datafor through a CAS server, configured on the Single sign-on settings page.
createTime: 2026/09/01 22:03:26
---

## Single sign-on page

LDAP, OAuth 2.0, SAML 2.0 and CAS are configured on one page: **Settings › Access & Integration › Single sign-on**. A card per method at the top shows its status: **On** (enabled), **Off** (configured but not enabled), or **Not set up** (the method's address field is empty: **LDAP URL**, **Authorization endpoint**, **IdP SSO URL** or **CAS server URL**); **Unknown** means the status could not be read. Select a card to show that method's settings below it; if the current method has unsaved changes, Datafor asks you to save or discard them first. The cards refresh after each save. Each method has an **Enable** switch; while it is off, the fields are locked and the page shows "Turn on to edit." The **New users** group sets up accounts for first-time users: **Create users on first sign-in**, **Default user type** and **Default role**.

See [LDAP](/documentation/System/LDAP/) for a screenshot of the page.

## 1. CAS settings

Select the **CAS** card ("Sign in through a CAS server"). Fields marked * are required while **Enable** is on.

| Section | Field | What to enter | Notes |
| --- | --- | --- | --- |
| Server | **Enable** | Turn on to use CAS sign-in. | Turn on before editing the other fields. |
| Server | **CAS server type** | CAS implementation of your server. | `jasig` (Jasig/Apereo CAS) is currently the only supported type. |
| Addresses | **CAS server URL** * | Main entry point of the CAS server, e.g. `http://127.0.0.1:8080/cas`. | While empty, the card shows **Not set up**. |
| Addresses | **Logout URL** * | CAS logout address, e.g. `http://127.0.0.1:8080/cas/logout`. | |
| Addresses | **Login URL** * | CAS login address that unauthenticated users are sent to, e.g. `http://127.0.0.1:8080/cas/login`. | |
| Path rules | **Paths that skip single sign-on** | Paths that never go through single sign-on, e.g. `/plugin/datafor-modeler/api,/Login`. | One path per line, or separated by commas. A request matches when its URL contains the path. |
| Path rules | **Paths that require single sign-on** | Paths that always go through single sign-on. | One path per line, or separated by commas. A request matches when its URL contains the path. |
| New users | **Create users on first sign-in** | Select to create the Datafor user automatically the first time a CAS user signs in. | |
| New users | **Default user type** | User type given to users created this way, e.g. `Creator`. | Available only when **Create users on first sign-in** is selected. |
| New users | **Default role** | One or more roles given to users created this way. | Same as above. |

## 2. Allow Datafor at the CAS server

CAS only issues tickets to services it knows. Add Datafor to the CAS server's service registry with a pattern that matches the address users open Datafor with, e.g. `^https?://your-server(:28080)?/datafor/.*`. If Datafor is not registered, the CAS login page refuses the request as an unauthorized service.

## 3. Save and test

1. Click **Save**. The button is available once something has changed.
2. Sign in through CAS in a separate browser session to check the setup. There is no **Test connection** button for CAS.

- To switch CAS off, turn off **Enable** and click **Save**. With **Enable** off, Datafor saves without checking the required fields.
- If **Create users on first sign-in** is cleared when you save, **Default user type** and **Default role** are cleared as well.

## 4. Troubleshooting

| Problem | Likely cause | What to do |
| --- | --- | --- |
| Sign-in through CAS fails | Wrong **CAS server URL**, **Login URL** or **Logout URL** | Check the addresses against your CAS server. |
| CAS reports an unauthorized or unknown service | Datafor is not registered at the CAS server | Add a service entry that matches the Datafor address (see section 2). |
| Users loop between Datafor and the CAS login page | CAS session configuration | Check the session settings on the CAS server. |
| A page that should be public asks for sign-in, or the reverse | Path rules | Adjust **Paths that skip single sign-on** and **Paths that require single sign-on**. |
| No Datafor user is created on first sign-in | **Create users on first sign-in** is off | Select it, set **Default user type** and **Default role**, then save. |
