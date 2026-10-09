---
title: Deploying Datafor Using Docker
permalink: /documentation/Setup/Deploying-Datafor-Using-Docker/
tags: null
description: Run Datafor from the datafor123/datafor-ee image with a persistent volume, publish only the ports you need, and stop, update and back up the container safely.
createTime: 2026/09/01 22:03:26
---

# Deploying Datafor Using Docker

The image `datafor123/datafor-ee` contains a complete Linux installation in `/opt/bi-server`, including the built-in PostgreSQL database that holds all reports, models, users and settings. The container runs as the user `biadmin` and starts Datafor with `/opt/bi-server/start-server.sh`.

::: warning Without a volume, removing the container deletes all content
The image declares no volume. If you start the container without one, everything users create is stored in the container itself, and `docker rm` deletes it for good. Always run the container with the volume shown below, and take a backup (see [Backup and Restore](/documentation/System/backup/)) before you remove or replace a container.
:::

## Requirements

- Docker on Linux, or Docker Desktop on Windows or macOS.
- At least **8 GB RAM** available to Docker: the server's Java heap can grow to 6 GB, and PostgreSQL runs in the same container.

## 1. Pull the image

```shell
docker pull datafor123/datafor-ee
```

This pulls the `latest` tag. To pin a version, use one of the tags listed on Docker Hub, for example `datafor123/datafor-ee:<tag>`, in this command and in `docker run`.

## 2. Run the container

```shell
docker run -d --name datafor-ee \
  -p 28080:28080 \
  -v datafor-data:/opt/bi-server \
  datafor123/datafor-ee
```

| Option | Purpose |
| --- | --- |
| `-d` | Runs the container in the background. |
| `--name datafor-ee` | The name used by the other commands on this page. |
| `-p 28080:28080` | Publishes the web server. This is the only port users need. |
| `-v datafor-data:/opt/bi-server` | Keeps the whole installation, including the database, configuration and AI Agent keys, in the named volume `datafor-data`. On the first start Docker fills the empty volume with the installation from the image. Use a named volume, not a host folder: an empty host folder would hide the installation. |

Do not publish the other ports unless you need them:

- **25432** (built-in PostgreSQL): not needed by users. If you must reach the database from the Docker host, publish it on the loopback interface only: `-p 127.0.0.1:25432:25432`.
- **28081** (AI Agent API): never publish it. Browsers reach the AI Agent through Datafor at `/datafor/ai/`.
- **38081** (AI Agent MCP server): only if AI clients on other computers connect to Datafor over MCP. The MCP server listens on `127.0.0.1` inside the container by default, so you must also set `MCP_HTTP_HOST=0.0.0.0` and `MCP_ALLOWED_HOSTS` in `/opt/bi-server/ai-agent/.env` (see [Connect AI Clients](/documentation/AI-Agent/Connect-AI-Clients/)). Publish it as `-p 127.0.0.1:38081:38081` and put Nginx in front of it (see [Deploying Datafor Behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/)).

Ports can only be published when the container is created. To change them later, stop and remove the container and run it again with the same `-v datafor-data:/opt/bi-server`; the content in the volume is kept.

## 3. Check the deployment

```shell
docker ps
docker logs -f datafor-ee
```

The log shows the Tomcat output; Datafor is ready when it prints `Server startup in [...] milliseconds`. Press Ctrl+C to leave the log. Then open `http://localhost:28080` and sign in with `admin` / `password`. Change that password right away (see [Modify Password](/documentation/System/Users/#_6-resetting-a-password)), and change the password of the `demo` user (`demo` / `demo`) or delete that user.

If the image contains the AI Agent (the folder `/opt/bi-server/ai-agent`), start it and check it with:

```shell
docker exec datafor-ee /opt/bi-server/ai-agent/app-console.sh start
docker exec datafor-ee curl -s http://127.0.0.1:28081/ai/health
```

`start` starts only the components that are not running. Run it again after every container restart if the AI Agent is not running. See [How to Enable the AI Feature](/documentation/AI-Agent/AI-Feature/).

## 4. Stop, start and remove the container

Stop Datafor inside the container first, so that PostgreSQL shuts down cleanly, then stop the container:

```shell
docker exec datafor-ee /opt/bi-server/stop-server.sh
docker stop datafor-ee
```

Start it again with `docker start datafor-ee`.

`docker rm datafor-ee` removes the container. With the volume from step 2, the content stays in `datafor-data` and a new container started with the same `-v` option uses it. `docker volume rm datafor-data` deletes the content permanently.

## 5. Update

Because the installation lives in the volume, pulling a newer image does not update an existing installation. Use the update package instead:

1. Take a backup (see [Backup and Restore](/documentation/System/backup/)) and read the upgrade notes of the release, for example [10.00 Upgrade notes](/release/10.00/#upgrade-notes). Install all components of the update package together.
2. Copy the update package into the container and give it to `biadmin`:

   ```shell
   docker cp datafor-updater.jar datafor-ee:/opt/bi-server/update/
   docker exec -u root datafor-ee chown biadmin:biadmin /opt/bi-server/update/datafor-updater.jar
   ```

3. Restart Datafor:

   ```shell
   docker exec datafor-ee /opt/bi-server/stop-server.sh
   docker restart datafor-ee
   ```

   `start-server.sh` applies every `.jar` file in `update` before it starts the server and renames it with a time stamp.

> **Important**: The update package replaces `start-server.sh`, `set-env.sh` and `tomcat/conf/server.xml` as a whole and keeps the old files in `/opt/bi-server/update/backup<time stamp>/`. Before you update, write down any custom heap size (`-Xms`/`-Xmx` in `CATALINA_OPTS`) and any database connections, passwords or ports you changed in `server.xml`. After the update, stop Datafor, copy these settings from the backup folder into the new files, and start it again.
