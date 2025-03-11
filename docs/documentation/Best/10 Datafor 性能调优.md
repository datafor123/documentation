---
title: Performance Tuning
permalink: /documentation/Best/Performance-Tuning/
tags:
---


# Performance Tuning

When deploying Datafor, it is important to ensure that the system has sufficient available resources (CPU, memory, disk space, etc.) to ensure its optimal performance. However, even with sufficient resources, performance issues may arise due to incorrect configurations. This document provides some common Datafor performance tuning tips to help you optimize the performance of your Datafor deployment.

## Database Tuning

The query performance of Datafor analytics reports relies on the query performance of the database. Therefore, tuning the database appropriately can improve Datafor performance. Here are some common database tuning recommendations:

### Use the right database

It is recommended to use a scalable and performant database.

### Configure connection pool

A connection pool is a component that manages connections between the application and the database. Using a connection pool can reduce network traffic between the application and the database, and improve performance.

Here is an example configuration using the c3p0 connection pool:

### Configure caching

Caching is a component that caches data between the application and the database. Using caching can reduce the number of times data is retrieved from the database, and improve performance.

## Tomcat Tuning

Tomcat is the web container that runs Datafor. Here are some common Tomcat tuning recommendations:

### Choose the right connector

The default Tomcat connector used in Datafor is the HTTP/1.1 NIO protocol connector. This connector uses NIO technology to improve performance and throughput, and supports long connections. In Datafor, you can find the following connector configuration in the server.xml file:

```
<Connector port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
           connectionTimeout="20000"
           redirectPort="8443" />
```

### Set the right thread pool size

Each connector can have a thread pool configured to handle its incoming requests. The thread pool should be configured based on the expected concurrent connections. Datafor uses the default Tomcat thread pool configuration, which has a default value of 200.

You can add the maxThreads and minSpareThreads properties to the connector in the server.xml file. Here is an example configuration with a minimum thread count of 300 and a maximum thread count of 500:

```
<Connector port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443"
           maxThreads="500"
           minSpareThreads="300"
           prestartminSpareThreads="true"
           maxIdleTime="60000" />
```

### Consider enabling compression

Tomcat can compress content sent to browsers and other applications. This can improve performance by reducing network traffic, but requires compression and decompression. It is recommended to enable compression.

Here is an example configuration:

```
<Connector port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443"
           compression="on" />
```

### Host static content on a web server

Tomcat is designed to provide dynamic web content. Therefore, it is recommended to use a web server such as Apache HTTP Server as a front-end to Tomcat to allow the web server to serve static content. In the Datafor documentation, it is recommended to store any static content referenced by report images or dashboards on a web server, rather than within the Tomcat that hosts Datafor.

## JVM Tuning

Tomcat runs on the JVM, so adjusting JVM parameters can improve performance. Here are some common JVM tuning recommendations:

### Increase memory

The minimum and maximum heap sizes can be set using the -Xms and -Xmx parameters. It is recommended to set them to the same value, and adjust the maximum heap size based on your application's needs.

For example:

```
java -Xms512m -Xmx1024m -jar app.jar
```

### Enable garbage collection logging

The JVM provides some parameters that can enable garbage collection logging to better understand the behavior of garbage collectors in the JVM. Here are some common options:

```
-XX:+PrintGC
-XX:+PrintGCTimeStamps
-XX:+PrintHeapAtGC
-XX:+PrintTenuringDistribution
-XX:+PrintGCApplicationStoppedTime
```

### Enable compiler optimizations

The JVM includes a JIT that compiles Java bytecode into native code. The following parameters can enable JIT optimizations:

```
-XX:+AggressiveOpts
-XX:+TieredCompilation
-XX:+OptimizeStringConcat
-XX:+UseCompressedOops
```

## Considerations

Adjusting Datafor, Tomcat, and JVM parameters can have unexpected impacts on the system. Before making any changes, be sure to back up your system and test and evaluate in a production environment to ensure that the changes you make do not cause system crashes or declines in performance.