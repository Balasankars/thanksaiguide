---
title: "3D cartoon reels with Claude — no Blender, all in code"
slug: claude-3d-cartoon-reels
category: "AI Tools"
description: "Make a vertical 3D cartoon reel where Claude writes code that builds the whole world — your character, the set, lights, camera…"
date: 2026-11-14
updated: 2026-11-14
tags: ["Claude Code", "Three.js", "Puppeteer", "ffmpeg", "Whisper", "3D cartoon"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/claude-3d-cartoon-reels/
---
# 3D cartoon reels with Claude — no Blender, all in code

Make a vertical 3D cartoon reel where Claude writes code that builds the whole world — your character, the set, lights, camera, captions — syncs it to your voice and renders it on your laptop. It is not AI video, so characters never melt or change face between shots.

> **తెలుగులో సారాంశం**
>
> Claude code రాసి మీ character, set, lights, camera, captions తో పూర్తి 3D world build చేసి, మీ voice కి sync చేసి laptop లో render చేస్తుంది — AI video కాదు, కాబట్టి ముఖాలు మారవు.

![3D cartoon reels with Claude — no Blender, all in code: Set up once, Script + voice, Claude builds the 3D world, Synced reel](/images/guides/claude-3d-cartoon-reels/cover.svg)

Comment keyword: **CARTOON3D** · Topic: AI Tools · Last checked: 2026-11-14

## What you need

- **Claude Code** — Comes with a paid Claude plan (Pro or above). It runs on your laptop, so it can install tools, write files and render the video for you.
- **Google Chrome** — Claude uses it in the background (headless) to take a picture of every frame.
- **A voice** — Your own voice recorded on your phone works best. A text-to-speech tool is fine if your plan allows commercial use.
- **Laptop** — Windows or Mac. Claude installs Node.js, ffmpeg and Three.js for you in step 1.

## Step by step

### Step 1: Set up the project (one time)

Open Claude Code in a new empty folder. This prompt installs everything and proves rendering works with a 2-second test clip.

![Set up the project (one time) — Set up this folder for making vertical 3D cartoon reels with code → 3d-reels](/images/guides/claude-3d-cartoon-reels/step-1.svg)

**Prompt · step 1**

```text
Set up this folder as a project for making vertical 3D cartoon reels with code.

1. Check that Node.js, ffmpeg and Google Chrome are installed. Install whatever is missing and tell me what you installed.
2. Install three and puppeteer-core in this folder.
3. Create folders: voice/, frames/, out/, sounds/.
4. Write render.js. It opens scene.html in headless Chrome at 1080x1920, calls window.drawFrame(seconds) for every frame at 30 fps, saves each frame and joins them with ffmpeg into out/reel.mp4 (H.264, yuv420p). Add a "preview" option that only saves 6 frames spread across the reel as PNGs.
5. Test it: make a simple scene.html with a bouncing ball, render 2 seconds, and tell me where the file is.
```

### Step 2: Write the script

A conversation between two characters holds attention better than one voice explaining. One idea per line, short lines.

![Write the script — Write a 30-second reel script. Characters: HERO and PAL → script.md](/images/guides/claude-3d-cartoon-reels/step-2.svg)

**Prompt · step 2**

```text
Write a {len}-second reel script about: {topic}.

Characters:
- HERO: {hero}
- PAL: {pal}

Rules:
- Line 1 must hook in under 3 seconds: say the result first, not the intro.
- Every line is 4 to 12 words and said by one character.
- Teach in clear numbered points.
- Last line, HERO says: "Comment {kw} and I'll send you the full guide."
- Format: a table with # | who | line | what appears on screen (a title tag, a card, a number, a checklist).
- Save it as script.md and show it to me. Wait for my OK before anything else.
```

### Step 3: Record or generate the voice

Record all HERO lines in one take and all PAL lines in another (a quiet room and your phone is enough). Save them as voice/hero.mp3 and voice/pal.mp3, then send this.

![Record or generate the voice — voice/ → timing/](/images/guides/claude-3d-cartoon-reels/step-3.svg)

**Prompt · step 3**

```text
I added voice/hero.mp3 (all HERO lines in order) and voice/pal.mp3 (all PAL lines in order).

1. Install faster-whisper if needed and transcribe both files with word timestamps.
2. Match every line in script.md to its start and end time.
3. Cut out each line, trim long silences inside lines, and make both voices equally loud.
4. Join the lines in script order with a short natural gap into voice/full.wav.
5. Save timing/lines.json (who, start, end), timing/words.json (every word with time) and timing/loud.json (voice loudness per frame at 30 fps, 0 to 1).
6. Read back the transcript of full.wav so I can check nothing was cut.
```

### Step 4: Build the 3D world

This is the 'magic' part — it is code. Characters are made from simple 3D shapes, so they look the same in every shot.

![Build the 3D world — Build scene.html as a 1080×1920 Three.js scene for this script → The 3D world](/images/guides/claude-3d-cartoon-reels/step-4.svg)

**Prompt · step 4**

```text
Build scene.html as a 1080x1920 Three.js scene for this script.

It must give the exact same picture every time for the same time value: window.drawFrame(seconds) sets everything from the time alone, no random values, no live clock. window.ready must resolve once fonts are loaded.

Set: {place}. Soft toon shading, warm main light, gentle shadows, a little depth fog.

Characters, built only from simple 3D shapes (spheres, boxes, cylinders):
- HERO: {hero}. Large head, expressive eyes and eyebrows, a mouth that opens and closes, arms that can point.
- PAL: {pal}. Small and bouncy, with eyes that can look happy or surprised.

Camera: cut on every line. Close-up on whoever is talking (head fully in frame with space around it), a wider shot when listing points, a slow push-in inside each shot.

When done, render the 6 preview frames and show them to me.
```

### Step 5: Sync mouths, captions and cards

Everything is driven by the timing files from step 3, so mouths, captions and pop-up cards land on the exact word.

![Sync mouths, captions and cards — Everything follows the voice](/images/guides/claude-3d-cartoon-reels/step-5.svg)

**Prompt · step 5**

```text
Sync scene.html to the voice:

- Mouth: whoever is speaking opens their mouth using timing/loud.json. PAL bounces slightly when it talks. Add blinking and a slow breathing motion when idle.
- Captions: 2 to 3 words at a time, bold rounded font, white with a dark outline, important words in yellow. Each word appears exactly when it is spoken. Keep them in the lower-middle of the screen, away from Instagram's buttons.
- Title tag at the top for each point (e.g. "POINT 1 · ...").
- Cards: build every on-screen item from script.md as an animated panel (typing text, numbers counting up, ticks), timed with timing/words.json.
- Ending: "{kw}" big on screen with a small celebration animation.

Then render one preview frame at the start of every line and show them to me together.
```

### Step 6: Check frames and fix

Look at the preview frames like a viewer would. Say what's wrong in plain words — you never touch the code.

![Check frames and fix — Preview frames → Things to catch](/images/guides/claude-3d-cartoon-reels/step-6.svg)

**Prompt · step 6**

```text
Check every preview frame and list each problem: faces cut off at the edges, captions covering a face, text too small to read on a phone, cards overlapping, empty or broken-looking frames. Fix all of them, render the previews again and show me before and after.
```

### Step 7: Add sound and render the final reel

Small sound effects make it feel professional. Then one render gives you the MP4.

![Add sound and render the final reel — Finish the reel → phone showing 3D CARTOON voice · captions · sound](/images/guides/claude-3d-cartoon-reels/step-7.svg)

**Prompt · step 7**

```text
Finish the reel:

1. Add sound cues: a soft whoosh on camera cuts, a pop when a card appears, light typing under typed text, a happy chime on the ending. Use only free sound effects and music that allow commercial use; put them in sounds/ and tell me where each came from.
2. Mix voice + low background music (lower the music while someone speaks) + the cues, to about -14 LUFS.
3. Render the full video with render.js and this mix as audio into out/final.mp4.
4. Check that the length is right and that a transcript of final.mp4 matches script.md. Tell me the file path.
```

## Limits, straight talk

- Best for simple toon characters — realistic skin, hair and clothes look weak in code.
- Mouth movement follows loudness, not exact lip shapes, which is fine for cartoons.
- Each run differs slightly — keep copies of versions you like.
- Long reels and many fix rounds use a lot of your Claude plan's limit; start with 30–45 seconds.
- Read what Claude installs and runs, like any code from the internet.
- Invent your own characters — recreating famous cartoon characters can get reels removed for copyright.

## Useful links

- [Three.js docs](https://threejs.org/docs/)
- [Puppeteer](https://pptr.dev/)
- [ffmpeg download](https://ffmpeg.org/download.html)
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper)
- [Claude Code docs](https://docs.claude.com/en/docs/claude-code/overview)

## Questions people ask

### Is this AI video?

No — Claude writes code that builds the 3D world, so characters never melt or change face between shots.

### How long should my first reel be?

30–45 seconds. Long reels and many fix rounds use a lot of your plan's limit.

### Can I use famous cartoon characters?

No. Invent your own — recreating famous characters can get reels removed.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/claude-3d-cartoon-reels/). Republished with permission.*
