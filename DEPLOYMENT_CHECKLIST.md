# Soul Companion — Deployment Checklist
*Generated: 6 May 2026 by scheduled reminder task*

---

## ✅ Files Verified & Ready

All 5 HTML files are present and correctly structured in your Soul Companion folder:

| File | Size | Last Updated |
|------|------|--------------|
| the-quiet-no.html | 16,404 bytes | 4 May 2026 |
| intention-over-obligation.html | 23,292 bytes | 4 May 2026 |
| seen-over-hidden.html | 17,107 bytes | 4 May 2026 |
| rest-over-resistance.html | 19,557 bytes | 4 May 2026 |
| awareness-over-autopilot.html | 16,016 bytes | 4 May 2026 |

Support files also present: `src/index.js`, `wrangler.toml`, `package.json`

---

## ⚠️ Action Required: Manual Deployment

The automated task could not deploy to GitHub/Cloudflare — this requires your machine (with saved credentials). Open a terminal in your Soul Companion folder and run these commands:

### Step 1 — Push to GitHub
```bash
git add the-quiet-no.html intention-over-obligation.html seen-over-hidden.html rest-over-resistance.html awareness-over-autopilot.html
git commit -m "Update Soul Companion prompts — May 2026"
git push origin main
```

### Step 2 — Deploy to Cloudflare Workers
```bash
wrangler deploy
```
*(or `npm run deploy` — both do the same thing)*

### Step 3 — Verify all 5 live URLs
Open each of these in your browser and confirm they load:

- [ ] https://hearthpages.github.io/soul-companion-pages/the-quiet-no
- [ ] https://hearthpages.github.io/soul-companion-pages/intention-over-obligation
- [ ] https://hearthpages.github.io/soul-companion-pages/seen-over-hidden
- [ ] https://hearthpages.github.io/soul-companion-pages/rest-over-resistance
- [ ] https://hearthpages.github.io/soul-companion-pages/awareness-over-autopilot

### Step 4 — Test QR codes
Open `soul-companion-qr-codes.html` in your browser and scan each QR code to confirm it reaches the correct live page.

---

## Troubleshooting

- **"wrangler: command not found"** → Run `npm install -g @cloudflare/wrangler@3` first
- **"not authenticated"** → Run `wrangler login` and follow the browser prompt
- **Pages show old content** → Hard refresh with Ctrl+Shift+R (cache can take ~1 hour to clear)
- **Git push rejected** → Check you're on the right branch: `git branch` and `git remote -v`
