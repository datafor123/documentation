---
title: Try Datafor in Claude and ChatGPT
permalink: /documentation/AI-Agent/Try-in-Claude-and-ChatGPT/
description: Connect Claude Desktop, Claude Code or the ChatGPT desktop app to Datafor with a personal token, check the connection with a few questions, and fix the usual setup mistakes.
createTime: 2026/10/10 23:50:00
---

# Try Datafor in Claude and ChatGPT

This page shows how to ask about your Datafor data from Claude or ChatGPT in about ten minutes: which apps work, how to set each one up, and which questions to try first. Each question runs in Datafor as a governed query under your own account, so the AI app sees only the models and rows you can see in Datafor.

For every client, setting and administrator option, see the full reference [Connect AI Clients (MCP)](/documentation/AI-Agent/Connect-AI-Clients/).

This page applies to Datafor 10.00 and later.

## 1. Which apps work today

| App | Works with Datafor | How it connects |
| --- | --- | --- |
| **Claude Desktop** (Windows, macOS) | Yes | The Datafor extension `datafor.mcpb` |
| **Claude Code** | Yes | One `claude mcp add` command |
| **ChatGPT desktop app** | Yes | An MCP server under **Settings › Plugins › MCP** |
| Claude on the web (claude.ai) and Claude's **custom connectors** | Not yet | These sign in with OAuth, which Datafor does not offer yet |
| ChatGPT on the web, ChatGPT connectors and developer mode | Not yet | Same reason: they accept only OAuth or no sign-in at all |

The apps that work run on your own computer and send your personal token with every call. The web apps connect from the provider's cloud and need an OAuth sign-in and a public HTTPS address; use one of the desktop apps until Datafor supports that.

## 2. Before you start

You need two values. The steps below call them `<MCP address>` and `<token>`.

1. In the Datafor portal, open the account menu at the top right, choose **My account**, then the **Personal tokens** tab.
2. Copy the **MCP address** at the top of the page. The default `http://127.0.0.1:38081/mcp` only works on the computer where Datafor is installed. If your AI app runs on another computer, ask your administrator for the published address.
3. Click **New token**, name it after the app (for example `Claude Desktop` or `ChatGPT`), choose how long it stays valid and confirm.
4. Copy the token right away: it is shown **once**.

If the page says "Your administrator has not turned on personal tokens", ask your administrator to turn them on (see [Turn on personal tokens](/documentation/AI-Agent/Connect-AI-Clients/#_8-1-turn-on-personal-tokens)).

::: warning Keep the token out of chats
The token stands for you and all your permissions. Paste it only into the app's settings or configuration file, never into a conversation. Create one token per app and computer, so you can revoke one without breaking the others.
:::

## 3. Set up Claude

### Claude Desktop

1. Install Node.js 18 or later if it is not installed yet. The extension needs it to start.
2. Get `datafor.mcpb` from your administrator.
3. In Claude Desktop, open **Settings › Extensions › Advanced settings › Install extension** and choose the file, or drag the file into the Claude window.
4. Fill in the extension settings:

   | Field | Value |
   | --- | --- |
   | **URL** | `<MCP address>` |
   | **Personal token** | `<token>` (the token alone, without `Bearer`) |
   | **npx path** | Leave empty. Fill it in only if Claude reports that it cannot find `npx`. |

5. Make sure the extension is enabled, then open a **new** conversation. Conversations that were already open do not load a new extension.

Do not use **Add custom connector** for Datafor: custom connectors sign in with OAuth, which Datafor does not offer yet.

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

- **Write `Bearer`, a space, then the token** in the header value. A value with the token alone, or with another word in front, can make Datafor answer `Missing Datafor MCP authentication`.
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

## 5. Try it

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

## 6. If it does not work

| What you see | What to do |
| --- | --- |
| No Datafor tools in Claude Desktop | Open a new conversation and check that the extension is enabled and has a token. If Claude started before Datafor was running, turn the extension off and on under **Settings › Extensions**, or restart Claude. |
| Claude Desktop cannot find `npx` | Install Node.js 18 or later, or enter the full path to `npx` in the extension's **npx path**. |
| No Datafor tools in ChatGPT | Check that Datafor is listed and enabled on **Settings › Plugins › MCP**, then quit and restart the app. |
| `Missing Datafor MCP authentication` | No token reached Datafor. In ChatGPT, check that the header value starts with `Bearer ` and restart the app; in Claude Code, check the `--header` value. |
| 401, or a sign-in failure on a tool call | The token has expired or was revoked. Create a new one and update the app. |
| Cannot connect, or the call times out at once | The MCP address is not reachable from your computer. The `127.0.0.1` address only works on the Datafor computer; ask your administrator for the published address. |
| The answer stops after about a minute | ChatGPT: add `tool_timeout_sec = 600` (section 4, *Allow slower answers*). Other apps: raise their tool timeout. |

More cases, the server logs and the administrator settings are in [Connect AI Clients (MCP)](/documentation/AI-Agent/Connect-AI-Clients/#_6-troubleshooting).

## 7. When you are done

- To stop an app from using Datafor, revoke its token on **My account › Personal tokens**. It stops working at once; an app that is connected can keep working for up to a minute.
- On a shared computer, also remove the extension (Claude Desktop), run `claude mcp remove datafor` (Claude Code), or uninstall Datafor on **Settings › Plugins › MCP** (ChatGPT).
