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
     docker pull datafor123/datafor-ee
     ```

   - This command downloads the Datafor Docker image to your local machine.

3. **Run the Docker Container**:

   - Use the following command to run the Datafor Docker container:

     ```shell
     docker run -itd --name datafor-ee -p 28080:28080 -p 28081:28081 -p 25432:25432 datafor123/datafor-ee
     ```

   - Command explanation:

     - `docker run`: This command is used to create and start a new Docker container.
     - `-itd`: These flags tell Docker to run the container in interactive mode (`-i`), allocate a pseudo-TTY (`-t`), and run it in detached mode (`-d`), which means it will run in the background.
     - `--name datafor-ee`: Names the container `datafor-ee` for easy reference.
     - `-p 28080:28080`: Maps port 28080 on your local machine to port 28080 in the container.This port is used for the web access.
     - `-p 28081:28081`: Maps port 28081 on your local machine to port 28081 in the container.This port is used for the AI agent service.
     - `-p 25432:25432`: Maps port 25432 on your local machine to port 25432 in the container.This port is used for the built-in database service.It is recommended to restrict the port to be accessible only from the local machine for security reasons.
     - `datafor123/datafor-ee`: Specifies the Docker image to use.

4. **Verify the Deployment**:

   - Once the container is running, you can check the container status with the following command to verify that Datafor is deployed correctly:

     ```shell
     docker ps
     ```

   - This command lists all running containers. You should see `datafor-ee` in the list and its status.

5. **Access datafor-ee**:

   - Open your web browser and navigate to `http://localhost:28080`.

## Stopping and Removing the Container

- To stop the container, use:

  ```shell
  docker stop datafor-ee
  ```

- To remove the container, use:

  ```shell
  docker rm datafor-ee
  ```

By following these steps, you should be able to deploy and run datafor-ee on your local machine using Docker.