---
title: LLM Configuration
permalink: /documentation/AI-Agent/LLM-Configuration/
createTime: 2025/08/11 16:44:13
---

# LLM Configuration

Administrators configure reusable model profiles and assign them to the runtime stages used by Datafor AI Agent. The current interface separates these tasks into **Assignments**, **Models**, and reusable schemes.

## 1. Open LLM configuration

1. Open **Home → AI Agent**.
2. Click **LLM** in the top toolbar.

The panel opens on **Assignments** and shows the current scheme and assignment completeness.

<div align="left"><img src="./images/llm-assignments-current.png" alt="Current LLM assignments" width="100%" /></div>

## 2. Add a model profile

From **Assignments**, click **Manage models →**, then click **Add Model**.

<div align="left"><img src="./images/llm-models-current.png" alt="Current LLM models" width="100%" /></div>

<div align="left"><img src="./images/llm-add-model-current.png" alt="Add Model form" width="100%" /></div>

Prepare the exact values required by the provider:

| Field | Required | Description |
| --- | --- | --- |
| **Model Name** | Yes | Provider model ID, for example `gpt-5.6-sol` or `text-embedding-3-large`. |
| **Display name** | No | Friendly label shown in Datafor. |
| **Provider** | Yes | Current choices are OpenAI, Qwen, DeepSeek, Gemini, Anthropic, and Custom. |
| **API Endpoint** | Yes | Provider base endpoint, such as an OpenAI-compatible `/v1` URL. |
| **API Key** | Provider dependent | Credential used by the model service. Saved keys are masked when the profile is edited. |
| **Extra Parameters** | No | JSON object merged into the provider request. The default is `{}`. |

Click **Verify and enable** before **Create**. The model list marks profiles whose structured-output compatibility has not been verified as **Structured output not verified**.

## 3. Configure Extra Parameters

The form accepts provider runtime settings such as `temperature`, `max_output_tokens`, `top_p`, reasoning settings, embedding `dimensions`, `encoding_format`, `seed`, and vendor-specific flags.

<div align="left"><img src="./images/llm-extra-parameters-current.png" alt="Extra Parameters help text" width="100%" /></div>

Example for an OpenAI reasoning profile:

```json
{
  "reasoning": {
    "effort": "medium"
  },
  "max_output_tokens": 4096
}
```

The exact keys depend on the selected provider. Keep the value as a valid JSON object, and use the dedicated endpoint and API-key fields instead of placing credentials in this JSON.

## 4. Manage model profiles

Each model card provides **Edit** and **Delete** actions. A card also shows whether the profile is used by Agent stages.

The delete action is disabled while a profile is assigned. Reassign the affected stages and save the assignments before deleting that profile.

## 5. Assign models to runtime stages

Return to **Assignments**. The current runtime requires 15 assignments: 14 Agent stages and one system embedding role.

| Group | Assignment | Runtime key |
| --- | --- | --- |
| Agent Stages | Workflow Routing | `workflow.routing` |
| Agent Stages | Semantic Binding | `semantic.binding` |
| Agent Stages | Semantic Draft | `semantic.draft` |
| Agent Stages | Analysis Strategy | `analysis.strategy` |
| Agent Stages | Investigation Step Query | `analysis.investigation_step_query` |
| Agent Stages | Evidence Analysis | `analysis.evidence` |
| Agent Stages | Follow-up Suggestions | `analysis.follow_up` |
| Agent Stages | Investigation Observation | `analysis.investigation_observation` |
| Agent Stages | Investigation Replan | `analysis.investigation_replan` |
| Agent Stages | Investigation Synthesis | `analysis.investigation_synthesis` |
| Agent Stages | Model Brief | `model.brief` |
| Agent Stages | Dashboard Review | `dashboard.review` |
| Agent Stages | Question Suggestions | `model.question_suggestions` |
| Agent Stages | Failure Explanation | `workflow.failure_explanation` |
| System Roles | Embedding Model | `retrieval_embedding` |

Every required row must have a compatible profile. The **Embedding Model** row requires an embedding profile; the Agent stages require compatible generative models. Click **Save** after changing assignments.

## 6. Use schemes

The assignment header shows the active scheme and a count such as **15/15 assigned**.

- **Switch scheme** applies a built-in or saved configuration template.
- **Save scheme** stores the current model profiles and assignments as a reusable template.
- Imported scheme files do not include API keys. Re-enter and verify credentials after import.

## 7. Verify the configuration

1. Open **New Chat**.
2. Select an analysis model.
3. Confirm that the model brief and suggested questions load.
4. Ask a small, clearly scoped analytical question.
5. If it fails, return to **LLM** and check model verification, the 15 required assignments, provider credentials, and endpoint reachability.

## Security notes

- Restrict LLM configuration to administrators.
- Never place API keys in **Extra Parameters**, screenshots, documentation, or chat messages.
- Re-run **Verify and enable** after changing the provider, endpoint, model ID, credentials, or provider-specific parameters.
