---
title: "Awesome Opus 5.5 Videos — 700+ Claude video prompts, made yours"
slug: 700-video-prompts-418-remakes-for-opus-5-5-videos
category: "AI Tools"
description: "A free GitHub library collects 700+ prompts behind viral videos made with Claude Opus 5.5 — motion graphics, explainers…"
date: 2026-11-16
updated: 2026-11-16
tags: ["Claude Code", "Claude Opus 5.5", "HTML / Canvas", "GSAP", "Three.js", "ffmpeg"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/
---
# Awesome Opus 5.5 Videos — 700+ Claude video prompts, made yours

A free GitHub library collects 700+ prompts behind viral videos made with Claude Opus 5.5 — motion graphics, explainers, 3D scenes and mini games — with a clip next to every prompt. Pick one you like, swap in your own brand or product, and render it as a vertical MP4 on your laptop.

> **తెలుగులో సారాంశం**
>
> 700+ Claude video prompts ఉన్న ఫ్రీ GitHub library — నచ్చిన prompt ఎంచుకుని, మీ brand/product పెట్టి, laptop లో vertical MP4 గా render చేయండి.

![Awesome Opus 5.5 Videos — 700+ Claude video prompts, made yours: Pick a clip, Copy the prompt, Make it yours, Render the MP4](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/cover.svg)

Comment keyword: **VIDEO** · Topic: AI Tools · Last checked: 2026-11-16

## What you need

- **Claude Code** — Comes with a paid Claude plan (Pro or above). It runs on your laptop, writes the animation code and renders the MP4 for you.
- **Node.js, ffmpeg, Chrome** — Free. Claude installs whatever is missing in step 3; Chrome takes a picture of every frame.
- **The prompt library** — Free on GitHub: 'Awesome Opus 5.5 Videos' (link below).
- **Laptop** — Windows or Mac for the MP4. No laptop? Step 6 shows a phone screen-record option.

## Step by step

### Step 1: Open the library and pick a video

Open the free 'Awesome Opus 5.5 Videos' library on GitHub (link at the bottom of this page). It has 700+ prompts sorted into Motion graphics, Explainers, 3D scenes, Games & interactive, and Latest prompts. Every entry shows a clip, the tech it uses (Canvas, SVG, GSAP, Three.js…) and a 'Prompt' link. Scroll, watch, and pick 1–2 videos whose style is close to the reel you want. For brand or product promos, start with Motion graphics; for teaching, use Explainers.

![Open the library and pick a video — GitHub · Awesome Opus 5.5 Videos: 700+ prompts → Each entry](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/step-1.svg)

### Step 2: Copy the prompt and let Claude explain it

Click 'Prompt' on the entry you picked. It opens a small Markdown file — copy only the block under the Prompt heading. Make a new folder on your laptop (for example my-promo) and save it there as source-prompt.md. Some creators shared only part of their prompt, and those files say so, so ask Claude to read it first and tell you what's missing before you build anything.

![Copy the prompt and let Claude explain it — my-promo/ → What it is](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/step-2.svg)

**Prompt · step 2**

```text
Read source-prompt.md. In simple words, tell me: what the video shows, its style (colours, fonts, motion), the tech it uses, its length and size, and anything that seems missing because only part of the prompt was shared. Don't build anything yet.
```

### Step 3: Set up the project (one time)

Open Claude Code in that folder. These videos are not AI video: Claude writes the animation as code (HTML, Canvas, SVG, Three.js), and your laptop turns the frames into an MP4. Claude needs Node.js, ffmpeg and Google Chrome for that, and it can install whatever is missing. Read each command before you say yes.

![Set up the project (one time) — setup (one time) → my-promo/](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/step-3.svg)

**Prompt · step 3**

```text
Set up this folder to make code-made videos. Check that Node.js, ffmpeg and Google Chrome are installed and install what's missing. Create refs/, frames/ and out/. Then render a 2-second 1080x1920 test MP4 into out/ to prove everything works. Tell me each command before you run it.
```

### Step 4: Build it as-is first

Before you change anything, make the original once. This shows you whether the prompt works and what the look really is. Ask for one HTML file where everything moves from a single time value, so any frame can later be rendered exactly. Open index.html in Chrome to preview it.

![Build it as-is first — Build source-prompt.md as-is in one index.html, driven by time t → index.html](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/step-4.svg)

**Prompt · step 4**

```text
Build the video described in source-prompt.md exactly as written, as one file: index.html. Drive every animation from a single time value t (in seconds) so any frame can be rendered exactly, and add a play/pause preview. Make it vertical 1080x1920 if the prompt doesn't say a size.
```

### Step 5: Swap in your brand or product

Now make it yours. Keep the motion, pacing and style you liked, but change every word, colour and object to your brand. Ask for a storyboard first, so you can fix the story in text before any code changes. Don't copy the original creator's text, names or logos — your version should be your own content in a similar style.

![Swap in your brand or product — Keep the look and timing — change the content to my brand → Storyboard](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/step-5.svg)

**Prompt · step 5**

```text
Keep the look, motion and timing of index.html, but change the content to mine:
Brand: {brand}
Promoting: {product}
Main message: {msg}
Colours: {colors}
Length: {len} seconds, vertical 1080x1920, 30 fps.
Write all on-screen text yourself and keep it short and big enough to read on a phone. Remove the original creator's words, names and logos. First show me a storyboard as a table (scene, seconds, on-screen text, what moves). Wait for my OK, then update index.html.
```

### Step 6: Render the MP4 and check frames

Claude opens the page in a hidden Chrome, takes a picture of every frame and joins them into an MP4 with ffmpeg. Then it shows you still frames from across the video, so you can spot text that is cut off or too small without watching it ten times. No laptop? Ask the Claude app for the same single HTML file, open it on your phone in full screen and screen-record it — quality is lower, but it works.

![Render the MP4 and check frames — render → 6 still frames](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/step-6.svg)

**Prompt · step 6**

```text
Render index.html to out/final.mp4: capture every frame at 30 fps with headless Chrome (Puppeteer), then join them with ffmpeg (H.264, yuv420p, 1080x1920). After that, save 6 still frames spread across the video as PNGs and show them to me so I can check nothing is cut off or too small.
```

### Step 7: Fix, add sound and post

Write each fix as one clear line with the time in seconds. Record your voice on your phone (or use a text-to-speech voice your plan allows for commercial use) and add music that you have the rights to. Then post the reel with your own caption and a comment keyword.

![Fix, add sound and post — Fix list → phone showing YOUR BRAND](/images/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/step-7.svg)

**Prompt · step 7**

```text
Fix only these and keep everything else the same:
1. [what to fix, at which second]
2. [what to fix, at which second]
Then add voice.mp3 starting at 0.3 s and music.mp3 at about 20% volume with a 1-second fade-out at the end, normalise loudness to about -14 LUFS, and save out/final-with-sound.mp4. Tell me what you changed in one line each.
```

## Limits, straight talk

- The library itself is free, but making MP4s with Claude Code needs a paid Claude plan, and long videos with many fix rounds use a lot of your plan's limit — start with 15–30 seconds.
- Every video and prompt belongs to its creator. The repo has an MIT licence, but it doesn't clearly say that covers the prompts — so learn the style and make your own version; don't repost a near-copy as your own.
- Some prompts are only partial or just describe the result. Step 2 helps you spot that before you build.
- These are code-made animations: great for motion graphics, text, charts, products and 3D shapes, not for realistic people or real footage.
- The prompts were written for Claude Opus 5.5; other models can give different results.
- Read what Claude installs and runs, like any code from the internet. Only use logos and music you have the rights to.

## Useful links

- [Awesome Opus 5.5 Videos (the prompt library on GitHub)](https://github.com/yihui-dev/awesome-opus5-5-videos)
- [Claude Code docs](https://docs.claude.com/en/docs/claude-code/overview)
- [Puppeteer (frame capture)](https://pptr.dev/)
- [ffmpeg download](https://ffmpeg.org/download.html)
- [Node.js download](https://nodejs.org/)

## Questions people ask

### Can I repost the videos from the library?

No. Every video belongs to its creator. Learn the style and make your own version.

### Do I need a laptop?

For the MP4, yes. Without one, step 6 shows a phone screen-record option.

### Is the library free?

Yes, but making MP4s with Claude Code needs a paid Claude plan.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/700-video-prompts-418-remakes-for-opus-5-5-videos/). Republished with permission.*
