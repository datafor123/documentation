---
title: Increasing Memory Limit for Datafor Server
permalink: /documentation/Tools/Increasing-Memory-Limit/
tags: null
description: Change the Java heap of the Datafor server in the start script, in the Windows service or in Docker.
createTime: 2026/09/01 22:03:26
---

# Increasing Memory Limit for Datafor Server

The Datafor server runs in a Java virtual machine (Java is bundled). Its heap is set with two options:

- `-Xms`: heap size at start. Default `2048m`.
- `-Xmx`: maximum heap size. Default `6144m` (6 GB).

Raise `-Xmx` when the server logs `java.lang.OutOfMemoryError: Java heap space`, or when many users open large reports at the same time. Size it so that the heap, the built-in PostgreSQL database, the AI Agent and the operating system together fit in physical memory: a heap larger than the free RAM makes the server swap and slows it down. For example, on a 16 GB server that also runs the built-in database and the AI Agent, `-Xmx10240m` leaves about 6 GB for the rest.

## Linux and Windows (start script)

1. Stop Datafor.
2. Open the start script in the `bi-server` folder:
   - Linux: `start-server.sh`
   - Windows: `start-server.bat`
3. Find the line that sets `CATALINA_OPTS` and change the two values:

   ```bash
   # start-server.sh
   CATALINA_OPTS="-Xms2048m -Xmx10240m -Dsun.rmi.dgc.client.gcInterval=3600000 ..."
   ```

   ```bat
   rem start-server.bat
   set CATALINA_OPTS=-Xms2048m -Xmx10240m -Dsun.rmi.dgc.client.gcInterval=3600000 ...
   ```

   Change only the numbers and leave the other options on the line as they are.
4. Start Datafor. The Linux script prints the options it used (`Using CATALINA_OPTS: …`).

An update package can replace the start scripts; the replaced files are kept in `bi-server/update/backup<time stamp>/`. Check the `CATALINA_OPTS` line again after every update.

## Windows service

If Datafor runs as the Windows service `DataforSolutionServer`, the start script is not used. The service takes its heap from the values that `tomcat\bin\service.bat` passes when the service is installed (`JvmMs` 2048 and `JvmMx` 6144, in MB). To change them on an installed service, run as administrator:

```bat
bi-server\tomcat\bin\tomcat9w.exe //ES//DataforSolutionServer
```

On the **Java** tab, set **Initial memory pool** and **Maximum memory pool** (in MB), click **OK**, and restart the service. Alternatively, change `JvmMs` and `JvmMx` in `service.bat`, then remove and reinstall the service.

## Docker

The container runs the same `/opt/bi-server/start-server.sh`, which sets `CATALINA_OPTS` itself, so passing `CATALINA_OPTS` or `JAVA_OPTS` with `docker run -e` has no effect. Edit the script in the container and restart it:

```shell
docker cp datafor-ee:/opt/bi-server/start-server.sh .
# edit -Xmx in start-server.sh
docker cp start-server.sh datafor-ee:/opt/bi-server/start-server.sh
docker exec -u root datafor-ee chown biadmin:biadmin /opt/bi-server/start-server.sh
docker exec datafor-ee /opt/bi-server/stop-server.sh
docker restart datafor-ee
```

Edit the file with an editor that keeps Linux line endings. The change survives a new container only if `/opt/bi-server` is on a volume (see [Deploying Datafor Using Docker](/documentation/Setup/Deploying-Datafor-Using-Dockers/)). If you limit the container's memory with `--memory`, keep the limit well above `-Xmx`, because PostgreSQL runs in the same container.

Related: [Performance Tuning](/documentation/Best/Performance-Tuning/)
