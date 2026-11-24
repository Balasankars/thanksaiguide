---
title: "Subscription manager — find and cancel what you don't use"
slug: subscription-manager-find-and-cancel-unused-subscriptions
category: "Other"
description: "Connect Gmail to Claude and one prompt finds every paid subscription from your receipts, totals monthly and yearly cost, shows where…"
date: 2026-11-13
updated: 2026-11-18
tags: ["subscriptions", "Gmail", "Claude connector", "budgeting", "artifact"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/subscription-manager-find-and-cancel-unused-subscriptions/
---
# Subscription manager — find and cancel what you don't use

Connect Gmail to Claude and one prompt finds every paid subscription from your receipts, totals monthly and yearly cost, shows where your money goes, suggests cheaper alternatives and the right way to cancel each.

> **తెలుగులో సారాంశం**
>
> Gmail ని Claude కి connect చేస్తే ఒక్క prompt తో మీ paid subscriptions అన్నీ — నెలకు, సంవత్సరానికి ఎంత ఖర్చు, వాడనివి ఏవి, ఎలా cancel చేయాలి.

![Subscription manager — find and cancel what you don't use: Connect Gmail, Find subscriptions, See the spend, Cancel](/images/guides/subscription-manager-find-and-cancel-unused-subscriptions/cover.svg)

Comment keyword: **SUBS** · Topic: Other · Last checked: 2026-11-18

## What you need

- **Claude** — Gmail connector. Note: emails Claude reads are processed on Anthropic's servers.

## Step by step

### Step 1: Connect Gmail

In Claude: Settings → Connectors → Gmail → connect. Claude can then search and read your emails — it only reads here.

![Connect Gmail — Claude · Settings → Connectors: Connect Gmail → Receipts readable](/images/guides/subscription-manager-find-and-cancel-unused-subscriptions/step-1.svg)

### Step 2: Find subscriptions

Choose how far back to look (for example 12 months). Claude finds receipts and lists every paid subscription with price, how often you pay, the last charge, and monthly and yearly totals.

![Find subscriptions — Search my Gmail receipts and list every paid subscription → Subscriptions](/images/guides/subscription-manager-find-and-cancel-unused-subscriptions/step-2.svg)

**Prompt · step 2**

```text
Search my Gmail receipts from the last {months} and list every paid subscription: name, price, how often, last charge, monthly and yearly total.
```

### Step 3: See where money goes

Claude makes a simple chart of your subscription spend by category (entertainment, work tools, cloud storage…). Seeing the yearly total is often the wake-up call.

![See where money goes — Make a simple chart of my subscription spend by category → By category](/images/guides/subscription-manager-find-and-cancel-unused-subscriptions/step-3.svg)

**Prompt · step 3**

```text
Make a simple chart of my subscription spend by category.
```

### Step 4: Decide

Claude marks subscriptions that look unused or duplicated and suggests cheaper or free alternatives. You decide what to keep.

![Decide — Which ones look unused or duplicate? Suggest cheaper or free alternatives → Mark](/images/guides/subscription-manager-find-and-cancel-unused-subscriptions/step-4.svg)

**Prompt · step 4**

```text
Which ones look unused or duplicate? Suggest cheaper or free alternatives.
```

### Step 5: Cancel

For each one you mark, Claude gives the exact cancel steps. You do the cancelling yourself in each app or website.

![Cancel — For the ones I mark, give me the exact cancel steps → Cancel](/images/guides/subscription-manager-find-and-cancel-unused-subscriptions/step-5.svg)

**Prompt · step 5**

```text
For the ones I mark, give me the exact cancel steps for each.
```

## Limits, straight talk

- Works as described — Claude only reads your Gmail receipts here; it doesn't send or cancel anything for you.
- Emails Claude reads are processed on Anthropic's servers. Don't connect a mailbox you're not allowed to share.
- Receipts that never reached this Gmail (UPI autopay, app-store bills in another account) won't show up — check your bank statement too.

## Useful links

- [Claude: Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)

## Questions people ask

### Can Claude cancel subscriptions for me?

No. It finds them and gives cancel steps; you cancel them yourself.

### Will it find UPI autopay subscriptions?

Only if a receipt email reached this Gmail. Check your bank statement for anything missing.

### Is my email private?

Emails Claude reads are processed on Anthropic's servers. Connect only a mailbox you're comfortable sharing.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/subscription-manager-find-and-cancel-unused-subscriptions/). Republished with permission.*
