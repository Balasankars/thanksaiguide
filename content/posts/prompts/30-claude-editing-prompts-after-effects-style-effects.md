---
title: "After Effects-style edits on talking-head videos — with Claude"
slug: 30-claude-editing-prompts-after-effects-style-effects
category: "Prompts"
description: "Get After Effects-level moments — you cut out from the background, images orbiting your head, a spotlight on you, text behind you — by…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "MediaPipe", "OpenCV", "Whisper", "ffmpeg", "video effects"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/30-claude-editing-prompts-after-effects-style-effects/
---
# After Effects-style edits on talking-head videos — with Claude

Get After Effects-level moments — you cut out from the background, images orbiting your head, a spotlight on you, text behind you — by pasting prompts into Claude Code. It tracks your body every frame, lets you approve a timeline, and previews before rendering.

> **తెలుగులో సారాంశం**
>
> Talking-head videos లో After Effects లెవల్ effects — మీ వెనక text, మీ చుట్టూ images, spotlight — Claude Code లో prompts paste చేస్తే చాలు.

![After Effects-style edits on talking-head videos — with Claude: Master setup, Ask for an effect, Preview stills, Render](/images/guides/30-claude-editing-prompts-after-effects-style-effects/cover.svg)

Comment keyword: **AEFX** · Topic: Prompts · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Free tools** — Python, OpenCV, MediaPipe (person cut-out), Whisper, ffmpeg — Claude installs them.
- **A clean recording** — Tripod, good light, plain background.

## Step by step

### Step 1: Master setup

This one prompt builds the 'effects engine' every other effect uses: Claude installs the free tools, gets word-by-word timings, cuts you out from the background on every frame and tracks your face and hands. Record on a tripod with good light and a plain background — clean video = clean cut-outs.

![Master setup — Set up an effects engine for my talking-head videos → effects-engine](/images/guides/30-claude-editing-prompts-after-effects-style-effects/step-1.svg)

**Prompt · step 1**

```text
Set up an effects engine for my talking-head videos:
1. Install Python, OpenCV, MediaPipe, faster-whisper and ffmpeg.
2. For {clip}: get word-by-word timings, and cut me out from the background on every frame (save the masks so you don't redo them).
3. Write a second-by-second effects timeline as a table for me to approve before doing anything else.
4. Always show me preview stills before the final 1080x1920 render.
```

### Step 2: Ask for an effect

Describe the effect and the exact word that starts it. Claude shows 3 preview stills first. Approve or change the stills — fixing a still takes seconds, fixing a render takes minutes.

![Ask for an effect — your request → 3 preview stills](/images/guides/30-claude-editing-prompts-after-effects-style-effects/step-2.svg)

**Prompt · step 2**

```text
Effect: {effect}. Start when I say "{cue}" and last 3 seconds. Show 3 preview stills.
```

### Step 3: Text behind you

When you say the cue word, big bold text appears BEHIND you while you stay in front — a classic After Effects look done with the cut-out from step 1.

![Text behind you — When I say my cue, put large bold text behind me → phone showing BIG TEXT behind you](/images/guides/30-claude-editing-prompts-after-effects-style-effects/step-3.svg)

**Prompt · step 3**

```text
When I say "{cue}", put large bold text behind me (I stay in front). Show stills.
```

### Step 4: Spotlight

The frame goes dark except a soft circle of light on you, for 2 seconds. Use it for your most important line.

![Spotlight — Darken the frame except a soft circle of light on me for 2 seconds → phone showing SPOTLIGHT 2 seconds](/images/guides/30-claude-editing-prompts-after-effects-style-effects/step-4.svg)

**Prompt · step 4**

```text
Darken the whole frame except a soft circle of light on me for 2 seconds after "{cue}".
```

### Step 5: Render

Render only after every effect's stills look right. Watch the final video once fully before posting.

![Render — Only after stills look right → final.mp4](/images/guides/30-claude-editing-prompts-after-effects-style-effects/step-5.svg)

**Prompt · step 5**

```text
Render the final video at 1080x1920 with all approved effects.
```

## Limits, straight talk

- Needs Claude Code (paid plan).

## Useful links

- [MediaPipe (Google)](https://ai.google.dev/edge/mediapipe/solutions/guide)

## Questions people ask

### Do I need After Effects?

No. Free tools (OpenCV, MediaPipe, ffmpeg) do the work; Claude writes the code.

### Why does my cut-out look messy?

Busy backgrounds and low light make cut-outs rough. Re-record with a plain wall and more light.

### Which plan do I need?

Claude Code needs a paid Claude plan. All other tools are free.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/30-claude-editing-prompts-after-effects-style-effects/). Republished with permission.*
