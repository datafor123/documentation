---
title: Connect AI Clients (MCP)
permalink: /documentation/AI-Agent/Connect-AI-Clients/
description: Ask Datafor from Claude, Codex, Cursor and other MCP clients under your own permissions, sign in with a personal token from My account, and prepare the server as an administrator.
createTime: 2026/10/09 18:00:00
---

# Connect AI Clients (MCP)

Datafor offers an MCP (Model Context Protocol) server, so you can ask about your data from the AI assistant you already use: Claude Desktop, Claude Code, Codex, Cursor, VS Code, Cherry Studio, or any agent that supports MCP. Each question runs as a governed query in Datafor under your own account. The AI client sees only the analysis models and data you can see in Datafor.

By default Datafor returns the result rows, the query behind them and any disclosures, and the AI client writes the answer from those rows. Datafor instructs the client never to change a value and to label anything it calculates itself as its own work.

This page applies to Datafor 10.00 and later.

## 1. What the AI client can do

Once connected, the client has four Datafor tools:

| Tool | What it does |
| --- | --- |
| `list_models` | Lists the analysis models you may query, with search and paging. |
| `explore_model` | Describes one model as you may see it: its metrics, dimensions and time fields. |
| `generate_sample_questions` | Suggests one to five questions (three by default) that the model can answer, built from its own metrics and dimensions. |
| `ask_datafor` | Asks one question in natural language and returns the result rows, the query behind them, the disclosures and an `analysis_context_id` for follow-ups. It is also used to answer a clarification. |

- **Same permissions as in Datafor.** A model you cannot open in Datafor is not listed, and row-level policies apply as usual.
- **Read only.** The tools run queries and change nothing in Datafor. Building indexes, editing models and other administration are not available.
- **No raw access.** The client gets no SQL, MDX, back-end payloads or other users' data.
- **Answers are written by the client.** The wording therefore differs from an answer on the **AI Agent** page. If you want Datafor's own written analysis, say so; the client then asks with `detail: "insight"` (see section 5).

## 2. Create your personal token

An AI client signs in to Datafor with a **personal token**. The token stands for you and your permissions: it contains only your user name and an expiry date, not your roles, so signing in with it gives you the permissions you have in Datafor at that moment. It never contains your password, it expires, and you can revoke it on its own.

1. In the portal, open the account menu at the top right and choose **My account**, then the **Personal tokens** tab.
2. Note the **MCP address** at the top of the page. "This address only works on the computer Datafor is installed on…" means the server listens on that computer only; to connect from another computer, your administrator must publish an address (section 8.2). "No public address is configured…" means the administrator opened the server to the network without naming a public address; if it does not connect, ask for the public MCP address.
3. Click **New token**, give it a name (for example the client it is for), choose how long it stays valid, and confirm.
4. The token is shown **once**. Copy it now and paste it into your client as described in section 3.

The page lists every token you have created: name, creation and expiry time, last use and status. When a token expires, when you change computers, or when it may have leaked, click **Revoke** on that row and create a new one. A revoked token stops working at once, and the sessions opened with it end. An AI client connected over MCP can keep working for up to a minute, because the MCP server caches token checks for 60 seconds; other nodes of a cluster also follow within a minute.

| The page says | What it means |
| --- | --- |
| "Your administrator has not turned on personal tokens." | Self-service tokens are off on the server. Ask your administrator to enable them (section 8.1). Without them the AI client cannot connect. |
| "This session was signed in with a token…" | You opened the portal with a token. Sign in with your account to create or revoke tokens. |
| No MCP address | The AI Agent service is not reachable from the portal, or the MCP channel is switched off (section 8.3). |

In the sections below, `<MCP address>` and `<token>` stand for these two values.

## 3. Set up your AI client

### Claude Desktop

Claude Desktop reaches Datafor through the Datafor extension, `datafor.mcpb`. Node.js 18 or later must be installed, because the extension runs `npx`. On its first start, `npx` downloads the `mcp-remote` package.

1. Get `datafor.mcpb` from your administrator.
2. In Claude Desktop, open **Settings › Extensions › Advanced settings › Install extension** and choose the file. You can also drag the file into the Claude window.
3. Fill in the extension settings:

   | Field | Value |
   | --- | --- |
   | **URL** | `<MCP address>`. Default `http://127.0.0.1:38081/mcp`. |
   | **Personal token** | `<token>`. |
   | **npx path** | Usually empty. Fill in the full path only when Claude cannot find `npx`. |

4. Open a **new** conversation (open conversations do not load a new extension) and ask: "Use Datafor to list the analysis models I can access."

