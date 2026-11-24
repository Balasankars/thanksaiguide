---
title: "find-skills — the one skill that finds and installs the rest"
slug: find-skills-a-skill-that-finds-installs-other-skills
category: "AI Tools"
description: "Instead of searching the internet for Claude skills, install one free skill that does it for you: ask 'how do I do X?' and it searches…"
date: 2026-11-12
updated: 2026-11-12
tags: ["Claude Code skills", "skills.sh", "Vercel", "free", "skill directory"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/find-skills-a-skill-that-finds-installs-other-skills/
---
# find-skills — the one skill that finds and installs the rest

Instead of searching the internet for Claude skills, install one free skill that does it for you: ask 'how do I do X?' and it searches the skills.sh directory, recommends the best skills with quality checks, and can install them.

> **తెలుగులో సారాంశం**
>
> Internet లో skills వెతకాల్సిన పని లేదు — find-skills అనే ఒక్క ఫ్రీ skill install చేస్తే, అది సరైన skills వెతికి, quality check చేసి, మీ అనుమతితో install చేస్తుంది.

![find-skills — the one skill that finds and installs the rest: Install, Ask for a skill, Check quality, Install with your OK](/images/guides/find-skills-a-skill-that-finds-installs-other-skills/cover.svg)

Comment keyword: **SKILLS** · Topic: AI Tools · Last checked: 2026-11-12

## What you need

- **Claude Code (or another agent)** — Paid Claude plan for Claude Code.
- **Node.js** — For the npx command.

## Step by step

### Step 1: Install

Run the one command in your terminal (needs Node.js). It installs the official find-skills skill from Vercel's skills repo.

![Install — terminal → find-skills](/images/guides/find-skills-a-skill-that-finds-installs-other-skills/step-1.svg)

**Prompt · step 1**

```text
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

### Step 2: Ask for a skill

Ask 'How do I ___?' and tell Claude to use find-skills. It searches the skills.sh directory and explains the best options for your task.

![Ask for a skill — How do I do my task? Use find-skills to recommend the best skills → Recommended](/images/guides/find-skills-a-skill-that-finds-installs-other-skills/step-2.svg)

**Prompt · step 2**

```text
How do I {task}? Use find-skills to recommend the best skills for this and explain each one.
```

### Step 3: Check quality before installing

Before installing, ask for installs, GitHub stars, who published each skill and what code it runs. Prefer official or popular skills (1K+ installs, 100+ stars).

![Check quality before installing — Show installs, GitHub stars, who published it, and what code it runs → Quality](/images/guides/find-skills-a-skill-that-finds-installs-other-skills/step-3.svg)

**Prompt · step 3**

```text
For the skills you recommended, show installs, GitHub stars, who published it, and what code it runs.
```

### Step 4: Install with confirmation

find-skills can install skills globally without asking. Tell it to install only the one you chose and to ask you before installing anything else.

![Install with confirmation — Install only this skill, and ask me before installing anything else → You stay in control](/images/guides/find-skills-a-skill-that-finds-installs-other-skills/step-4.svg)

**Prompt · step 4**

```text
Install only [skill name], and ask me before installing anything else.
```

### Step 5: Use it

Use the new skill on your real task. If it doesn't help, remove it — fewer skills keep Claude focused.

![Use it — Now use the skill to do my task → Skill in use](/images/guides/find-skills-a-skill-that-finds-installs-other-skills/step-5.svg)

**Prompt · step 5**

```text
Now use [skill name] to {task}.
```

## Limits, straight talk

- Official: published by Vercel in the vercel-labs/skills repo and listed on skills.sh.
- Caution: it can install other skills globally and skip confirmation — tell it to ask you first. Community skills can run code, so stick to official or popular ones (1K+ installs, 100+ GitHub stars).

## Useful links

- [find-skills (mcpservers.org listing)](https://mcpservers.org/agent-skills/vercel/find-skills)
- [find-skills on Claude Marketplaces](https://claudemarketplaces.com/skills/vercel-labs/skills/find-skills)
- [Claude Code docs: Skills](https://code.claude.com/docs/en/skills)
- [Anthropic: Introducing Agent Skills](https://anthropic.com/research/skills)

## Questions people ask

### Is find-skills safe?

It's official (published by Vercel), but the skills it finds come from many people. Check each one before installing.

### Does it work outside Claude Code?

Yes — it works with several AI coding agents that support skills.

### Is it free?

Yes. Claude Code itself needs a paid plan.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/find-skills-a-skill-that-finds-installs-other-skills/). Republished with permission.*
