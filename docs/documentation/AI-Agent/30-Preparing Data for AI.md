---
title: Preparing Data for AI
permalink: /documentation/AI-Agent/Preparing-Data-for-AI/
---

# **Preparing Data for AI**

Datafor AI Agent (Preview) relies on vectorized metadata and level values to understand business semantics, improve natural language reasoning, and provide accurate analytical insights. This document explains how to configure embedding models, use Prep Data for AI, manage scheduled vectorization tasks, and inspect stored vector indexes.


# **0. Prerequisite: Configure Embedding Model**

Before performing any vectorization task—including **Prep Data for AI**, **Vector Jobs**, or **Vector Indexes**—you must configure an embedding model.

**Location:**
 **AI Agent (Preview) → Embedding Model**

<div align="left"><img src="./images/image-20251209162306049.png" width="380px" /></div>

### **Steps**

1. Open the **Embedding Model** configuration panel
2. Select an embedding provider and model:

#### **OpenAI Models**

- `text-embedding-3-small`
- `text-embedding-3-large`

#### **Qwen Models**

- `text-embedding-v3`
- `text-embedding-v4`

1. Enter the corresponding **API Key**
2. Click **Save**

### **Why This Matters**

- All semantic search, metadata understanding, and vector indexing depend on the embedding model.
- Incorrect or missing configuration causes:
  - Prep Data for AI to fail
  - Vector Jobs to fail
  - Vector Indexes to remain empty
- Higher-quality embedding models result in more accurate natural language interpretation by the AI Agent.

# **1. Prep Data for AI (Manual Refresh)**

If you want to immediately refresh vectors after updating an analysis model, this is the fastest on-demand method.

Prep Data for AI performs the following:

- Vectorizes **model metadata** (dimensions, levels, business descriptions)
- Vectorizes **text-based dimension values**
- Saves results to **ChromaDB**

Use this when you manually modify:

- Dimension names
- Level definitions
- Business descriptions
- Level values (e.g., new products, regions, brands)


# **2. Vector Jobs (Scheduled Vectorization Tasks)**

**Location:**
 **Settings → AI Agent (Preview) → Vector Jobs**

<div align="left"><img src="./images/image-20251204173521342.png" width="100%" /></div>

As business data grows—new products, new regions, new customers—manual vectorization becomes inefficient.
 Vector Jobs allow automated scheduled vectorization for continuous updates.


## **2.1 Creating a Vector Job**

Click **Create Job** to open the configuration dialog.

### **Configuration Options**

| Field                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| **Analysis Model**   | Select the analysis model to vectorize                       |
| **Dimension Fields** | Select text-based dimension levels to vectorize              |
| **Run Immediately**  | Execute a vectorization run right away                       |
| **Schedule**         | Define automatic execution frequency (once, daily, weekly, etc.) |
| **Description**      | Optional notes for job management                            |

## **2.2 Job Behavior**

- Each run vectorizes **incremental updates only**
- All embeddings are stored in **ChromaDB** automatically
- Jobs can be **enabled**, **disabled**, **edited**, or **deleted**


## **2.3 When to Use Vector Jobs**

Use this feature when:

✔ Level values change frequently (e.g., cities, brands, store names)
 ✔ You want AI to stay continuously updated
 ✔ Multiple analysis models require ongoing semantic refinement
 ✔ Business data is updated regularly through ETL / data warehouse loads

# **3. Vector Indexes (Viewing and Managing Vector Data)**

**Location:**
 **Settings → AI Agent (Preview) → Vector Indexes**

<div align="left"><img src="./images/image-20251204173702741.png" width="100%" /></div>

This section displays the vector indexes created by Prep Data for AI or Vector Jobs.

## **3.1 Information Displayed**

- **Vector Index Name** (usually linked to model + job)
- **Number of vectors** stored
- **Status** (completed / failed)
- **Updated At** timestamp
- **Created At** timestamp


## **3.2 Available Actions**

| Action     | Description                          |
| ---------- | ------------------------------------ |
| **Delete** | Permanently deletes the vector index |

**After deletion:**

- The analysis model remains usable
- AI semantic understanding decreases
- You must rerun **Prep Data for AI** or **Vector Jobs** to rebuild vectors

# **4. Technical Notes: ChromaDB Integration**

Datafor uses **ChromaDB** as its vector storage engine, supporting both metadata and level value vectors.

### **Benefits**

- Fast semantic similarity search
- Efficient large-scale embedding storage
- Supports incremental updates
- Enhances AI Agent natural language understanding

# **5. Best Practices**

### **1) Run Prep Data for AI after creating or modifying an analysis model**

Ensures the AI understands the updated schema and business definitions.

### **2) Use Vector Jobs for frequently changing level values**

Ideal for dynamic data such as geography, products, brands, or customers.

### **3) Regularly check Vector Indexes**

Ensures jobs are running properly and the semantic layer remains fresh.

### **4) Clean unused vector indexes**

Improves performance and avoids unnecessary storage consumption.

# **Conclusion**

Vectorization is essential for enabling Datafor AI Agent to **understand your business semantics**.
 By combining:

- **Prep Data for AI** (manual vectorization)
- **Vector Jobs** (scheduled automation)
- **Vector Indexes** (storage and management)

You ensure that the AI Agent delivers accurate, natural, and reliable analytical experiences.