If Claude Desktop starts before Datafor is up, the extension keeps retrying for about two and a half minutes on its first connection. Without a token the extension does not start and writes the reason to its log. To upgrade the extension, uninstall the old version first, then install the new one.

### Claude Code

Run this command in a terminal with your two values, then reopen Claude Code:

```bash
claude mcp add --transport http datafor "<MCP address>" --header "Authorization: Bearer <token>"
```

`claude mcp list` should show the server as connected. Claude Code and Claude Desktop keep separate configurations: a server added with `claude mcp add` does not appear in Claude Desktop conversations, and the other way round.

### Codex (desktop app, CLI and IDE extension)

1. Open your Codex user configuration: `~/.codex/config.toml` on macOS and Linux, `%USERPROFILE%\.codex\config.toml` on Windows, or `config.toml` in `$CODEX_HOME` when that is set.
2. Add this section and keep the rest of the file. If a `datafor` server is already there, update its section instead of adding a second one.

   ```toml
   [mcp_servers."datafor"]
   url = "<MCP address>"
   tool_timeout_sec = 600

   [mcp_servers."datafor".http_headers]
   "Authorization" = "Bearer <token>"
   ```

3. Save, restart Codex, open a new conversation and ask: "Use Datafor to list the analysis models I can access."

The desktop app, the CLI and the IDE extension on one computer share this configuration. Codex connects to the HTTP server directly: no extension, Node.js or `codex mcp login` is needed. `tool_timeout_sec = 600` leaves time for slower analyses. In the CLI, `codex mcp list` shows the configuration and `/mcp` the connection status. Codex cloud tasks do not read the configuration on your computer.

### Cursor, VS Code, Cherry Studio and other clients with a JSON configuration

Paste this into the client's MCP configuration file (see the client's own documentation for where it is), then restart the client:

```json
{
  "mcpServers": {
    "datafor": {
      "type": "http",
      "url": "<MCP address>",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}
```

If the client cuts tool calls off after a short time, raise its tool timeout. A question usually takes under a minute; with Datafor's written analysis it can take about three minutes.

### Any agent that supports MCP

Any client that speaks MCP over Streamable HTTP can connect: the server address is `<MCP address>` and the request header is `Authorization: Bearer <token>`. Write the token only into the client's configuration or secret store, never into a chat. Once connected, Datafor hands the agent its own usage notes as server instructions (settle the model first, explore an unknown model, ask one step at a time, pass the context for follow-ups, keep Datafor's numbers), so no prompt needs to be pasted.

## 4. Check the connection

Ask these three questions in order. When all three return results, the connection works end to end:

1. "Use Datafor to list the analysis models I can access."
2. "Use Datafor to show the metrics and dimensions of the model "_model name_", then suggest a few questions I could ask."
3. "Use Datafor to analyze: _a business question you care about_."

Back on **My account › Personal tokens**, the token's **Last used** time updates.

## 5. Asking from an AI client

- **One step at a time.** Ask a question that one query can answer: a metric, the dimensions and the time range. The client should split a complex question into such steps itself.
- **The model is optional.** Name it when you know it. Otherwise Datafor picks one from your models and the Metrics Library bindings, or asks you to choose; the client should tell you which model answered (`data.resolved_model`).
- **Follow-ups keep the context.** "Now by month" or "only East" continues the earlier analysis; the client passes back the `analysis_context_id` of the step you build on, which can be any earlier step.
- **Answer clarifications.** When Datafor needs a choice, the client shows the options; pick one and the analysis continues.
- **Disclosures are relayed.** Assumptions, member mappings, omitted parts and truncation come back as disclosures, and the client must tell you each one.
- **Forecasts and causes go to Datafor first.** The client relays what Datafor answers and computes beyond it only if you ask, labelled as its own work.
- **Data or insight.** The default (`detail: "data"`) returns rows, the query and disclosures, and Datafor writes no analysis or follow-ups. With `detail: "insight"`, Datafor also writes its own analysis, may run several queries for a complex question and can take about three minutes. Ask for it explicitly.
- **Row limit.** A result returns up to 200 rows by default. Ask for more and the client passes `max_rows`, up to 1000.
- **Long analyses come back later.** If the answer is not ready within the wait time (200 seconds by default), the call returns `pending` with a `run_id`, and the client collects the answer by calling again with that `run_id` alone. The analysis keeps running in the meantime.
- Metrics Library notes such as "draft" or "definition drift" are not returned in the default data mode.

### What a response can say

