#!/usr/bin/env node
// Regenerates the rebuild cron schedule in .github/workflows/build.yml from
// sale_start in _data/site.js. Run this whenever sale_start changes.
//
//   npm run gen:workflow
//
// The crons just trigger a rebuild at each sale-week transition; the active stage is
// derived from the date in _data/site.js (lib/sale-schedule.js), so there is no
// SALE_STAGE resolver to generate. Idempotent: no diff if already in sync.

import fs from "fs";
import path from "path";
import url from "url";
import siteFn from "../_data/site.js";
import { STAGES } from "../lib/sale-schedule.js";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const WORKFLOW = path.join(ROOT, ".github/workflows/build.yml");

function loadSaleStart() {
  const site = siteFn({});
  if (!site.sale_start) {
    throw new Error("sale_start not set in _data/site.js");
  }
  return site.sale_start;
}

function buildCrons(saleStart) {
  const start = new Date(`${saleStart}T00:00:00Z`);
  return STAGES.map(({ offset, hour, stage }) => {
    const d = new Date(start);
    d.setUTCDate(d.getUTCDate() + offset);
    const cron = `0 ${hour} ${d.getUTCDate()} ${d.getUTCMonth() + 1} *`;
    return { cron, stage };
  });
}

function replaceBlock(source, blockName, replacement) {
  const re = new RegExp(
    `([ \\t]*)# GENERATED:start ${blockName}[\\s\\S]*?# GENERATED:end ${blockName}`,
  );
  if (!re.test(source)) {
    throw new Error(`Could not find GENERATED block "${blockName}" in build.yml`);
  }
  return source.replace(re, (_match, indent) => {
    const lines = replacement.split("\n").map((l) => (l ? indent + l : l));
    return [
      `${indent}# GENERATED:start ${blockName}`,
      ...lines,
      `${indent}# GENERATED:end ${blockName}`,
    ].join("\n");
  });
}

function main() {
  const saleStart = loadSaleStart();
  const crons = buildCrons(saleStart);

  let workflow = fs.readFileSync(WORKFLOW, "utf8");

  const scheduleLines = [
    `# sale_start=${saleStart} — do not edit; run \`npm run gen:workflow\``,
    ...crons.map(({ cron }) => `- cron: "${cron}"`),
  ].join("\n");

  workflow = replaceBlock(workflow, "schedule", scheduleLines);

  fs.writeFileSync(WORKFLOW, workflow);
  console.log(`gen-workflow: regenerated ${path.relative(ROOT, WORKFLOW)} for sale_start=${saleStart}`);
}

main();
