---
title: "3D videos with Claude + Three.js — no Blender"
slug: claude-three-js-se-3d-video-kaise-banaye
category: "AI Tools"
description: "A 5-second vertical 3D clip made entirely by Claude writing Three.js code: describe characters, scene, three camera shots and…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "Three.js", "3D video", "ffmpeg", "Puppeteer", "free source code"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/claude-three-js-se-3d-video-kaise-banaye/
---
# 3D videos with Claude + Three.js — no Blender

A 5-second vertical 3D clip made entirely by Claude writing Three.js code: describe characters, scene, three camera shots and lighting; give specific fixes; your laptop renders every frame and ffmpeg stitches the video.

> **తెలుగులో సారాంశం**
>
> Claude Three.js code రాస్తే, మీ laptop ప్రతి frame render చేసి 5 సెకన్ల vertical 3D clip తయారవుతుంది — Blender అవసరం లేదు.

![3D videos with Claude + Three.js — no Blender: Describe the shot, Render pipeline, Specific fixes, 5-second 3D clip](/images/guides/claude-three-js-se-3d-video-kaise-banaye/cover.svg)

Comment keyword: **3D** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Node.js, Chrome, ffmpeg** — Claude installs what's missing.

## Step by step

### Step 1: Describe the shot

Describe your characters, the place, three camera shots (wide, slow push-in, close-up) and the light. Low-poly style is fastest to render and still looks good. Claude writes the whole Three.js scene.

![Describe the shot — your shot → Write a Three.js scene for this](/images/guides/claude-three-js-se-3d-video-kaise-banaye/step-1.svg)

**Prompt · step 1**

```text
Write a Three.js scene, 1080x1920, 60 fps, 5 seconds: {scene}. Low-poly style. 3 camera shots: wide establishing, slow push-in, close-up. Soft blue moonlight plus a warm glow from the plant. Same image for the same time value (no randomness).
```

### Step 2: Render pipeline

Claude writes render.js: it opens the scene in a hidden Chrome window, captures all 300 frames and joins them into out.mp4 with ffmpeg. The first render can take a few minutes — that's normal.

![Render pipeline — Write render.js: headless Chrome captures all 300 frames, ffmpeg stitches them → Render pipeline](/images/guides/claude-three-js-se-3d-video-kaise-banaye/step-2.svg)

**Prompt · step 2**

```text
Write render.js: open the scene in headless Chrome, capture all 300 frames, and stitch them with ffmpeg into out.mp4. Run it.
```

### Step 3: Specific fixes

Give exact notes like '20% bigger' or 'start at 1.5 s' instead of 'make it better'. Exact notes get the right fix in one round.

![Specific fixes — Exact notes save rounds → out.mp4](/images/guides/claude-three-js-se-3d-video-kaise-banaye/step-3.svg)

**Prompt · step 3**

```text
Fixes: robot 20% bigger; shot 2 starts at 1.5 s; plant glow pulses slowly. Re-render.
```

### Step 4: Add sound

Ask for soft background music and sounds that match actions on screen. Use only music you're allowed to use.

![Add sound — Add soft ambient music and a gentle water sound when the robot waters the plant → Sound](/images/guides/claude-three-js-se-3d-video-kaise-banaye/step-4.svg)

**Prompt · step 4**

```text
Add soft ambient music and a gentle water sound when the robot waters the plant.
```

### Step 5: Variations

Make 2 more 5-second shots in the same world, and you have a 15-second reel with a consistent look.

![Variations — Make 2 more 5-second shots in the same world → 15-second reel](/images/guides/claude-three-js-se-3d-video-kaise-banaye/step-5.svg)

**Prompt · step 5**

```text
Make 2 more 5-second shots in the same world so I can make a 15-second reel.
```

## Limits, straight talk

- Review the zip's code before running npm install.

## Useful links

- [Three.js docs](https://threejs.org/docs/)
- [Awesome Opus 5.5 Videos (3D prompts)](https://aiidelist.com/blog/awesome-opus-5-5-videos)

## Questions people ask

### Do I need Blender or 3D skills?

No. Claude writes Three.js code; your laptop draws each frame.

### Why is it 60 fps?

Smoother motion. If renders are slow, ask for 30 fps — it halves the frames.

### What does it cost?

Three.js, Chrome and ffmpeg are free. Claude Code needs a paid Claude plan.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/claude-three-js-se-3d-video-kaise-banaye/). Republished with permission.*
