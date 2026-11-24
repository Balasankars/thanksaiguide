---
title: "Turn your video into a 2D cartoon — with Claude"
slug: turn-any-video-into-2d-animation-claude-hyperframes
category: "AI Tools"
description: "Give Claude a 10–30 second video you filmed. It breaks it into shots, then redraws every shot as a flat 2D cartoon in code, keeps your…"
date: 2026-11-13
updated: 2026-11-13
tags: ["HyperFrames", "Claude Code", "2D animation", "cartoon", "lip sync"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/turn-any-video-into-2d-animation-claude-hyperframes/
---
# Turn your video into a 2D cartoon — with Claude

Give Claude a 10–30 second video you filmed. It breaks it into shots, then redraws every shot as a flat 2D cartoon in code, keeps your original audio, lip-syncs to your words, checks each shot against the original and renders after you approve.

> **తెలుగులో సారాంశం**
>
> మీరు తీసిన 10–30 సెకన్ల video ని Claude flat 2D cartoon గా code లో మళ్ళీ గీస్తుంది — మీ audio, lip sync తో.

![Turn your video into a 2D cartoon — with Claude: Attach your clip, Design characters, Redraw shot by shot, Cartoon version](/images/guides/turn-any-video-into-2d-animation-claude-hyperframes/cover.svg)

Comment keyword: **2D** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude desktop app → Code tab** — Paid plan that includes Claude Code. Uses many messages.
- **HyperFrames or Remotion** — Free; Claude installs.
- **Your own footage** — Only footage you own or have rights to.

## Step by step

### Step 1: Attach and analyse

Drag a 10–30 second clip you filmed into the Code tab. Claude lists every shot with times, framing and action, plus the transcript with word timings. Start with a 10-second clip — this uses a lot of messages.

![Attach and analyse — Your clip → Shot list](/images/guides/turn-any-video-into-2d-animation-claude-hyperframes/step-1.svg)

**Prompt · step 1**

```text
Analyse {clip}: list every shot with start/end time, what happens, camera framing, and the transcript with word timings.
```

### Step 2: Design the characters

Claude designs everyone in the video as reusable 2D cartoon characters drawn in code, with mouth shapes and poses. Check the character sheet — change the look now, before any shots are drawn.

![Design the characters — Design the people in this video as reusable 2D cartoon characters drawn in code → Character rig](/images/guides/turn-any-video-into-2d-animation-claude-hyperframes/step-2.svg)

**Prompt · step 2**

```text
Design the people in this video as reusable 2D cartoon characters drawn in code (SVG), {look}. Each needs a few mouth shapes and poses. Show me a character sheet.
```

### Step 3: Redraw shot by shot

Claude redraws each shot as a cartoon using those characters, matching framing and action, keeps your original audio and lip-syncs the mouths to your words. Everything is drawn in code — no tracing frames and no AI video generator.

![Redraw shot by shot — Drawn in code](/images/guides/turn-any-video-into-2d-animation-claude-hyperframes/step-3.svg)

**Prompt · step 3**

```text
Redraw each shot as a 2D cartoon using the character rigs, matching framing and action. Keep the original audio and lip-sync mouths to the word timings.
```

### Step 4: Check against the original

For every shot Claude puts a cartoon frame next to the original and fixes anything that doesn't match. Look at the previews and point out any shot that feels off.

![Check against the original — Each shot → Must match](/images/guides/turn-any-video-into-2d-animation-claude-hyperframes/step-4.svg)

**Prompt · step 4**

```text
For every shot, compare a frame of the cartoon with the original and fix anything that doesn't match. Show me previews.
```

### Step 5: Render

Say OK only when every preview looks right, then Claude renders the full 1080×1920 cartoon.

![Render — After your OK → phone showing YOU, AS A CARTOON](/images/guides/turn-any-video-into-2d-animation-claude-hyperframes/step-5.svg)

**Prompt · step 5**

```text
After my OK, render the full cartoon at 1080x1920.
```

## Limits, straight talk

- Needs a plan that includes Claude Code and a laptop or desktop — not a phone.
- Uses a lot of messages; start with a 10-second clip.
- Only use footage you own or have permission to use.
- Draw everything in code — don't trace frames or run the video through an AI video generator.

## Useful links

- [HyperFrames (HeyGen)](https://github.com/heygen-com/hyperframes)

## Questions people ask

### Can I use a clip from a movie or another creator?

No. Only use footage you filmed or have permission to use.

### Can I do this on my phone?

No — it needs the Claude desktop app's Code tab on a laptop or desktop.

### Why did it stop halfway?

Long clips use many messages. Work in short clips or continue in a new message.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/turn-any-video-into-2d-animation-claude-hyperframes/). Republished with permission.*
