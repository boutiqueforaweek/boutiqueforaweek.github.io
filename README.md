# Boutique for a Week

Eleventy static site for the BFAW children's consignment sale. Most of the site is
static, but a handful of pages change their copy through the **sale lifecycle** —
this README documents which pages are dynamic and what each stage shows.

## How staging works

A single value, `site.sale_stage` (one of `01_before` … `13_saturday`), drives all
stage-dependent copy. It is resolved in `_data/site.js` with this precedence:

1. **`SALE_STAGE` env var** — explicit override, for previewing/forcing a stage:
   `SALE_STAGE=09_wednesday npx @11ty/eleventy --serve`
2. **Date-derived** — during the sale week, stages `06_sunday`–`13_saturday` are
   computed from the current date vs. `sale_start` (see `lib/sale-schedule.js`). The
   GitHub Actions cron in `.github/workflows/build.yml` rebuilds the site at each
   transition so the live site rolls forward on its own.
3. **Manual fallback** — `STATIC.sale_stage` in `_data/site.js`, used for the
   pre-sale registration phases `01_before`–`05_before`. Edit it and push to advance
   those; after the sale week it resolves to `13_saturday`.

All dates and times shown in the copy are computed from `sale_start` in
`_data/site.js` (`site.dates.*`, `site.times.*`) — never hard-coded in the copy.

The stage copy lives in `_includes/sale/*.html`, one file per message type, each a
`{% case site.sale_stage %}` that emits markdown with dates interpolated directly.

## Dynamic pages

### Message-driven (render a stage-specific block)

| Page | URL | Include(s) used |
| --- | --- | --- |
| `pages/index.html` | `/` | `sale/home.html` |
| `pages/register.md` | `/register/` | `sale/register.html`, `sale/register_fee.html` |
| `pages/consignors/index.md` | `/consignors/` | `sale/consignors.html` |
| `pages/consignors/restocking-consignors.md` | `/consignors/restocking-consignors/` | `sale/restocking.html` |
| `pages/volunteers/index.md` | `/volunteers/` | `sale/volunteers.html` |
| `pages/volunteers/opportunities.md` | `/volunteers/volunteer-opportunities/` | `sale/volunteers.html` |
| `pages/shoppers/moms-night-out.md` | `/shoppers/moms-night-out/` | `sale/moms_night.html` |

`pages/register.md` also shows/hides the actual registration links by stage
(Volunteer + New/Expecting Moms links during `01`–`04`; New Consignor links only in
`02`; Restocking Consignor links only in `03`).

### Conditional (hide forward-looking dates after the sale)

These pages are static except for a `{% if site.sale_stage != '13_saturday' %}` guard
that hides date-specific lines (drop-off/pre-sale/pickup dates, sign-up links) once
the sale is over, so the off-season site doesn't show stale dates:

`pages/schedule/index.md`, `pages/schedule/event-schedule.md`,
`pages/schedule/printables.md`, `pages/consignors/dropping-off.md`,
`pages/consignors/picking-up.md`, `pages/consignors/consignor-earnings.md`,
`pages/consignors/white-tag-consignors.md`, `pages/consignors/index.md`,
`pages/volunteers/index.md`, `pages/shoppers/index.md`,
`pages/shoppers/first-time-moms.md`.

So `13_saturday` doubles as the **off-season / no-active-sale** state.

## What changes at each stage

`01`–`05` are set manually (registration season); `06`–`13` advance automatically by
date during sale week.

| Stage | Role | Headline copy |
| --- | --- | --- |
| `01_before` | Pre-registration | Everything "opens soon"; home shows the sale dates only. Consignor fee: **$15**. |
| `02_before` | Classic Consignor registration **open** | Consignor/Volunteer/New-Mom registration open; New + Returning Consignor links appear. Fee **$15**. |
| `03_before` | Restocking Consignor registration **open** | Restocking registration open; Restocking Consignor links appear. Fee **$12**. |
| `04_before` | Consignor reg **closed**, Volunteer + New-Mom presale still open | Consignor/Restocking show "closed"; Volunteer reg still open; home notes the New Mom's Presale. |
| `05_before` | All registration **closed** (pre-sale week) | Everything "closed"; home = closed notice + sale dates. |
| `06_sunday` | Sale week begins (drop-off) | Home: "Volunteer slots are still available!" + sale dates. |
| `07_monday` | Drop-off continues | Same as `06_sunday`. |
| `08_tuesday` | New & Expecting Moms Pre-Sale | Home: open to new moms today (`times.new_moms`); public opens tomorrow. |
| `09_wednesday` | Public opening + Mom's Night Out | Home: open to the public (`times.public_day1`) + Mom's Night Out tonight (`times.moms_night`). |
| `10_thursday` | Public sale | Home: open to the public (`times.public_day2`). |
| `11_friday_1` | 50% off day | Home: 50% off day (`times.half_off`). |
| `12_friday_2` | Sale ended — pickup next | Home: thank-you + pickup tomorrow (`dates.pickup_ordinal`, `times.pickup`) + unsold-items donation notice. Volunteer copy switches to "will re-open". |
| `13_saturday` | Post-sale / off-season | Home: thank-you + "announcing dates soon". Mom's Night Out copy hidden; all forward-looking dates hidden across the conditional pages above. |

Across `04`–`13`, the Consignors / Restocking / Register messages read "Registration
is now closed" (shared text in `_includes/sale/*`); `12`–`13` switch the Volunteer
message to "registration will re-open this {season}".

## Local development

```sh
npm run dev          # serve at http://localhost:8080 with live reload
SALE_STAGE=09_wednesday npx @11ty/eleventy --serve   # preview a specific stage
npm run gen:workflow # regenerate the sale-week cron schedule after changing sale_start
```
