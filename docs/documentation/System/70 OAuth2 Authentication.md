---
title: OAuth2 Authentication
permalink: /documentation/System/OAuth2-Authentication/
tags: null
description: Let users sign in to Datafor through an OAuth 2.0 identity provider, configured on the Single sign-on settings page.
createTime: 2026/09/01 22:03:26
---

## Single sign-on page

LDAP, OAuth 2.0, SAML 2.0 and CAS are configured on one page: **Settings › Access & Integration › Single sign-on**. A card per method at the top shows its status: **On** (enabled), **Off** (configured but not enabled), or **Not set up** (the method's address field is empty: **LDAP URL**, **Authorization endpoint**, **IdP SSO URL** or **CAS server URL**); **Unknown** means the status could not be read. Select a card to show that method's settings below it; if the current method has unsaved changes, Datafor asks you to save or discard them first. The cards refresh after each save. Each method has an **Enable** switch; while it is off, the fields are locked and the page shows "Turn on to edit." The **New users** group sets up accounts for first-time users: **Create users on first sign-in**, **Default user type** and **Default role**.

See [LDAP](/documentation/System/LDAP/) for a screenshot of the page.

## 1. OAuth 2.0 settings

Select the **OAuth 2.0** card ("Sign in at the identity provider, then return"). Fields marked * are required while **Enable** is on. Take the endpoint URLs, client ID and client secret from your identity provider's application registration.

| Section | Field | What to enter | Notes |
| --- | --- | --- | --- |
| Authentication | **Enable** | Turn on to use OAuth 2.0 sign-in. | Turn on before editing the other fields. |
| Endpoint configuration | **Authorization endpoint** * | URL that starts the sign-in at the provider, e.g. `https://accounts.google.com/o/oauth2/v2/auth`. | While empty, the card shows **Not set up**. |
| Endpoint configuration | **Token endpoint** * | URL that exchanges the authorization code for an access token, e.g. `https://oauth2.googleapis.com/token`. | |
| Endpoint configuration | **UserInfo endpoint** * | URL that returns the signed-in user's details, e.g. `https://www.googleapis.com/oauth2/v2/userinfo`. | |
| Client credentials | **Client ID** * | Client ID of the application registered at the provider. | |
| Client credentials | **Client secret** * | Client secret of that application. | After saving, the secret is shown masked; click **Replace** to enter a new one. |
| Authorization settings | **Authorization code parameter** * | Name of the parameter that carries the authorization code, usually `code`. | |
| Authorization settings | **Grant type** * | Usually `authorization_code`. | |
| Authorization settings | **Scope** * | Scopes to request, separated by spaces, e.g. `openid profile email`. | |
| User attribute mapping | **User info request method** * | **GET** or **POST**, as the UserInfo endpoint expects. | |
| User attribute mapping | **Username JSONPath** * | JSONPath of the username in the UserInfo response, e.g. `$.preferred_username` or `$.email`. | |
| User attribute mapping | **Display name JSONPath** | JSONPath of the user's full name, e.g. `$.name`. | |
| User attribute mapping | **Email JSONPath** | JSONPath of the email address, e.g. `$.email`. | |
| Path rules | **Paths that skip single sign-on** | Paths that never go through single sign-on. | One path per line, or separated by commas. |
| Path rules | **Paths that require single sign-on** | Paths that always go through single sign-on. | One path per line, or separated by commas. |
| New users | **Create users on first sign-in** | Select to create the Datafor user automatically the first time a provider user signs in. | |
| New users | **Default user type** | User type given to users created this way, e.g. `Reader`. | Available only when **Create users on first sign-in** is selected. |
| New users | **Default role** | One or more roles given to users created this way. | Same as above. |

## 2. Save and test

1. Click **Save**. The button is available once something has changed.
2. Sign in through the provider in a separate browser session to check the setup. There is no **Test connection** button for OAuth 2.0.

- To switch OAuth 2.0 off, turn off **Enable** and click **Save**. With **Enable** off, Datafor saves without checking the required fields.
- If **Create users on first sign-in** is cleared when you save, **Default user type** and **Default role** are cleared as well.

## 3. Troubleshooting

| Problem | Likely cause | What to do |
| --- | --- | --- |
| The provider rejects the sign-in | Wrong **Client ID** or **Client secret** | Copy both again from the provider; use **Replace** to enter a new secret. |
| The provider reports a redirect URI mismatch | The redirect URI registered at the provider does not match the Datafor address | Correct the redirect URI in the provider's application settings. |
| The code exchange fails | Wrong **Token endpoint**, **Grant type** or **Authorization code parameter** | Check the values against the provider's documentation. |
| Sign-in succeeds at the provider but Datafor finds no user | **Username JSONPath** does not match the UserInfo response, or the **Scope** does not include the needed claims | Inspect the UserInfo response and adjust the JSONPath or the scopes. |
| No Datafor user is created on first sign-in | **Create users on first sign-in** is off | Select it, set **Default user type** and **Default role**, then save. |
