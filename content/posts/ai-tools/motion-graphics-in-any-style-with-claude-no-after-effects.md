---
title: "Motion graphics in ANY style with Claude — no After Effects"
slug: motion-graphics-in-any-style-with-claude-no-after-effects
category: "AI Tools"
description: "Show Claude 2–4 videos in a style you like. It studies them frame by frame — cuts, fonts, colours, motion, sound — writes a style…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "Remotion", "motion graphics", "style study", "ffmpeg", "Whisper"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/motion-graphics-in-any-style-with-claude-no-after-effects/
---
# Motion graphics in ANY style with Claude — no After Effects

Show Claude 2–4 videos in a style you like. It studies them frame by frame — cuts, fonts, colours, motion, sound — writes a style sheet, then builds a brand-new video in that style entirely in code with Remotion.

> **తెలుగులో సారాంశం**
>
> మీకు నచ్చిన 2–4 videos చూపిస్తే, Claude ఆ style (cuts, fonts, colours, motion) నేర్చుకుని, మీ topic మీద కొత్త video ని code లో తయారు చేస్తుంది. After Effects అవసరం లేదు.

![Motion graphics in ANY style with Claude — no After Effects: 2–4 reference videos, Claude studies them, Style sheet, New video, same style](/images/guides/motion-graphics-in-any-style-with-claude-no-after-effects/cover.svg)

Comment keyword: **ANYSTYLE** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Node.js, ffmpeg, Python, Remotion** — Claude installs them.
- **Reference videos** — To learn a style only — never copy their footage, logos or text.

## Step by step

### Step 1: Set up

Open Claude Code in a new folder and paste the prompt. It installs the free tools and renders a 2-second test. If something fails, paste the error back to Claude.

![Set up — Install Node.js, ffmpeg, Python and Remotion. Create refs/ and out/ → any-style](/images/guides/motion-graphics-in-any-style-with-claude-no-after-effects/step-1.svg)

**Prompt · step 1**

```text
Install Node.js, ffmpeg, Python and Remotion in this folder. Create refs/ and out/. Render a 2-second test.
```

### Step 2: Study the references

Put 2–4 example videos in refs/. Claude pulls out frames, finds every cut, guesses the fonts (or the nearest free ones), lists colours as hex codes and describes the motion. It saves all this as STYLES.md — your style rulebook.

![Study the references — refs/ → STYLES.md](/images/guides/motion-graphics-in-any-style-with-claude-no-after-effects/step-2.svg)

**Prompt · step 2**

```text
Study every video in refs/ in detail: extract frames and make contact sheets, detect every cut, identify fonts (or the closest free fonts), list colours as hex codes, describe motion (easing, speed, signature moves), and analyse sound (music style, effects). Write STYLES.md with: look, type, motion, signature move, sound, and how to build it in Remotion.
```

### Step 3: Build a new video in that style

Claude first shows a storyboard (what appears on screen, second by second). Approve it, then it builds the video in code using only your own text and visuals. Never copy the reference's footage, logos or words — only the style.

![Build a new video in that style — Using STYLES.md, make a 30-second vertical video about my topic. Storyboard first → Storyboard](/images/guides/motion-graphics-in-any-style-with-claude-no-after-effects/step-3.svg)

**Prompt · step 3**

```text
Using STYLES.md, make a {len}-second vertical video about: {topic}. Original text and visuals only. Storyboard first.
```

### Step 4: Compare and fix

Ask for one frame from your video next to one from the reference. Claude lists what's different (spacing, speed, colour) and fixes it. Two rounds usually get it close.

![Compare and fix — Side by side → Fix list](/images/guides/motion-graphics-in-any-style-with-claude-no-after-effects/step-4.svg)

**Prompt · step 4**

```text
Put a frame from my video next to a frame from the reference and list the differences in style. Fix them.
```

### Step 5: Render

Render the final 1080×1920 vertical video into out/. Keep STYLES.md — next time you can skip step 2 and go straight to a new topic.

![Render — Render at 1080×1920 into out/ → phone showing YOUR TOPIC in that style](/images/guides/motion-graphics-in-any-style-with-claude-no-after-effects/step-5.svg)

**Prompt · step 5**

```text
Render at 1080x1920 into out/.
```

## Limits, straight talk

- Optional ImagineArt image model costs credits.

## Useful links

- [Remotion docs](https://www.remotion.dev/docs/)
- [Remotion licence](https://www.remotion.dev/license)
- [Awesome Opus 5.5 Videos](https://aiidelist.com/blog/awesome-opus-5-5-videos)

## Questions people ask

### Is it legal to copy a style?

Learning a look (colours, pacing, font feel) is fine. Copying someone's footage, characters, logo or text is not.

### Do I need After Effects?

No. Remotion builds the video from code and is free. You only need a paid Claude plan for Claude Code.

### What kind of reference videos work best?

Short motion-graphics clips (10–30 seconds) with a clear, consistent look work better than talking-head videos.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/motion-graphics-in-any-style-with-claude-no-after-effects/). Republished with permission.*
