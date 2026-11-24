---
title: "One phone take → a multi-camera edit with moving text"
slug: one-take-every-move-camera-whips-kinetic-text
category: "Social Media"
description: "Record one short talking video. A free Claude Code skill splits it into camera 'shots', pulls punchy text from your own words and…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Seedance 2.0", "Claude Code skill", "kinetic typography", "camera whips", "talking head", "video-to-video"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/one-take-every-move-camera-whips-kinetic-text/
---
# One phone take → a multi-camera edit with moving text

Record one short talking video. A free Claude Code skill splits it into camera 'shots', pulls punchy text from your own words and writes a prompt for an AI video tool, which returns a version with whip-pan camera moves and kinetic text — same face, same room.

> **తెలుగులో సారాంశం**
>
> Phone లో ఒక్క take record చేయండి — ఫ్రీ Claude skill దాన్ని camera shots గా విభజించి, మీ మాటల నుండి kinetic text తీసి, AI video tool కి prompt రాస్తుంది.

![One phone take → a multi-camera edit with moving text: Install the skill, Record one take, Run the skill, Multi-cam + moving text](/images/guides/one-take-every-move-camera-whips-kinetic-text/cover.svg)

Comment keyword: **ONETAKE** · Topic: Social Media · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **kinetic-multicam skill** — Free, MIT, on GitHub. It asks before installing anything.
- **An AI video-to-video tool** — The guide uses Seedance 2.0 Fast, which costs credits.

## Step by step

### Step 1: Install the skill

Ask Claude Code to read the skill's README first and tell you what it installs and what it costs, then install it. The skill is free and asks before installing anything.

![Install the skill — Read the README of the kinetic-multicam skill, tell me what it installs and costs → kinetic-multicam](/images/guides/one-take-every-move-camera-whips-kinetic-text/step-1.svg)

**Prompt · step 1**

```text
Read the README of the kinetic-multicam skill on GitHub, tell me what it installs and what it costs, then install it.
```

### Step 2: Record one take

Record one take under 15 seconds, phone on a tripod, steady light, looking at the camera. One clean take gives the AI tool the best material.

![Record one take — Your one take](/images/guides/one-take-every-move-camera-whips-kinetic-text/step-2.svg)

### Step 3: Run the skill

Run the skill on your clip. It splits your take into camera 'shots', pulls short punchy text from your own words and writes a full prompt for the AI video tool.

![Run the skill — claude code → you get](/images/guides/one-take-every-move-camera-whips-kinetic-text/step-3.svg)

**Prompt · step 3**

```text
/kinetic-multicam {clip}
```

### Step 4: Generate the video

Upload your clip to the AI video-to-video tool with the skill's prompt. This step uses paid credits. The tool returns a version with whip-pan camera moves and moving text — same face, same room.

![Generate the video — Upload to the AI video tool → Result](/images/guides/one-take-every-move-camera-whips-kinetic-text/step-4.svg)

### Step 5: Quality check

AI video can slightly change your face or lip sync. Run the skill's check and watch closely at full screen before posting.

![Quality check — Run the skill's QA check on the result → AI video can change](/images/guides/one-take-every-move-camera-whips-kinetic-text/step-5.svg)

**Prompt · step 5**

```text
Run the skill's QA check on the result and tell me any problems.
```

## Limits, straight talk

- Seedance 2.0 Fast is a paid AI video generator (credits) — the skill is free, the video isn't.

## Useful links

- [kinetic-multicam skill (GitHub)](https://github.com/aipauloshimas/kinetic-multicam)

## Questions people ask

### Is it free?

The skill is free. The AI video tool that makes the final video costs credits.

### Can I use any video?

Use your own recording. Don't run other people's videos through it.

### What if my face looks different?

Try a shorter clip with better light, or generate again — and don't post a version that doesn't look like you.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/one-take-every-move-camera-whips-kinetic-text/). Republished with permission.*
