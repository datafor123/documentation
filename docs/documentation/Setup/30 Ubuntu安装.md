---
title: Installation Guide (Ubuntu)
permalink: /documentation/Setup/Installation-Ubuntu/
description: Install, start, stop and update Datafor and its AI Agent on Ubuntu.
createTime: 2026/09/01 22:03:26
---

# Installation Guide (Ubuntu)

**Requirements**

- **Memory:** the Datafor server starts with a Java heap of 2 GB that can grow to 6 GB (`-Xms2048m -Xmx6144m`). The built-in PostgreSQL database and the AI Agent run beside it, so plan at least **8 GB RAM**. To change the heap, see [Increasing Memory Limit for Datafor Server](/documentation/Best/Performance-Tuning/#memory-heap-size).
- **Java:** bundled in `bi-server/java`. You do not need to install Java.
- **Ports:** `28080` (web server), `25432` (built-in PostgreSQL), `28081` (AI Agent API) and `38081` (AI Agent MCP server). Open only `28080` in the firewall, or only the Nginx ports when Datafor runs [behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/). Keep `25432`, `28081` and `38081` closed to the network.

## Step 1: Switch to the root user and install the required packages

```bash
sudo su
apt update
apt install -y unzip procps locales
```

## Step 2: Create the `biadmin` user

```bash
adduser biadmin
```

Follow the prompts to set a password and user details. `adduser` also creates a group named `biadmin` and makes it the user's primary group, so no separate group step is needed.

## Step 3: Extract the installation package

Go to the directory that holds the installation package and extract it into `/opt`. Use the file name of the package you received, for example `datafor-server-linux-<version>.zip`:

```bash
unzip -o datafor-server-linux-<version>.zip -d /opt/
```

The package creates `/opt/bi-server`.

## Step 4: Set directory permissions

```bash
cd /opt/
chmod -R 700 bi-server
chown -R biadmin:biadmin bi-server
ls -al bi-server
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

## Step 3: Start the AI Agent

The AI Agent is in `/opt/bi-server/ai-agent` and runs the API on port 28081, a routing worker, dispatch workers (two by default) and the MCP server on port 38081. Start it with its launcher:

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

To install an update package, follow [Upgrading Datafor](/documentation/Setup/Upgrading-Datafor/).
