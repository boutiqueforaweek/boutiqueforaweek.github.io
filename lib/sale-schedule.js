/**
 * Sale-week stage timetable, shared by _data/site.js (to derive the active stage
 * from the current date) and scripts/gen-workflow.js (to generate the rebuild cron
 * schedule in .github/workflows/build.yml).
 *
 * Each entry: `offset` days after sale_start, at `hour` UTC, the site enters `stage`.
 * Hours are UTC and match the cron fire times so the date-derived stage flips at the
 * same instant the scheduled rebuild runs. Stages 01–05 (pre-sale registration) are
 * NOT date-driven — they're set manually via STATIC.sale_stage in site.js.
 */

export const STAGES = [
  { offset: 0, hour: 7, stage: "06_sunday" },
  { offset: 1, hour: 4, stage: "07_monday" },
  { offset: 2, hour: 4, stage: "08_tuesday" },
  { offset: 3, hour: 4, stage: "09_wednesday" },
  { offset: 4, hour: 4, stage: "10_thursday" },
  { offset: 5, hour: 4, stage: "11_friday_1" },
  { offset: 6, hour: 21, stage: "12_friday_2" },
  { offset: 7, hour: 17, stage: "13_saturday" },
];

/**
 * Resolve the active sale-week stage for a given moment.
 * Returns the stage string for the latest transition at/before `now`, or null when
 * `now` precedes the sale week (caller falls back to the manual pre-sale stage).
 *
 * @param {string} saleStart - "YYYY-MM-DD"
 * @param {Date} now
 * @returns {string|null}
 */
export function resolveSaleStage(saleStart, now) {
  const start = new Date(`${saleStart}T00:00:00Z`);
  let stage = null;
  for (const { offset, hour, stage: s } of STAGES) {
    const transition = new Date(start);
    transition.setUTCDate(transition.getUTCDate() + offset);
    transition.setUTCHours(hour, 0, 0, 0);
    if (now >= transition) stage = s;
  }
  return stage;
}
