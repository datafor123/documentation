---
title: Deploying Datafor Using Docker
permalink: /documentation/Setup/Deploying-Datafor-Using-Dockers/
tags:
description: 
---

# Deploying Datafor Using Docker

Datafor can be easily deployed using Docker. This guide provides the steps and commands to deploy the free version of Datafor.

## Prerequisites

Before you start, ensure you have the following:

- Docker installed on your machine. If you don't have Docker installed, you can download and install it from the Docker website.

## Deployment Steps

1. **Open a Terminal or Command Prompt**:

   - On Windows, you can use Command Prompt or PowerShell.
   - On macOS or Linux, you can use the Terminal.

2. **Pull the Datafor Docker Image**:

   - If you haven't already pulled the Datafor Docker image, you can do so by running:

     ```shell
     docker pull Datafor/bi-server
     ```

   - This command downloads the Datafor Docker image to your local machine.

3. **Run the Docker Container**:

   - Use the following command to run the Datafor Docker container:

     ```shell
     docker run -itd --name Datafor -p 28080:28080 -p 25432:25432 Datafor/bi-server
     ```

   - Command explanation:

     - `docker run`: This command is used to create and start a new Docker container.
     - `-itd`: These flags tell Docker to run the container in interactive mode (`-i`), allocate a pseudo-TTY (`-t`), and run it in detached mode (`-d`), which means it will run in the background.
     - `--name Datafor`: Names the container `Datafor` for easy reference.
     - `-p 28080:28080`: Maps port 28080 on your local machine to port 28080 in the container.
     - `-p 25432:25432`: Maps port 25432 on your local machine to port 25432 in the container.
     - `Datafor/bi-server`: Specifies the Docker image to use.

4. **Verify the Deployment**:

   - Once the container is running, you can check the container status with the following command to verify that Datafor is deployed correctly:

     ```shell
     docker ps
     ```

   - This command lists all running containers. You should see `Datafor` in the list and its status.

5. **Access Datafor**:

   - Open your web browser and navigate to `http://localhost:28080`.
   - You should see the Datafor interface. If you need to connect to the database, you can use port `25432`.

## Stopping and Removing the Container

- To stop the Datafor container, use:

  ```shell
  docker stop Datafor
  ```

- To remove the Datafor container, use:

  ```shell
  docker rm Datafor
  ```

By following these steps, you should be able to deploy and run Datafor on your local machine using Docker.