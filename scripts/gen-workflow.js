#!/usr/bin/env node
// Regenerates the cron schedule and SALE_STAGE resolver in .github/workflows/build.yml
// from sale_start in _config.yml. Run this whenever sale_start changes.
//
//   npm run gen:workflow
//
// Idempotent: produces no diff if the workflow is already in sync.

import fs from "fs";
import path from "path";
import url from "url";
import yaml from "js-yaml";

const STAGES = [
  { offset: 0, hour: 7,  stage: "06_sunday" },
  { offset: 1, hour: 4,  stage: "07_monday" },
  { offset: 2, hour: 4,  stage: "08_tuesday" },
  { offset: 3, hour: 4,  stage: "09_wednesday" },
  { offset: 4, hour: 4,  stage: "10_thursday" },
  { offset: 5, hour: 4,  stage: "11_friday_1" },
  { offset: 6, hour: 21, stage: "12_friday_2" },
  { offset: 7, hour: 17, stage: "13_saturday" },
];

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const CONFIG = path.join(ROOT, "_config.yml");
const WORKFLOW = path.join(ROOT, ".github/workflows/build.yml");

function loadSaleStart() {
  const cfg = yaml.load(fs.readFileSync(CONFIG, "utf8")) || {};
  if (!cfg.sale_start) {
    throw new Error(`sale_start not set in ${CONFIG}`);
  }
  return cfg.sale_start;
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

  // Resolver case statement — align stage names for readability
  const maxCronLen = Math.max(...crons.map((c) => c.cron.length));
  const caseLines = crons.map(({ cron, stage }) => {
    const pad = " ".repeat(maxCronLen - cron.length);
    return `"${cron}")${pad} echo "SALE_STAGE=${stage}" >> "$GITHUB_ENV" ;;`;
  });

  workflow = replaceBlock(workflow, "schedule", scheduleLines);
  workflow = replaceBlock(workflow, "resolver", caseLines.join("\n"));

  fs.writeFileSync(WORKFLOW, workflow);
  console.log(`gen-workflow: regenerated ${path.relative(ROOT, WORKFLOW)} for sale_start=${saleStart}`);
}

main();
