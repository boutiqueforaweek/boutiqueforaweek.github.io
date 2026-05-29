# Follow-ups

Deferred ideas from the sale-data refactor (2026-05-29). Not scheduled — captured so they don't get lost.

## 1. Derive the active sale stage from the date (drop manual `SALE_STAGE`)

**Idea:** Compute the active stage from "today vs. the schedule" instead of hand-setting `SALE_STAGE`.

**Why:** `_data/site.js` already derives every sale date from `sale_start`, so the running stage can be computed rather than flipped by hand. This removes the most error-prone sale-week step — forgetting to advance the stage.

**Mechanics / caveat:** A static site only reflects "today" at build time, so the existing `build.yml` cron must keep firing to roll the stage over. The cron stays; it just stops carrying a hand-set value (no more `SALE_STAGE=…` in the workflow).

**Risks to watch:**
- Timezone / midnight-boundary correctness on stage transitions. `site.js` anchors `startDate` at `…T16:00:00-04:00`; stage flips need to land on the right local day, not drift by a UTC offset.
- **Feasibility gap:** the computed `schedule` in `site.js` only covers the sale *week* (`dropoff` → `pickup`, +1…+6 from `sale_start`). Stages `06_sunday`–`13_saturday` map cleanly onto those days, but the pre-sale registration phases `01_before`–`05_before` (classic/restocking registration open→closed) happen weeks earlier and have **no date anchors today**. Date-driving the stage means defining those earlier milestones (e.g. registration-open offsets) as well, or leaving 01–05 manual and auto-driving only the sale week.

## 2. Move per-stage copy into template includes (retire the token vocabulary)

**Idea:** Replace the `[token]` placeholders + `saleText` filter by moving per-stage copy into small template includes, where dates/times are interpolated directly as `{{ site.dates.* }}` instead of bracket tokens.

**Why:** Eliminates the indirection — no token whitelist to maintain in `.eleventy.js`, no `saleText` filter.

**Tradeoff (not a clear win):** This gives up the single-table editor view in `_data/sale.js` where all stage copy lives side by side. That's a real design decision, not a free cleanup — weigh "one place to scan all copy" against "no token layer." Decide deliberately; don't fold it into item 1 unless we've accepted the tradeoff.
