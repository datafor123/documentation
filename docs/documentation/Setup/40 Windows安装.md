---
title: Installation (Windows)
permalink: /documentation/Setup/Installation-windows/
description: Start, stop and update Datafor and its AI Agent on Windows.
createTime: 2026/09/01 22:03:26
---

# Installation (Windows)

Log in to Windows as an **Administrator** and extract the installation package to a local folder. The scripts below are in the `bi-server` folder of the package.

**Requirements**

- **Memory:** the Datafor server starts with a Java heap of 2 GB that can grow to 6 GB (`-Xms2048m -Xmx6144m`). The built-in PostgreSQL database and the AI Agent run beside it, so plan at least **8 GB RAM**. To change the heap, see [Increasing Memory Limit for Datafor Server](/documentation/Tools/Increasing-Memory-Limit/).
- **Java:** bundled in `bi-server\jre`. You do not need to install Java.
- **Ports:** `28080` (web server), `25432` (built-in PostgreSQL), `28081` (AI Agent API) and `38081` (AI Agent MCP server). Allow only `28080` through Windows Firewall, or only the Nginx ports when Datafor runs [behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/).

## Start and stop

1. Start Datafor by double-clicking `start-server.bat`.

   The script starts the built-in PostgreSQL database, then the AI Agent (`ai-agent\app-console.bat start`), and finally the Datafor web server (Tomcat) in the console window. Keep that window open: closing it stops the web server.

2. Stop Datafor by double-clicking `stop-server.bat`. It stops the database, the AI Agent and the web server.

To restart only the AI Agent, use `ai-stop.bat` and `ai-start.bat` in the same folder. If `ai-start.bat` prints `set <agent-secret> in …`, restart Datafor once so that it reads the shared secret (see [AI Agent Shared Secret](/documentation/AI-Agent/Agent-Shared-Secret/)).

## Check the AI Agent

The AI Agent is in `bi-server\ai-agent`; its API listens on port 28081 and its MCP server on port 38081. In a Command Prompt, run:

```bat
curl -i http://127.0.0.1:28081/ai/health
```

`HTTP/1.1 200` means it is ready. `503` means it cannot work yet; the response body says whether the database, the schema migration or the worker queues are the cause. To set up the AI features, see [How to Enable the AI Feature](/documentation/AI-Agent/AI-Feature/).

## Sign in

Open `http://<server-ip>:28080/` in a browser. The installation comes with two accounts:

- **Administrator:** `admin` / `password`
- **Demo user:** `demo` / `demo`

Change the `admin` password right after the first sign-in (see [Modify Password](/documentation/System/Modify-Password/)), and change the `demo` password or delete that user if you do not need it.

## Update the system

1. **Back up first.** Create a backup (see [Backup and Restore](/documentation/System/backup/)) and copy `bi-server\ai-agent\instance-secrets.env` and `bi-server\ai-agent\.env` to a safe place. The LLM API keys saved in Datafor are encrypted with a key from `instance-secrets.env`; without that file a restored system cannot read them.
2. Read the upgrade notes of the release, for example [10.00 Upgrade notes](/release/10.00/#upgrade-notes).
3. **Install all components of the update package together.** Several features need matching browser and server parts, so do not install parts of an update package on their own.
4. Copy the update package (a `.jar` file, for example `datafor-updater.jar`) into `bi-server\update`.
5. Run `stop-server.bat`.
6. Run `start-server.bat`. Before it starts the server, the script applies every `.jar` file in `update` and renames it with a time stamp, so it is not applied twice.
7. Check `/ai/health` as above.
