# Soul Companion Chat Summary — May 3, 2026

## Issue
The Soul Companion chatbot was returning the same generic error message ("Something went quiet for a moment...") regardless of what the user typed. The companion should reflect back what users share, ask genuine follow-up questions, and sound like a real friend having a conversation.

## Root Cause Identified
**Environment variable name mismatch in Netlify function.**

The serverless function at `netlify/functions/claude.js` was looking for `process.env.VITE_ANTHROPIC_API_KEY` (a frontend variable name with the Vite bundler prefix), but Netlify doesn't use Vite in serverless functions. The correct name should be `ANTHROPIC_API_KEY` (without the VITE_ prefix).

Because the API key couldn't be found, the function was returning a 500 error silently, triggering the frontend's error fallback message.

## Changes Made

### 1. Simplified System Prompt (index.html, lines 262-271)
Changed from a 400+ word complex instruction set to a cleaner, more natural version:

```javascript
You are a warm, thoughtful companion for women working through the "${j.title}" journal.

Philosophy: ${j.philosophy}

Context: ${ctx}

Your role: Listen carefully to what she shares. Reflect back what you heard. Ask one genuine follow-up question that goes deeper. Be conversational, like a trusted friend having a real conversation.

Tone: Warm, present, unhurried. Never clinical or performative. Speak like you're actually listening.

Length: Keep it natural — 2-4 sentences usually. No lists or structures. Just real conversation.
```

**Rationale:** User feedback was "i want it to respond like a normal AI would, like us chatting here." The old prompt was over-instructing Claude, leading to repetitive, formulaic responses.

### 2. Fixed Environment Variable Name (netlify/functions/claude.js, line 14)
Changed:
```javascript
const apiKey = process.env.VITE_ANTHROPIC_API_KEY;
```

To:
```javascript
const apiKey = process.env.ANTHROPIC_API_KEY;
```

**Rationale:** Serverless functions don't use Vite, so the VITE_ prefix is never set. The function was silently failing because it couldn't find the API key.

## Next Steps (Pending)

1. **User to recreate environment variable in Netlify:**
   - Delete the existing `ANTHROPIC_API_KEY` variable if it was set with wrong name
   - Create new variable: `ANTHROPIC_API_KEY` (exact name, no prefix)
   - Paste full API key value (sk-ant-...)
   - Save and redeploy the Soul Companion folder

2. **Test with different messages** to verify:
   - Response changes based on input (not repeating same message)
   - Claude reflects back what was said
   - Claude asks genuine follow-up questions
   - Tone is conversational and warm

## Files Modified
- `C:\Users\lisak\OneDrive\OneDrive - Fair Ways\3.Personal\3.Me\1. Claude Files\Claude\Projects\Hearth and Pages\Soul Companion\index.html` — System prompt simplified
- `C:\Users\lisak\OneDrive\OneDrive - Fair Ways\3.Personal\3.Me\1. Claude Files\Claude\Projects\Hearth and Pages\Soul Companion\netlify\functions\claude.js` — Environment variable name fixed

## Current Status
- System prompt updated ✓
- Function code corrected ✓
- Awaiting user to fix environment variable in Netlify and redeploy
- Testing pending
