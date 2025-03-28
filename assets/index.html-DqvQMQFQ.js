import{_ as a,c as e,a as t,o as i}from"./app-1YGVVx1Y.js";const n={};function o(r,s){return i(),e("div",null,s[0]||(s[0]=[t(`<p>This guide provides instructions for migrating the Datafor repository database to a user-defined PostgreSQL database environment.</p><blockquote><p><strong>Important Notice</strong>: Before proceeding, ensure that you have completed a <strong>full backup</strong> of the system to prevent data loss or service disruption due to misconfiguration.</p></blockquote><h2 id="_1-prerequisites-and-preparation" tabindex="-1"><a class="header-anchor" href="#_1-prerequisites-and-preparation"><span>1. Prerequisites and Preparation</span></a></h2><ul><li><strong>Verify PostgreSQL Environment</strong>: Ensure that PostgreSQL is correctly installed and accessible.</li><li><strong>Stop Datafor Services</strong>: Before migration or configuration, stop Datafor services to avoid data conflicts.</li></ul><h2 id="_2-initializing-the-repository-database" tabindex="-1"><a class="header-anchor" href="#_2-initializing-the-repository-database"><span>2. Initializing the Repository Database</span></a></h2><h3 id="_2-1-modify-database-initialization-scripts" tabindex="-1"><a class="header-anchor" href="#_2-1-modify-database-initialization-scripts"><span>2.1 Modify Database Initialization Scripts</span></a></h3><ol><li><p>Navigate to <code>data/postgresql/</code> and edit the following SQL files:</p><ul><li><code>create_jcr_postgresql.sql</code></li><li><code>create_quartz_postgresql.sql</code></li><li><code>create_repository_postgresql.sql</code></li><li><code>create_upload_postgresql.sql</code></li></ul></li><li><p>Locate the following SQL statement (example from <code>create_jcr_postgresql.sql</code>):</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> USER</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> jcr_user</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> PASSWORD</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">password</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Replace <code>&#39;password&#39;</code> with a <strong>strong password</strong> that complies with security policies and keep it securely stored.</p></li></ol><h3 id="_2-2-execute-database-initialization" tabindex="-1"><a class="header-anchor" href="#_2-2-execute-database-initialization"><span>2.2 Execute Database Initialization</span></a></h3><ol><li><p>Use <code>psql</code> to connect to the PostgreSQL server:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">psql</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -h</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">database_hos</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">t</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">por</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">t</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -U</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> postgres</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> postgres</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Example</strong>:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">psql</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -h</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 127.0.0.1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5432</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -U</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> postgres</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> postgres</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Execute all SQL files located in <code>data/postgresql/</code> to complete the database initialization.</p></li></ol><h2 id="_3-configuring-datafor-to-connect-to-an-independent-postgresql-database" tabindex="-1"><a class="header-anchor" href="#_3-configuring-datafor-to-connect-to-an-independent-postgresql-database"><span>3. Configuring Datafor to Connect to an Independent PostgreSQL Database</span></a></h2><h3 id="_3-1-modify-tomcat-data-source-configuration" tabindex="-1"><a class="header-anchor" href="#_3-1-modify-tomcat-data-source-configuration"><span>3.1 Modify Tomcat Data Source Configuration</span></a></h3><ul><li><p><strong>File Path</strong>: <code>tomcat/conf/server.xml</code></p></li><li><p>Instructions</p><p>: Locate the</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;Context path=&quot;/datafor&quot; docBase=&quot;datafor&quot; debug=&quot;0&quot; privileged=&quot;true&quot;&gt;</span></span>
<span class="line"><span>         &lt;Resource name=&quot;jdbc/Hibernate&quot; auth=&quot;Container&quot; type=&quot;javax.sql.DataSource&quot;</span></span>
<span class="line"><span>  	factory=&quot;org.pentaho.di.core.database.util.DecryptingDataSourceFactory&quot; maxActive=&quot;200&quot; minIdle=&quot;10&quot; maxIdle=&quot;200&quot; initialSize=&quot;10&quot;</span></span>
<span class="line"><span>  	maxWait=&quot;10000&quot; username=&quot;hibuser&quot; password=&quot;password&quot;</span></span>
<span class="line"><span>  	driverClassName=&quot;org.postgresql.Driver&quot; url=&quot;jdbc:postgresql://localhost:25432/hibernate&quot;</span></span>
<span class="line"><span>  	testOnBorrow=&quot;true&quot;</span></span>
<span class="line"><span>  	validationQuery=&quot;select 1&quot; /&gt;</span></span>
<span class="line"><span>  	</span></span>
<span class="line"><span>           &lt;Resource name=&quot;jdbc/Quartz&quot; auth=&quot;Container&quot; type=&quot;javax.sql.DataSource&quot;</span></span>
<span class="line"><span>  	factory=&quot;org.pentaho.di.core.database.util.DecryptingDataSourceFactory&quot; maxActive=&quot;200&quot; minIdle=&quot;10&quot; maxIdle=&quot;200&quot; initialSize=&quot;10&quot;</span></span>
<span class="line"><span>  	maxWait=&quot;10000&quot; username=&quot;pentaho_user&quot; password=&quot;password&quot;</span></span>
<span class="line"><span>  	driverClassName=&quot;org.postgresql.Driver&quot; url=&quot;jdbc:postgresql://localhost:25432/quartz&quot;</span></span>
<span class="line"><span>  	testOnBorrow=&quot;true&quot;</span></span>
<span class="line"><span>  	validationQuery=&quot;select 1&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 	       &lt;Resource name=&quot;jdbc/jackrabbit&quot; auth=&quot;Container&quot; type=&quot;javax.sql.DataSource&quot;</span></span>
<span class="line"><span>  	factory=&quot;org.pentaho.di.core.database.util.DecryptingDataSourceFactory&quot; maxActive=&quot;200&quot; minIdle=&quot;10&quot;</span></span>
<span class="line"><span>  	maxIdle=&quot;200&quot; initialSize=&quot;10&quot;</span></span>
<span class="line"><span>  	maxWait=&quot;10000&quot; username=&quot;jcr_user&quot; password=&quot;password&quot;</span></span>
<span class="line"><span>  	driverClassName=&quot;org.postgresql.Driver&quot; url=&quot;jdbc:postgresql://localhost:25432/jackrabbit&quot;</span></span>
<span class="line"><span>  	testOnBorrow=&quot;true&quot;</span></span>
<span class="line"><span>  	validationQuery=&quot;select 1&quot;/&gt;	</span></span>
<span class="line"><span>  				&lt;Resource name=&quot;jdbc/datafor_modeler_auth&quot; auth=&quot;Container&quot; type=&quot;javax.sql.DataSource&quot;</span></span>
<span class="line"><span>  	factory=&quot;org.pentaho.di.core.database.util.DecryptingDataSourceFactory&quot; maxActive=&quot;200&quot; minIdle=&quot;10&quot;</span></span>
<span class="line"><span>  	maxIdle=&quot;200&quot; initialSize=&quot;10&quot;</span></span>
<span class="line"><span>  	maxWait=&quot;10000&quot; username=&quot;postgres&quot; password=&quot;postgres&quot;</span></span>
<span class="line"><span>  	driverClassName=&quot;org.postgresql.Driver&quot; url=&quot;jdbc:postgresql://localhost:25432/datafor?stringtype=unspecified&quot;</span></span>
<span class="line"><span>  	testOnBorrow=&quot;true&quot;</span></span>
<span class="line"><span>  	validationQuery=&quot;select 1&quot;/&gt;</span></span>
<span class="line"><span>  			&lt;Resource name=&quot;jdbc/datafor_repository&quot; auth=&quot;Container&quot; type=&quot;javax.sql.DataSource&quot;</span></span>
<span class="line"><span>  	factory=&quot;org.pentaho.di.core.database.util.DecryptingDataSourceFactory&quot; maxActive=&quot;200&quot; minIdle=&quot;10&quot;</span></span>
<span class="line"><span>  	maxIdle=&quot;200&quot; initialSize=&quot;10&quot;</span></span>
<span class="line"><span>  	maxWait=&quot;10000&quot; username=&quot;upload&quot; password=&quot;password&quot;</span></span>
<span class="line"><span>  	driverClassName=&quot;org.postgresql.Driver&quot; url=&quot;jdbc:postgresql://localhost:25432/upload?stringtype=unspecified&quot;</span></span>
<span class="line"><span>  	testOnBorrow=&quot;true&quot;</span></span>
<span class="line"><span>  	validationQuery=&quot;select 1&quot;/&gt;		</span></span>
<span class="line"><span>     &lt;/Context&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node and modify the url and credentials for all the following resources:</p><p>configuration:</p><ul><li><code>url</code>: Update to the PostgreSQL server address and port</li><li><code>username</code> / <code>password</code>: Update database credentials</li></ul></li></ul><h3 id="_3-2-modify-spring-security-configuration" tabindex="-1"><a class="header-anchor" href="#_3-2-modify-spring-security-configuration"><span>3.2 Modify Spring Security Configuration</span></a></h3><ul><li><strong>File Path</strong>: <code>pentaho-solutions/system/datafor-auth/plugin.spring.xml</code></li><li><strong>Instructions</strong>: Locate the <code>&lt;bean id=&quot;dataSource&quot; ...&gt;</code> node and update the database <code>url</code>, <code>username</code>, and <code>password</code>.</li></ul><hr><h3 id="_3-3-modify-jdbc-connection-configuration" tabindex="-1"><a class="header-anchor" href="#_3-3-modify-jdbc-connection-configuration"><span>3.3 Modify JDBC Connection Configuration</span></a></h3><ul><li><p><strong>File Path</strong>: <code>pentaho-solutions/system/applicationContext-spring-security-jdbc.properties</code></p></li><li><p>Instructions</p><p>: Update the following parameters:</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">datasource.url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">jdbc:postgresql://&lt;database_host&gt;:&lt;port&gt;/&lt;database_name&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">datasource.username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;database_username&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">datasource.password</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;database_password&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3-4-modify-jackrabbit-repository-configuration" tabindex="-1"><a class="header-anchor" href="#_3-4-modify-jackrabbit-repository-configuration"><span>3.4 Modify Jackrabbit Repository Configuration</span></a></h3><ul><li><p><strong>File Path</strong>: <code>pentaho-solutions/system/jackrabbit/repository.xml</code></p></li><li><p>Instructions</p><p>:</p><ul><li>Locate all database connection-related configurations (6 occurrences) and update the database address and credentials.</li><li>Locate the <code>jcr_user</code> configuration and update the <code>password</code> to match the password set in <strong>section 2.1</strong>.</li></ul></li></ul><h3 id="_3-5-modify-hibernate-configuration" tabindex="-1"><a class="header-anchor" href="#_3-5-modify-hibernate-configuration"><span>3.5 Modify Hibernate Configuration</span></a></h3><ul><li><p><strong>File Path</strong>: <code>pentaho-solutions/system/hibernate/postgresql.hibernate.cfg.xml</code></p></li><li><p>Instructions</p><p>: Update the following database connection parameters:</p><ul><li><code>connection.url</code></li><li><code>connection.username</code></li><li><code>connection.password</code></li></ul></li></ul><h2 id="_4-clear-system-cache" tabindex="-1"><a class="header-anchor" href="#_4-clear-system-cache"><span>4. Clear System Cache</span></a></h2><p>After completing all configurations, clear the Datafor cache to ensure the new settings take effect.</p><ul><li><p><strong>Navigate to the Datafor server root directory</strong>:</p></li><li><p><strong>Execute the cache clearing script</strong>:</p><ul><li><p><strong>Windows</strong>: Double-click <code>clear.bat</code></p></li><li><p>Linux</p><p>:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/bi-server</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clear.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="_5-start-datafor-services" tabindex="-1"><a class="header-anchor" href="#_5-start-datafor-services"><span>5. Start Datafor Services</span></a></h2><ul><li>Start Datafor services and check logs to ensure there are no errors.</li></ul><h2 id="_6-verify-system-configuration" tabindex="-1"><a class="header-anchor" href="#_6-verify-system-configuration"><span>6. Verify System Configuration</span></a></h2><ol><li>Access Datafor via a web browser and log in with the default administrator account (<code>admin</code>).</li><li>Navigate to <strong>Data Source Management</strong> and confirm that the repository switch was successful.</li><li>Update connection details for example data sources such as <code>foodmart</code> to ensure business data sources are accessible.</li><li>Go to the <strong>Public</strong> directory, upload, and test sample analytical pages to verify data display correctness.</li></ol><h2 id="_7-important-considerations" tabindex="-1"><a class="header-anchor" href="#_7-important-considerations"><span>7. Important Considerations</span></a></h2><ul><li><strong>Database Security</strong>: After migration, it is strongly recommended to perform a <strong>full backup</strong> and document the system state.</li><li><strong>Production Deployment</strong>: For production environments, submit a detailed change request and undergo review before implementation.</li><li><strong>Network Security</strong>: It is advised to use a <strong>private network or VPN</strong> for communication between Datafor and the PostgreSQL database to avoid exposing it to the public internet.</li></ul><h2 id="_8-appendix-recommended-postgresql-configuration-parameters" tabindex="-1"><a class="header-anchor" href="#_8-appendix-recommended-postgresql-configuration-parameters"><span>8. Appendix: Recommended PostgreSQL Configuration Parameters</span></a></h2><table><thead><tr><th>Parameter</th><th>Recommended Value</th><th>Description</th></tr></thead><tbody><tr><td>max_connections</td><td>200+</td><td>Adjust based on concurrency needs</td></tr><tr><td>shared_buffers</td><td>25% of total RAM</td><td>Optimize database caching</td></tr><tr><td>work_mem</td><td>4MB ~ 64MB</td><td>Query memory allocation</td></tr><tr><td>wal_level</td><td>replica</td><td>Enhance log security</td></tr></tbody></table>`,32)]))}const d=a(n,[["render",o]]),p=JSON.parse('{"path":"/documentation/Setup/repository-reparation-deployment-guide/","title":"Repository Separation Deployment Guide","lang":"en-US","frontmatter":{"title":"Repository Separation Deployment Guide","permalink":"/documentation/Setup/repository-reparation-deployment-guide/","createTime":"2025/03/28 05:18:31"},"headers":[],"readingTime":{"minutes":2.61,"words":782},"git":{},"filePathRelative":"documentation/Setup/60 Repository Separation Deployment Guide.md"}');export{d as comp,p as data};
