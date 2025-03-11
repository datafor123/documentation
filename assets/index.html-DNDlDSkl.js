import{_ as e,c as r,a as s,o as n}from"./app-9c0YdfaY.js";const o="/documentation/assets/1739629578601-4eZF-c9Z.png",a={};function i(d,t){return n(),r("div",null,t[0]||(t[0]=[s('<p>Datafor allows administrators to configure the mail server, enabling the system to send automated notification emails, such as <strong>alert notifications</strong> and <strong>forgotten password emails</strong>.</p><h2 id="_1-accessing-mail-server-settings" tabindex="-1"><a class="header-anchor" href="#_1-accessing-mail-server-settings"><span>1. Accessing Mail Server Settings</span></a></h2><ol><li><strong>Log in to the Datafor admin panel</strong>.</li><li>In the left-hand menu navigation, click <strong>“Settings”</strong>.</li><li>Under <strong>“Settings”</strong>, select <strong>“Mail Server”</strong>.</li></ol><div align="left"><img src="'+o+'" width="67%"></div><h2 id="_2-configuring-the-mail-server" tabindex="-1"><a class="header-anchor" href="#_2-configuring-the-mail-server"><span>2. Configuring the Mail Server</span></a></h2><p>On the <strong>Mail Server</strong> configuration page, fill in the following SMTP server details:</p><h3 id="required-fields" tabindex="-1"><a class="header-anchor" href="#required-fields"><span><strong>Required Fields</strong></span></a></h3><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><strong>Host Name (SMTP)</strong></td><td>The SMTP server address, e.g., <code>smtp.163.com</code>.</td></tr><tr><td><strong>Port</strong></td><td>The server port number. Common ports include: <br> - <code>25</code> (Unencrypted) <br> - <code>465</code> (SSL) <br> - <code>587</code> (TLS)</td></tr><tr><td><strong>Email Account</strong></td><td>The email address used to send messages.</td></tr><tr><td><strong>Password</strong></td><td>The SMTP login password for the email account (some providers may require an authorization code instead).</td></tr><tr><td><strong>Server Type</strong></td><td>The type of mail server. Select <code>SMTP</code>.</td></tr><tr><td><strong>Email “From” Address</strong></td><td>The sender email address, usually the same as <strong>Email Account</strong>.</td></tr><tr><td><strong>Email “From” Name</strong></td><td>The display name of the sender</td></tr></tbody></table><h3 id="optional-fields" tabindex="-1"><a class="header-anchor" href="#optional-fields"><span><strong>Optional Fields</strong></span></a></h3><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><strong>make use of Start TLS</strong></td><td>Enables <strong>TLS encryption</strong> (recommended).</td></tr><tr><td><strong>make use of SSL</strong></td><td>Enables <strong>SSL encryption</strong> (recommended).</td></tr></tbody></table><h2 id="_3-testing-the-mail-server-connection" tabindex="-1"><a class="header-anchor" href="#_3-testing-the-mail-server-connection"><span>3. Testing the Mail Server Connection</span></a></h2><p>After configuration, it is recommended to test the mail server connection to ensure emails can be sent successfully.</p><ol><li>Click the <strong>“Test Email Server”</strong> button.</li><li>The system will attempt to send a test email to the address specified in <strong>Email Account</strong>.</li><li>If the test is successful, the mail server configuration is correct.</li><li>If the test fails, check whether the <strong>SMTP server address, port, account, and password</strong> are correct, and ensure the server is not blocked by a firewall.</li></ol><h2 id="_4-saving-the-configuration" tabindex="-1"><a class="header-anchor" href="#_4-saving-the-configuration"><span>4. Saving the Configuration</span></a></h2><p>Once the configuration is verified, click the <strong>“Save”</strong> button to apply the mail server settings.</p><h2 id="_5-common-issues-and-solutions" tabindex="-1"><a class="header-anchor" href="#_5-common-issues-and-solutions"><span>5. Common Issues and Solutions</span></a></h2><table><thead><tr><th>Issue</th><th>Possible Cause</th><th>Solution</th></tr></thead><tbody><tr><td><strong>Test email failed to send</strong></td><td>Incorrect server information</td><td>Verify that the <strong>SMTP address, port, account, and password</strong> are correct.</td></tr><tr><td><strong>Emails are blocked or not received</strong></td><td>Email provider security policies</td><td>Ensure the <strong>SMTP account</strong> allows third-party application access and try using an authorization code instead of a password.</td></tr><tr><td><strong>Incorrect port number</strong></td><td>Some email providers restrict ports</td><td>Try using <strong>25 / 465 / 587</strong> or check the email provider’s documentation.</td></tr><tr><td><strong>SSL/TLS-related errors</strong></td><td>Incompatible server security policies</td><td>Enable or disable <strong>TLS/SSL</strong> as required by the email provider.</td></tr></tbody></table>',17)]))}const c=e(a,[["render",i],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/documentation/System/Mail-Server-Configuration/","title":"Mail Server Configuration","lang":"en-US","frontmatter":{"title":"Mail Server Configuration","permalink":"/documentation/System/Mail-Server-Configuration/","tags":null,"description":null,"createTime":"2025/03/11 02:13:14"},"headers":[],"readingTime":{"minutes":1.4,"words":421},"git":{},"filePathRelative":"documentation/System/50 Mail Server Configuration.md"}');export{c as comp,g as data};