| Status | Meaning | What the client should do |
| --- | --- | --- |
| `ok` | The query ran and returned its rows. | Write the answer from the rows and relay the disclosures. |
| `partial` | Part of the question could not be answered, for example a comparison that could not be computed. | Answer with what is there and say what is missing. |
| `clarification_needed` | Datafor needs a choice from you, such as the model or a member. | Show the message and the options, then reply with your choice. |
| `needs_split` | The question needs several dependent queries. This is not a failure. | Split it and ask the parts one at a time. |
| `unsupported` | The question is outside what the model can answer. | Relay Datafor's message; do not answer from general knowledge. |
| `pending` | The answer was not ready within the wait time (`MCP_ASK_TIMEOUT_SECONDS`, 200 seconds by default). The analysis is still running. | Call `ask_datafor` again with only the `run_id` from the response, not the question. |
| `error` | The call failed. | Retry once only if the response says it is retryable; otherwise report the failure. |

## 6. Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| **Personal tokens** shows "Your administrator has not turned on personal tokens." | Self-service tokens are off. The administrator enables them in the JWT configuration (section 8.1). |
| Claude Desktop shows no Datafor tools | Open a new conversation; check that the extension is enabled and that a token is filled in. If Claude started before Datafor and the retries ran out, turn the extension off and on in **Settings › Extensions**, or restart Claude. |
| Claude Desktop cannot find `npx` | Install Node.js 18 or later, or enter the full path in the extension's **npx path**. |
| Codex shows no Datafor tools | Check that the section is in the user `config.toml` that Codex actually uses, save, restart Codex, and check that the MCP address is reachable. |
| Codex reports a duplicate section | A server name may appear only once. Update the existing `datafor` section and keep the other servers. |
| `Missing Datafor MCP authentication.` | No credential reached the server: the token is missing or the header is malformed. Create a token and update the client configuration. |
| 401 or a sign-in failure on a tool call | The token has expired, was revoked or is wrong, or the account is disabled. Create a new token and update the client configuration. |
| `password_auth_disabled` | The client still sends user name and password headers. Switch it to a personal token (section 8.3). |
| `421 Invalid Host header` | The server is reached under a host name that is not in `MCP_ALLOWED_HOSTS` (section 8.2). |
| Cannot connect, or the call times out | The MCP server is not running, or the address only works on the Datafor computer. Ask your administrator. |
| A question about a specific store or region loses its filter or cannot be answered | The model's knowledge index is not built or out of date. See [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/). |
| The answer says Datafor cannot answer this | A capability limit, not a fault. Rephrase, or split the question. |

