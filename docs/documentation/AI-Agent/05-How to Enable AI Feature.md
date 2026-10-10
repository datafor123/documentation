---
title: How to Enable the AI Feature
permalink: /documentation/AI-Agent/AI-Feature/
description: Turn on the AI Agent service under Settings › AI Agent › AI service, set its public and internal URLs, and check that the AI Assistant opens.
createTime: 2026/09/01 21:50:44
---

# How to Enable the AI Feature

Datafor uses the AI Agent service for conversational analysis in the AI Assistant, dashboard AI insight, AI clients connected through MCP, and the knowledge indexes of analysis models. An administrator turns the service on and sets its addresses on one page.

In the packaged installation the AI Agent runs on the Datafor server, and browsers reach it through Datafor:

![Browsers call Tomcat on 28080; Tomcat forwards /datafor/ai to the AI Agent API on the Internal URL (default 127.0.0.1:28081/ai). The AI Agent runs the API, one routing worker, 1 to 8 dispatch workers and the MCP server on 38081, which AI clients reach with a Bearer token. The AI Agent calls Datafor at DATAFOR_URL with the X-Datafor-Agent-Secret header, stores its data in the bundled PostgreSQL on 25432, and calls the LLM and embedding providers. Its launcher writes DATAFOR_AGENT_SECRET from instance-secrets.env into Datafor's settings.xml](./images/ai-agent-deployment-topology.svg)

## 1. Open the AI service settings

1. Sign in to Datafor with an administrator account.
2. Go to **Settings › AI Agent › AI service**.

The page has one section, **Service connection**, with a **Save** button at the bottom.

## 2. Enable the service

Turn on **Enable AI Agent**. While it is off, Datafor does not show **AI Agent** in the left navigation or the **AI Agent** card on **Home**.

Each user also needs AI access: in **Users**, the **AI Agent** switch in the user list (**Enable AI Agent** in the user form). A user without it who clicks **AI Agent** sees "Please contact your administrator to enable AI for this user" and stays on the current page.

## 3. Set the service addresses

| Field | Help text on the page | Configuration |
| --- | --- | --- |
| **Public URL** | "The address browsers use to reach the AI Agent." | Enter the URL that users' browsers can reach. |
| **Internal URL** | "The address the Datafor server uses to call the AI Agent; usually the same as the public URL." | Keep it aligned with the public URL unless the Datafor server must use a separate private route. |

In the packaged installation, where the AI Agent runs on the Datafor server, both fields can stay empty. Browsers then use **Site URL** (**Settings › Access & Integration › Site address**) followed by `ai`, for example `https://bi.example.com/datafor/ai`, and the Datafor server calls the AI Agent at `http://127.0.0.1:28081/ai`. Set **Site URL** to the address users open; with the shipped `http://localhost:28080/datafor/` the AI Assistant works only on the server itself. See [Site Address](/documentation/System/Site-Address/). The fields show `http://localhost:28080/datafor/ai` as a placeholder, not as a value that must be copied to every environment.

## 4. Save and verify

1. Click **Save**. The button is enabled only after you change a value.
2. Click **AI Agent** in the left navigation, directly below **Home**.
3. Confirm that the **AI Assistant** page loads and that its toolbar shows **New Chat**, **History**, **Connect AI**, **Common Questions**, **Ops**, and **LLM**. **Common Questions**, **Ops**, and **LLM** are shown to administrators only.

Then:

- Assign the LLM stages and the embedding model: [LLM Configuration](/documentation/AI-Agent/LLM-Configuration/).
- Check the knowledge indexes of your analysis models: [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/).
- To prepare for many users submitting questions together, follow [Managing High Concurrency](/documentation/AI-Agent/Managing-High-Concurrency/). Worker count is configured in the installed Agent's server-side `.env` file; the settings on this page do not change analysis capacity.

## 5. AI Agent on a separate server

When the AI Agent runs on another server, or anywhere that is not the packaged `ai-agent` directory beside Datafor's `pentaho-solutions` folder, also:

1. Enter that server's addresses in **Public URL** and **Internal URL**.
2. Give the AI Agent and the Datafor server the same shared secret, so that users who are not administrators can use models configured in Datafor. See [AI Agent Shared Secret](/documentation/AI-Agent/Agent-Shared-Secret/).

## Troubleshooting

| Symptom | Check |
| --- | --- |
| **AI Agent** is missing from the left navigation | Confirm that **Enable AI Agent** is on and saved. |
| A user gets "Please contact your administrator to enable AI for this user" | Turn on AI access for that user in **Users**. |
| AI Assistant does not open | Confirm that the configured **Public URL** is reachable from the browser. |
| Backend AI requests fail but the page loads | Check **Internal URL** and server-to-server network access. |
| **Save** is disabled | The form has no unsaved changes. |
| Administrators can use AI features, other users get model errors | The shared secret is missing or differs between the AI Agent and Datafor. See [AI Agent Shared Secret](/documentation/AI-Agent/Agent-Shared-Secret/). |
| The AI Assistant loads, but the progress title does not change until the answer appears | Datafor is behind a reverse proxy that buffers the AI Agent stream. Disable buffering for `/datafor/ai/` as described in [Deploying Datafor Behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/). |
