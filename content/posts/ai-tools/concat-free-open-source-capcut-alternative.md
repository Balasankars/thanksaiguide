---
title: "A free, open-source CapCut alternative that Claude can control"
slug: concat-free-open-source-capcut-alternative
category: "AI Tools"
description: "Concat is a free, open-source video editor that runs on your own computer with no account. What makes it special: AI assistants like…"
date: 2026-11-12
updated: 2026-11-12
tags: ["video editor", "CapCut alternative", "open source", "MCP", "AI editing"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/concat-free-open-source-capcut-alternative/
---
# A free, open-source CapCut alternative that Claude can control

Concat is a free, open-source video editor that runs on your own computer with no account. What makes it special: AI assistants like Claude can control it through MCP, so you can ask for edits in plain words.

> **తెలుగులో సారాంశం**
>
> Concat ఫ్రీ, open-source video editor — మీ computer లోనే, account అవసరం లేదు. MCP ద్వారా Claude కి కలిపి, మాటలతో edits అడగవచ్చు. ఇంకా Beta లో ఉంది.

![A free, open-source CapCut alternative that Claude can control: Install, One edit by hand, Connect Claude, Edit by asking](/images/guides/concat-free-open-source-capcut-alternative/cover.svg)

Comment keyword: **CONCAT** · Topic: AI Tools · Last checked: 2026-11-12

## What you need

- **Concat** — Download from its official GitHub releases page.
- **Claude desktop app** — To connect via MCP (Claude Code also works).
- **A test clip** — Something short to try.

## Step by step

### Step 1: Install Concat

Go to the project's GitHub page → Releases → download the version for your computer (Windows/Mac/Linux) → install and open it.

![Install Concat — GitHub · Releases: Download for your computer → Editor installed](/images/guides/concat-free-open-source-capcut-alternative/step-1.svg)

### Step 2: Do one edit by hand

Import a clip, trim it, add a text layer, export. Learn the basics first so you can tell when AI edits go wrong.

![Do one edit by hand — Learn the basics first → By hand, once](/images/guides/concat-free-open-source-capcut-alternative/step-2.svg)

### Step 3: Connect Claude

Follow the MCP setup in Concat's README to add it to Claude (Settings → Developer / connectors, or Claude Code's MCP config). Then check:

![Connect Claude — Claude · Settings → Developer: Add the MCP server → List the tools you have for controlling the editor](/images/guides/concat-free-open-source-capcut-alternative/step-3.svg)

**Prompt · step 3**

```text
List the tools you have for controlling Concat and what each one does.
```

### Step 4: Edit by asking

Ask for edits in plain words: open a clip, cut the start, add a title, export vertical. Give exact times and sizes — the clearer the request, the better the edit.

![Edit by asking — Open my clip, cut the first 2 seconds, add a title 'Day 1' for 3 seconds, export → What Claude did](/images/guides/concat-free-open-source-capcut-alternative/step-4.svg)

**Prompt · step 4**

```text
In Concat, open {clip}, cut the first 2 seconds, add a title 'Day 1' for 3 seconds, and export a 1080x1920 version.
```

### Step 5: Check the result

It's beta — always watch the export fully before posting.

![Check the result — Watch the export → It's beta](/images/guides/concat-free-open-source-capcut-alternative/step-5.svg)

## Limits, straight talk

- Repo is real and trending fast (~17k stars, #1 Rust repo in Oct 2026), AGPL-3.0 licensed.
- BUT it's labelled Beta with only 2 contributors — calling it a full 'CapCut replacement' is a stretch for now.
- Features like offline captions, background removal and 4K export come from social posts; test them yourself before promising them in a reel.

## Useful links

- [Trendshift: Concat stats](https://trendshift.io/repositories/191379)
- [OSS Insight: Concat](https://ossinsight.io/analyze/jub0t/Concat)

## Questions people ask

### Is it really free?

Yes — it's open-source (AGPL-3.0) and needs no account.

### Can it replace CapCut today?

Not fully. It's in Beta with a small team; good for simple edits and experiments.

### Do I need Claude Code?

No — the Claude desktop app can connect to it through MCP. Claude Code also works.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/concat-free-open-source-capcut-alternative/). Republished with permission.*
