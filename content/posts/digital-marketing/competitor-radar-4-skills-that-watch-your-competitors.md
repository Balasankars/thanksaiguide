---
title: "Competitor radar — Claude watches your competitors every week"
slug: competitor-radar-4-skills-that-watch-your-competitors
category: "Digital Marketing"
description: "Four checks in one weekly report: website changes, their offer vs yours, what they post, and themes in their reviews — on one…"
date: 2026-11-13
updated: 2026-11-13
tags: ["competitor analysis", "Firecrawl", "Apify", "Claude", "dashboard", "scheduled task"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/competitor-radar-4-skills-that-watch-your-competitors/
---
# Competitor radar — Claude watches your competitors every week

Four checks in one weekly report: website changes, their offer vs yours, what they post, and themes in their reviews — on one dashboard that opens with what changed and what to do. Every finding has a source link.

> **తెలుగులో సారాంశం**
>
> ప్రతి వారం competitors ని Claude గమనిస్తుంది — website మార్పులు, offers, posts, reviews — 'ఏం మారింది, మీరు ఏం చేయాలి' అని ఒక dashboard లో, source links తో.

![Competitor radar — Claude watches your competitors every week: Profile competitors, Gap finder, Review themes, Weekly radar](/images/guides/competitor-radar-4-skills-that-watch-your-competitors/cover.svg)

Comment keyword: **RADAR** · Topic: Digital Marketing · Last checked: 2026-11-13

## What you need

- **Claude** — Paid plan with scheduled tasks.
- **Web scraping tools (optional)** — Firecrawl free tier, Apify free credit then paid.

## Step by step

### Step 1: Profile competitors

List your main competitors. Claude records their website, offer, prices and audience as a baseline, so next week it can spot what changed.

![Profile competitors — Profile these competitors. Save as a baseline → Baseline](/images/guides/competitor-radar-4-skills-that-watch-your-competitors/step-1.svg)

**Prompt · step 1**

```text
Profile these competitors: {comps}. Website, offer, prices, audience. Save as a baseline.
```

### Step 2: Gap finder

Describe your own offer. Claude compares it with theirs and shows where you're better, worse or missing something.

![Gap finder — Compare their offers with mine → Gaps](/images/guides/competitor-radar-4-skills-that-watch-your-competitors/step-2.svg)

**Prompt · step 2**

```text
Compare their offers with mine: {me}. Where am I better, worse, missing?
```

### Step 3: What they post

Claude summarises what competitors posted this week and which posts did best, with a link to each.

![What they post — Summarise what they posted this week and which posts did best → Their week](/images/guides/competitor-radar-4-skills-that-watch-your-competitors/step-3.svg)

**Prompt · step 3**

```text
Summarise what they posted this week and which posts did best.
```

### Step 4: Review themes

Claude groups their public reviews into themes — what customers love and hate. Their customers' complaints are your opportunities.

![Review themes — Group their public reviews into themes → Review themes](/images/guides/competitor-radar-4-skills-that-watch-your-competitors/step-4.svg)

**Prompt · step 4**

```text
Group their public reviews into themes: what customers love and hate.
```

### Step 5: Weekly radar

Every Monday, Claude builds a one-page dashboard: what changed, why it matters and 3 actions for you, with a source link on every finding. It must never invent numbers — if a number has no source, ask Claude to remove it.

![Weekly radar — Every Monday, build a dashboard: what changed, why it matters, 3 actions → Rules](/images/guides/competitor-radar-4-skills-that-watch-your-competitors/step-5.svg)

**Prompt · step 5**

```text
Every Monday, build a dashboard: what changed, why it matters, and 3 actions for me. Source link on every finding.
```

## Limits, straight talk

- Scraping tools are optional: some have free tiers, then they're paid.
- Every finding should have a source link — delete anything Claude can't source.

## Useful links

- [Firecrawl MCP](https://github.com/firecrawl/firecrawl-mcp-server)
- [Apify MCP](https://github.com/apify/apify-mcp-server)
- [marketingskills](https://github.com/coreyhaines31/marketingskills)

## Questions people ask

### Is watching competitors allowed?

Yes — reading their public website, posts and reviews is normal research. Don't log in to their accounts or copy their content.

### Do I need scraping tools?

No. They're optional. Claude can read public pages; scraping tools only help with bigger lists.

### Which plan?

A paid plan, for scheduled weekly runs.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/competitor-radar-4-skills-that-watch-your-competitors/). Republished with permission.*
