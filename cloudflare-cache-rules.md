# Cloudflare Cache Rules — long-lived caching for static assets

## Why

GitHub Pages hard-codes `Cache-Control: max-age=600` (10 min) on **every** response and
can't be configured to send anything else. That's why the site's CSS, JS, fonts, and
images fall out of the browser cache every 10 minutes — returning visitors keep
re-downloading files that never changed, which is the "slow first load, fast after"
effect. Cloudflare sits in front of GitHub Pages, so a **Cache Rule** is the lever to
override the browser cache TTL for static paths.

This pairs with the content-hashing added in `scripts/hash-assets.js`: CSS/JS ship as
`/css/style.<hash>.css` and `/js/nav.<hash>.js`, so a 1-year immutable cache is safe —
the URL changes whenever the bytes change, and a new deploy is never served stale.

## Rule to create

Dashboard → **boutiqueforaweek.com** → **Caching → Cache Rules → Create rule**.

**Name:** `Static assets — long cache`

**When incoming requests match** (edit as expression):

```
(starts_with(http.request.uri.path, "/css/")) or
(starts_with(http.request.uri.path, "/js/")) or
(starts_with(http.request.uri.path, "/fonts/")) or
(starts_with(http.request.uri.path, "/img/"))
```

**Then:**

| Setting | Value |
| --- | --- |
| Cache eligibility | **Eligible for cache** |
| Edge TTL | **Override origin** → `1 year` (ignore origin `max-age=600` at the edge) |
| Browser TTL | **Override origin** → `1 year` (this is the setting that fixes it — it's what the browser actually receives) |

Deploy. That's it — no other rule is required.

## What this does / doesn't cover

- **`/css/` and `/js/`** are content-hashed, so 1 year is truly immutable — zero risk.
- **`/fonts/` and `/img/`** are not hashed but are content-stable across deploys. Caveat:
  if you ever replace a font or a root image (e.g. `logo.gif`) **in place** without
  renaming it, purge it in Cloudflare (Caching → Configuration → Purge Cache → single URL)
  or it'll serve the old bytes to returning visitors for up to a year. Renaming the file
  avoids this entirely. (`/img/optimized/*` from eleventy-img is already hashed, so it's
  immutable regardless.)
- **HTML is intentionally *not* included.** Pages aren't fingerprinted and change on every
  content deploy, so they should stay short-lived. Leave HTML on the origin's `max-age=600`
  (or add a separate rule capping Browser TTL at ~10 min if you want it explicit). Do **not**
  give HTML a long TTL.

## Verify after deploying

```bash
# Static asset should now report a 1-year max-age (was max-age=600):
curl -sI https://boutiqueforaweek.com/css/style.<hash>.css | grep -i cache-control
#   cache-control: public, max-age=31536000

# HTML should still be short-lived:
curl -sI https://boutiqueforaweek.com/ | grep -i cache-control
#   cache-control: max-age=600
```

Then load the homepage in a fresh/incognito window, note the network waterfall, reload,
and confirm CSS/JS/font/images come from disk cache on the second load — and, unlike
before, still cached on a visit an hour later.

## Notes

- Cache Rules are available on Cloudflare's **free** plan (rule-count limited, but this is
  one rule). Confirm the current limit in the dashboard if you add more.
- These rules live in Cloudflare config, outside the repo — same tradeoff as the redirect
  rules in `cloudflare-bulk-redirects.csv`: not version-controlled, so this doc is the
  record of intent.
