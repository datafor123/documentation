import{_ as s,c as t,a as i,o as a}from"./app-DZ4ntR-d.js";const n="/assets/image-20220829171526492-HvST-FXE.png",o="/assets/image-20220829171542736-D74iZqtr.png",d="/assets/image-20220829171600582-CEib1kiQ.png",p="/assets/image-20220829171613825-DdfLsJp-.png",r="/assets/image-20220829171632512-Bdq5rVjx.png",l="/assets/image-20220829171648174-C6nXztc_.png",c="/assets/image-20220829171701208-C9DHjubE.png",u="/assets/image-20220829171716368-BtD6GPOw.png",m={};function v(h,e){return a(),t("div",null,e[0]||(e[0]=[i('<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><p><strong>Step 1. Switch to the root user</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sudo su</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+n+'"></div><p><strong>Step 2. Create the &quot;optimibi&quot; user, and set the user password to &quot;optimibi&quot; as well.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>adduser optimibi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+o+`"></div><p><strong>Step 3. Create a user group and add the &quot;optimibi&quot; user to the &quot;optimibi&quot; user group.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>addgroup optimibi</span></span>
<span class="line"><span>addgroup optimibi optimibi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div align="left"><img src="`+d+'"></div><p><strong>Step 4. Navigate to the directory where the installation package is located and unzip the package to the /opt path.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>unzip -o optimibi-server_202203210834.zip -d /opt/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+p+`"></div><p><strong>Step 5. After the extraction is complete, go to the /opt/ directory and modify permissions.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>cd /opt/</span></span>
<span class="line"><span>chmod -R 700 optimibi-server</span></span>
<span class="line"><span>chown -R optimibi optimibi-server</span></span>
<span class="line"><span>chgrp -R optimibi optimibi-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align="left"><img src="`+r+`"></div><p><strong>Installation Completed</strong></p><p>Start or stop the service, refer to daily startup procedures.</p><h2 id="startup" tabindex="-1"><a class="header-anchor" href="#startup"><span>Startup</span></a></h2><p><strong>For daily startup and shutdown, please perform the operations using the &quot;optimibi&quot; user.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>su optimibi</span></span>
<span class="line"><span>cd /opt/optimibi-server/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Start the service</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>./start-optimibi.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="`+l+'"></div><p><strong>Stop the service</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>./stop-optimibi.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+c+'"></div><p><strong>Check the status of the service startup and shutdown</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ps -ef|grep tomcat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+u+'"></div><p><strong>If the command outputs as above, it indicates that the service is in a running state.</strong></p><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login"><span>Login</span></a></h2><p>URL: <code>http://localhost:28080/</code></p><p>username / password</p><ul><li><code>admin</code> / <code>password</code></li><li><code>demo</code> / <code>demo</code></li></ul><h2 id="update-the-system" tabindex="-1"><a class="header-anchor" href="#update-the-system"><span>Update the System</span></a></h2><p>Place the update package <code>optimibi-upload.jar</code> in the <code>optimibi-server\\update</code> folder and restart the system.</p>',37)]))}const b=s(m,[["render",v],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/documentation/Setup/OptimiBI-Installation-Ubuntu/","title":"Optimibi Installation (Ubuntu)","lang":"en-US","frontmatter":{"title":"Optimibi Installation (Ubuntu)","permalink":"/documentation/Setup/OptimiBI-Installation-Ubuntu/","createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":0.99,"words":298},"git":{},"filePathRelative":"documentation/Setup/30 Ubuntu安装.md"}');export{b as comp,y as data};
