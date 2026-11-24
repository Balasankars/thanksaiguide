---
title: "SEO command center — audit, investigate, plan and fix with Claude"
slug: seo-command-center-4-skill-seo-build-kit-for-codex
category: "Digital Marketing"
description: "Four AI roles — Auditor, Investigator, Strategist and Fixer — share one evidence trail: connect Search Console, measure rankings and…"
date: 2026-11-13
updated: 2026-11-13
tags: ["SEO", "Codex", "Search Console", "DataForSEO", "audit", "AI citations"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/seo-command-center-4-skill-seo-build-kit-for-codex/
---
# SEO command center — audit, investigate, plan and fix with Claude

Four AI roles — Auditor, Investigator, Strategist and Fixer — share one evidence trail: connect Search Console, measure rankings and AI-search citations, run a technical audit, then prepare and verify a real fix on your site.

> **తెలుగులో సారాంశం**
>
> 4 AI roles — Auditor, Investigator, Strategist, Fixer — Search Console data తో మీ site SEO audit చేసి, plan వేసి, నిజమైన fix చేసి verify చేస్తాయి.

![SEO command center — audit, investigate, plan and fix with Claude: Connect Search Console, Auditor, Investigator, Fixer](/images/guides/seo-command-center-4-skill-seo-build-kit-for-codex/cover.svg)

Comment keyword: **SEO** · Topic: Digital Marketing · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Search Console MCP** — Free open-source connector (mcp-gsc).
- **DataForSEO (optional)** — Official MCP, pay per use.

## Step by step

### Step 1: Connect Search Console

Claude helps you connect Google Search Console to Claude Code with the free mcp-gsc connector. Now Claude can see your real clicks, impressions and search queries.

![Connect Search Console — Help me connect Google Search Console to Claude Code via mcp-gsc → Search Console](/images/guides/seo-command-center-4-skill-seo-build-kit-for-codex/step-1.svg)

**Prompt · step 1**

```text
Help me connect Google Search Console to Claude Code via mcp-gsc for {site}.
```

### Step 2: Auditor

The Auditor checks speed, titles, headings, broken links, mobile view and indexing, and saves each finding with evidence so nothing is a guess.

![Auditor — Run a technical SEO audit of my site. Save findings → Audit covers](/images/guides/seo-command-center-4-skill-seo-build-kit-for-codex/step-2.svg)

**Prompt · step 2**

```text
Run a technical SEO audit of {site}: speed, titles, headings, broken links, mobile, indexing. Save findings with evidence.
```

### Step 3: Investigator

The Investigator uses Search Console to find pages and queries that lost clicks in the last 3 months and explains likely reasons.

![Investigator — Which pages and queries are losing clicks in the last 3 months and why? → Losing clicks](/images/guides/seo-command-center-4-skill-seo-build-kit-for-codex/step-3.svg)

**Prompt · step 3**

```text
Using Search Console, which pages and queries are losing clicks in the last 3 months and why?
```

### Step 4: Strategist

The Strategist makes a 30-day plan for one keyword: pages to create or fix, internal links, and how to get cited by AI search tools.

![Strategist — Make a 30-day plan to rank for my keyword → 30 days](/images/guides/seo-command-center-4-skill-seo-build-kit-for-codex/step-4.svg)

**Prompt · step 4**

```text
Make a 30-day plan to rank for '{kw}': pages to create or fix, internal links, and how to get cited by AI search tools.
```

### Step 5: Fixer

The Fixer prepares the fix for the top issue, applies it to your site files and checks it's really fixed. Keep a backup or use Git before changing site files.

![Fixer — Prepare the fix for the top issue, apply it to my site files, and verify → Top issue fixed](/images/guides/seo-command-center-4-skill-seo-build-kit-for-codex/step-5.svg)

**Prompt · step 5**

```text
Prepare the fix for the top issue, apply it to my site files, and verify it's fixed.
```

## Limits, straight talk

- Built for Codex (ChatGPT), but the tools are real and usable from Claude too: mcp-gsc for Search Console, DataForSEO's official MCP (pay per use).

## Useful links

- [mcp-gsc](https://github.com/AminForou/mcp-gsc)
- [DataForSEO MCP](https://dataforseo.com/seo-mcp-server)
- [Repo](https://github.com/Vibha-Ramprakash/codex-seo-command-center)

## Questions people ask

### Does it work for small sites?

Yes — small sites benefit most, because a few fixes make a visible difference.

### What does it cost?

mcp-gsc and Search Console are free. Claude Code needs a paid plan; DataForSEO is optional and pay-per-use.

### How soon will rankings change?

Usually weeks, not days. Re-check Search Console after 2–4 weeks.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/seo-command-center-4-skill-seo-build-kit-for-codex/). Republished with permission.*
