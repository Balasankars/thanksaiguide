---
title: "Edit like a pro with Claude Code — learn your look, finish in DaVinci"
slug: edit-like-a-pro-with-claude-code-full-editing-workflow
category: "AI Tools"
description: "Build your own look from a Pinterest mood board, let Claude do the rough edit (cuts, captions, b-roll timing), then add the final…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "FFmpeg", "Whisper", "DaVinci Resolve", "Pinterest", "editing workflow"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/
---
# Edit like a pro with Claude Code — learn your look, finish in DaVinci

Build your own look from a Pinterest mood board, let Claude do the rough edit (cuts, captions, b-roll timing), then add the final human polish in free DaVinci Resolve. Best of both: AI speed and your eye.

> **తెలుగులో సారాంశం**
>
> Pinterest mood board నుండి మీ సొంత look తయారు చేసి, Claude తో rough edit, చివరి polish ఫ్రీ DaVinci Resolve లో — AI speed + మీ కన్ను.

![Edit like a pro with Claude Code — learn your look, finish in DaVinci: Mood board, Your look, Claude's rough edit, Polish in DaVinci](/images/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/cover.svg)

Comment keyword: **PRO** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid Claude plan; desktop app Code tab.
- **Pinterest board** — 10–20 screenshots of looks you like (colours, fonts, framing).
- **DaVinci Resolve** — Free version is enough for the final touches.
- **ffmpeg, Python, Node.js, faster-whisper** — Claude installs these.

## Step by step

### Step 1: Set up the workspace

One folder for everything.

![Set up the workspace — Set up this folder as my AI video editing workspace → edit-workspace](/images/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/step-1.svg)

**Prompt · step 1**

```text
Set up this folder as my AI video editing workspace.
1. Check whether ffmpeg, Node.js (version 20 or newer), Python 3 and Git are installed. Install anything missing and tell me exactly what you installed.
2. Install Whisper (faster-whisper) so you can get word-by-word timings from my voice.
3. Create folders: raw/ (my clips), refs/ (example videos I like), sounds/, exports/.
4. Test everything: make a 3-second test video with a caption and save it to exports/test.mp4.
5. Also create a folder look/ for my mood-board images.
```

### Step 2: Teach your look from images

Save 10–20 Pinterest pins of looks you like into look/. Claude studies them and writes LOOK.md: colours (hex codes), contrast, caption style, framing and mood, in your own words. This file is your 'taste' on paper.

![Teach your look from images — look/ → LOOK.md](/images/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/step-2.svg)

**Prompt · step 2**

```text
Look at every image in look/. Describe the common style: colour palette (with hex codes), contrast, font style, caption placement, framing and mood. My own words for it: {mood}. Save it as look/LOOK.md and show me.
```

### Step 3: Rough edit with Claude

Claude cuts silences and mistakes, adds captions in your style and marks where b-roll should go. Ask for an XML or EDL timeline file too, so DaVinci Resolve opens the edit with every cut still editable.

![Rough edit with Claude — Using look/LOOK.md, rough-edit my clip → Rough edit](/images/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/step-3.svg)

**Prompt · step 3**

```text
Using look/LOOK.md, rough-edit {clip}: remove silences and mistakes, add captions in my style, mark where b-roll should go with a note for each. Export the video AND an XML/EDL timeline file I can open in DaVinci Resolve if possible, otherwise export the cut video.
```

### Step 4: Finish in DaVinci Resolve

Import the export, then do what a human does best: final colour, music feel, a few creative moments. This is where your reels start looking like YOU.

![Finish in DaVinci Resolve — Import the export → You finish](/images/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/step-4.svg)

### Step 5: Save your recipe

Make the next video faster.

![Save your recipe — Write RECIPE.md with the exact steps and settings we used → RECIPE.md](/images/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/step-5.svg)

**Prompt · step 5**

```text
Write a file RECIPE.md with the exact steps and settings we used for this video, so next time you can do the rough edit in one go.
```

## Limits, straight talk

- Tools are real and free (DaVinci Resolve has a free version); Claude Code needs a paid plan.

## Useful links

- [Claude Code docs](https://docs.claude.com/en/docs/claude-code/overview)
- [DIY AI video editor setup (row 51)](https://app.notion.com/p/SETUP-GUIDE-4085ad689bf2807da73ee268a7c31259)

## Questions people ask

### Is DaVinci Resolve really free?

Yes, the free version is enough for colour, music and final touches.

### Why not let AI do everything?

AI is fast at boring cuts. Your eye is better at feel and timing — that last 10% is what makes reels look like yours.

### Which Claude plan do I need?

Claude Code needs a paid plan (Pro is enough). It runs from the desktop app's Code tab.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/edit-like-a-pro-with-claude-code-full-editing-workflow/). Republished with permission.*
