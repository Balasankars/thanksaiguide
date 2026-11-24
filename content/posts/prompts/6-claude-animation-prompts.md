---
title: "6 Claude animation prompts — 5-second 3D videos in code"
slug: 6-claude-animation-prompts
category: "Prompts"
description: "Short, satisfying 5-second vertical animations that Claude builds entirely in code (Remotion + three.js). Start with a fun myth-buster…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "Remotion", "three.js", "animation prompts", "myth busting", "Higgsfield"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/6-claude-animation-prompts/
---
# 6 Claude animation prompts — 5-second 3D videos in code

Short, satisfying 5-second vertical animations that Claude builds entirely in code (Remotion + three.js). Start with a fun myth-buster in a 3D cartoon look, then swap in your own idea.

> **తెలుగులో సారాంశం**
>
> Claude Code తో 5 సెకన్ల 3D animations — myth-buster, loop, kinetic text, product turntable — అన్నీ code లోనే. Blender అవసరం లేదు; paid Claude plan మాత్రం కావాలి.

![6 Claude animation prompts — 5-second 3D videos in code: Set up once, Paste a prompt, Claude codes the 3D, 5-second clip](/images/guides/6-claude-animation-prompts/cover.svg)

Comment keyword: **ANIMATE** · Topic: Prompts · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Remotion + three.js** — Claude installs them.

## Step by step

### Step 1: Set up once

Open Claude Code in a new empty folder and paste the prompt. Claude installs Remotion and three.js and renders a 1-second test video. If the test fails, paste the full error back — it is almost always a missing Node.js version, which Claude can fix.

![Set up once — Set up Remotion with three.js for 1080×1920, 30 fps → animations](/images/guides/6-claude-animation-prompts/step-1.svg)

**Prompt · step 1**

```text
Set up Remotion with three.js in this folder for 1080x1920, 30 fps videos. Render a 1-second test.
```

### Step 2: 3D cartoon myth-buster

Type your myth in the {idea} box first. Claude builds rounded cartoon characters and a MYTH → FACT stamp, then renders a 5-second MP4. Check the fact yourself before posting — the animation is only as true as the line you give it.

![3D cartoon myth-buster — Make a 5-second 3D cartoon myth-buster → phone showing MYTH flips to FACT](/images/guides/6-claude-animation-prompts/step-2.svg)

**Prompt · step 2**

```text
Make a 5-second 3D cartoon myth-buster: chunky rounded characters, bright colours, a big 'MYTH' stamp that flips to 'FACT'. Topic: {idea}. Use only facts that are true. Render MP4.
```

### Step 3: Satisfying loop

A perfect loop (the end matches the start) keeps people watching again and again. If you see a jump at the loop point, ask: 'make frame 1 and the last frame identical so the loop is seamless'.

![Satisfying loop — Make a 5-second perfectly looping 3D animation of marbles on a spiral track → phone showing SATISFYING LOOP](/images/guides/6-claude-animation-prompts/step-3.svg)

**Prompt · step 3**

```text
Make a 5-second perfectly looping 3D animation of colourful marbles rolling down a wooden spiral track, soft studio light. Render MP4.
```

### Step 4: Kinetic text

Words fly in, bounce and settle in time. Use short lines (5–8 words) so each word is readable on a phone. Ask for your brand colours and font if you have them.

![Kinetic text — Make a 5-second kinetic-typography animation of my line → phone showing YOUR LINE HERE](/images/guides/6-claude-animation-prompts/step-4.svg)

**Prompt · step 4**

```text
Make a 5-second kinetic-typography animation of the line "{idea}": words fly in, bounce and settle, bold sans font.
```

### Step 5: Product turntable

A simple product built from basic 3D shapes turning on a pedestal. Good for a quick product teaser. Change 'a coffee cup' to your own simple product, and ask for a slower turn if it feels rushed.

![Product turntable — Make a 5-second 3D turntable of a simple product → phone showing PRODUCT TURNTABLE](/images/guides/6-claude-animation-prompts/step-5.svg)

**Prompt · step 5**

```text
Make a 5-second 3D turntable of a simple product (a coffee cup) made from basic shapes, rotating on a pedestal with a soft spotlight.
```

### Step 6: Your own idea

Keep everything in a prompt the same and change only the last line to your topic — that's the fastest way to get a new video in the same style. Save the prompts you like in a notes file for next time.

![Your own idea — any prompt above → Your own idea](/images/guides/6-claude-animation-prompts/step-6.svg)

## Limits, straight talk

- Prompts are sound and the example fact checks out.
- 'Free · no account' means no extra tool account — Claude Code itself still needs a paid Claude plan; the Higgsfield versions cost credits.
- Prompts are named after other creators' styles — use the look, not their characters.

## Useful links

- [Awesome Opus 5.5 Videos (703 prompts, row 38)](https://aiidelist.com/blog/awesome-opus-5-5-videos)
- [Remotion docs](https://www.remotion.dev/docs/)

## Questions people ask

### Is this free?

Remotion and three.js are free, but Claude Code needs a paid Claude plan. There's no image or video credit cost because everything is drawn in code.

### Can I make longer videos?

Yes — ask for 10 or 15 seconds. Longer renders take more time on your laptop, so test at 5 seconds first.

### Do I need to know coding?

No. Claude writes and runs the code. You only paste prompts and, if something breaks, paste the error back.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/6-claude-animation-prompts/). Republished with permission.*
