# Soul Companion Setup Reference Guide

**Complete documentation for recreating the Soul Companion project from scratch.**

---

## Project Overview

Soul Companion is an AI-powered companion tool for Hearth and Pages workbooks. It provides interactive system prompts and deep exploration questions for 5 workbooks:

1. Awareness Over Autopilot
2. Rest Over Resistance
3. Seen Over Hidden
4. Intention Over Obligation
5. The Quiet No

Each workbook has its own dedicated Soul Companion page with a base system prompt and 15-20 deep exploration prompts organized by workbook sections.

---

## Software & Services Required

| Software/Service | Purpose | Version/Notes |
|---|---|---|
| **GitHub** | Version control & repository hosting | Free account (hearthpages) |
| **Cloudflare Workers** | Static HTML file serving via serverless functions | Merged with Pages platform |
| **Node.js** | Local development & package management | v16+ recommended |
| **npm** | JavaScript package manager | Ships with Node.js |
| **Wrangler CLI** | Cloudflare deployment tool | v3.0.0+ |
| **Git** | Local version control | v2.0+ |

---

## Repository Structure

**GitHub Repository:** `HearthPages/Claude`  
**Repository Branch:** `H&P/Projects/Hearth and Pages/Soul Companion`

### Directory Layout

```
soul-companion-pages/ (repo root)
├── public/
│   ├── awareness-over-autopilot.html
│   ├── intention-over-obligation.html
│   ├── rest-over-resistance.html
│   ├── seen-over-hidden.html
│   └── the-quiet-no.html
├── src/
│   └── index.js (Worker serving static files)
├── wrangler.toml (Cloudflare Workers config)
├── package.json (Node dependencies)
├── README.md
└── .git/ (git configuration)
```

**Note:** HTML files are in root directory, NOT in public/ folder. The `[site]` section in wrangler.toml uses `.` to serve from root.

---

## File Details

### HTML Files (5 total)

