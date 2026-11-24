---
title: "Graphify — give Claude a map of your whole project"
slug: graphify-in-claude-code-turn-your-project-into-a-map-claude
category: "AI Tools"
description: "Claude re-reads files every chat. Graphify scans a folder — code, docs, PDFs, images — and builds a knowledge graph Claude can query…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Graphify", "Claude Code", "knowledge graph", "skill", "coding", "tokens"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/
---
# Graphify — give Claude a map of your whole project

Claude re-reads files every chat. Graphify scans a folder — code, docs, PDFs, images — and builds a knowledge graph Claude can query instead. You get an interactive map, a plain-language report and a data file.

> **తెలుగులో సారాంశం**
>
> Graphify మీ project folder (code, docs, PDFs) ని knowledge graph map గా మారుస్తుంది — Claude ప్రతిసారి files మళ్ళీ చదవకుండా ఆ map తో సమాధానం ఇస్తుంది.

![Graphify — give Claude a map of your whole project: Install, Map your project, Read the report, Ask using the map](/images/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/cover.svg)

Comment keyword: **GRAPHIFY** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **uv** — Python tool installer.
- **A project folder** — Code, docs or notes.

## Step by step

### Step 1: Install

Install with uv. Watch the spelling — the real package is graphifyy with two y's; similar names are not the same tool. Then run the install command once.

![Install — terminal → Watch the spelling](/images/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/step-1.svg)

**Prompt · step 1**

```text
uv tool install graphifyy
graphify install
```

### Step 2: Map your project

Open Claude Code inside your project folder and run the command. Graphify scans code, docs, PDFs and images and builds a knowledge graph. Code-only folders don't use AI tokens to build.

![Map your project — claude code · your folder → it creates](/images/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/step-2.svg)

**Prompt · step 2**

```text
/graphify .
```

### Step 3: Read the report

Open graph.html in your browser to explore the map visually, and GRAPH_REPORT.md for a plain-language explanation of how your project fits together.

![Read the report — Summarise GRAPH_REPORT.md in simple words → Your project](/images/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/step-3.svg)

**Prompt · step 3**

```text
Summarise GRAPH_REPORT.md in simple words: main parts of my project and how they connect.
```

### Step 4: Ask questions using the map

Now ask Claude questions and it uses the map instead of re-reading every file — faster answers and fewer tokens on big projects.

![Ask questions using the map — Using the graph, where is this topic covered and what depends on it? → Answers from the map](/images/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/step-4.svg)

**Prompt · step 4**

```text
Using the graph, where is [topic] covered and what depends on it?
```

### Step 5: Keep it updated

After big changes to your project, ask Claude to update the graph so the map stays correct.

![Keep it updated — Update the graph with my latest changes → Re-run](/images/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/step-5.svg)

**Prompt · step 5**

```text
Update the graph with my latest changes.
```

## Limits, straight talk

- Good safety tip: the package is graphifyy (two y's); other similarly named packages aren't affiliated.
- Code-only folders use no AI tokens to build.
- It's a developer tool, more useful for building apps than making reels.

## Useful links

- [Graphify on GitHub](https://github.com/Graphify-Labs/graphify)
- [graphifyy on PyPI](https://pypi.org/project/graphifyy/)

## Questions people ask

### Who is this for?

People building apps or working with big folders of code and documents. It's less useful for making reels.

### Does it send my files anywhere?

Building the map for code-only folders runs locally. Docs and images may use AI to summarise — check its README for details.

### Do I need a paid Claude plan?

Yes, because it runs inside Claude Code.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/graphify-in-claude-code-turn-your-project-into-a-map-claude/). Republished with permission.*
