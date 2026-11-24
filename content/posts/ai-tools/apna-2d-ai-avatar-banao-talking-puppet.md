---
title: "Make your own 2D talking avatar — a cartoon puppet in code"
slug: apna-2d-ai-avatar-banao-talking-puppet
category: "AI Tools"
description: "Build a 2D cartoon avatar that talks: generate one sheet of 20 poses, cut them out, find the mouth on each pose, get lip-sync data…"
date: 2026-11-13
updated: 2026-11-13
tags: ["AI avatar", "sprite sheet", "lip sync", "Rhubarb", "Remotion", "Claude Code"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/apna-2d-ai-avatar-banao-talking-puppet/
---
# Make your own 2D talking avatar — a cartoon puppet in code

Build a 2D cartoon avatar that talks: generate one sheet of 20 poses, cut them out, find the mouth on each pose, get lip-sync data from your voice with Rhubarb, draw mouth shapes and blinks in code, and pick poses by keywords.

> **తెలుగులో సారాంశం**
>
> మీ 2D cartoon avatar — 20 poses, mouth shapes, blinks, Rhubarb lip sync తో మీ voice కి మాట్లాడే puppet ని code లో తయారు చేయండి.

![Make your own 2D talking avatar — a cartoon puppet in code: Pose sheet, Cut out poses, Lip-sync data, Talking avatar](/images/guides/apna-2d-ai-avatar-banao-talking-puppet/cover.svg)

Comment keyword: **AVATAR** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **An AI image tool** — For the pose sheet.
- **Claude Code** — Paid plan.
- **Rhubarb Lip Sync** — Free, open source.
- **Remotion** — Free.

## Step by step

### Step 1: Pose sheet

Ask your image tool for 20 poses of one character in a 4×5 grid on solid green, with the mouth closed in every pose (the mouth is drawn later in code). This is the hardest step — regenerate until all poses look like the same character.

![Pose sheet — Create a 4×5 grid of 20 poses of one character. Green background, mouth CLOSED → 20 poses](/images/guides/apna-2d-ai-avatar-banao-talking-puppet/step-1.svg)

**Prompt · step 1**

```text
Create a 4x5 grid of 20 poses of one character: {me}. Solid green background, mouth CLOSED in every pose, same size and style: talking, pointing, thinking, laughing, arms open, thumbs up.
```

### Step 2: Cut out poses

Claude cuts the sheet into 20 separate pictures, removes the green background and saves where the mouth is on each pose. If a cut-out has green edges, ask Claude to 'clean the green fringe'.

![Cut out poses — pose_sheet.png → poses/](/images/guides/apna-2d-ai-avatar-banao-talking-puppet/step-2.svg)

**Prompt · step 2**

```text
Slice pose_sheet.png into 20 separate PNGs, remove the green background, and for each pose find and save the mouth position.
```

### Step 3: Lip-sync data

Rhubarb Lip Sync is a free tool that listens to voice.wav and works out which mouth shape to show at each moment. Claude installs it and creates the timing file.

![Lip-sync data — voice.wav → mouth timings](/images/guides/apna-2d-ai-avatar-banao-talking-puppet/step-3.svg)

**Prompt · step 3**

```text
Install Rhubarb Lip Sync and generate mouth-shape timings for voice.wav.
```

### Step 4: Mouths and blinks

Claude draws 5 mouth shapes in your avatar's style and places them on every pose, plus natural blinks every few seconds. This is what makes the avatar feel alive.

![Mouths and blinks — 5 mouth shapes → Plus](/images/guides/apna-2d-ai-avatar-banao-talking-puppet/step-4.svg)

**Prompt · step 4**

```text
Draw 5 mouth shapes in code that fit the avatar's style, and add natural blinks. Place the mouth on each pose at its saved position.
```

### Step 5: Choose poses by words

Claude picks a pose for each sentence from keywords (for example 'look' → pointing, 'wow' → surprised), adds a gentle sway and renders with captions.

![Choose poses by words — Pose by keyword → phone showing YOUR AVATAR talks in sync](/images/guides/apna-2d-ai-avatar-banao-talking-puppet/step-5.svg)

**Prompt · step 5**

```text
Pick a pose for each sentence based on keywords (e.g. 'look' → pointing, 'wow' → surprised). Add a gentle sway. Render 1080x1920 with captions.
```

## Limits, straight talk

- Hinglish suitability of the lip-sync recogniser is asserted, not shown.
- Check Rhubarb's licence.

## Useful links

- [Rhubarb Lip Sync (GitHub)](https://github.com/DanielSWolf/rhubarb-lip-sync)
- [Reel Studio Kit (avatar player included)](https://getanimo.io/blog/reel-studio-kit)

## Questions people ask

### Does the lip sync work for Telugu?

Rhubarb is built for English sounds. It usually looks fine for Telugu speech, but test a short clip first.

### Can I use my photo for the character?

Yes — describe yourself or attach your photo. Use other people's faces only with permission.

### What does it cost?

Rhubarb and Remotion are free. The image tool may need credits, and Claude Code needs a paid plan.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/apna-2d-ai-avatar-banao-talking-puppet/). Republished with permission.*
