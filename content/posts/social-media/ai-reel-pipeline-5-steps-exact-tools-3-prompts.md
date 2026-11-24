---
title: "Complete AI reel pipeline — research to MP4 in 5 steps"
slug: ai-reel-pipeline-5-steps-exact-tools-3-prompts
category: "Social Media"
description: "A full reel factory: Claude researches and writes a 45–60 second script with a source for every fact, a voice tool records several…"
date: 2026-11-13
updated: 2026-11-13
tags: ["AI reel workflow", "Claude Code", "OpenAI voice", "Whisper", "Remotion", "prompts"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/
---
# Complete AI reel pipeline — research to MP4 in 5 steps

A full reel factory: Claude researches and writes a 45–60 second script with a source for every fact, a voice tool records several takes, Whisper times every word, a coded avatar talks with a mouth that follows your voice, and Remotion renders the MP4.

> **తెలుగులో సారాంశం**
>
> Research నుండి MP4 వరకు పూర్తి reel factory — ప్రతి fact కి source తో script, voice takes, Whisper word timings, code లో avatar, Remotion render.

![Complete AI reel pipeline — research to MP4 in 5 steps: Research + script, Voice takes, Word timings, Avatar reel](/images/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/cover.svg)

Comment keyword: **PIPELINE** · Topic: Social Media · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **A voice** — Paid TTS, or free local options like Kokoro/Chatterbox (check licences), or your own voice.
- **Whisper + Remotion** — Free.

## Step by step

### Step 1: Research + script

Claude researches your topic and writes a 45–60 second script (120–160 words) with a source link for every fact and a hook in the first line. AI can invent links — open every one before you record, and delete any fact you can't confirm.

![Research + script — Research my topic and write a 45–60 second reel script. Every fact needs a real source link → script.md](/images/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/step-1.svg)

**Prompt · step 1**

```text
Research {topic} and write a 45–60 second reel script (120–160 words) in {lang}. Every fact must have a real source link. Hook in the first line.
```

### Step 2: Voice takes

Claude adds voice directions to each line (emotion, speed, pauses, the word to stress). Record 3–5 takes with your voice tool or your own voice and keep the cleanest. Clear audio matters more than a fancy voice.

![Voice takes — Write voice directions for each line → Takes](/images/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/step-2.svg)

**Prompt · step 2**

```text
Write voice directions for each line: emotion, speed, where to pause, which word to stress.
```

### Step 3: Word timings

Whisper listens to voice.mp3 and saves the start and end time of every word in words.json. These timings make the captions and the avatar's mouth move exactly with the voice.

![Word timings — voice.mp3 → words.json](/images/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/step-3.svg)

**Prompt · step 3**

```text
Use Whisper to get word-level timings of voice.mp3 into words.json.
```

### Step 4: Avatar + scenes

Claude builds the reel in Remotion: an original avatar drawn in code whose mouth opens with the voice's loudness, words that pop in as they're spoken, and one supporting visual per line. Ask for a few preview stills before the full render.

![Avatar + scenes — Build a Remotion reel → The reel](/images/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/step-4.svg)

**Prompt · step 4**

```text
Build a Remotion reel: an original SVG avatar whose mouth follows the voice loudness, word-pop captions, a supporting visual for each line.
```

### Step 5: Render and check

Render at 1080×1920, then ask Claude to transcribe the final video and compare it with your script. Any mismatch means a caption or timing is off — fix it before posting.

![Render and check — Check frames → phone showing YOUR TOPIC facts with sources](/images/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/step-5.svg)

**Prompt · step 5**

```text
Render 1080x1920 and check the transcript of the final video matches the script.
```

## Limits, straight talk

- Main pipeline uses PAID tools (Claude Pro/Max, OpenAI voice and Whisper API); free voice options are listed (Kokoro, Chatterbox, VoxCPM2) — check each licence.
- AI-supplied sources can be made up — click every link before posting.

## Useful links

- [Remotion docs](https://www.remotion.dev/docs/)
- [Remotion licence (free for individuals & small teams)](https://www.remotion.dev/license)

## Questions people ask

### Can I do this for free?

Partly. Whisper and Remotion are free and you can use your own voice or a free local voice model, but Claude Code needs a paid Claude plan.

### How long does one reel take?

The first one takes a couple of hours while you set up. After that, the same pipeline makes a reel much faster.

### Can the script be in Telugu?

Yes — set the language to Telugu. Record the voice yourself for the most natural result.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/ai-reel-pipeline-5-steps-exact-tools-3-prompts/). Republished with permission.*
