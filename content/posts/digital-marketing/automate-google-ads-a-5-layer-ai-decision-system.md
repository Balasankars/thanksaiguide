---
title: "Let AI review your Google Ads — you approve every change"
slug: automate-google-ads-a-5-layer-ai-decision-system
category: "Digital Marketing"
description: "Connect Google's official, free, read-only Google Ads MCP to Claude Code, add PPC know-how skills and your business context (goals…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Google Ads", "PPC", "MCP", "Claude Code", "Codex", "ads audit"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/automate-google-ads-a-5-layer-ai-decision-system/
---
# Let AI review your Google Ads — you approve every change

Connect Google's official, free, read-only Google Ads MCP to Claude Code, add PPC know-how skills and your business context (goals, margins), and get a full account review with recommendations — while every change stays with you.

> **తెలుగులో సారాంశం**
>
> Google official, ఫ్రీ, read-only Google Ads MCP ని Claude Code కి కలిపి మీ ads account పూర్తి review — ప్రతి మార్పు మీరే approve చేసి చేస్తారు.

![Let AI review your Google Ads — you approve every change: Set up access, Business context, Account review, Top 5 changes](/images/guides/automate-google-ads-a-5-layer-ai-decision-system/cover.svg)

Comment keyword: **GADS** · Topic: Digital Marketing · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Google Ads MCP** — Official, free, read-only.
- **Developer token + Google Cloud project** — Needed for the API.

## Step by step

### Step 1: Set up access

Claude walks you through getting a Google Ads developer token, creating a Google Cloud project and connecting Google's official Ads MCP to Claude Code. Plan 30–45 minutes for this one-time setup.

![Set up access — Walk me through getting a developer token, a Cloud project, and connecting → Access](/images/guides/automate-google-ads-a-5-layer-ai-decision-system/step-1.svg)

**Prompt · step 1**

```text
Walk me step by step through getting a Google Ads developer token, creating a Google Cloud project, and connecting the official Google Ads MCP to Claude Code.
```

### Step 2: Business context

Save your goal, profit per sale and which conversions really matter. Without this context, AI recommendations can chase clicks instead of profit.

![Business context — Save my business context: goal, margin per sale, which conversions matter → business context](/images/guides/automate-google-ads-a-5-layer-ai-decision-system/step-2.svg)

**Prompt · step 2**

```text
Save my business context: goal {goal}, margin per sale {margin}, which conversions matter. Use it in every recommendation.
```

### Step 3: Account review

Claude reviews your account read-only: wasted spend, search terms to exclude, weak ads, budget split and tracking problems — ranked by money impact.

![Account review — Review my Google Ads account (read-only) → It looks for](/images/guides/automate-google-ads-a-5-layer-ai-decision-system/step-3.svg)

**Prompt · step 3**

```text
Review my Google Ads account (read-only): wasted spend, search terms to exclude, weak ads, budget split, conversion tracking problems. Rank by money impact.
```

### Step 4: Recommendations

Claude gives the top 5 changes with expected impact. You make the changes yourself in Google Ads — the official MCP is read-only, so AI can't change bids or budgets.

![Recommendations — Give me the top 5 changes with expected impact. I'll make them myself → Recommendations](/images/guides/automate-google-ads-a-5-layer-ai-decision-system/step-4.svg)

**Prompt · step 4**

```text
Give me the top 5 changes with expected impact. I'll make them myself.
```

### Step 5: Weekly check

Claude makes a checklist you run every Monday. Small weekly checks catch wasted spend before it grows.

![Weekly check — Make a weekly review checklist I can run every Monday → Every Monday](/images/guides/automate-google-ads-a-5-layer-ai-decision-system/step-5.svg)

**Prompt · step 5**

```text
Make a weekly review checklist I can run every Monday.
```

## Limits, straight talk

- Correct that Google's official Ads MCP is free, open source and read-only — it can't change bids, which matches the approval gate.
- Setup needs a Google Ads developer token and a Cloud project (~30–45 min).

## Useful links

- [Google: Ads MCP server guide](https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server)
- [googleads/google-ads-mcp](https://github.com/googleads/google-ads-mcp)

## Questions people ask

### Can AI change my ads by itself?

No. Google's official Ads MCP is read-only, so every change stays with you.

### Is the MCP free?

Yes — it's free and open-source. Claude Code needs a paid plan, and your ad spend is separate.

### Is this for beginners?

Setup is technical (developer token, Cloud project). If you're new to Google Ads, learn the basics first.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/automate-google-ads-a-5-layer-ai-decision-system/). Republished with permission.*
