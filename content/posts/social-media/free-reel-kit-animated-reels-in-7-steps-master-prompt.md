---
title: "Free animated reel kit — your cartoon avatar, voice and captions"
slug: free-reel-kit-animated-reels-in-7-steps-master-prompt
category: "Social Media"
description: "Build a full animated explainer reel with a cartoon version of you: make a pose sheet from one photo, write a hook-first script, add…"
date: 2026-11-13
updated: 2026-11-13
tags: ["reel kit", "Remotion", "Kokoro", "faster-whisper", "cartoon avatar", "hooks"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/
---
# Free animated reel kit — your cartoon avatar, voice and captions

Build a full animated explainer reel with a cartoon version of you: make a pose sheet from one photo, write a hook-first script, add your voice, get word timings, and let a master prompt build the video with pop captions, glass cards, sound effects and a talking avatar.

> **తెలుగులో సారాంశం**
>
> ఒక్క ఫోటో నుండి మీ cartoon avatar, మీ voice, word-pop captions తో animated explainer reel — అన్నీ ఫ్రీ tools తో మీ laptop లోనే.

![Free animated reel kit — your cartoon avatar, voice and captions: Pose sheet, Hook-first script, Voice + timings, Animated reel](/images/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/cover.svg)

Comment keyword: **KIT** · Topic: Social Media · Last checked: 2026-11-13

## What you need

- **A free image AI (e.g. Gemini)** — For the pose sheet.
- **Claude (free plan works)** — Writes the code; you run it on your laptop.
- **Node.js, Remotion, ffmpeg, faster-whisper** — Free.
- **Voice** — Your own, or a free TTS like Kokoro.

## Step by step

### Step 1: Pose sheet

Attach one clear photo to a free image AI and ask for 20 poses on a solid green background. Green makes it easy to cut the character out later. If the face changes between poses, ask for the grid again with 'same face in every pose'.

![Pose sheet — One photo of you → 20 poses · green background](/images/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/step-1.svg)

**Prompt · step 1**

```text
Create 20 poses of a friendly cartoon character based on my photo ({me}) on a solid green background in a 5x4 grid: talking, pointing, thumbs up, thinking, surprised, laughing, explaining with hands. Same character in every pose.
```

### Step 2: Script with a hook

A strong first line decides if people keep watching. Claude gives you a 40-second script that starts with one of 5 proven hook types. Keep one idea per line — each line becomes one scene.

![Script with a hook — Write a 40-second script about my topic. Start with a strong hook → script.md](/images/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/step-2.svg)

**Prompt · step 2**

```text
Write a 40-second script about {topic}. Start with one of these hooks: a surprising number, a mistake people make, a 'stop doing X', a question, or a before/after. One idea per line.
```

### Step 3: Voice + timings

Record the script as voice.mp3 (your own voice works best). Claude writes a small Python script that uses faster-whisper to save each word's start and end time in words.json — this is what makes captions pop exactly on time.

![Voice + timings — voice.mp3 → words.json](/images/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/step-3.svg)

**Prompt · step 3**

```text
Write a Python script that uses faster-whisper to save every word of voice.mp3 with start and end times into words.json.
```

### Step 4: Build the video

Claude writes the Remotion project: poses change with each line, the mouth moves with your voice's loudness, words pop on screen, and info cards slide in. You run it on your laptop.

![Build the video — Write a Remotion project for a 1080×1920 reel → The reel](/images/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/step-4.svg)

**Prompt · step 4**

```text
Write a Remotion project for a 1080x1920 reel: my avatar poses (cut out from the green grid) switch to match each line, a mouth that opens with voice loudness, word-pop captions, glass-style info cards for key points, sound mixed to -14 LUFS. Make sure nothing on screen stays still for more than 1 second.
```

### Step 5: Run and fix

Expect 2–3 errors the first time — that's normal. Copy the whole error text and paste it back; Claude fixes it. Once it renders, keep the folder as your template for the next reel.

![Run and fix — terminal → I got this error: (paste). Fix it.](/images/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/step-5.svg)

**Prompt · step 5**

```text
I got this error: [paste]. Fix it.
```

## Limits, straight talk

- All tools are free.

## Useful links

- [Remotion licence](https://www.remotion.dev/license)

## Questions people ask

### Is it really all free?

Yes, if you use the free plans: a free image AI for the poses, Claude's free plan for the code, and free tools (Node.js, Remotion, ffmpeg, faster-whisper) on your laptop.

### Do I need a good laptop?

Any normal laptop from the last few years works. Rendering just takes longer on slower machines.

### Can I use Telugu captions?

Yes. Record in Telugu; faster-whisper can transcribe Telugu, but check the word timings and spelling once.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/free-reel-kit-animated-reels-in-7-steps-master-prompt/). Republished with permission.*
