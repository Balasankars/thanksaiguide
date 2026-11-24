---
title: "Whole short films from one Claude prompt — dozens of art styles"
slug: whole-films-from-one-claude-prompt-dozens-of-styles
category: "AI Tools"
description: "An open-source Claude Code plugin makes short films entirely in code: pick a style — watercolour, ukiyo-e, 16-bit pixel RPG, pop-up…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Lemo OpusCar", "Claude Code plugin", "film styles", "code animation", "free"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/whole-films-from-one-claude-prompt-dozens-of-styles/
---
# Whole short films from one Claude prompt — dozens of art styles

An open-source Claude Code plugin makes short films entirely in code: pick a style — watercolour, ukiyo-e, 16-bit pixel RPG, pop-up book, Swiss motion graphics, 1920s silent film, chalkboard — fill one prompt with your script, and get a vertical MP4 with subtitles.

> **తెలుగులో సారాంశం**
>
> ఒక్క Claude prompt తో పూర్తి short film — watercolour, ukiyo-e, pixel RPG, pop-up book వంటి art styles లో, subtitles తో vertical MP4.

![Whole short films from one Claude prompt — dozens of art styles: Install the plugin, See the styles, Give a script, Finished film](/images/guides/whole-films-from-one-claude-prompt-dozens-of-styles/cover.svg)

Comment keyword: **FILM** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Node 20+, Python 3.11+** — Plus ffmpeg.
- **The plugin** — Install from Claude's plugin marketplace.

## Step by step

### Step 1: Install the plugin

Run the two commands in your terminal: the first adds the plugin's marketplace, the second installs the plugin. Check the plugin's GitHub page first to see what it installs.

![Install the plugin — terminal → needs](/images/guides/whole-films-from-one-claude-prompt-dozens-of-styles/step-1.svg)

**Prompt · step 1**

```text
claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab
```

### Step 2: See styles

Ask for the list of film styles. Pick one that suits your story — watercolour and pop-up book work well for gentle stories; pixel RPG and Swiss motion graphics suit tech or fast topics.

![See styles — Show me the list of available film styles with one line each → Styles](/images/guides/whole-films-from-one-claude-prompt-dozens-of-styles/step-2.svg)

**Prompt · step 2**

```text
Show me the list of available film styles with one line each.
```

### Step 3: Make a film

Paste your script into the prompt (about 40 seconds of narration), your handle and the style. The plugin plans scenes, draws them in code, adds word-by-word subtitles and renders a 9:16 MP4.

![Make a film — your brief → phone showing YOUR FILM word-by-word subtitles](/images/guides/whole-films-from-one-claude-prompt-dozens-of-styles/step-3.svg)

**Prompt · step 3**

```text
Make a 9:16 film in {style} style, about 40 seconds. Script: {script} Show {handle} at the end. Word-by-word subtitles.
```

### Step 4: Quick version

No script yet? Give just a topic and a style — the plugin writes a short script for you. Check any facts before posting.

![Quick version — claude code → phone showing SANKRANTI watercolour](/images/guides/whole-films-from-one-claude-prompt-dozens-of-styles/step-4.svg)

**Prompt · step 4**

```text
Quick film: topic 'why we celebrate Sankranti', style watercolour.
```

### Step 5: Fix and re-render

Ask for small, specific changes (slower scene 2, bigger subtitles). Only the changed scenes re-render.

![Fix and re-render — Slow down the second scene and make subtitles bigger → film-v2.mp4](/images/guides/whole-films-from-one-claude-prompt-dozens-of-styles/step-5.svg)

**Prompt · step 5**

```text
Slow down the second scene and make subtitles bigger.
```

## Limits, straight talk

- Needs Claude Code (paid plan), Node 20+, Python 3.11+, ffmpeg 7+; 3D styles are slow without a GPU.

## Useful links

- [Lemo OpusCar README](https://raw.githubusercontent.com/lemomo-ai/lemo-opuscar/main/README.md)
- [Lemo OpusCar on Claude Marketplaces](https://claudemarketplaces.com/plugins/lemomo-ai-lemo-opuscar)
- [explainx: Lemo OpusCar overview](https://explainx.ai/blog/lemo-opuscar-claude-code-skill-short-films-no-video-model-43-styles-2026)

## Questions people ask

### Do I need a powerful computer?

Most 2D styles run on a normal laptop. 3D styles are slow without a graphics card.

### Which plan is needed?

Claude Code needs a paid plan. The plugin itself is free and open-source.

### Can I make films in Telugu?

Yes — write the script in Telugu and ask for Telugu subtitles.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/whole-films-from-one-claude-prompt-dozens-of-styles/). Republished with permission.*
