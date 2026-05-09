# Soul Companion Architecture - Correction Plan

## Current Status
- **Soul Space**: 6 flat sections (INCORRECT - should be 5 with nested exercises)
- **Soul Voice**: 3 sections (CRITICAL - missing 2 entire sections)
- **Soul Seen**: Has Parts structure (partially correct but wrong organization)
- **Soul Rest**: 1 section only (CRITICAL - 4 sections missing)
- **Soul Steady** (Awareness): 3 Foundations (INCORRECT - missing 5-section structure)

---

## Target Structure (For All Workbooks)

### Section Organization Pattern
Each workbook should follow this exact 5-section model:

**SECTION ONE · Realising** - "Seeing it clearly"
- Exercise 1: The [Specific Focus]
- Exercise 2: The [Specific Focus]
- Exercise 3: The [Specific Focus]
- Exercise 4: The [Specific Focus]
- Toolkit: [Named Practice]

**SECTION TWO · Understanding** - "Where it came from"
- Exercise 1: [Specific Focus]
- Exercise 2: [Specific Focus]
- Exercise 3: [Specific Focus]
- Exercise 4-5: [Specific Focus]
- Toolkit: [Named Practice]

**SECTION THREE · Releasing** - "Letting go / Setting down"
- Exercise 1-5: [Specific Focus]
- Toolkit: [Named Practice]

**SECTION FOUR · Returning** - "Coming back / Finding your way"
- Exercise 1-5: [Specific Focus]
- Toolkit: [Named Practice]

**SECTION FIVE · Rooting** - "Building from what's real / Making it default"
- Exercise 1-5: [Specific Focus]
- Toolkit: [Named Practice]

---

## Workbook-Specific Structures

### SOUL SPACE (Intention Over Obligation)

**SECTION ONE · Realising**
- The Hum Beneath the Day
- What Your Body Already Knows
- The Resentment Map
- The Cost You Haven't Named
- Toolkit: The Obligation Audit

**SECTION TWO · Understanding**
- What You Were Taught About Your Needs
- Who You Learned to Be
- The Voice Behind the Should (A Letter to the Girl Who First Learned This)
- Toolkit: The Should Inventory

**SECTION THREE · Releasing**
- Guilt Is Not a Compass
- The Chronic Yes
- What You've Been Protecting
- Releasing in Practice
- Toolkit: Not Yours to Carry

**SECTION FOUR · Returning**
- What You Actually Enjoy
- Desire Without the Guilt Filter
- What You Deserve
- What You've Been Calling Selfish
- Toolkit: The Values Clarifier

**SECTION FIVE · Rooting**
- What Choosing Yourself Looks Like
- When the Old Patterns Return
- Holding Intention When Life Gets Hard
- The Life You Are Building
- Toolkit: The Daily Anchor

---

### SOUL VOICE (The Quiet No)

**SECTION ONE · Realising**
- The Last Time You Said Yes
- What Your Body Knows
- What It Has Cost You
- Toolkit: People-Pleasing Audit

**SECTION TWO · Understanding**
- What You Were Taught
- What You Were Praised For
- What You Are Protecting
- Toolkit: The Fawn Response Pattern

**SECTION THREE · Releasing**
- The Story That Keeps You Giving
- The Resentment You're Not Supposed to Have
- What Lighter Feels Like
- Toolkit: Permission to Say No

**SECTION FOUR · Returning**
- What You Actually Want
- What You Have Been Waiting for Permission to Want
- Toolkit: Quiet Yes Practice

**SECTION FIVE · Rooting**
- One Honest Conversation
- What Boundary Feels Most Important
- Toolkit: The Steady No

---

### SOUL REST (Rest Over Resistance)

**SECTION ONE · Realising**
- Arriving
- The Body Knows
- The Pretending
- The Body Scan
- Toolkit: What Exhaustion Looks Like

**SECTION TWO · Understanding**
- Not Yours to Carry
- The Roles That Drain
- The Unsaid Things
- What You Were Taught
- Toolkit: The Energy Audit

**SECTION THREE · Releasing**
- Guilt Is Not a Compass
- The Chronic Yes
- What You've Been Protecting
- Toolkit: Permission to Rest

**SECTION FOUR · Returning**
- What Rest Really Means
- What Fills You Up
- What Lighter Feels Like
- Toolkit: My Quiet Joy List

**SECTION FIVE · Rooting**
- One Boundary That Would Change Everything
- When Values Conflict
- Toolkit: Building a Life With Room for You

---

### SOUL SEEN (Seen Over Hidden)

**SECTION ONE · Realising**
- The Rules You Live By
- Freedom or Performance
- Toolkit: Values vs Rules Inventory

**SECTION TWO · Understanding**
- The Teachers
- What You Were Rewarded For
- Toolkit: Tracing Your Rules Back

**SECTION THREE · Releasing**
- The Mirror Exercise
- The Inherited Rules (Shadow Work Begins)
- Toolkit: What Went Underground

**SECTION FOUR · Returning**
- Peak Moments
- The Anger Compass
- The Admiration Mirror
- Toolkit: Finding Your Core Values

**SECTION FIVE · Rooting**
- When Values Conflict
- Values and Your Relationships
- Living Your Values Daily
- Toolkit: Your Values in Action

---

### SOUL STEADY (Awareness Over Autopilot)

**SECTION ONE · Realising**
- Understanding Your Autopilot
- Your Mood Patterns
- Toolkit: Autopilot Audit

**SECTION TWO · Understanding**
- What Triggers Your Mood
- What Genuine Gratitude Feels Like
- Toolkit: Mood Map

**SECTION THREE · Releasing**
- What You're Ready to Let Go Of
- Habits That Keep You Stuck
- Toolkit: Breaking the Pattern

**SECTION FOUR · Returning**
- What Restores You
- Small Joys Worth Noticing
- Toolkit: Quiet Restoration

**SECTION FIVE · Rooting**
- Your Daily Awareness Practice
- Building Consistency
- Toolkit: Daily Anchor Practice

*Plus 35-day daily practice with morning intention, midday check-in, evening reflection*

---

## Implementation Notes

1. **Nested Structure**: Each section needs `namedSections` with `prompts` array for proper Soul Companion display
2. **Prompt Specificity**: Each exercise should have its own focused prompt, not combined prompts
3. **Toolkit Naming**: Explicit toolkit references at section end
4. **Brand Voice**: All opening/context text must maintain warm, honest, unhurried tone
5. **Daily Practice**: Soul Steady keeps 35-day model; others are milestone-based (no dailyLabel needed)

---

## Testing Checklist

- [ ] Soul Space: 5 sections × 4-5 exercises each = 21-25 exercises total
- [ ] Soul Voice: 5 sections × 3-4 exercises each = 15-20 exercises total
- [ ] Soul Rest: 5 sections × 4-5 exercises each = 20-25 exercises total
- [ ] Soul Seen: 5 sections × 3-5 exercises each = 15-25 exercises total
- [ ] Soul Steady: 5 sections + 35 daily practices
- [ ] All "howToUse" text present and correct
- [ ] All philosophy statements intact
- [ ] All color codes preserved
