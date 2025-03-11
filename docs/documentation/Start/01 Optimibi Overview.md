---
title: Datafor Overview
permalink: /documentation/Start/Datafor-Overview/
tags: 
---


# Datafor Overview

## How Datafor Works

This page provides a high-level understanding of how Datafor operates, including its key components and their interactions.

## Datafor Connects to Your Database

Datafor directly connects to your database, typically a SQL-based data warehouse, but it also supports other structured data sources.

Datafor generates and executes queries against your database. The results are processed and visualized in the Datafor interface. Acting as a thin layer on top of your database, Datafor leverages your existing storage and computational resources for data processing.

Since Datafor does not store or process raw data internally, your data remains secure within your system at all times, ensuring full ownership and control over your data assets.

## Data Modeling for Business Logic Definition

Unlike traditional BI tools that rely on direct SQL queries for visualizations, Datafor incorporates a data modeling layer where business logic and data relationships are defined.

This modeling layer acts as an abstraction between business metrics and the underlying database schema. When users interact with data, Datafor dynamically constructs queries based on these predefined models, ensuring consistency and accuracy across reports.

## Self-Service Data Exploration

With the structured modeling layer in place, non-technical users can explore data, create reports, and generate insights without requiring SQL expertise.

Multiple reports leverage the same underlying business logic, maintaining consistency across the organization and reducing dependency on technical teams.

## Full Workflow in Datafor

A typical Datafor workflow consists of the following steps:

1. **Connecting:** Link Datafor to your structured database or data warehouse.
2. **Modeling:** Define and organize data models to structure analytics logic. These models are reusable across reports and datasets.
3. **Self-Service Exploration:** Business users explore and analyze data using predefined datasets, creating dashboards without SQL knowledge.
4. **Sharing:** Reports and dashboards can be shared internally or distributed via integrations such as email, messaging platforms, or embedded solutions.