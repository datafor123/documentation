---
title: Installation Guide (RHEL-compatible Linux)
permalink: /documentation/Setup/Installation-CentOS/
description: Install, start, stop and update Datafor and its AI Agent on RHEL-compatible Linux 8 or 9.
createTime: 2026/09/01 22:03:26
---

# Installation Guide (RHEL-compatible Linux)

These steps apply to RHEL-compatible distributions, version 8 or 9 (for example Rocky Linux, AlmaLinux or Red Hat Enterprise Linux). CentOS 7 and CentOS 8 are end of life. The package `glibc-langpack-en` used below exists from version 8 on.

**Requirements**

- **Memory:** the Datafor server starts with a Java heap of 2 GB that can grow to 6 GB (`-Xms2048m -Xmx6144m`). The built-in PostgreSQL database and the AI Agent run beside it, so plan at least **8 GB RAM**. To change the heap, see [Increasing Memory Limit for Datafor Server](/documentation/Best/Performance-Tuning/#memory-heap-size).
- **Java:** bundled in `bi-server/java`. You do not need to install Java.
- **Ports:** `28080` (web server), `25432` (built-in PostgreSQL), `28081` (AI Agent API) and `38081` (AI Agent MCP server). Open only `28080` in the firewall, or only the Nginx ports when Datafor runs [behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/). Keep `25432`, `28081` and `38081` closed to the network.

## Step 1: Switch to the root user and install the required packages

```bash
sudo su root
yum install unzip procps-ng glibc-langpack-en -y
```

**Console output example:**

```
[root@your-server ~]# yum install unzip procps-ng glibc-langpack-en -y
Package unzip-6.0-48.el8_10.x86_64 is already installed.
Package procps-ng-3.3.15-14.el8.x86_64 is already installed.
Package glibc-langpack-en-2.28-251.el8_10.31.x86_64 is already installed.
Dependencies resolved.
Nothing to do.
Complete!
```

## Step 2: Create the `biadmin` user group

```bash
groupadd biadmin
```

## Step 3: Create the `biadmin` user

Create a user named `biadmin`, add it to the `biadmin` group, and set its password:

```bash
adduser biadmin -g biadmin
passwd biadmin
```

## Step 4: Extract the installation package

Go to the directory that holds the installation package and extract it into `/opt`. Use the file name of the package you received, for example `datafor-server-linux-<version>.zip`:

```bash
unzip -o datafor-server-linux-<version>.zip -d /opt/
```

The package creates `/opt/bi-server`.

## Step 5: Set directory permissions

```bash
cd /opt/
chmod -R 700 bi-server
chown -R biadmin:biadmin bi-server
```

**Installation is now complete.**

------

# Starting Datafor

**Perform the following steps as the `biadmin` user.**

## Step 1: Switch to `biadmin`

```bash
su - biadmin
```

## Step 2: Start Datafor

```bash
cd /opt/bi-server/
./start-server.sh
```

The script starts the built-in PostgreSQL database and then the Datafor web server (Tomcat).

**Console output example:**

```
[biadmin@your-server bi-server]$ ./start-server.sh
DEBUG: Found JAVA at the current folder
DEBUG: _PENTAHO_JAVA_HOME=/opt/bi-server/java
DEBUG: _PENTAHO_JAVA=/opt/bi-server/java/bin/java
waiting for server to start...
LOG: listening on IPv4 address "0.0.0.0", port 25432
LOG: database system is ready to accept connections
server started
Using CATALINA_BASE: /opt/bi-server/tomcat
Using CATALINA_HOME: /opt/bi-server/tomcat
Using JRE_HOME: /opt/bi-server/java
Using CATALINA_OPTS: -Xms2048m -Xmx6144m ...
Tomcat started.
```

## Step 3: Start the AI Agent

The AI Agent is in `/opt/bi-server/ai-agent` and consists of four processes (API on port 28081, two workers, and the MCP server on port 38081). Start it with its launcher:

```bash
cd /opt/bi-server/ai-agent
./app-console.sh start
```

`start` starts only the components that are not running, so it is safe to run it again. On the first start the launcher creates `instance-secrets.env` and writes the shared secret into Datafor's settings. If it prints `Set <agent-secret> in …`, restart Datafor once (Step 4, then Step 2) so that Datafor reads the value. See [AI Agent Shared Secret](/documentation/AI-Agent/Agent-Shared-Secret/).

Check that the AI Agent is ready:

```bash
curl -i http://127.0.0.1:28081/ai/health
```

`HTTP/1.1 200` means it is ready. `503` means it cannot work yet; the response body says whether the database, the schema migration or the worker queues are the cause. To set up the AI features, see [How to Enable the AI Feature](/documentation/AI-Agent/AI-Feature/).

## Step 4: Stop Datafor

```bash
cd /opt/bi-server/ai-agent
./app-console.sh stop
cd /opt/bi-server/
./stop-server.sh
```

**Console output example:**

```
LOG: shutting down
LOG: database system is shut down
server stopped
```

## Step 5: Check whether Datafor is running

```bash
ps -ef | grep [t]omcat
```

If the command prints a Java process whose arguments contain `/opt/bi-server/tomcat`, Datafor is running. No output means it is stopped.

------

# Signing in to Datafor

Open `http://<server-ip>:28080/` in a browser. The installation comes with two accounts:

- **Administrator:** `admin` / `password`
- **Demo user:** `demo` / `demo`

Change the `admin` password right after the first sign-in (see [Modify Password](/documentation/System/Users/#_6-resetting-a-password)), and change the `demo` password or delete that user if you do not need it.

------

# Updating the System

> **Important**: The update package replaces `start-server.sh`, `set-env.sh` and `tomcat/conf/server.xml` as a whole and keeps the old files in `bi-server/update/backup<time stamp>/`. Before you update, write down any custom heap size (`-Xms`/`-Xmx` in `CATALINA_OPTS`) and any database connections, passwords or ports you changed in `server.xml`. After the update, stop Datafor, copy these settings from the backup folder into the new files, and start it again.

1. **Back up first.** Create a backup (see [Backup and Restore](/documentation/System/backup/)) and copy `bi-server/ai-agent/instance-secrets.env` and `bi-server/ai-agent/.env` to a safe place. The LLM API keys saved in Datafor are encrypted with a key from `instance-secrets.env`; without that file a restored system cannot read them.
2. Read the upgrade notes of the release, for example [10.00 Upgrade notes](/release/10.00/#upgrade-notes).
3. **Install all components of the update package together.** Several features need matching browser and server parts, so do not install parts of an update package on their own.
4. Copy the update package (a `.jar` file, for example `datafor-updater.jar`) into `/opt/bi-server/update`.
5. Switch to `biadmin` with `su - biadmin`, then stop Datafor as in Step 4 above.
6. Start Datafor with `./start-server.sh`. Before it starts the server, the script applies every `.jar` file in `update` and renames it with a time stamp, so it is not applied twice.
7. Start the AI Agent as in Step 3 above and check `/ai/health`.