The Claude Desktop extension writes its log to `%LOCALAPPDATA%\Claude\logs\mcp-server-Datafor.log` (in some versions under `%APPDATA%\Claude\logs\`). Check its last lines first when the connection fails. The server log is `ai-agent/logs/mcp-server.log` (and `mcp-server-err.log`) on the Datafor server.

## 7. Security

- A personal token stands for you and all your permissions. Keep it only in your own AI client's configuration; do not paste it into a chat, commit it to a repository or forward it. On a shared computer, remove the configuration when you are done.
- Use a separate token for each client and each computer, so that a leak costs you one token, not all of them.
- If a token may have leaked, revoke it on **My account › Personal tokens** and create a new one. Revocation takes effect at once and ends the sessions opened with the token; MCP clients and other nodes of a cluster follow within a minute. An administrator can also invalidate every token of a configuration at once by changing its secret (section 8.1).

## 8. For administrators

### 8.1 Turn on personal tokens

AI clients connect with personal tokens, and users create them for themselves once you allow it. On **Settings › Access & Integration › Embed tokens (JWT)**, create a configuration for this purpose:

| Field | Value |
| --- | --- |
| **Name** | For example `ai-connect`. |
| **Algorithm** | An HMAC algorithm such as `HS256`, with a **Secret** of at least 32 random characters. |
| **Expiration time** | The longest validity a user may choose, in seconds; `7776000` is 90 days. The **Personal tokens** page offers shorter choices up to this value. |
| **Initialize user** | Off. |
| **Allow users to issue personal tokens** | On. |

See [JSON Web Token (JWT)](/documentation/System/JWT/) for the other fields. A token created on this configuration carries only the user name and an expiry; the user's roles and row-level permissions are read from Datafor at every sign-in.

Changing the **Secret** of the configuration invalidates every token issued from it at once. Users revoke individual tokens themselves on **My account › Personal tokens**.

### 8.2 Let other computers connect

By default the MCP server listens on `127.0.0.1:38081`, so only AI clients on the Datafor computer can connect. It accepts the host names in `MCP_ALLOWED_HOSTS`, and sends each `ask_datafor` call under the user's own sign-in through Datafor's `/datafor/ai`:

![AI clients connect to the MCP address shown on the Personal tokens page (MCP_PUBLIC_URL) with a Bearer personal token; the MCP server on 38081 checks the host against MCP_ALLOWED_HOSTS and sends ask_datafor through Tomcat's /datafor/ai to the AI Agent API on 28081](./images/ai-agent-deployment-topology.svg)

Set these keys in `.env` in the AI Agent folder (`bi-server/ai-agent/.env`):

| Key | Default | Purpose |
| --- | --- | --- |
| `MCP_HTTP_HOST` | `127.0.0.1` | Listen address. Set `0.0.0.0` to listen on the network, or keep `127.0.0.1` behind a reverse proxy on the same computer. |
| `MCP_HTTP_PORT` | `38081` | Listen port. |
| `MCP_ALLOWED_HOSTS` | empty | Comma-separated `Host` header values accepted besides the local addresses, for example `bi.example.com,bi.example.com:*`. Any other host name gets `421 Invalid Host header`. If `MCP_HTTP_HOST` is a network address and this key is empty, the server does not check the `Host` header at all and logs a warning; list your names to keep the check. |
| `MCP_ALLOWED_ORIGINS` | empty | Comma-separated `Origin` values accepted besides the local ones, for browser-based clients. |
| `MCP_PUBLIC_URL` | empty | The address shown on **My account › Personal tokens**, for example `https://bi.example.com/mcp`. Read by the AI Agent service, not by the MCP server. When it is empty, the page shows `http://127.0.0.1:<port>/mcp` for a local listen address, or builds the address from the host name the user opened Datafor with. |

Then restart the AI Agent from its folder with `app-console.bat restart` (Windows) or `./app-console.sh restart` (Linux). Without a target this restarts the AI Agent and the MCP server; `MCP_PUBLIC_URL` is read by the AI Agent service and the listen settings by the MCP server.

Behind a reverse proxy, forward `/mcp` to the MCP server, use HTTPS, list the public host name in `MCP_ALLOWED_HOSTS` and set `MCP_PUBLIC_URL` to the public address. Allow responses of up to five minutes. The server keeps no session between calls, so the proxy needs no sticky sessions, and connected clients keep working after Datafor or the AI Agent restarts or is upgraded.

### 8.3 Switch the channel off, or allow password sign-in

| Key | Default | Effect |
| --- | --- | --- |
| `AGENT_VNEXT_MCP_ENABLED` | `true` | `false` switches the MCP channel off. The **Personal tokens** page then shows no MCP address. |
| `MCP_PASSWORD_SESSION_AUTH_ENABLED` | `false` | `true` also accepts the `X-Datafor-Username` / `X-Datafor-Password` headers. Off by default: a password in a client configuration file cannot be revoked on its own, and accounts that sign in through SSO have none. Use it only as a bridge for an installation that has not turned on personal tokens yet. |

Restart with `app-console.bat restart` or `./app-console.sh restart` after a change.

### 8.4 Wait time and time zone

| Key | Default | Effect |
| --- | --- | --- |
| `MCP_ASK_TIMEOUT_SECONDS` | `200` | Seconds one `ask_datafor` call waits for the answer before it returns `pending` with the `run_id`. Keep it below the AI client's own tool-call limit (Codex: 60 seconds unless `tool_timeout_sec` is raised). |
| `MCP_DEFAULT_TIMEZONE` | empty | IANA time zone, for example `Europe/Berlin`, in which relative dates such as "last month" resolve when the AI client sends none. Empty: the current UTC offset of the server, or UTC if that offset is not a whole number of hours. |

Set them in `ai-agent/.env` and restart with `app-console.bat restart` or `./app-console.sh restart`.

### 8.5 Prepare the models and the server

- Build the knowledge index of each model users will ask about (older versions called it the vector index). Without it, questions that name specific members can lose their filter. See [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/).
- Assign the **Question Suggestions** stage on the **LLM** page. Without it, `generate_sample_questions` can only use the LLM configured in Datafor whose ID is set as `AGENT_DEFAULT_LLM_ID` in `ai-agent/.env`, and for users who are not administrators only with the [shared secret](/documentation/AI-Agent/Agent-Shared-Secret/). With neither, it returns no questions.
- Distribute `datafor.mcpb` to users of Claude Desktop.

### 8.6 After upgrading

- Claude Desktop users reinstall the extension: uninstall the old version first, then install the new one. The current version takes only the personal token; user name and password fields are gone.
- Clients that were set up with user name and password headers stop working unless `MCP_PASSWORD_SESSION_AUTH_ENABLED=true` is set. Turn on personal tokens (section 8.1) and let users switch their clients to a token instead.
- Tokens generated by the former **Connect AI** panel keep working until they expire. They do not appear on **My account › Personal tokens** and cannot be revoked individually; users should create a new token there and update their clients.
