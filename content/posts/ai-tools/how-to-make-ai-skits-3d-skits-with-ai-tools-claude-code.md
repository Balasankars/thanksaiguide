---
title: "Make 3D AI skits — your character, a sidekick, Claude edits"
slug: how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code
category: "AI Tools"
description: "Create a funny 3D skit series starring a cartoon version of you: build a character sheet from your photo, add a sidekick, design the…"
date: 2026-11-13
updated: 2026-11-13
tags: ["AI skits", "character sheet", "Nano Banana Pro", "ElevenLabs", "Claude Code", "Remotion"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/
---
# Make 3D AI skits — your character, a sidekick, Claude edits

Create a funny 3D skit series starring a cartoon version of you: build a character sheet from your photo, add a sidekick, design the set, generate stills, write the script, add voices, and let Claude Code animate and edit it with captions and lip sync.

> **తెలుగులో సారాంశం**
>
> మీ ఫోటో నుండి 3D cartoon character తయారు చేసి, sidekick, set, script, voice తో funny skit series చేయండి. Claude Code animation, lip sync, captions చేస్తుంది.

![Make 3D AI skits — your character, a sidekick, Claude edits: Character sheet, Sidekick + set, 6 stills, Claude edits the skit](/images/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/cover.svg)

Comment keyword: **SKITS** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **An AI image tool** — For character sheets and stills (usually paid credits).
- **A voice tool** — ElevenLabs or your own recordings.
- **Claude Code** — Paid plan — animates and edits with Remotion, Whisper and FFmpeg (free).

## Step by step

### Step 1: Character turnaround sheet

Use one clear, front-facing photo of yourself (or someone who has agreed). The image tool draws your cartoon from the front, side, three-quarter and back. Keep this sheet — every later picture is checked against it so you look the same in every scene.

![Character turnaround sheet — One clear photo → Turnaround sheet](/images/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/step-1.svg)

**Prompt · step 1**

```text
Create a 3D cartoon character turnaround sheet based on the attached photo: {me}. Front, 3/4, side and back views, neutral pose, plain background, consistent proportions, Pixar-like but original.
```

### Step 2: Sidekick + set

Make a sidekick in the same style, then an empty set (for example a messy home office). Having the room ready first stops the background changing from shot to shot.

![Sidekick + set — Create a matching character sheet for my sidekick, same style. Then an empty set → Your cast and set](/images/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/step-2.svg)

**Prompt · step 2**

```text
Create a matching character sheet for {pal}, same style. Then an empty set for the skit: a messy home office, same lighting style.
```

### Step 3: 6 stills

Attach both character sheets and the set, and ask for 6 vertical stills — one for each key moment of the joke. If a face changes, regenerate only that still with 'match the character sheet exactly'.

![6 stills — Inputs → 6 vertical stills](/images/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/step-3.svg)

**Prompt · step 3**

```text
Using both character sheets and the set, make 6 vertical stills for this skit: {joke}. Same characters, same set, different moments.
```

### Step 4: Script + voices

Claude writes a 30-second skit with short lines and a twist at the end, marked by speaker. Record the voices yourself or use a voice tool, one file per line.

![Script + voices — Write a 30-second skit. Short punchy lines, a twist at the end → skit.md](/images/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/step-4.svg)

**Prompt · step 4**

```text
Write a 30-second skit: {joke}. Short punchy lines, a twist at the end. Mark who says each line.
```

### Step 5: Claude animates and edits

Put the stills and voice files in one folder and run the prompt in Claude Code. Remotion adds small camera moves, Whisper word timings sync the mouths, and captions and sound effects go on top. Watch the full render before posting.

![Claude animates and edits — skit/ → Claude's edit](/images/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/step-5.svg)

**Prompt · step 5**

```text
Animate these stills into a skit with Remotion: subtle camera moves, mouths synced to the voice using Whisper word timings, captions, sound effects. Render 1080x1920.
```

## Limits, straight talk

- Costs: ImagineArt (Nano Banana Pro) and ElevenLabs are paid; Claude Code needs a paid plan; Remotion, Whisper and FFmpeg are free.
- Only make a character from your own photo or with permission.

## Useful links

- [Google: Veo 3.1 Ingredients (consistent characters)](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)
- [Remotion docs](https://www.remotion.dev/docs/)

## Questions people ask

### What does this cost?

Image credits and a voice tool usually cost money, and Claude Code needs a paid plan. Remotion, Whisper and FFmpeg are free.

### Can I use a friend's face?

Only with their clear permission. Never make a character from someone's photo without asking.

### Can the skit be in Telugu?

Yes — write and record the lines in Telugu and ask for Telugu captions.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/how-to-make-ai-skits-3d-skits-with-ai-tools-claude-code/). Republished with permission.*
