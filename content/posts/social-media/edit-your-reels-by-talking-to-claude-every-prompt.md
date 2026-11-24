---
title: "Edit your reels by talking to Claude — effects in plain words"
slug: edit-your-reels-by-talking-to-claude-every-prompt
category: "Social Media"
description: "You don't need to know editing terms. Tell Claude what you want to SEE at a specific moment in your video, and it builds the effect in…"
date: 2026-11-12
updated: 2026-11-12
tags: ["Claude Code", "reel effects", "prompts", "captions", "HyperFrames", "FFmpeg"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/edit-your-reels-by-talking-to-claude-every-prompt/
---
# Edit your reels by talking to Claude — effects in plain words

You don't need to know editing terms. Tell Claude what you want to SEE at a specific moment in your video, and it builds the effect in code — text behind your head, word-by-word captions, a colour grade, a magazine-cover frame, a grid of your reels.

> **తెలుగులో సారాంశం**
>
> Editing పదాలు తెలియకపోయినా పర్వాలేదు — మీ video లో ఏ క్షణంలో ఏం చూడాలనుకుంటున్నారో Claude కి చెప్పండి; అది effect ని code లో build చేస్తుంది.

![Edit your reels by talking to Claude — effects in plain words: Set up once, Describe what you SEE, Word-by-word captions, Colour and mood](/images/guides/edit-your-reels-by-talking-to-claude-every-prompt/cover.svg)

Comment keyword: **TALK** · Topic: Social Media · Last checked: 2026-11-12

## What you need

- **Claude Code** — Paid Claude plan, desktop app Code tab or terminal.
- **Free tools** — ffmpeg, Whisper and an HTML-to-video tool (HyperFrames or Remotion). Claude installs them.
- **Your clip** — A vertical talking-head video you recorded.

## Step by step

### Step 1: Set up once

Open Claude Code in a new folder and run the setup prompt once. Claude checks and installs ffmpeg, Node.js, Python and Git and tells you what it installed.

![Set up once — Set up this folder as my AI video editing workspace → talk-edit](/images/guides/edit-your-reels-by-talking-to-claude-every-prompt/step-1.svg)

**Prompt · step 1**

```text
Set up this folder as my AI video editing workspace.
1. Check whether ffmpeg, Node.js (version 20 or newer), Python 3 and Git are installed. Install anything missing and tell me exactly what you installed.
2. Install Whisper (faster-whisper) so you can get word-by-word timings from my voice.
3. Create folders: raw/ (my clips), refs/ (example videos I like), sounds/, exports/.
4. Test everything: make a 3-second test video with a caption and save it to exports/test.mp4.
5. Also install HyperFrames (HTML-to-video) so you can build motion graphics.
```

### Step 2: Describe what you want to SEE

The golden rule: describe what you want to SEE and when, not how to build it. Claude shows 3 stills before rendering — approve or correct them.

![Describe what you want to SEE — The golden rule → phone showing BIG WORD behind you](/images/guides/edit-your-reels-by-talking-to-claude-every-prompt/step-2.svg)

**Prompt · step 2**

```text
In {clip}, {moment}, put big bold text '{word}' BEHIND me so my head and body stay in front of it. It should slide up and settle. Show me 3 still frames before rendering.
```

### Step 3: Word-by-word captions

Words that pop one at a time are the most-used reel effect. Claude times each word to your voice and keeps captions inside the safe area so buttons don't cover them.

![Word-by-word captions — Add captions: one word appears at a time exactly when I say it → Word-by-word](/images/guides/edit-your-reels-by-talking-to-claude-every-prompt/step-3.svg)

**Prompt · step 3**

```text
Add captions to {clip}: one word appears at a time exactly when I say it, bold white with a black outline, the word '{word}' in yellow. Keep captions in the lower-middle, inside the centre 4:5 area so the feed crop doesn't cut them.
```

### Step 4: Colour and mood

Change the whole mood in one line. Claude gives you one still of each grade so you can choose before rendering.

![Colour and mood — Give my clip a warm golden-hour look. Then a moody, darker version → Same clip](/images/guides/edit-your-reels-by-talking-to-claude-every-prompt/step-4.svg)

**Prompt · step 4**

```text
Give {clip} a warm golden-hour look. Then make a version with a moody, darker cinematic grade. Show me one still of each so I can choose.
```

### Step 5: Refine in 2–3 rounds

Look at the stills and give small, specific notes (what, where, how much). Two or three rounds usually get it right.

![Refine in 2–3 rounds — Change only this: text covers my face at 0:04 — 30% smaller and higher → Good notes are](/images/guides/edit-your-reels-by-talking-to-claude-every-prompt/step-5.svg)

**Prompt · step 5**

```text
Change only this: the text is too big and covers my face at 0:04 — make it 30% smaller and move it higher. Keep everything else the same.
```

## Limits, straight talk

- Tools are real and free (HyperFrames, FFmpeg, Whisper) — Claude itself needs a paid plan.
- Only use other people's reels as references if you have the rights; learn the style, don't repost.

## Useful links

- [HyperFrames (HeyGen)](https://github.com/heygen-com/hyperframes)
- [awesome-claude-video-skills](https://github.com/zhuyansen/awesome-claude-video-skills)
- [Claude Code docs: Skills](https://code.claude.com/docs/en/skills)

## Questions people ask

### Do I need to know editing words?

No. Say what you want to see in your own words — that's the whole idea.

### What does it cost?

The tools are free. Claude Code needs a paid Claude plan.

### Can I use other people's reels as references?

Only if you have the rights. Learn the style, never repost their videos.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/edit-your-reels-by-talking-to-claude-every-prompt/). Republished with permission.*
