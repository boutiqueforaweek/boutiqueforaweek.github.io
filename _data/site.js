/**
 * Site configuration and computed sale dates (replaces Jekyll _config.yml + sale_dates.rb)
 * Receives existing _data (menus, sale) for site.data compatibility
 */
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

function loadJekyllConfig() {
  try {
    const configPath = path.resolve(process.cwd(), "_config.yml");
    return yaml.load(fs.readFileSync(configPath, "utf8")) || {};
  } catch {
    return {};
  }
}

function loadSaleData() {
  try {
    const salePath = path.resolve(process.cwd(), "_data/sale.yml");
    return yaml.load(fs.readFileSync(salePath, "utf8")) || {};
  } catch {
    return {};
  }
}

export default function (data) {
  const jekyllConfig = loadJekyllConfig();
  const menus = data.menus || {};
  const sale = loadSaleData();
  const saleStart = process.env.SALE_START || jekyllConfig.sale_start || "2026-04-12";
  const saleStage = process.env.SALE_STAGE || jekyllConfig.sale_stage || "02_before";

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
    title: "Boutique for a Week",
    description: jekyllConfig.description || "Voted Best Kids Consignment Sale in Central Florida",
    url: "https://boutiqueforaweek.com",
    email: jekyllConfig.email || "info@boutiqueforaweek.com",
    sale_start: saleStart,
    sale_stage: saleStage,
    times: jekyllConfig.times || {},
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
      vol_presale: formatShortWithOrdinal(dropoff),
      presale: formatShortWithOrdinal(presale),
      moms_night: `${formatShortWithOrdinal(saleStartDate)} from 8:00 p.m. until 10:00 p.m.`,
      discount_shopping: `${formatShortWithOrdinal(saleEnd)} from 2:00 p.m. until 8:00 p.m.`,
      dropoff: `${formatDateWithOrdinal(startDate)} from 4:00 p.m. to 9:00 p.m. and ${formatDateWithOrdinal(dropoff)} from 10:00 a.m. to 1:00 p.m.`,
      pickup: `${formatDateWithOrdinal(pickup)} from 9:30 a.m. – 12:30 p.m.`,
    },
  };
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
