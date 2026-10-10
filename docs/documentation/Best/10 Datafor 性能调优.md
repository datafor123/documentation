---
title: Performance and Capacity Tuning
permalink: /documentation/Best/Performance-Tuning/
tags: null
description: Find where a slow report spends its time, and the Datafor, Tomcat and JVM settings, including the server heap size, that change it.
createTime: 2026/09/01 22:03:26
---

# Performance and Capacity Tuning

Most slow reports spend their time in the database. Find out where the time goes before you change server settings.

## Find the slow query

In edit mode, point to the component, open **⋮** and select **Execution cost**. It lists the SQL statements the engine sent for that component. Run them in your database tool: if they are slow there too, tune the database (indexes, partitions, statistics) or the model, not Datafor. See [Report Editor Basics](/documentation/Start/Basic-Operations-for-Report-Design/).

## Datafor settings

| Lever | Where | Effect |
| --- | --- | --- |
| Engine limits | **Settings › Data › Query engine**: **Max concurrent queries**, **Max result rows**, **Query timeout (seconds)** | Caps the load one server puts on the databases and stops runaway queries. See [Query Engine](/documentation/System/Query-Engine/). |
| SQL threads | `mondrian.rolap.maxSqlThreads` (default 100) and `mondrian.rolap.maxSqlThreadsPerQuery` in `bi-server/pentaho-solutions/system/datafor/mondrian.properties` | How many SQL statements run at once in total and per query. See [Query Engine](/documentation/System/Query-Engine/). |
| Rows per component | **Page › Settings › Performance › Max query records**; the default (5,000) is **Default chart query row limit** in **Settings › General › System configuration** | Fewer rows load and render faster. See [Page Settings](/documentation/Visualization/Size-Display/) and [System Configuration](/documentation/System/System-Configuration/). |
| Model cache | **Cache expire** in the model; the default for new models is **Default model cache expiration** in **System configuration** (0 = never expires) | Repeated queries are answered from the cache instead of the database. Use an expiration that matches how often the data is loaded. See [Creating an Analysis Model](/documentation/Model/Creating-an-Analysis-Model/). |
| Connection pool | **Pooling** in the datasource; server defaults in `dbcp-defaults` in `pentaho-solutions/system/pentaho.xml` (`maxActive` 20) | A busy datasource may need a larger pool. A larger pool does not make a slow query faster. See [Configuring MySQL Data Source](/documentation/Datasource/Configuring-MySQL-Data-Source/). |
| Aggregation tables | Model | Large fact tables are answered from pre-aggregated tables. See [Use Aggregation Tables](/documentation/Model/Use-Aggregation-Tables/). |
| AI Agent workers | `AI_AGENT_DISPATCH_WORKERS` in `bi-server/ai-agent/.env` (1–8, default 2) | Questions to the AI Agent stop queuing behind each other. See [Managing High Concurrency](/documentation/AI-Agent/Managing-High-Concurrency/). |

## Memory (heap size)

The Datafor server runs in a Java virtual machine (Java is bundled). Its heap is set with two options:

- `-Xms`: heap size at start. Default `2048m`.
- `-Xmx`: maximum heap size. Default `6144m` (6 GB).

Raise `-Xmx` when the server logs `java.lang.OutOfMemoryError: Java heap space`, or when many users open large reports at the same time. Size it so that the heap, the built-in PostgreSQL database, the AI Agent and the operating system together fit in physical memory: a heap larger than the free RAM makes the server swap and slows it down. For example, on a 16 GB server that also runs the built-in database and the AI Agent, `-Xmx10240m` leaves about 6 GB for the rest.

### Linux and Windows (start script)

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

An update package replaces `start-server.*`, `set-env.*` and `tomcat/conf/server.xml`; the replaced files are kept in `bi-server/update/backup<time stamp>/`. Note your `-Xms`/`-Xmx` values before every update and restore them in the `CATALINA_OPTS` line afterwards.

### Windows service

If Datafor runs as the Windows service `DataforSolutionServer`, the start script is not used. The service takes its heap from the values that `tomcat\bin\service.bat` passes when the service is installed (`JvmMs` 2048 and `JvmMx` 6144, in MB). To change them on an installed service, run as administrator:

```bat
bi-server\tomcat\bin\tomcat9w.exe //ES//DataforSolutionServer
```

On the **Java** tab, set **Initial memory pool** and **Maximum memory pool** (in MB), click **OK**, and restart the service. Alternatively, change `JvmMs` and `JvmMx` in `service.bat`, then remove and reinstall the service.

### Docker

The container runs the same `/opt/bi-server/start-server.sh`, which sets `CATALINA_OPTS` itself, so passing `CATALINA_OPTS` or `JAVA_OPTS` with `docker run -e` has no effect. Edit the script in the container and restart it:

```shell
docker cp datafor-ee:/opt/bi-server/start-server.sh .
# edit -Xmx in start-server.sh
docker cp start-server.sh datafor-ee:/opt/bi-server/start-server.sh
docker exec -u root datafor-ee chown biadmin:biadmin /opt/bi-server/start-server.sh
docker exec datafor-ee /opt/bi-server/stop-server.sh
docker restart datafor-ee
```

Edit the file with an editor that keeps Linux line endings. The change survives a new container only if `/opt/bi-server` is on a volume (see [Deploying Datafor Using Docker](/documentation/Setup/Deploying-Datafor-Using-Docker/)). If you limit the container's memory with `--memory`, keep the limit well above `-Xmx`, because PostgreSQL runs in the same container.

## Tomcat

The web connector is in `bi-server/tomcat/conf/server.xml`. It listens on port 28080 and already compresses responses (`compression="on"`, `compressionMinSize="2048"` for HTML, JavaScript, CSS, JSON and text), so there is nothing to enable.

It sets no `maxThreads`, so Tomcat handles at most 200 requests at the same time. Raise it only if many users work at once and requests wait while CPU and memory are still free. Add the attribute to the existing `<Connector … port="28080" …>` element, keep its other attributes, and restart Datafor:

```xml
<Connector URIEncoding="UTF-8" ... port="28080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="28443"
           maxThreads="400"
           ... />
```

For HTTPS, caching of static files and long-running requests, put Nginx in front of Datafor. See [Deploying Datafor Behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/).

## Garbage collection log

To see whether pauses come from garbage collection, add these options to the `CATALINA_OPTS` line of the start script (see [Memory (heap size)](#memory-heap-size)) and restart:

```
-Xloggc:/opt/bi-server/tomcat/logs/gc.log -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=5 -XX:GCLogFileSize=20M
```

Use your own installation path. These options are for the bundled Java 8. If the server runs on Java 9 or later, use `-Xlog:gc*:file=/opt/bi-server/tomcat/logs/gc.log` instead: Java 9 and later do not start with some of the Java 8 options (for example `-XX:+PrintGCDateStamps`), and Java 8 does not start with `-Xlog`. No JIT options are needed; Java 8 already enables tiered compilation and compressed object pointers.
