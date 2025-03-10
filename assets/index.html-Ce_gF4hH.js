import{_ as e,c as n,a as o,o as r}from"./app-Ciz165Io.js";const a="/documentation/assets/1739676074547-BuZ3-OwV.png",i={};function s(d,t){return r(),n("div",null,t[0]||(t[0]=[o('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span><strong>Overview</strong></span></a></h2><p>OAuth2 authentication allows users to securely log in to Optimibi using third-party identity providers (e.g., <strong>Google, Microsoft, GitHub</strong>). This guide explains how to configure OAuth2 authentication in Optimibi, enabling <strong>single sign-on (SSO)</strong> functionality.</p><hr><h2 id="_1-accessing-oauth2-configuration" tabindex="-1"><a class="header-anchor" href="#_1-accessing-oauth2-configuration"><span><strong>1. Accessing OAuth2 Configuration</strong></span></a></h2><ol><li><p><strong>Log in</strong> to the <strong>Optimibi</strong> admin panel.</p></li><li><p>Navigate to <strong>Settings</strong> from the left-side menu.</p></li><li><p>Click on <strong>OAuth2</strong> under <strong>System Settings</strong>.</p></li></ol><div align="left"><img src="'+a+'" width="48%"></div><hr><h2 id="_2-oauth2-configuration-parameters" tabindex="-1"><a class="header-anchor" href="#_2-oauth2-configuration-parameters"><span><strong>2. OAuth2 Configuration Parameters</strong></span></a></h2><p>The following fields must be configured to enable OAuth2 authentication:</p><h3 id="_2-1-general-settings" tabindex="-1"><a class="header-anchor" href="#_2-1-general-settings"><span><strong>2.1 General Settings</strong></span></a></h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><strong>Enable OAuth2 Authentication</strong></td><td>Toggle this option to enable or disable OAuth2 authentication in Optimibi.</td></tr></tbody></table><hr><h3 id="_2-2-oauth2-endpoints" tabindex="-1"><a class="header-anchor" href="#_2-2-oauth2-endpoints"><span><strong>2.2 OAuth2 Endpoints</strong></span></a></h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><strong>Authorization Endpoint URL</strong></td><td>The OAuth2 authorization endpoint URL, used to initiate the authentication process. Example: <code>https://accounts.google.com/o/oauth2/v2/auth</code>.</td></tr><tr><td><strong>Token Endpoint URL</strong></td><td>The URL used to exchange the authorization code for an access token. Example: <code>https://oauth2.googleapis.com/token</code>.</td></tr><tr><td><strong>User Information Endpoint URL</strong></td><td>The URL used to fetch user details after authentication. Example: <code>https://www.googleapis.com/oauth2/v2/userinfo</code>.</td></tr></tbody></table><hr><h3 id="_2-3-client-credentials" tabindex="-1"><a class="header-anchor" href="#_2-3-client-credentials"><span><strong>2.3 Client Credentials</strong></span></a></h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><strong>Client ID</strong></td><td>The unique identifier assigned to your application by the OAuth2 provider.</td></tr><tr><td><strong>Client Secret</strong></td><td>A confidential key paired with the Client ID, used for secure authentication.</td></tr></tbody></table><hr><h3 id="_2-4-authorization-token-exchange" tabindex="-1"><a class="header-anchor" href="#_2-4-authorization-token-exchange"><span><strong>2.4 Authorization &amp; Token Exchange</strong></span></a></h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><strong>Authorization Code Key</strong></td><td>The parameter name for the authorization code returned by the OAuth2 provider. Default: <code>code</code>.</td></tr><tr><td><strong>Grant Type</strong></td><td>The OAuth2 authorization grant type. Example: <code>authorization_code</code>.</td></tr></tbody></table><hr><h3 id="_2-5-user-information-retrieval" tabindex="-1"><a class="header-anchor" href="#_2-5-user-information-retrieval"><span><strong>2.5 User Information Retrieval</strong></span></a></h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><strong>Access Scope</strong></td><td>The OAuth2 scopes specifying which user data should be accessed. Example: <code>email profile</code>.</td></tr><tr><td><strong>User Info Request Method</strong></td><td>The HTTP method used to request user information (<code>GET</code> or <code>POST</code>).</td></tr></tbody></table><hr><h3 id="_2-6-user-account-initialization" tabindex="-1"><a class="header-anchor" href="#_2-6-user-account-initialization"><span><strong>2.6 User Account Initialization</strong></span></a></h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><strong>Auto-create User</strong></td><td>If enabled, Optimibi will automatically create user accounts upon first login.</td></tr><tr><td><strong>Default User Type</strong></td><td>The default type assigned to newly created users (e.g., <code>Reader</code>).</td></tr><tr><td><strong>Default Role</strong></td><td>The default roles assigned to new users created via OAuth2 authentication.</td></tr></tbody></table><hr><h2 id="_3-configuring-oauth2-authentication" tabindex="-1"><a class="header-anchor" href="#_3-configuring-oauth2-authentication"><span><strong>3. Configuring OAuth2 Authentication</strong></span></a></h2><h3 id="step-1-enable-oauth2-authentication" tabindex="-1"><a class="header-anchor" href="#step-1-enable-oauth2-authentication"><span><strong>Step 1: Enable OAuth2 Authentication</strong></span></a></h3><ul><li>Toggle <strong>Enable OAuth2 Authentication</strong> to activate the feature.</li></ul><h3 id="step-2-configure-oauth2-endpoints" tabindex="-1"><a class="header-anchor" href="#step-2-configure-oauth2-endpoints"><span><strong>Step 2: Configure OAuth2 Endpoints</strong></span></a></h3><ul><li>Enter the <strong>Authorization Endpoint URL</strong> (e.g., <code>https://accounts.google.com/o/oauth2/v2/auth</code>).</li><li>Enter the <strong>Token Endpoint URL</strong> (e.g., <code>https://oauth2.googleapis.com/token</code>).</li><li>Enter the <strong>User Information Endpoint URL</strong> (e.g., <code>https://www.googleapis.com/oauth2/v2/userinfo</code>).</li></ul><h3 id="step-3-provide-client-credentials" tabindex="-1"><a class="header-anchor" href="#step-3-provide-client-credentials"><span><strong>Step 3: Provide Client Credentials</strong></span></a></h3><ul><li>Enter the <strong>Client ID</strong> and <strong>Client Secret</strong> provided by your OAuth2 provider.</li></ul><h3 id="step-4-configure-authentication-and-token-handling" tabindex="-1"><a class="header-anchor" href="#step-4-configure-authentication-and-token-handling"><span><strong>Step 4: Configure Authentication and Token Handling</strong></span></a></h3><ul><li>Set <strong>Authorization Code Key</strong> to <code>code</code>.</li><li>Set <strong>Grant Type</strong> to <code>authorization_code</code>.</li></ul><h3 id="step-5-configure-user-information-handling" tabindex="-1"><a class="header-anchor" href="#step-5-configure-user-information-handling"><span><strong>Step 5: Configure User Information Handling</strong></span></a></h3><ul><li>Define <strong>Access Scope</strong> (e.g., <code>email profile</code>).</li><li>Select <strong>User Info Request Method</strong> (<code>GET</code> or <code>POST</code>).</li></ul><h3 id="step-6-configure-user-account-management" tabindex="-1"><a class="header-anchor" href="#step-6-configure-user-account-management"><span><strong>Step 6: Configure User Account Management</strong></span></a></h3><ul><li>Enable <strong>Auto-create User</strong> if you want accounts to be created automatically.</li><li>Assign <strong>Default User Type</strong> (<code>Reader</code>, <code>Editor</code>, etc.).</li><li>Define <strong>Default Roles</strong> (e.g., <code>role2</code>, <code>role4</code>, <code>role5</code>).</li></ul><hr><h2 id="_4-saving-and-testing-configuration" tabindex="-1"><a class="header-anchor" href="#_4-saving-and-testing-configuration"><span><strong>4. Saving and Testing Configuration</strong></span></a></h2><ol><li>Click <strong>Save</strong> to apply the OAuth2 settings.</li><li>Perform a test login using OAuth2. <ul><li>If successful: The authentication flow should redirect to the Optimibi dashboard.</li><li>If failed: Check the <strong>OAuth2 endpoint URLs, Client ID, Client Secret, and grant type</strong>.</li></ul></li></ol><hr><h2 id="_5-common-issues-and-solutions" tabindex="-1"><a class="header-anchor" href="#_5-common-issues-and-solutions"><span><strong>5. Common Issues and Solutions</strong></span></a></h2><table><thead><tr><th>Issue</th><th>Possible Cause</th><th>Solution</th></tr></thead><tbody><tr><td><strong>Authentication fails</strong></td><td>Incorrect OAuth2 credentials</td><td>Verify <strong>Client ID</strong> and <strong>Client Secret</strong>.</td></tr><tr><td><strong>Redirect URI mismatch</strong></td><td>Misconfigured redirect settings</td><td>Ensure the redirect URI is correctly set in the OAuth2 provider settings.</td></tr><tr><td><strong>Invalid authorization code</strong></td><td>Expired or incorrect code</td><td>Ensure the <strong>Authorization Code Key</strong> is set correctly.</td></tr><tr><td><strong>User not created automatically</strong></td><td>Auto-create user disabled</td><td>Enable <strong>Auto-create User</strong> in settings.</td></tr><tr><td><strong>Access denied</strong></td><td>Insufficient permissions</td><td>Check the <strong>Access Scope</strong> settings.</td></tr></tbody></table><hr><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span><strong>Conclusion</strong></span></a></h2><p>By properly configuring OAuth2 authentication, Optimibi allows users to sign in securely using external identity providers. Ensure all parameters are correctly set and perform test logins before deploying OAuth2 authentication to end users.</p>',49)]))}const c=e(i,[["render",s],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/documentation/System/OAuth2-Authentication/","title":"OAuth2 Authentication","lang":"en-US","frontmatter":{"title":"OAuth2 Authentication","permalink":"/documentation/System/OAuth2-Authentication/","tags":null,"description":null,"createTime":"2025/03/10 19:04:05"},"headers":[],"readingTime":{"minutes":2.11,"words":634},"git":{},"filePathRelative":"documentation/System/70 OAuth2 Authentication.md"}');export{c as comp,g as data};
