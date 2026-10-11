---
title: Try Datafor in Claude and ChatGPT
permalink: /documentation/AI-Agent/Try-in-Claude-and-ChatGPT/
description: Connect Claude (desktop app, Claude Code or a claude.ai custom connector) or ChatGPT (desktop app or a developer-mode app) to Datafor with a personal token, check the connection with a few questions, and fix the usual setup mistakes.
createTime: 2026/10/10 23:50:00
---

# Try Datafor in Claude and ChatGPT

This page shows how to ask about your Datafor data from Claude or ChatGPT in about ten minutes: which apps work, how to set each one up, and which questions to try first. Each question runs in Datafor as a governed query under your own account, so the AI app sees only the models and rows you can see in Datafor.

For every client, setting and administrator option, see the full reference [Connect AI Clients (MCP)](/documentation/AI-Agent/Connect-AI-Clients/).

This page applies to Datafor 10.00 and later.

## 1. Which apps work today

| App | How it connects | Needs |
| --- | --- | --- |
| **Claude Desktop** (Windows, macOS) | The Datafor extension `datafor.mcpb` | Node.js 18 or later |
| **Claude Code** | One `claude mcp add` command | — |
| **ChatGPT desktop app** | An MCP server under **Settings › Plugins › MCP** | — |
| **claude.ai** (also in the Claude desktop and mobile apps) | A custom connector; you sign in by pasting a personal token | A public HTTPS MCP address |
| **ChatGPT on the web** | An app in developer mode; you sign in by pasting a personal token | A ChatGPT Business, Enterprise or Edu workspace, and a public HTTPS MCP address |

The first three run on your own computer and reach Datafor from there, so the MCP address only has to be reachable from that computer. claude.ai and ChatGPT on the web connect from Anthropic's and OpenAI's cloud: they work only when your administrator has published Datafor's MCP address on the internet over HTTPS (an address starting with `https://`, not `127.0.0.1` or a name that only resolves inside your network).

## 2. Before you start

You need two values. The steps below call them `<MCP address>` and `<token>`.

1. In the Datafor portal, open the account menu at the top right, choose **My account**, then the **Personal tokens** tab.
2. Copy the **MCP address** at the top of the page. The default `http://127.0.0.1:38081/mcp` only works on the computer where Datafor is installed. If your AI app runs on another computer, ask your administrator for the published address.
3. Click **New token**, name it after the app (for example `Claude Desktop` or `ChatGPT`), choose how long it stays valid and confirm.
4. Copy the token right away: it is shown **once**.

