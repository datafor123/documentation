---
title: Datafor Overview
permalink: /documentation/Start/Datafor-Overview/
tags:
  - Business Intelligence
  - AI Analytics
  - Embedded Analytics
description: Explore how Datafor brings reusable business models, interactive dashboards, conversational AI, and embedded analytics together to help teams put data to work.
createTime: 2026/09/01 22:03:26
---


# Datafor Overview

**Build interactive dashboards. Ask questions in plain language. Bring analytics into the applications your users already use.**

Datafor is a business intelligence and embedded analytics platform that brings data modeling, visual exploration, conversational AI, and access management into one environment. It helps analysts build reusable analytics, business users investigate their next question, and product teams deliver data experiences inside their own applications.

The idea is simple: define what your data means, then give people more ways to work with it.

## Turn a question into a conversation

A chart can show that a number changed. Your next question is often more specific: *Which months? Which products? How does this compare with last year?*

With **AI Assistant**, select an analysis model and ask in your own words. Explore trends, comparisons, rankings, and breakdowns through charts and tables, then continue with follow-up questions instead of starting over.

For example, a prepared retail model can support a question such as:

> How did Gross Margin Rate change by month in 2025?

<div align="left"><img src="../Metrics Library/images/gross-margin-rate-agent-result.jpg" alt="Datafor AI Assistant showing a monthly Gross Margin Rate line chart for the Retail Chain Operations example model" width="100%" /></div>

*Example from the Retail Chain Operations model. Your available metrics and results depend on your model, data, and permissions.*

The Agent works with Datafor analysis models, so business definitions and model preparation matter. Review the metric, time range, filters, and evidence before using an answer in a decision.

The AI Agent is currently **Preview** and requires an administrator to configure the AI service, model profiles, and data preparation. Start with [AI Assistant](/documentation/AI-Agent/AI-Chat/), or see [current capabilities and limits](/documentation/AI-Agent/AI-Agent-Overview-and-Roadmap/).

## Build on a shared business language

When every report defines revenue differently, more dashboards do not resolve the disagreement. Datafor's **Analysis Model** gives teams a reusable place to define relationships, business-facing fields, hierarchies, measures, and calculations.

An analyst can define how sales are aggregated and how products, stores, and dates relate. Report authors and AI-assisted analysis can then work from that model instead of rebuilding the logic for every question.

For organization-wide definitions, **Metrics Library** adds ownership, synonyms, calculation relationships, and certification status. Bind a library metric to its implementation in a model so its business meaning and executable calculation can be reviewed together. Certification approves the definition; the model implementation still needs validation.

This creates a practical foundation for consistent analytics: shared definitions that people can inspect, reuse, and improve.

Explore [Analysis Models](/documentation/Model/Analysis-Model-Overview/) and [Metrics Library](/documentation/Metrics-Library/Metrics-Library/).

## Create reports people can explore

Use the visual report designer to arrange charts, tables, filters, and supporting text on a canvas. Select a model, add fields, and refine the layout without writing SQL for each visualization.

Reports can be more than a fixed presentation. Configure cross-filtering so a selection in one chart changes related charts, or add a hierarchy that lets users drill from a summary into more detail. A regional sales overview can become the starting point for investigating a particular product or period.

The result is a reusable analytical workspace: authors design the experience, while readers explore the questions that matter to them.

Begin with [Basic Operations for Report Design](/documentation/Start/Basic-Operations-for-Report-Design/), then explore [Cross-Filtering](/documentation/Analysis/Cross-Filtering/) and [Drill Down](/documentation/Analysis/Drill-down/).

## Put analytics where the work happens

Datafor supports both a standalone analytics workspace and analytics embedded in another application. Use the **embedding SDK** to integrate a report viewer or designer, pass application context through parameters, and respond to navigation events.

For customer portals and software products, this lets you add an analytical experience alongside existing workflows. **White Label** settings provide branding controls such as logos and product titles; authentication integration connects the experience to an identified user.

Embedding is also an access-design task. A parameter that selects a customer or region is a filter, not a security boundary. Choose the intended user identity and configure server-side permissions before sharing the experience.

See [SDK Embedding](/documentation/SDK-Embedding/) and [White Label](/documentation/Embedded/White-Label/).

## Share insight with deliberate access controls

Different audiences can use the same analytical content without necessarily receiving the same data. Datafor provides complementary controls:

| Control | What it manages |
| --- | --- |
| **Access Control List (ACL)** | Who can open or manage reports, models, and datasources |
| **Row access (RLS)** | Which records a policy permits a user to query |
| **Table & column access (OLS)** | Which tables, views, and columns are visible |

Use roles to represent business audiences and test their effective access. These controls require configuration: having no matching enabled row policy does not automatically deny access, and governed models need **Apply data security** enabled. See [Data Security](/documentation/Datasource/Data-Security/) for the setup and validation workflow.

## Work with your existing data environment

Connect to a [supported database or warehouse](/documentation/Datasource/Supported-Databases/), or import [Excel and CSV file datasets](/documentation/Datasource/File-Dataset/). Database-backed analysis queries connected sources; file imports use an uploaded-data workflow.

Datafor also processes query results, supports caching, and prepares model metadata for AI. Plan freshness and data handling for the features you use rather than assuming that no data is stored or processed outside the source database. When enabling AI, review the configured model-service endpoints and your organization's requirements for sending metadata and analytical context to those services.

## Start with one useful question

You do not need to model the whole business before creating something useful. Choose a focused question, such as monthly sales by region, and build a small, reviewed path from source data to an answer.

| Your starting point | Next step |
| --- | --- |
| A model is already available and you want to explore it | Open [AI Assistant](/documentation/AI-Agent/AI-Chat/) if AI is configured, or create a report from the model |
| You want to build your first dashboard | Follow [Create Your First Analysis Report](/documentation/Start/Create-Your-First-Analysis-Report/) |
| You need to prepare data for your team | Start with [Creating an Analysis Model](/documentation/Model/Creating-an-Analysis-Model/) |
| You are bringing analytics into a product | Start with [SDK Embedding](/documentation/SDK-Embedding/) |

Connect a source, define the meaning, check the numbers, and share with the right audience. That first useful analysis becomes a foundation your team can build on.
