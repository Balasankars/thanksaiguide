---
title: "claude-youtube skill — 14 YouTube commands inside Claude"
slug: claude-youtube-skill-full-youtube-channel-helper
category: "Social Media"
description: "A free open-source skill that adds YouTube commands to Claude: scripts, hooks, thumbnail briefs, Shorts, titles and SEO, ideas…"
date: 2026-11-13
updated: 2026-11-13
tags: ["claude-youtube", "YouTube", "Claude skill", "scripts", "SEO", "thumbnails"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/claude-youtube-skill-full-youtube-channel-helper/
---
# claude-youtube skill — 14 YouTube commands inside Claude

A free open-source skill that adds YouTube commands to Claude: scripts, hooks, thumbnail briefs, Shorts, titles and SEO, ideas, content calendar, strategy, competitor research, channel audit and repurposing. Works on laptop or even from the phone app.

> **తెలుగులో సారాంశం**
>
> ఫ్రీ open-source skill తో Claude లో YouTube commands — ideas, script, hooks, titles, SEO, thumbnail brief, Shorts. Laptop లో లేదా phone app లో కూడా పనిచేస్తుంది.

![claude-youtube skill — 14 YouTube commands inside Claude: Install the skill, Ideas + calendar, Script + hook, Repurpose to Shorts](/images/guides/claude-youtube-skill-full-youtube-channel-helper/cover.svg)

Comment keyword: **YOUTUBE** · Topic: Social Media · Last checked: 2026-11-13

## What you need

- **Claude** — Laptop: Claude Code or the desktop app. Phone: Claude app with skills enabled.
- **claude-youtube skill** — Free on GitHub.

## Step by step

### Step 1: Install

Laptop: download the skill from its GitHub page and copy the folder into ~/.claude/skills. Phone: ask Claude to fetch the skill as a zip, then add it in Settings → Skills. Read the skill's files once before adding it — it's third-party code.

![Install — ~/.claude/skills/ → Fetch the skill from GitHub and use it](/images/guides/claude-youtube-skill-full-youtube-channel-helper/step-1.svg)

### Step 2: Ideas and calendar

Type the /youtube commands for ideas, then a 4-week calendar. Give your channel's topic and audience in one line so the ideas fit you.

![Ideas and calendar — /youtube ideas for my channel, then /youtube calendar for the next 4 weeks → Calendar](/images/guides/claude-youtube-skill-full-youtube-channel-helper/step-2.svg)

**Prompt · step 2**

```text
/youtube ideas for {channel}, then /youtube calendar for the next 4 weeks.
```

### Step 3: Script and hook

Ask for a script with 3 hook options for the first 15 seconds. Read all three out loud and keep the one that sounds most like you.

![Script and hook — /youtube script about my topic — 8 minutes, with 3 hook options → script.md](/images/guides/claude-youtube-skill-full-youtube-channel-helper/step-3.svg)

**Prompt · step 3**

```text
/youtube script about {topic} — 8 minutes, with 3 hook options for the first 15 seconds.
```

### Step 4: Titles, SEO, thumbnail

Get title options, a description with keywords, tags and a thumbnail brief (what the picture should show). The skill writes the brief — you or a design tool make the actual thumbnail.

![Titles, SEO, thumbnail — /youtube metadata and /youtube thumbnail brief → Ready to upload](/images/guides/claude-youtube-skill-full-youtube-channel-helper/step-4.svg)

**Prompt · step 4**

```text
/youtube metadata and /youtube thumbnail brief for {topic}.
```

### Step 5: Repurpose to Shorts

Turn your long script into 5 Shorts ideas with timestamps, so one recording gives you a week of Shorts.

![Repurpose to Shorts — /youtube shorts — cut 5 Shorts ideas from this script with timestamps → Shorts from one video](/images/guides/claude-youtube-skill-full-youtube-channel-helper/step-5.svg)

**Prompt · step 5**

```text
/youtube shorts — cut 5 Shorts ideas from this script with timestamps.
```

## Limits, straight talk

- Real open-source repo on GitHub (MIT licence, a few hundred stars) but still Beta — expect changes.
- Plans and writes only; doesn't edit video or make thumbnail images without extra setup.
- DataForSEO add-on is paid (~$0.002–$0.04 per command).
- Keep API keys out of chats.

## Useful links

- [claude-youtube on GitHub](https://github.com/AgriciDaniel/claude-youtube)
- [Use skills in Claude (Help Center)](https://support.claude.com/en/articles/12512180-use-skills-in-claude)

## Questions people ask

### Does it edit my videos?

No. It plans and writes — ideas, scripts, titles, SEO and calendars. Editing needs other tools.

### Does it work in Telugu?

Yes — add 'in Telugu' to any command. Keep titles in the language your viewers search in.

### Is anything paid?

The skill is free. An optional SEO data add-on costs a little per command — you don't need it to start.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/claude-youtube-skill-full-youtube-channel-helper/). Republished with permission.*
