---
title: "Desktop reminder app where your own family reminds you — free download + build yours with Claude"
slug: family-desktop-reminder-app-made-with-claude
category: "AI Tools"
description: "Forget water, lunch and bills while working? This laptop reminder app sends your wife, father or mother walking onto your screen to…"
date: 2026-11-22
updated: 2026-11-22
tags: ["Claude Code", "Python", "AI image tool", "PyInstaller", "Windows"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/family-desktop-reminder-app-made-with-claude/
---
# Desktop reminder app where your own family reminds you — free download + build yours with Claude

Forget water, lunch and bills while working? This laptop reminder app sends your wife, father or mother walking onto your screen to remind you. Try the free ready-made version, or build your own with your family's cartoon faces using Claude Code.

> **తెలుగులో సారాంశం**
>
> పనిలో పడి నీళ్లు, లంచ్ మర్చిపోతున్నారా? మీ వైఫ్, ఫాదర్, మదర్ నేరుగా మీ laptop screen మీదకి వచ్చి గుర్తుచేసే desktop reminder app ఇది. Free గా download చేసుకోండి, లేదా Claude Code తో మీ సొంత family తో తయారు చేసుకోండి.

![Desktop reminder app where your own family reminds you — free download + build yours with Claude: Free app, Family cartoons, Who reminds what, Starts with laptop](/images/guides/family-desktop-reminder-app-made-with-claude/cover.svg)

Comment keyword: **AI** · Topic: AI Tools · Last checked: 2026-11-22

## What you need

- **Laptop (Windows)** — The app runs on your laptop screen. Mac works too if you tell Claude.
- **Free ThanksAI app** — Ready-made version on Google Drive — free, just download and open.
- **Claude Code** — Only to build your own version. Needs a paid Claude plan (Pro or higher).
- **AI image tool** — ChatGPT, Gemini or similar, to turn family photos into cartoons. Free tiers usually work.

## Step by step

### Step 1: Get the free ready-made app

Want to try it first? Open the free ThanksAI folder on Google Drive (https://drive.google.com/drive/folders/1yri8PahB6f3Kxq9gNhx0Nn9HAJNj7e0s?usp=sharing), click Download, and unzip it on your laptop. Read any instruction file inside before you open the app. If Windows shows "Windows protected your PC", that is normal for small apps without a paid signature: click More info → Run anyway only because you got it from this link. Want your own family in it? Follow the next steps.

![Get the free ready-made app — Google Drive · ThanksAI: Reminder File → Before you open it](/images/guides/family-desktop-reminder-app-made-with-claude/step-1.svg)

### Step 2: Turn family photos into cartoon characters

Ask your family first, then use one clear front-facing photo of each person in an AI image tool (ChatGPT, Gemini or similar). You should get a full-body cartoon with a plain background. Save each one as a PNG named after the person (amma.png, nanna.png, wife.png). If the face doesn't look like them, say what is wrong ("keep the same glasses and hairstyle") and try again.

![Turn family photos into cartoon characters — 1 clear photo → characters/](/images/guides/family-desktop-reminder-app-made-with-claude/step-2.svg)

**Prompt · step 2**

```text
Turn this photo into a cute full-body 3D cartoon character of the same person, standing and smiling, facing the viewer, friendly Indian family style. Keep the face, hairstyle, glasses and clothes colours the same. Plain pure white background, no text, no shadow on the floor. Square image.
```

### Step 3: Ask Claude Code to build the reminder app

Make a folder called family-reminder, put the PNG characters inside a characters folder, open the folder in Claude Code and paste this prompt. Claude writes the app, installs what it needs and runs it. You should see a character walk in from the screen edge with a speech bubble. If the character has a white box around it, ask Claude to remove the background from the PNGs.

![Ask Claude Code to build the reminder app — family-reminder/ → Build a desktop reminder app. A family member walks onto my screen with a speech bubble](/images/guides/family-desktop-reminder-app-made-with-claude/step-3.svg)

**Prompt · step 3**

```text
Build a small desktop reminder app for Windows in Python, in this folder.

Characters are PNG files in ./characters (one per family member, file name = name).

When a reminder is due:
- A transparent, always-on-top window shows that family member walking in from the right edge of the screen to the bottom corner.
- A speech bubble shows the reminder text in {lang}, with a gentle sound.
- Clicking the character marks it done; it waves and walks away. A Snooze button brings it back in 10 minutes.

Reminders (who reminds what):
- {water}
- {lunch}
- {bills}

Keep all reminders, times and characters in one settings.json file, and add a simple Settings window (tray icon → Settings) where I can add a person, pick their PNG, and set what they remind and when.
Remove white backgrounds from the PNGs automatically if needed.
Explain how to run it, then run it and show me a test reminder now.
```

### Step 4: Set who reminds what, and when

Open Settings from the tray icon and give each person their job: lunch, bills, water, medicines, posting your daily reel. You can also just tell Claude in plain words. Test each reminder once by setting it one minute ahead. If two reminders come at the same time, ask Claude to show them one after the other.

![Set who reminds what, and when — Who reminds what → Test button](/images/guides/family-desktop-reminder-app-made-with-claude/step-4.svg)

**Prompt · step 4**

```text
Change the reminders and keep everything else the same:
- {water}
- {lunch}
- {bills}
Add one test button in Settings that plays every reminder once, one after another, so I can check them.
```

### Step 5: Add desktop charms

For fun (and dishti!), add small charms that hang at the top of your screen: a bell, a Ganapati picture, nimmakaya–mirapakaya, a gummadikaya. Make each charm as a PNG with the same image tool, put them in a charms folder and ask Claude to show them. If the charms block your clicks, ask Claude to make them click-through.

![Add desktop charms — charms/ → Charms](/images/guides/family-desktop-reminder-app-made-with-claude/step-5.svg)

**Prompt · step 5**

```text
Add a charms feature: show every PNG in ./charms hanging from the top edge of the screen on a thin string, gently swinging. They must be small, always on top, and click-through so they never block my work. Add a Show/Hide charms option in the tray menu.
```

### Step 6: Start it with your laptop

Ask Claude to package the app into one .exe and add it to Windows startup, so your family greets you every time you switch on. Restart your laptop once to check it opens by itself. If your antivirus blocks the .exe, add the folder as an exception — it's your own app.

![Start it with your laptop — package → Switch on laptop](/images/guides/family-desktop-reminder-app-made-with-claude/step-6.svg)

**Prompt · step 6**

```text
Package this app into a single Windows .exe with PyInstaller (include the characters, charms and settings.json next to it), and add a shortcut to my Windows Startup folder so it starts when I log in. Tell me exactly where the .exe is.
```

## Limits, straight talk

- The ready-made app on Google Drive is free. Building your own version needs Claude Code, which comes with a paid Claude plan (Pro or higher).
- Only use family photos with their permission. Photos you upload to an AI image tool go to that company's servers — read its privacy settings.
- The build prompts are written for Windows. On a Mac, tell Claude you use a Mac — it will change the steps.
- Small home-made apps aren't signed, so Windows or antivirus may warn you. Only run files from links you trust.
- It is a reminder, not a medical or bill-payment system — keep important dates in your phone calendar too.

## Useful links

- [Free ready-made app (ThanksAI Google Drive)](https://drive.google.com/drive/folders/1yri8PahB6f3Kxq9gNhx0Nn9HAJNj7e0s?usp=sharing)
- [Claude Code docs](https://docs.claude.com/en/docs/claude-code/overview)
- [Python for Windows](https://www.python.org/downloads/windows/)
- [PyInstaller docs](https://pyinstaller.org/en/stable/)

## Questions people ask

### Is it really free?

Yes, the ready-made app on Google Drive is free. Building your own version with your family's faces needs Claude Code, which comes with a paid Claude plan.

### Does it work on a phone?

No. It is a laptop/desktop app — the characters walk on your computer screen.

### Can the reminders be in Telugu?

Yes. Write the reminder text in Telugu in Settings, or ask Claude to use Telugu for all bubbles.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/family-desktop-reminder-app-made-with-claude/). Republished with permission.*
