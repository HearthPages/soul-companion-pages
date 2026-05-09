# Soul Companion Prompt Update Required

**Status:** ⚠️ Out of sync with current workbooks  
**Date:** April 30, 2026

---

## The Issue

The Soul Companion index.html contains **outdated prompts** from earlier versions of your workbooks. The actual section titles and questions in the workbooks have evolved, but the companion still references old content.

**Impact:** When customers select a section, the AI asks about outdated prompts instead of what's actually in their workbook.

---

## What Changed

### Soul Rest (Rest Over Resistance) ✏️

**Current Companion Has:** 30 daily prompts (Days 1-30)

**Actual Workbook Has:** 
- Before You Begin (check-in)
- Section One: Acknowledge (6+ questions)
- Section Two: Unload (6+ questions)  
- Section Three: Restore (6+ questions)
- Section Four: Reconnect (6+ questions)
- Section Five: Reimagine (6+ questions)

**Specific Changes:**
- "Day 1 · Arriving" → "What made you pick this up?"
- "Day 2 · The Body Knows" → "Where does your exhaustion live in your body?"
- "Day 3 · The Pushing Through" → "What have you been pushing through lately?"
- Daily structure changed significantly

**Status:** Needs complete rewrite to match 5-section structure

---

### Soul Root (Found Over Formed) ✏️

**Current Companion Has:** 4 parts (Part One through Four)

**Actual Workbook Has:** Expanded structure with:
- Before You Begin (check-in)
- Values work (rules vs lived values)
- The Unspoken Rules (what you were taught)
- What You Were Rewarded For
- What Was Criticized/Made Wrong
- Shadow Work (accessing what went underground)
- Release & Reclaim (working with shadow)
- Values in Daily Life (integration)
- + Much deeper exploration

**Specific Changes:**
- Prompts are much more detailed
- Section names have changed
- New sections added since original companion creation
- Depth of shadow work has expanded

**Status:** Needs sections reorganized and updated with current prompts

---

### Soul Steady (Awareness Over Autopilot) ✏️

**Current Companion Has:** 35 daily pages + 3 foundations

**Actual Workbook Has:**
- Before You Begin (check-in)
- Understanding Autopilot
- What Your Mood Is Telling You
- Small Repeated Patterns (daily habits)
- What a Good Day Actually Feels Like
- + Daily practice structure

**Specific Changes:**
- Section titles have evolved
- Daily prompts have changed focus
- New sections added

**Status:** Foundation sections need updating

---

### Soul Space (Intention Over Obligation) ✓ Least Changed

**Current Companion Has:** 6 sections + 30 day practice

**Actual Workbook (The Quiet No version):** Not compared yet, but likely similar

**Status:** Likely okay, but should verify

---

## The Full Picture

| Workbook | Companion Status | Priority |
|----------|-----------------|----------|
| Soul Space | Unknown (not checked) | Medium |
| Soul Root | Outdated | **HIGH** |
| Soul Rest | Significantly outdated | **HIGH** |
| Soul Steady | Outdated | **HIGH** |
| Soul Voice (Quiet No) | ✅ Current | Done |

---

## What Needs to Happen

### Option 1: Full Update (Recommended)
- Extract current prompts from all 4 workbooks
- Rewrite index.html sections to match current questions
- Test that companion now asks relevant questions
- Update netlify deployment

**Effort:** 2-3 hours  
**Impact:** Companion works perfectly, customers get accurate guidance

### Option 2: Selective Update
- Focus on Soul Rest and Soul Root (most changed)
- Leave Soul Space and Soul Steady as-is
- Faster, but incomplete

**Effort:** 1 hour  
**Impact:** Partial fix

### Option 3: Note for Customers
- Add disclaimer in workbooks noting companion may ask slightly different questions
- Keep companion as-is
- Fast, but not ideal

**Effort:** 15 minutes  
**Impact:** Sets expectations

---

## My Recommendation

**Do Option 1 (Full Update).** Here's why:

1. **Customer Experience:** They deserve accurate guidance that matches their actual workbook
2. **Brand Trust:** The Soul Companion is a premium feature — it should work perfectly
3. **Minimal Disruption:** Updating doesn't affect anything else; just improves the companion
4. **One-Time Effort:** Once done, it's maintained going forward

---

## Next Steps

**To Proceed with Update:**

1. [ ] Approve full update of all 4 workbooks
2. [ ] I extract current prompts from each workbook
3. [ ] I update index.html with corrected sections
4. [ ] We review the changes
5. [ ] Deploy updated version to netlify
6. [ ] Test QR codes to verify it's working

---

## Sample of What Needs Updating

**Current Soul Rest Companion (Outdated):**
```javascript
{id:"d1",title:"Day 1 · Arriving",
prompt:"You picked up this journal for a reason..."}
```

**Should Be (Current):**
```javascript
{id:"s1q1",title:"Section One · Acknowledge",
prompt:"What made you pick this up? What are you hoping for..."}
```

---

## Files Affected

- `index.html` — Complete rewrite of soul-space, soul-root, soul-rest, soul-steady sections
- `netlify-deployV7.html` — May need updating if it mirrors index.html
- All 4 workbook folders — No changes needed, just reference for extraction

---

## Decision Needed

**Should I proceed with full update of all 4 original workbooks?**

Once you confirm, I can:
1. Do a complete extraction
2. Update index.html with current prompts
3. Have it ready for deployment within this session

This ensures your Soul Companion stays in perfect sync with your actual workbook content.
