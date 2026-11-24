---
title: "Faceless 3D Shorts from one line — a Claude Code skill"
slug: faceless-shorts-skill-6-video-styles-from-one-topic-line
category: "AI Tools"
description: "A free Claude Code skill turns one topic line into a finished faceless Short — script, voice, word-synced captions, animation, sound…"
date: 2026-11-13
updated: 2026-11-18
tags: ["Claude Code skill", "faceless Shorts", "Kokoro", "Whisper", "3D explainer"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/
---
# Faceless 3D Shorts from one line — a Claude Code skill

A free Claude Code skill turns one topic line into a finished faceless Short — script, voice, word-synced captions, animation, sound and music — in one of six styles like 3D deep-dive, stick-figure story or paper atlas.

> **తెలుగులో సారాంశం**
>
> ఒక్క topic line నుండి పూర్తి faceless Short — script, voice, captions, animation, music — 6 styles లో. Telugu కోసం మీ voice record చేసి మార్చండి.

![Faceless 3D Shorts from one line — a Claude Code skill: Install the skill, One line, 6 video styles, Your Telugu voice](/images/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/cover.svg)

Comment keyword: **SHORTS** · Topic: AI Tools · Last checked: 2026-11-18

## What you need

- **Claude Code** — Paid plan or API credits.
- **The skill** — Free download from its creator's site; place it in ~/.claude/skills.
- **Node 22+, ffmpeg, Chrome, Python 3.10+** — Installed by its setup script.

## Step by step

### Step 1: Install

Download the skill folder, open its SKILL.md and setup.sh and read them first (it comes from a third-party site). Put the folder in ~/.claude/skills (see the official skills page in Links), then run setup.sh — it installs Node, ffmpeg, Chrome and the voice/caption models (about 0.9 GB).

![Install — ~/.claude/skills/ → needs](/images/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/step-1.svg)

### Step 2: Make a Short

Type your topic as one line (for example 'why the ocean is salty'). The skill writes the script, makes the voice, syncs captions word by word, animates the scenes and adds sound and music, then saves the MP4.

![Make a Short — Make a Deep Dive 3D short: my question → phone showing DEEP DIVE 3D short](/images/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/step-2.svg)

**Prompt · step 2**

```text
Make a Deep Dive 3D short: {q}
```

### Step 3: Try another style

Run the same topic in a different style to see which suits your channel. Six styles are built in — pick one or two and stick with them so your channel looks consistent.

![Try another style — Make the same topic as a Stick Story short → Styles](/images/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/step-3.svg)

**Prompt · step 3**

```text
Make the same topic as a Stick Story short.
```

### Step 4: Fact-check

Ask for every fact in the script with a reliable source. Open the sources and fix or remove anything you can't confirm — faceless channels lose trust fast with wrong facts.

![Fact-check — List every fact in the script with a reliable source → Facts](/images/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/step-4.svg)

**Prompt · step 4**

```text
List every fact in the script with a reliable source.
```

### Step 5: Telugu voice

The built-in voice speaks English only. Record the script in Telugu yourself, save it as voice.mp3 and ask Claude to swap it in and re-sync the captions.

![Telugu voice — voice.mp3 → Re-synced](/images/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/step-5.svg)

**Prompt · step 5**

```text
Replace the voice with my recording voice.mp3 and re-sync captions.
```

## Limits, straight talk

- Voice is English (Kokoro) — Hindi needs your own recording or another voice tool.
- Check facts before posting.
- Skill comes from a third-party site — read it before installing.

## Useful links

- [Claude Code: how to install skills (official)](https://code.claude.com/docs/en/skills)
- [Kokoro voice model (GitHub)](https://github.com/hexgrad/kokoro)
- [Whisper captions (OpenAI, GitHub)](https://github.com/openai/whisper)
- [FFmpeg (official)](https://ffmpeg.org/download.html)

## Questions people ask

### Is the skill free?

Yes, the skill and its models are free. Claude Code needs a paid plan or API credits.

### Can I make Telugu Shorts?

Yes, by recording your own Telugu voice (step 5). The built-in voice is English only.

### Do I have to show my face?

No — that's the point of faceless Shorts. Everything is animation, voice and captions.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/faceless-shorts-skill-6-video-styles-from-one-topic-line/). Republished with permission.*
