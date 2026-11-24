---
title: "51 video effects with one free Claude skill"
slug: 51-video-effects-with-one-free-claude-skill
category: "AI Tools"
description: "Add pro motion effects to talking-head videos by just naming them: split headlines, b-roll splits, spotlight, orbiting images, comment…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude skill", "video effects", "face tracking", "talking head", "ffmpeg", "free"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/51-video-effects-with-one-free-claude-skill/
---
# 51 video effects with one free Claude skill

Add pro motion effects to talking-head videos by just naming them: split headlines, b-roll splits, spotlight, orbiting images, comment boxes, glass widgets, timelines, tier lists and more — with face tracking so text never covers you.

> **తెలుగులో సారాంశం**
>
> Talking-head videos కి 51 pro motion effects — effect పేరు, ఏ మాటల దగ్గర మొదలవ్వాలో చెబితే చాలు; face tracking వల్ల text మీ ముఖాన్ని కప్పదు.

![51 video effects with one free Claude skill: Install the skill, See all effects, Apply at a moment, Export](/images/guides/51-video-effects-with-one-free-claude-skill/cover.svg)

Comment keyword: **EFFECTS** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude** — Works best in Claude Code (paid plan); can also be added as an uploaded skill.
- **The effects skill** — Free on GitHub (claude-video-effects). Download the repo ZIP.
- **A clip with your face** — Short, vertical, face clearly visible.

## Step by step

### Step 1: Install the skill

Download the repo as a ZIP from its GitHub page. In the Claude app: Settings → Capabilities → Skills → upload the ZIP. In Claude Code: clone the repo into ~/.claude/skills/effects. Read the skill's files once before adding it.

![Install the skill — Two ways to install](/images/guides/51-video-effects-with-one-free-claude-skill/step-1.svg)

### Step 2: Check it's working

Ask for the list of effects. If Claude lists them, the skill is installed. If it doesn't, start a new chat — skills load when a chat starts.

![Check it's working — List all the effects available in the effects skill → For example](/images/guides/51-video-effects-with-one-free-claude-skill/step-2.svg)

**Prompt · step 2**

```text
List all the effects available in the effects skill with a one-line description of each.
```

### Step 3: Apply an effect at a moment

Name the effect and the exact words where it should start. Face tracking keeps text from covering your face. Use a short vertical clip with your face clearly visible.

![Apply an effect at a moment — claude → Lands on your words](/images/guides/51-video-effects-with-one-free-claude-skill/step-3.svg)

**Prompt · step 3**

```text
/effects {effect} when I say "{line}" in {clip}
```

### Step 4: Stack 2–3 effects

Two or three effects in one reel look professional; more looks messy. Ask for preview stills first and approve before the render.

![Stack 2–3 effects — Stack 2–3, not more → Why](/images/guides/51-video-effects-with-one-free-claude-skill/step-4.svg)

**Prompt · step 4**

```text
In {clip}: use split-headline on the hook, a comment box when I mention comments, and {effect} when I say "{line}". Preview stills first.
```

### Step 5: Export

The new video is saved next to your original and your audio isn't changed. Watch it once on your phone before posting.

![Export — same folder → Audio untouched](/images/guides/51-video-effects-with-one-free-claude-skill/step-5.svg)

## Limits, straight talk

- Skill is real and listed in skill directories; credit is clearly given.
- Best on short vertical clips with your face visible.

## Useful links

- [claude-video-effects listing (SkillsLLM)](https://skillsllm.com/skill/claude-video-effects)
- [30+ Claude Editing Prompts (row 58)](https://drive.google.com/file/d/1_yTw0je7fNOfN2wuqnonhycEhSyqXD1d/view)

## Questions people ask

### Do I need Claude Code?

It works best in Claude Code (paid plan), but you can also upload it as a skill in the Claude app.

### Which clips work best?

Short vertical clips (under a minute) where your face is clearly visible and well lit.

### Is it free?

The skill is free and open-source. Claude Code needs a paid plan.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/51-video-effects-with-one-free-claude-skill/). Republished with permission.*