If the page says "Your administrator has not turned on personal tokens", ask your administrator to turn them on (see [Turn on personal tokens](/documentation/AI-Agent/Connect-AI-Clients/#_8-1-turn-on-personal-tokens)).

::: warning Keep the token out of chats
The token stands for you and all your permissions. Paste it only into the app's settings or configuration file, or into the Datafor page that asks for it during a sign-in you started yourself; never into a conversation. Create one token per app and computer, so you can revoke one without breaking the others.
:::

## 3. Set up Claude

### Claude Desktop

1. Install Node.js 18 or later if it is not installed yet. The extension needs it to start.
2. Download [datafor.mcpb](/downloads/datafor.mcpb). If you cannot download it, ask your administrator for the copy in the Datafor installation (`bi-server/ai-agent/claude-extension/datafor.mcpb`).
3. In Claude Desktop, open **Settings › Extensions › Advanced settings › Install extension** and choose the file, or drag the file into the Claude window.
4. Fill in the extension settings:

   | Field | Value |
   | --- | --- |
   | **URL** | `<MCP address>` |
   | **Personal token** | `<token>` (the token alone, without `Bearer`) |
   | **npx path** | Leave empty. Fill it in only if Claude reports that it cannot find `npx`. |

5. Make sure the extension is enabled, then open a **new** conversation. Conversations that were already open do not load a new extension.

If you also add Datafor as a claude.ai custom connector (below), the connector is available in Claude Desktop too; keep only one of the two enabled, so Claude does not see the Datafor tools twice.

### claude.ai custom connector

This works on claude.ai and, once added, in the Claude desktop and mobile apps as well. It needs a public HTTPS MCP address (section 1).

1. On claude.ai, open **Customize › Connectors**, click **+ Add**, then **Add custom connector**. On a Team or Enterprise plan an owner adds it instead under **Organization settings › Connectors** (**Add › Custom › Web**) with the same settings, and each member then clicks **Connect** on it under **Customize › Connectors**.
2. Enter the name `Datafor` and `<MCP address>` as the URL, then click **Continue**.
3. Under **Authentication**, choose **Sign in now**. Under **OAuth client**, choose **Register automatically**: Datafor does not accept **Use Claude's published identity**. Leave **Request headers** empty.
4. Click **Add**. A Datafor page opens in your browser. Check that it names Claude, paste a personal token (create one named `claude.ai`) and click **Connect**.
5. In a conversation, click **+**, choose **Connectors** and turn on **Datafor**.

The connector keeps the token until the token expires. Claude then asks you to connect again: create a new token and paste it on the same page. To disconnect, revoke the token on **My account › Personal tokens** or remove the connector.

### Claude Code

Run this in a terminal, with your two values filled in:

```bash
claude mcp add --transport http datafor "<MCP address>" --header "Authorization: Bearer <token>"
```

Then start a new Claude Code session. `claude mcp list` should show `datafor` as connected. A server added here does not appear in Claude Desktop, and the other way round.

## 4. Set up the ChatGPT desktop app

The ChatGPT desktop app keeps its MCP servers in the same local configuration as Codex. Servers added there are available to the desktop app's conversations on your computer, not to conversations on chatgpt.com or in the mobile apps.

### Add Datafor in the settings

1. In the ChatGPT desktop app, open **Settings**, then **Plugins** under **Integrations**, and select the **MCP** tab.
2. Click **Add** at the top right and add an MCP server of type **Streamable HTTP** named `Datafor`. The type cannot be changed later; to change it, uninstall the server and add it again.
3. Fill in the form:

   | Field | Value |
   | --- | --- |
   | **URL** | `<MCP address>` |
   | **Bearer token environment variable** | Leave empty. |
   | **Headers** | Click **Add header**. Key: `Authorization`. Value: `Bearer <token>`. |
   | **Headers from environment variables** | Leave empty. |

4. Click **Save**, quit the ChatGPT app completely and start it again, then open a new conversation.

Three details matter:

- **Write `Bearer`, a space, then the token** in the header value. Datafor also accepts the token alone, but refuses any other word in front of it.
- **Leave the bearer token environment variable empty.** When it names a variable, the app takes the token from that variable instead; a variable that is not set on your computer sends no token.
- **Restart after every change.** A conversation keeps the configuration it started with; asking again in the same conversation does not pick up a corrected token.

### Allow slower answers

The app gives up on a tool call after 60 seconds by default, while a question with Datafor's written analysis can take about three minutes. The form has no field for this, so set it in the configuration file:

1. Quit the ChatGPT desktop app.
2. Open `%USERPROFILE%\.codex\config.toml` on Windows or `~/.codex/config.toml` on macOS.
3. Find the section the app wrote for the server, for example `[mcp_servers.datafor]`, and add `tool_timeout_sec = 600` under its `url` line.
4. Save and start the app again.

### Or write the whole entry in the configuration file

Instead of using the form, you can add the entry to `config.toml` directly. Keep everything else in the file; if a `datafor` section is already there, edit it instead of adding a second one.

```toml
[mcp_servers.datafor]
url = "<MCP address>"
tool_timeout_sec = 600

[mcp_servers.datafor.http_headers]
Authorization = "Bearer <token>"
```

Save the file and restart the app. The entry then also appears on the **MCP** tab of the settings.

## 5. Set up ChatGPT on the web

On chatgpt.com, Datafor is added as an app in **developer mode**. This is available in ChatGPT Business, Enterprise and Edu workspaces, and it needs a public HTTPS MCP address (section 1). OpenAI moves these menus from time to time; if a name below differs, see OpenAI's [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt).

1. A workspace admin turns on developer mode in the workspace settings, under **Permissions & Roles › Connected Data**. On Enterprise and Edu, admins can allow it for selected members, who then turn it on in their own **Apps** settings.
2. In the settings, open **Apps** and click **Create**. Enter the name `Datafor`, `<MCP address>` as the MCP server URL, and choose **OAuth** as the authentication.
3. Click **Scan Tools**. A Datafor page opens: paste a personal token (create one named `ChatGPT`) and click **Connect**. When the scan has listed the four Datafor tools, click **Create**.
4. The app is now a draft, marked **Dev** in your own settings. To offer it to the workspace, an admin publishes it from **Workspace settings › Apps**. Every member then connects it and pastes their own token, so each one queries Datafor with their own permissions.

ChatGPT keeps the token until it expires and then asks you to connect again: create a new token and paste it. When Datafor's tools change after an upgrade, an admin clicks **Refresh** on the app so ChatGPT picks up the new list.

## 6. Try it

Ask these in order in a new conversation. Mentioning "Datafor" helps the app choose the Datafor tools.

1. **Check the connection:** "Use Datafor to list the analysis models I can access."
2. **Get to know a model:** "Use Datafor to show the metrics and dimensions of the model _model name_, and suggest three questions I could ask."
3. **Ask a business question:** "Use Datafor: _a metric_ by _a dimension_ for _a period_, for example last quarter."
4. **Follow up:** "Now break that down by month." The app continues the earlier analysis; you do not need to repeat the whole question.
5. **Ask for Datafor's own analysis:** "Ask Datafor for its written insight on that result." This takes longer, up to about three minutes.

When the first question returns your models, the connection works. On **My account › Personal tokens**, the token's **Last used** time updates.

If the app asks permission before it uses a Datafor tool, allow it. The tools only read: they run queries and change nothing in Datafor.

### What to expect

- **The app writes the answer from Datafor's rows.** The numbers come from Datafor; the wording comes from Claude or ChatGPT, so it differs from the answer on the **AI Agent** page. If the app calculates something itself, it should say so.
- **Notes are passed on.** Assumptions, member mappings and truncation come back with the result, and the app should tell you each one.
- **Datafor may ask back.** When a model or member is ambiguous, the app shows the choices; pick one and the analysis continues.
- **Some questions get split.** A question that needs several dependent queries is answered one step at a time.
- **"Datafor cannot answer this" is a result, not a fault.** It means the question is outside what the model covers. Rephrase it or split it.

## 7. If it does not work

| What you see | What to do |
| --- | --- |
| No Datafor tools in Claude Desktop | Open a new conversation and check that the extension is enabled and has a token. If Claude started before Datafor was running, turn the extension off and on under **Settings › Extensions**, or restart Claude. |
| Claude Desktop cannot find `npx` | Install Node.js 18 or later, or enter the full path to `npx` in the extension's **npx path**. |
| No Datafor tools in ChatGPT | Check that Datafor is listed and enabled on **Settings › Plugins › MCP**, then quit and restart the app. |
| `Missing Datafor MCP authentication` or `Unsupported Authorization scheme` | No usable token reached Datafor. In the ChatGPT desktop app, check that the header value is `Bearer ` followed by the token and restart the app; in Claude Code, check the `--header` value. |
| 401, or a sign-in failure on a tool call | The token has expired or was revoked. Create a new one and update the app. |
| Cannot connect, or the call times out at once | The MCP address is not reachable from your computer. The `127.0.0.1` address only works on the Datafor computer; ask your administrator for the published address. |
| claude.ai or ChatGPT cannot reach the server when you add Datafor | The MCP address is not reachable from the internet over HTTPS. Ask your administrator to publish it ([Let cloud AI apps sign in](/documentation/AI-Agent/Connect-AI-Clients/#_8-3-let-cloud-ai-apps-sign-in)). |
| claude.ai reports an error about the OAuth client | Remove the connector and add it again with **Register automatically** under **OAuth client**. |
| The Datafor page says the link is invalid or has expired | The page is valid for 15 minutes and works only in the browser it opened in. Start the connection again from Claude or ChatGPT. |
| The Datafor page says Datafor did not accept the token | The token was copied incompletely, has expired or was revoked. Create a new one and paste it. |
| The Datafor page says Datafor could not be reached | Datafor is down or restarting. Try again in a moment, or ask your administrator. |
| The connector or app asks you to connect again | The token you pasted has expired. Create a new one and paste it on the Datafor page. |
| The answer stops after about a minute | ChatGPT: add `tool_timeout_sec = 600` (section 4, *Allow slower answers*). Other apps: raise their tool timeout. |

More cases, the server logs and the administrator settings are in [Connect AI Clients (MCP)](/documentation/AI-Agent/Connect-AI-Clients/#_6-troubleshooting).

## 8. When you are done

- To stop an app from using Datafor, revoke its token on **My account › Personal tokens**. It stops working at once; an app that is connected can keep working for up to a minute.
- On a shared computer, also remove the extension (Claude Desktop), run `claude mcp remove datafor` (Claude Code), or uninstall Datafor on **Settings › Plugins › MCP** (ChatGPT desktop app).
- To remove Datafor from claude.ai, remove the connector under **Customize › Connectors**; in ChatGPT on the web, disconnect the app in your **Apps** settings.
