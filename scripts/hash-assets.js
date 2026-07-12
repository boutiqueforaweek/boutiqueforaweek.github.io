#!/usr/bin/env node
// Fingerprint the built CSS/JS with a content hash so they can be cached
// immutably at the edge (see cloudflare-cache-rules.md). Runs as the final step
// of `npm run build`, operating ONLY on _site — `npm run dev`/serve is untouched
// and keeps serving the plain /css/style.css and /js/nav.js.
//
//   _site/css/style.css -> _site/css/style.<hash>.css
//   _site/js/nav.js     -> _site/js/nav.<hash>.js
// then rewrites those references in every _site/**/*.html.
//
// Content-hashed filenames are what make a 1-year `immutable` Cache-Control safe:
// the URL changes whenever the bytes change, so a fresh deploy is never served
// from a stale browser cache. Fonts and images are content-stable across deploys
// and are handled by path-based Cloudflare cache rules instead of hashing here.

import { createHash } from "crypto";
import fs from "fs";
import path from "path";
import url from "url";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const SITE = path.join(ROOT, "_site");

// [built file relative to _site, the reference string used in the HTML]
const ASSETS = [
  { file: "css/style.css", ref: "/css/style.css" },
  { file: "js/nav.js", ref: "/js/nav.js" },
];

function shortHash(buf) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 10);
}

function walkHtml(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(p, out);
    else if (entry.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const rewrites = [];
for (const { file, ref } of ASSETS) {
  const abs = path.join(SITE, file);
  if (!fs.existsSync(abs)) {
    console.warn(`[hash-assets] skip (missing): ${file}`);
    continue;
  }
  const hash = shortHash(fs.readFileSync(abs));
  const ext = path.extname(file);
  const hashedRel = `${file.slice(0, -ext.length)}.${hash}${ext}`;
  fs.renameSync(abs, path.join(SITE, hashedRel));
  rewrites.push({ from: ref, to: `/${hashedRel}` });
  console.log(`[hash-assets] ${ref} -> /${hashedRel}`);
}

if (!rewrites.length) {
  console.warn("[hash-assets] nothing hashed; leaving HTML unchanged");
  process.exit(0);
}

let changed = 0;
const htmlFiles = walkHtml(SITE);
for (const f of htmlFiles) {
  let html = fs.readFileSync(f, "utf8");
  let touched = false;
  for (const { from, to } of rewrites) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
      touched = true;
    }
  }
  if (touched) {
    fs.writeFileSync(f, html);
    changed++;
  }
}
console.log(`[hash-assets] rewrote references in ${changed}/${htmlFiles.length} HTML files`);
