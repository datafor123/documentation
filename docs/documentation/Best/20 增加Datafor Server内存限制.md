---
title: Increasing Memory Limit for Datafor Server
permalink: /documentation/Tools/Increasing-Memory-Limit/
tags:
---


# Increasing Memory Limit for Datafor Server

Datafor Server runs on Java Virtual Machine (JVM) which uses Java heap as a memory storage pool. Heap space is allocated when a process starts. Although JVM is good at dynamic memory management, using too much memory may cause JVM to perform poorly or even crash. On Datafor Server, using too little memory may result in performance degradation. If you use Datafor Server to process large datasets or high concurrency, you can improve its performance by setting the maximum memory usage of JVM.

This article explains how to increase the memory limit of JVM by editing the startup script file of Datafor Server. Following the steps in this article, you can change the memory settings of Datafor Server to meet your specific needs.

Important Note: Changing the memory usage of JVM may affect the stability of Datafor Server. If you are not sure what you are doing, do not change this setting.

**Prerequisites**

- Datafor Server is installed.
- You have administrator privileges.

**Increasing Memory Limit for Datafor Server**

Follow these steps to increase the memory limit of Datafor Server.

1. Log in to the server where Datafor Server is installed with administrator privileges.

2. Navigate to the installation directory of Datafor Server.

3. Open the startup.sh or startup.bat file in Datafor/bin, which is the startup script file of Datafor Server.

4. Find the following lines:

   `set Datafor_JAVA_HOME=/usr/local/java set CATALINA_OPTS=-Xms512m -Xmx1024m`

   If you are using Windows, change the path to the installation path of Java. If you are using Linux, change the path to the installation path of Java.

5. Change the values of Xms and Xmx to increase the memory limit of Datafor Server.

   -Xms sets the initial heap size of Java Virtual Machine. The minimum value is 64 MB. You can set it to 20% of the available memory of Datafor Server.

   -Xmx sets the maximum heap size of Java Virtual Machine. The maximum value is 2048 MB. You can set it to 80% of the available memory.

   For example:

   `set CATALINA_OPTS=-Xms1024m -Xmx2048m`

   The above example sets Xms to 1024 MB and Xmx to 2048 MB.

6. Save and close the startup script file.

7. Restart Datafor Server.

You have successfully increased the memory limit of Datafor Server.

## Summary

This article explains how to increase the memory limit of JVM by editing the startup script file of Datafor Server. By adjusting the memory limit of JVM, you can improve the performance of Datafor Server. However, please note that changing the memory usage of JVM may affect the stability of Datafor Server. So, be careful while making changes.