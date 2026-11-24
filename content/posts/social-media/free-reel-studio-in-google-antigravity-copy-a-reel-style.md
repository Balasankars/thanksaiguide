---
title: "Free reel studio in Google Antigravity — learn a style, make the reel"
slug: free-reel-studio-in-google-antigravity-copy-a-reel-style
category: "Social Media"
description: "Turn one folder in Google Antigravity (Google's free AI agent app) into a reel studio: the agent installs free tools, studies 2–3…"
date: 2026-11-15
updated: 2026-11-15
tags: ["Google Antigravity", "HyperFrames", "FFmpeg", "Whisper", "free TTS", "style.md"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/
---
# Free reel studio in Google Antigravity — learn a style, make the reel

Turn one folder in Google Antigravity (Google's free AI agent app) into a reel studio: the agent installs free tools, studies 2–3 reels whose editing you like and writes a style sheet, then turns your audio or topic into a captioned, edited 9:16 reel. No paid AI plan needed to start.

> **తెలుగులో సారాంశం**
>
> Google Antigravity (ఫ్రీ AI agent app) లో ఒక folder ని reel studio గా మార్చండి — మీకు నచ్చిన reels style నేర్చుకుని, మీ audio/topic తో captioned 9:16 reel తయారు చేస్తుంది.

![Free reel studio in Google Antigravity — learn a style, make the reel: Studio folder, Free tools, Learn a style, Your reel](/images/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/cover.svg)

Comment keyword: **GRAVITY** · Topic: Social Media · Last checked: 2026-11-15

## What you need

- **Google Antigravity** — Google's desktop AI coding agent (Windows, Mac, Linux). The free individual plan has weekly usage limits; Google AI Pro/Ultra raise them. Long renders can use up the free quota.
- **HyperFrames + FFmpeg** — Free and open source: HyperFrames turns HTML animation into video (needs Node.js 22+), FFmpeg cuts and encodes.
- **Whisper** — OpenAI's free, open-source speech-to-text, run on your laptop for captions.
- **A free voice** — Your own recording, or a free open-source text-to-speech model.

## Step by step

### Step 1: Make the studio folder

Install Antigravity from Google's official site and sign in. Create a folder called reel-studio with three subfolders: raw (your clips and audio), style-refs (reference reels) and export (finished reels). Open the folder in Antigravity.

![Make the studio folder — antigravity.google: Install and sign in → reel-studio/](/images/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/step-1.svg)

### Step 2: Let the agent install the tools

The agent installs and tests each free tool, then reports back. Read any command it wants to run before you approve it.

![Let the agent install the tools — Install and test these free tools, one at a time → reel-studio](/images/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/step-2.svg)

**Prompt · step 2**

```text
This folder is my reel studio. Please install and test these free tools, one at a time: Node.js 22 or newer, HyperFrames (for motion graphics), FFmpeg (for cutting and encoding), Whisper (for captions) and one free open-source text-to-speech voice. After each install, run a tiny test and tell me in plain words whether it worked. Don't install anything paid. If a step needs my permission, explain why first.
```

### Step 3: Teach it a style

Put 2–3 reels whose editing you like into style-refs (use your own, or ones you have the right to use). The agent looks at sample frames and writes a style sheet. It's learning the editing feel — fonts, colours, pace — not copying anyone's video.

![Teach it a style — style-refs/ → style.md](/images/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/step-3.svg)

**Prompt · step 3**

```text
Study the videos in style-refs/. Take a frame every half second and describe the editing: caption font, size and position; colours; how text animates; types of transitions; average shot length; zooms; sound effects; hook in the first 3 seconds.
Write it all to style.md as simple rules I can reuse. Where you can't tell for sure, write 'unsure' instead of guessing. This is for the look and pacing only — never reuse the reference footage, music or wording.
```

### Step 4: Make the reel

Give it a topic (it writes the script and voice) or drop your own recording into raw. It always shows a quick low-quality preview first so you don't waste quota on a full render.

![Make the reel — Make a 30-second 9:16 reel about: my topic → phone showing YOUR TOPIC styled captions](/images/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/step-4.svg)

**Prompt · step 4**

```text
Make a {len}-second 9:16 reel about: {topic}.
If there's audio or video in raw/, use it and transcribe it with Whisper. If not, write a short script with a strong hook in the first 3 seconds and make the voice with the free TTS.
Follow style.md for captions, colours, transitions and pace. Cut silences and filler words. Captions in {lang}, kept clear of the top 250 px and bottom 400 px. Add simple motion graphics with HyperFrames where they help. End with: {cta}.
First render a small low-quality preview and wait for my OK. Then render the final 1080x1920, 30 fps MP4 to export/.
```

### Step 5: Give feedback in plain words

Say what you see, not how to code it. Send all fixes in one message so it re-renders only once. Hinglish or Telugu-English is fine.

![Give feedback in plain words — One message, all fixes → phone showing FIXED faster hook](/images/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/step-5.svg)

**Prompt · step 5**

```text
Keep everything else the same and fix only these:
1. [e.g. hook is slow — put the main point in the first 3 seconds]
2. [e.g. captions bigger and bolder]
3. [e.g. cuts faster in the middle]
Show me a preview again before the final render.
```

### Step 6: Save what worked

Once you like a reel, make the agent remember your choices so the next reel starts closer to done.

![Save what worked — Update style.md with the changes I approved → style.md](/images/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/step-6.svg)

**Prompt · step 6**

```text
Update style.md with the changes I approved in this reel, so the next reel follows them by default. Keep it short.
```

## Limits, straight talk

- Antigravity's free plan has weekly limits. A long render or many fix rounds can use them up — preview at low quality first. Google AI Pro/Ultra raise the limits.
- The style sheet is the agent's estimate from sample frames. Read style.md and correct anything that looks wrong.
- Learn the editing style only. Don't reuse other creators' footage, music, voice or script — use your own clips and audio, or ones you have rights to.
- Before approving any install command, read it. Only install from official sources (nodejs.org, ffmpeg.org, the GitHub pages of HyperFrames and Whisper).
- Needs a laptop or desktop. Rendering is heavy on older computers — render one reel at a time.

## Useful links

- [Google Antigravity](https://antigravity.google/)
- [Antigravity plans](https://antigravity.google/docs/plans)
- [HyperFrames (GitHub)](https://github.com/heygen-com/hyperframes)
- [Whisper (GitHub)](https://github.com/openai/whisper)
- [FFmpeg](https://ffmpeg.org/)

## Questions people ask

### Do I need a paid AI plan?

No. Google Antigravity's free plan is enough to start; it has weekly limits, so preview at low quality first.

### Is it OK to learn another creator's style?

Yes, the editing style. Don't reuse their footage, music, voice or script.

### Can I make Telugu reels?

Yes — record your own Telugu voice and ask for Telugu captions.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/free-reel-studio-in-google-antigravity-copy-a-reel-style/). Republished with permission.*
