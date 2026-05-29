/**
 * Site configuration and computed sale dates.
 *
 * STATIC holds editor-facing values (sale_start changes ~2x/year). Everything
 * else is derived from sale_start. Templates read these via `{{ site.X }}`.
 *
 * When changing sale_start, run `npm run gen:workflow` and commit the updated
 * .github/workflows/build.yml so the sale-week cron schedule tracks the new date.
 */

import { resolveSaleStage } from "../lib/sale-schedule.js";

const STATIC = {
  title: "Boutique for a Week",
  description:
    "Shop Orlando's best kids consignment sale. Gently used children's clothing, toys, baby gear and more at up to 80% off retail in Casselberry, FL.",
  url: "https://boutiqueforaweek.com",
  email: "info@boutiqueforaweek.com",
  sale_start: "2026-09-13",
  // Manual fallback for the pre-sale registration phases (01_before–05_before),
  // used until the sale week begins. During the sale week the stage is derived from
  // the date (see lib/sale-schedule.js); after it, that resolves to 13_saturday.
  sale_stage: "13_saturday",
  times: {
    dropoff_day1: "4:00 p.m. - 9:00 p.m.",
    dropoff_day2: "10:00 a.m. - 1:00 p.m.",
    restocking_dropoff: "12:00 p.m. - 2:00 p.m.",
    pickup: "9:30 a.m. - 12:30 p.m.",
    vol_8hr: "5:00 p.m. - 9:00 p.m.",
    vol_4hr: "7:00 p.m. - 9:00 p.m.",
    white_tag: "12:00 p.m. - 8:00 p.m.",
    consignors: "1:00 p.m. - 8:00 p.m.",
    new_moms: "4:00 p.m. - 8:00 p.m.",
    friends: "6:00 p.m. - 8:00 p.m.",
    public_day1: "4:00 p.m. - 10:00 p.m.",
    moms_night: "8:00 p.m. - 10:00 p.m.",
    public_day2: "12:00 p.m. - 9:00 p.m.",
    discount_consignors_volunteers: "5:00 p.m. - 9:00 p.m.",
    half_off: "10:00 a.m. - 5:00 p.m.",
  },
};

export default function (data) {
  const menus = data.menus || {};
  const sale = data.sale || {};
  const saleStart = process.env.SALE_START || STATIC.sale_start;
  // Stage precedence: explicit override (testing / manual force) → date-derived
  // sale-week stage (06–13) → manual pre-sale fallback (STATIC.sale_stage, set by
  // hand during the 01–05 registration phases). resolveSaleStage returns null until
  // the sale week begins, so before then the manual value wins.
  const saleStage =
    process.env.SALE_STAGE ||
    resolveSaleStage(saleStart, new Date()) ||
    STATIC.sale_stage;

  // Parse start date - sale starts on dropoff day, add offsets for other dates
  const startDate = new Date(saleStart + "T16:00:00-04:00");
  const dropoff = addDays(startDate, 1);
  const presale = addDays(startDate, 2);
  const saleStartDate = addDays(startDate, 3);
  const restocking = addDays(startDate, 4);
  const saleEnd = addDays(startDate, 5);
  const pickup = addDays(startDate, 6);

  const month = startDate.getMonth() + 1;
  const season = month > 6 ? "Fall" : "Spring";
  const preseason = month > 6 ? "summer" : "winter";
  const nextSeason = month < 6 ? "Fall" : "Spring";
  const year = startDate.getFullYear();

  function ordinal(day) {
    const d = String(day);
    if (["1", "21", "31"].includes(d)) return "st";
    if (["2", "22"].includes(d)) return "nd";
    if (["3", "23"].includes(d)) return "rd";
    return "th";
  }

  function formatDateWithOrdinal(date) {
    const day = date.getDate();
    const options = { weekday: "long", month: "long" };
    return `${date.toLocaleDateString("en-US", options)} ${day}${ordinal(String(day))}`;
  }

  function formatShortWithOrdinal(date) {
    const day = date.getDate();
    const options = { month: "long" };
    return `${date.toLocaleDateString("en-US", options)} ${day}${ordinal(String(day))}`;
  }

  return {
    data: { menus, sale },
    time: new Date(),
    title: STATIC.title,
    description: STATIC.description,
    url: STATIC.url,
    email: STATIC.email,
    sale_start: saleStart,
    sale_stage: saleStage,
    times: STATIC.times,
    schedule: {
      start: startDate,
      dropoff,
      presale,
      sale_start: saleStartDate,
      restocking,
      sale_end: saleEnd,
      pickup,
    },
    dates: {
      season,
      preseason,
      next_season: nextSeason,
      year,
      season_year: `${season} ${year}`,
      sale_dates: `${formatShortWithOrdinal(saleStartDate)} through ${formatShortWithOrdinal(saleEnd)}`,
      sale_start: formatShortWithOrdinal(saleStartDate),
      sale_end: formatShortWithOrdinal(saleEnd),
      vol_presale: formatShortWithOrdinal(dropoff),
      presale: formatShortWithOrdinal(presale),
      moms_night: `${formatShortWithOrdinal(saleStartDate)} from 8:00 p.m. until 10:00 p.m.`,
      discount_shopping: `${formatShortWithOrdinal(saleEnd)} from 2:00 p.m. until 8:00 p.m.`,
      dropoff: `${formatDateWithOrdinal(startDate)} from 4:00 p.m. to 9:00 p.m. and ${formatDateWithOrdinal(dropoff)} from 10:00 a.m. to 1:00 p.m.`,
      pickup: `${formatDateWithOrdinal(pickup)} from 9:30 a.m. – 12:30 p.m.`,
      start_ordinal: formatDateWithOrdinal(startDate),
      dropoff_ordinal: formatDateWithOrdinal(dropoff),
      presale_ordinal: formatDateWithOrdinal(presale),
      sale_start_ordinal: formatDateWithOrdinal(saleStartDate),
      restocking_ordinal: formatDateWithOrdinal(restocking),
      sale_end_ordinal: formatDateWithOrdinal(saleEnd),
      pickup_ordinal: formatDateWithOrdinal(pickup),
    },
  };
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
