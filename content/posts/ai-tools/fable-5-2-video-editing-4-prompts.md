---
title: "4 prompts that turn Claude into your whole edit team"
slug: fable-5-2-video-editing-4-prompts
category: "AI Tools"
description: "Write one rules file, then use four role prompts — Editor, Motion Designer, Art Director, Growth Team. Claude drafts, checks its own…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Fable 5.2", "Claude", "video editing", "rules.md", "storyboard"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/fable-5-2-video-editing-4-prompts/
---
# 4 prompts that turn Claude into your whole edit team

Write one rules file, then use four role prompts — Editor, Motion Designer, Art Director, Growth Team. Claude drafts, checks its own work against your rules, and you approve. Works with Fable or any strong Claude model.

> **తెలుగులో సారాంశం**
>
> ఒక rules file + 4 role prompts (Editor, Motion Designer, Art Director, Growth Team) — Claude మీ పూర్తి edit టీమ్ గా పనిచేసి, తన పనిని తానే check చేస్తుంది.

![4 prompts that turn Claude into your whole edit team: rules.md, Editor, Motion Designer, Art Director, Growth Team](/images/guides/fable-5-2-video-editing-4-prompts/cover.svg)

Comment keyword: **FABLE** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan. Fable is included on Max/Team Premium; on Pro it uses extra usage credits — Opus works too.
- **A video tool** — ffmpeg + HyperFrames or Remotion (Claude installs them).

## Step by step

### Step 1: Write rules.md

rules.md is a short list of rules Claude must follow on every edit (size, captions never cover your face, no invented facts, storyboard before render). Rules stop the AI from doing strange things. Add your own rules over time.

![Write rules.md — Create rules.md for my edits → rules.md](/images/guides/fable-5-2-video-editing-4-prompts/step-1.svg)

**Prompt · step 1**

```text
Create rules.md for my edits: vertical 1080x1920; captions never cover my face; something new on screen at least every 2 seconds; never invent numbers or facts; always show a storyboard before rendering. Show me.
```

### Step 2: Role 1 — Editor

The Editor makes the first cut, then checks its own work against every rule and fixes what it broke before showing you. This self-check catches many mistakes for you.

![Role 1 — Editor — You are my Editor. Edit my clip following rules.md. Then check your own work → Role 1 · Editor](/images/guides/fable-5-2-video-editing-4-prompts/step-2.svg)

**Prompt · step 2**

```text
You are my Editor. Edit {clip} following rules.md. After your first cut, check your own work against every rule and fix any rule you broke before showing me.
```

### Step 3: Role 2 — Motion Designer

The Motion Designer adds titles, icons and number counters that support your key points, and shows a storyboard first.

![Role 2 — Motion Designer — You are my Motion Designer. Add motion graphics for each key point → Role 2 · Motion Designer](/images/guides/fable-5-2-video-editing-4-prompts/step-3.svg)

**Prompt · step 3**

```text
You are my Motion Designer. Add motion graphics to support each key point: titles, icons, number counters. Follow rules.md. Show a storyboard.
```

### Step 4: Role 3 — Art Director

The Art Director looks at the whole video for colour, fonts and spacing, lists problems and fixes them — like a second pair of eyes.

![Role 3 — Art Director — You are my Art Director. Review colour, fonts, spacing and consistency → Role 3 · Art Director](/images/guides/fable-5-2-video-editing-4-prompts/step-4.svg)

**Prompt · step 4**

```text
You are my Art Director. Review the whole video for colour, fonts, spacing and consistency. List problems and fix them.
```

### Step 5: Role 4 — Growth Team

The Growth Team rates your hook, suggests 3 stronger ones and writes the caption and on-screen call-to-action toward your goal.

![Role 4 — Growth Team — You are my Growth Team. Rate the hook, suggest 3 stronger hooks, write the caption → Role 4 · Growth Team](/images/guides/fable-5-2-video-editing-4-prompts/step-5.svg)

**Prompt · step 5**

```text
You are my Growth Team. The goal is to {goal}. Rate the hook, suggest 3 stronger hooks, write the caption and the on-screen call-to-action.
```

## Limits, straight talk

- Fable is only included in Max and Team Premium plans (up to 50% of weekly usage); on Pro it bills through usage credits at API rates.

## Useful links

- [ClaudeLog: Fable on Pro/Max](https://claudelog.com/faqs/is-fable-5-available-on-claude-pro-max/)

## Questions people ask

### Do I need the Fable model?

No. Any strong Claude model works, including Opus. Fable is included on Max and Team Premium; on Pro it uses extra paid credits.

### Can I use these roles for other work?

Yes — the Editor/Reviewer pattern works for writing, slides and websites too.

### Is this beginner-friendly?

Yes. You only paste 4 prompts; Claude installs the video tools it needs.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/fable-5-2-video-editing-4-prompts/). Republished with permission.*
