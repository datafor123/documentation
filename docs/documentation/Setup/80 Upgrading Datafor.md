---
title: Upgrading Datafor
permalink: /documentation/Setup/Upgrading-Datafor/
description: Back up, apply an update package, reapply the settings it overwrites, finish the 10.00 steps and check the result.
createTime: 2026/10/10 10:00:00
---

# Upgrading Datafor

An existing installation is upgraded in place with an update package, a `.jar` file such as `datafor-updater.jar`. The package replaces program files and some configuration files, so plan the upgrade as a short maintenance window: back up, apply the package, put your own settings back, then check.

## 1. Before you upgrade

1. **Read the upgrade notes** of the release, for example [10.00 Upgrade notes](/release/10.00/#upgrade-notes). They list behavior changes and steps that apply only to that release.
2. **Create a backup** with **Content and settings** selected and download it to another computer (see [Backup and Restore](/documentation/System/backup/)). If the repository runs on your own PostgreSQL server ([Repository Separation](/documentation/Setup/Repository-Separation-Deployment-Guide/)), back up those databases with your own tools as well.
3. **Copy two AI Agent files** to a safe place: `bi-server/ai-agent/instance-secrets.env` and `bi-server/ai-agent/.env`. No Datafor backup contains them. `instance-secrets.env` holds the key that encrypts the LLM API keys stored in the database; without it a restored system cannot read them. `.env` holds your AI Agent settings, such as `DATABASE_URL`, the `MCP_*` keys and `AI_AGENT_DISPATCH_WORKERS`.
4. **Write down what you changed in the files the package replaces** (section 3): the Java heap in the start script, database connections, passwords and ports in `server.xml`, and any other file under `pentaho-solutions/system` you edited by hand.
5. **Have all components of the update package.** Install them together: several features need matching browser and server parts, and an older engine does not work with a newer plugin.

## 2. Apply the update package

Datafor applies update packages when it starts: `start-server` runs every `.jar` file in `bi-server/update` before it starts the server, then renames the file with a time stamp (for example `datafor-updater_20260918171548`) so that it is not applied again.

**Linux** (installation in `/opt/bi-server`):

1. Copy the package into `/opt/bi-server/update` and give it to `biadmin`: `chown biadmin:biadmin /opt/bi-server/update/datafor-updater.jar`.
2. Switch to `biadmin` with `su - biadmin`. Stop the AI Agent and Datafor:

   ```bash
   cd /opt/bi-server/ai-agent && ./app-console.sh stop
   cd /opt/bi-server && ./stop-server.sh
   ```

3. Start Datafor with `./start-server.sh` in `/opt/bi-server`. The package is applied first.
4. Start the AI Agent with `./app-console.sh start` in `/opt/bi-server/ai-agent`. If it prints `Set <agent-secret> in …`, restart Datafor once (`./stop-server.sh`, then `./start-server.sh`) so that Datafor reads the shared secret.

**Windows:**

1. Copy the package into `bi-server\update`.
2. Run `stop-server.bat`.
3. Run `start-server.bat`. It applies the package, then starts the database, the AI Agent and the web server.

To apply the package without starting the server, run `update.bat` in `bi-server`. It stops at the first package that fails and prints `Update failed, keeping "…\update" for inspection.`

**Docker:** pulling a newer image does not update an existing installation, because the installation lives in the volume. Copy the package into the container and restart it:

```shell
docker cp datafor-updater.jar datafor-ee:/opt/bi-server/update/
docker exec -u root datafor-ee chown biadmin:biadmin /opt/bi-server/update/datafor-updater.jar
docker exec datafor-ee /opt/bi-server/stop-server.sh
docker restart datafor-ee
```

See [Deploying Datafor Using Docker](/documentation/Setup/Deploying-Datafor-Using-Docker/) for the container itself.

## 3. Reapply your own settings

The package replaces `start-server.*`, `set-env.*` and `tomcat/conf/server.xml` in full, and it can replace configuration files under `pentaho-solutions/system` as well, such as `pentaho.xml`, `applicationContext-spring-security*.xml`, the plugins' `settings.xml` files and `datafor/mondrian.properties`. Check every file you changed by hand.

The replaced files are kept in `bi-server/update/backup<time stamp>/`, in the same folder structure as in `bi-server`. `change-list.md` in that folder lists the configuration files whose content changed.

| What you may have changed | File | After the upgrade |
| --- | --- | --- |
| Java heap (`-Xms`/`-Xmx` in `CATALINA_OPTS`) | `start-server.sh` or `start-server.bat` | Set the values again. |
| Repository connections, passwords, ports, `RemoteIpValve` | `tomcat/conf/server.xml` | Copy your `<Resource>`, `<Connector>` and `<Valve>` settings into the new file. Without this, a [separated repository](/documentation/Setup/Repository-Separation-Deployment-Guide/) is replaced by the built-in database again, and a [proxy setup](/documentation/Setup/Deploying-Datafor-Behind-Nginx/) loses its forwarded-header handling. |
| Connection pool defaults, engine properties | `pentaho-solutions/system/pentaho.xml`, `pentaho-solutions/system/datafor/mondrian.properties` | Set your values again. |
| AI Agent shared secret | `pentaho-solutions/system/datafor-modeler/settings.xml` | Co-located AI Agent: its launcher writes the value back on its next start. AI Agent on another server: add `<agent-secret>` again ([AI Agent Shared Secret](/documentation/AI-Agent/Agent-Shared-Secret/#_6-upgrades-and-moves)). |
| AI Agent settings | `ai-agent/.env` | The package can change this file (it then appears in `change-list.md`). Compare it with your copy and restore your settings. |

Stop Datafor, copy your values into the new files rather than copying the old files back (a new file can contain new entries), and start Datafor again.

## 4. Steps for 10.00

When you upgrade to 10.00, also do the following. The full list of changes is in the [10.00 Upgrade notes](/release/10.00/#upgrade-notes).

- **AI Agent shared secret.** Datafor gives LLM API keys to the AI Agent only when both use the same secret. With the packaged layout the launcher sets it up (on Linux, restart Datafor once as in section 2). If the AI Agent runs on another server, configure it on both sides. See [AI Agent Shared Secret](/documentation/AI-Agent/Agent-Shared-Secret/).
- **Model Resolution stage.** Open **AI Agent › LLM › Assignments**. The new stage runs on the **Workflow Routing** profile until it has its own assignment; click **Save** to record it, or choose another profile first. If **Workflow Routing** is unassigned too, assign both. See [LLM Configuration](/documentation/AI-Agent/LLM-Configuration/).
- **Knowledge indexes.** Indexes are now built in the background when a model is saved, copied or imported. If you schedule index builds yourself, turn off **Auto-build knowledge index** in **Settings › General › System configuration**. Let each model's index build or sync once (save the model, run **Prep data for AI**, or wait for its schedule) so that members of numeric-keyed fields are recognized. See [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/).
- **Metric bindings.** Run **Compare all** again on the **Metric bindings** tab of each model that has bindings. Verdicts stored under the old rules stay until then, and users see them as notes in answers. See [Model Diagnostics](/documentation/Model/Model-Diagnostics/).
- **Claude Desktop extension.** Users of Claude Desktop uninstall the old extension and install the new `datafor.mcpb`. Claude Code, Codex and JSON clients need nothing. See [Connect AI Clients](/documentation/AI-Agent/Connect-AI-Clients/#_8-6-after-upgrading-to-10-00).
- **Aggregation tables** are off by default. If your models use them, turn on **UseAggregates** and **ReadAggregates** in **Settings › Data › Query engine** (see [Use Aggregation Tables](/documentation/Model/Use-Aggregation-Tables/)).
- **Permissions.** Deleting content needs **Delete** or **Full control**, and publishing a model or changing its data source needs Read on the data source. Check that users you disabled are still disabled. See [Managing Analysis Models](/documentation/Model/Managing-Analysis-Models/).
- **Conversations.** A follow-up in a conversation started before the upgrade may not continue a hierarchy from the earlier turn; start **New Chat**.

## 5. Check the upgrade

1. Check the server log (`tomcat/logs/catalina.out` on Linux, the server console on Windows) for errors during the update and start.
2. Sign in as an administrator. Open a few reports and models and check that they show data. If your content is missing and only the sample content appears, Datafor is connected to the built-in database: reapply `server.xml` (section 3).
3. Run `curl -i http://127.0.0.1:28081/ai/health` on the server. `HTTP/1.1 200` means the AI Agent is ready; a `503` body names the cause.
4. Open **AI Agent › LLM** and check that **Assignments** shows **16/16 assigned**.
5. If **Dashboard Review**, **Model Brief** or **Question Suggestions** has no assignment of its own, try that feature as a user who is not an administrator. A model error there points to the shared secret.
6. Behind Nginx, ask a question in the AI Assistant and check that the progress title moves through several stages ([Deploying Datafor Behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/#_4-enable-and-verify-the-nginx-configuration)).
7. Open **Settings › AI Agent › Knowledge indexes** and check that the builds succeed.
8. Create a new backup.
