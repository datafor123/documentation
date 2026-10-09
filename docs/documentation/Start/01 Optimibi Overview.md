---
title: Datafor Overview
permalink: /documentation/Start/Datafor-Overview/
tags:
  - Business Intelligence
  - AI Analytics
  - Embedded Analytics
description: What Datafor is, where each part lives in the console, and which page to read first for your task.
createTime: 2026/09/01 22:03:26
---


# Datafor Overview

Datafor is a business intelligence and embedded analytics platform. You connect databases or files, describe the data once in an analysis model (relationships, hierarchies, measures and calculations), and then work from that model: build dashboards and reports, ask questions in your own words with the AI Agent, or embed reports in your own application. Who can open which content, and which rows and columns each user can query, is controlled per user and role.

## Where things are

The areas in the console's left navigation:

| Area | What you do there | Start with |
| --- | --- | --- |
| **Home**, **Personal**, **Public**, **Favorites**, **Recent** | Open, organize and share reports and other content. | [Quick Tour of the Console](/documentation/Console/Quick-Tour-of-the-Console/) |
| **AI Agent** | Ask about a model in your own words and get charts, tables and conclusions. Selecting a model is optional: with **Auto-select model** the Agent picks one. An administrator sets up the AI service first. | [AI Assistant](/documentation/AI-Agent/AI-Chat/), [AI Agent Overview](/documentation/AI-Agent/AI-Agent-Overview-and-Roadmap/) |
| **Datasource** | Connect databases and warehouses, or import Excel and CSV files. | [Supported Databases](/documentation/Datasource/Supported-Databases/), [File Dataset](/documentation/Datasource/File-Dataset/) |
| **Models** | Build analysis models: tables, relationships, hierarchies, measures and calculated measures. | [Analysis Model Overview](/documentation/Model/Analysis-Model-Overview/) |
| **Metrics Library** | Keep the official definition of each business metric, with owner, synonyms and certification, and bind it to the measure that calculates it in each model. | [Understanding Metrics Library](/documentation/Metrics-Library/Understanding-Metrics-Library/) |
| Reports | Design dashboards with charts, tables and filters on a canvas, with cross-filtering and drill-down. | [Basic Operations for Report Design](/documentation/Start/Basic-Operations-for-Report-Design/), [Choose a chart](/documentation/Visualization/Choose-a-Chart/) |
| **Settings** | Administrators: license, email, branding, single sign-on, embed tokens, database drivers, query engine, **AI Agent** (AI service and knowledge indexes), backup. | [Settings Overview](/documentation/System/Settings-Overview/) |

Data access needs configuring: having no matching enabled row policy does not automatically deny access, governed models need **Apply data security** enabled, and a report parameter that selects a customer or region is a filter, not a security boundary. See [Data Security](/documentation/Datasource/Data-Security/).

## Where to start

| Your starting point | Next step |
| --- | --- |
| A model is already available and you want to explore it | Open [AI Assistant](/documentation/AI-Agent/AI-Chat/) if AI is configured, or create a report from the model |
| You want to build your first dashboard | Follow [Create Your First Analysis Report](/documentation/Start/Create-Your-First-Analysis-Report/) |
| You need to prepare data for your team | Start with [Creating an Analysis Model](/documentation/Model/Creating-an-Analysis-Model/) |
| You are bringing analytics into a product | Start with [SDK Embedding](/documentation/SDK-Embedding/) |