Each HTML file is self-contained and includes:
- Hearth and Pages branding header
- Base system prompt with "About this workbook:" section
- 15-20 expandable deep exploration questions organized by workbook sections (Realising, Understanding, Releasing, Returning, Rooting)
- Copy-to-clipboard functionality for base prompt and each deep prompt
- Warm, conversational tone matching the Soul Companion philosophy
- Responsive design with custom CSS (Georgia serif, warm color palette #FAF6F0, #3D3530, #C4B9A8, #7C9A7E)

**Base Prompts Include:**
- Warm greeting ("You are a warm, thoughtful companion...")
- "About this workbook:" section (describes what the workbook teaches)
- Philosophy section (unique to each workbook)
- Role description (listen, reflect, ask genuine follow-ups)
- Tone guidance (warm, present, unhurried)
- Length guidance (2-4 sentences, natural conversation)

### wrangler.toml

Configuration file for Cloudflare Workers deployment.

```toml
name = "soul-companion"
type = "service"
main = "src/index.js"
compatibility_date = "2024-01-01"

[site]
bucket = "."

[build]
command = "npm install"
cwd = "."
```

**Key Elements:**
- `name`: Project name in Cloudflare
- `type`: "service" for Workers
- `main`: Entry point (src/index.js)
- `[site]`: Serves static files from root (`.`)
- `[build]`: Runs npm install before deployment

### src/index.js

Cloudflare Worker that serves static HTML files.

**Functionality:**
- Maps incoming requests to HTML files
- Handles routing for URLs like `/awareness-over-autopilot` → serves `awareness-over-autopilot.html`
- Sets correct MIME type (text/html)
- Applies cache headers (max-age: 3600 seconds)
- Returns 404 for missing files

**Key Routes:**
- `/` → `/index.html`
- `/awareness-over-autopilot` → `/awareness-over-autopilot.html`
- `/rest-over-resistance` → `/rest-over-resistance.html`
- `/seen-over-hidden` → `/seen-over-hidden.html`
- `/intention-over-obligation` → `/intention-over-obligation.html`
- `/the-quiet-no` → `/the-quiet-no.html`

### package.json

Node.js project configuration.

```json
{
  "name": "soul-companion",
  "version": "1.0.0",
  "description": "Soul Companion - AI workbook guides",
  "main": "src/index.js",
  "scripts": {
    "deploy": "wrangler deploy"
  },
  "dependencies": {},
  "devDependencies": {
    "wrangler": "^3.0.0"
  }
}
```

**Purpose:** Manages npm dependencies. Only devDependency is Wrangler CLI.

---

## Live URLs

All pages are deployed to GitHub Pages at:

- https://hearthpages.github.io/soul-companion-pages/awareness-over-autopilot
- https://hearthpages.github.io/soul-companion-pages/rest-over-resistance
- https://hearthpages.github.io/soul-companion-pages/seen-over-hidden
- https://hearthpages.github.io/soul-companion-pages/intention-over-obligation
- https://hearthpages.github.io/soul-companion-pages/the-quiet-no

**Note:** URLs do NOT include `.html` extension. The Worker handles routing.

---

## QR Codes

QR codes are generated dynamically in `soul-companion-qr-codes.html` (stored locally, not deployed).

**QR Code Filename Pattern:** `soul-companion-[workbook-name].png`

Each QR code points to its corresponding live URL (without .html extension).

---

## Setup & Deployment Process

### Initial Setup (One Time)

1. **Create GitHub Repository**
   - Create repo: `soul-companion-pages` in `HearthPages` organization
   - Clone to local machine: `git clone https://github.com/HearthPages/Claude.git`
   - Navigate to branch: `H&P/Projects/Hearth and Pages/Soul Companion`

2. **Install Node.js & npm**
   - Download from nodejs.org
   - Verify: `node -v` and `npm -v`

3. **Install Wrangler CLI**
   ```bash
   npm install -g @cloudflare/wrangler@3
   ```
   - Verify: `wrangler --version`

4. **Authenticate Wrangler**
   ```bash
   wrangler login
   ```
   - Opens browser for Cloudflare authorization
   - Saves API token locally

5. **Create Project Structure**
   - Create `src/` folder
   - Place `index.js` in `src/`
   - Place 5 HTML files in root directory
   - Create `wrangler.toml` in root
   - Create `package.json` in root

### Deployment (Every Update)

1. **Commit Changes Locally**
   ```bash
   git add .
   git commit -m "Update Soul Companion prompts"
   ```

2. **Push to GitHub**
   ```bash
   git push origin main
   ```

3. **Deploy to Cloudflare Workers**
   ```bash
   wrangler deploy
   ```
   OR
   ```bash
   npm run deploy
   ```

4. **Verify Deployment**
   - Check Cloudflare dashboard for successful build
   - Test URLs in browser
   - Scan QR codes to verify live content

---

## Cloudflare Configuration

### Worker Settings

- **Name:** soul-companion-pages
- **Type:** Service Worker
- **Main File:** src/index.js
- **Compatibility Date:** 2024-01-01 (or current date)
- **Build Command:** npm install
- **Build Directory:** . (root)
- **Root Directory:** / (serves from root)

### GitHub Integration

- **Repository:** HearthPages/Claude
- **Branch:** main (or current branch)
- **Auto-Deploy:** Enabled (builds on every push)

### Environment Variables

None required. All configuration is in wrangler.toml.

---

## Content Updates

### Updating HTML Files

1. Open any HTML file (e.g., `awareness-over-autopilot.html`)
2. Edit the base prompt (in the `#basePrompt` div):
   - First line: "You are a warm, thoughtful companion for women working through [Workbook Name]..."
   - Add/update "About this workbook:" section
   - Update Philosophy section if needed
3. To add/edit deep prompts:
   - Find the `const sections = { ... }` in the `<script>` tag
   - Add/edit prompt objects with `title` and `prompt` properties
   - Each prompt should be 3-5 follow-up questions to go deeper

### Prompt Writing Guidelines

**Base Prompt Structure:**
- Opening line (companion identity + workbook focus)
- About this workbook (what the workbook teaches)
- Philosophy (core belief behind the workbook)
- Your role (listen, reflect, ask genuine questions)
- Tone (warm, present, unhurried)
- Length (2-4 sentences, natural conversation)

**Deep Exploration Prompts:**
- Start with "I'm working on '[Section Name].' The question is: '[Original Question]'"
- Add context about what the user has already done
- Ask 3-5 genuine follow-up questions to go deeper
- Focus on emotional/relational inquiry, not task completion
- Mirror the conversational, warm tone of the base prompt

---

## Styling & Branding

### Color Palette

- **Background:** #FAF6F0 (warm cream)
- **Text:** #3D3530 (deep brown)
- **Accent/Border:** #C4B9A8 (taupe)
- **Button Active:** #7C9A7E (sage green)
- **Button Hover:** #6A8A6D (darker sage)

### Typography

- **Font Family:** Georgia, serif (elegant, readable)
- **Headers:** 24px (h1), 14px (h2), normal weight
- **Body:** 13px, line-height 1.8
- **Letter Spacing:** 2px on small caps text

### Layout

- **Container Max Width:** 520px (focused, intimate reading)
- **Padding:** 32px vertical, 20px horizontal
- **Border Radius:** 6px
- **Borders:** 1px solid #C4B9A8

---

## Backup & Recovery

### What to Backup

1. All 5 HTML files (core content)
2. src/index.js (routing logic)
3. wrangler.toml (deployment config)
4. package.json (dependencies)
5. SOUL_COMPANION_SETUP_REFERENCE.md (this file)

### Backup Location

Store a copy in:
- Cloud storage (Google Drive, OneDrive, Dropbox)
- GitHub (primary source)
- Local machine (working directory)

### Recovery Steps

If the project needs to be recreated:

1. Clone from GitHub: `git clone https://github.com/HearthPages/Claude.git`
2. Follow "Initial Setup" steps (install Node.js, Wrangler, authenticate)
3. Run `npm install` to restore dependencies
4. Run `wrangler deploy` to redeploy
5. Verify URLs and QR codes work

---

## Troubleshooting

### Common Issues

**Issue:** Cloudflare build fails with "Could not detect static files"
- **Solution:** Ensure `[site] bucket = "."` is in wrangler.toml

**Issue:** Pages serve 404 errors
- **Solution:** Verify HTML files are in root directory, not in subdirectory

**Issue:** QR codes show old prompts
- **Solution:** Force browser refresh (Ctrl+Shift+R), check deployment was successful

**Issue:** Text not copying to clipboard
- **Solution:** Check browser permissions for clipboard access, verify JavaScript is enabled

**Issue:** Worker deployment hangs
- **Solution:** Re-authenticate: `wrangler logout` then `wrangler login`

---

## Contact & Support

**GitHub Repository:** https://github.com/HearthPages/Claude  
**Project Owner:** Hearth and Pages  
**Last Updated:** May 5, 2026

---

## Appendix: Command Reference

### Git Commands

```bash
# Clone repository
git clone https://github.com/HearthPages/Claude.git

# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Update message"

# Push to GitHub
git push origin main
```

### Wrangler Commands

```bash
# Install Wrangler globally
npm install -g @cloudflare/wrangler@3

# Login to Cloudflare
wrangler login

# Deploy to Workers
wrangler deploy

# Check project status
wrangler deployments list
```

### Node.js Commands

```bash
# Install dependencies (from package.json)
npm install

# Run deploy script
npm run deploy
```

---

**End of Document**
