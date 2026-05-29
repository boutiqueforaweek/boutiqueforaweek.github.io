/**
 * Sale-week messaging, keyed by stage (01_before … 13_saturday). The active
 * stage is chosen by `site.sale_stage` (SALE_STAGE env var, default in site.js).
 * Templates read `sale[site.sale_stage].<key>` and run it through the `saleText`
 * filter (token substitution) + `markdownify`.
 *
 * Repeated copy lives in the constants below: most stages share the "registration
 * closed" wording and the Facebook RSVP line, so once registration closes a stage
 * is just `{ ...closed, home }` plus the occasional override. `[bracket]` tokens
 * are substituted at render time by the `saleText` filter in .eleventy.js.
 */

const REG_CLOSED = "[Registration](/register/) is now closed.";
const VOL_CLOSED = "[Volunteer registration](/register/) is now closed.";
const REG_CLOSED_BOTH =
  "Registration is now closed for [Consignors](/consignors/) and [Volunteers](/volunteers/).";
const VOL_REOPEN =
  "[Volunteer](/volunteers/) registration will re-open this [preseason] for our [season_year] Sale.";
const MOMS_RSVP =
  "[RSVP to our event page on Facebook](https://www.facebook.com/events/1952470369009448/){:target='_blank'} so we know you're coming!";
const FEE_CLASSIC =
  "Registration is done on a first come first serve basis. We charge a $15 Consignor registration fee (payable through Paypal during the registration process). This fee is non-refundable.";
const FEE_RESTOCKING =
  "Registration is done on a first come first serve basis. We charge a $12 Restocking Consignor registration fee (payable through Paypal during the registration process). This fee is non-refundable.";

const SALE_RUN =
  "Our [[season_year] Sale](/events/) runs [sale_start] through [sale_end] at [Metro Life Church](/events/map-location/)!";
const HOME_SLOTS = `[Volunteer](/volunteers/) slots are still available!\n\n${SALE_RUN}`;
const HOME_THANKS =
  "Thank you everyone for [shopping](/shoppers/), [consigning](/consignors/), and [volunteering](/volunteers/). We had a great sale!";

// Shared default for every stage, and the steady "everything closed" state used
// from stage 05 onward (each later stage overrides only what differs).
const base = { moms_night: MOMS_RSVP };
const closed = {
  ...base,
  consignors: REG_CLOSED,
  restocking: REG_CLOSED,
  volunteers: VOL_CLOSED,
  register: REG_CLOSED_BOTH,
  register_fee: null,
};

export default {
  "01_before": {
    ...base,
    home: SALE_RUN,
    restocking:
      "[Registration](/register/) opens soon to Classic Consignors for our [season_year] Sale.",
    volunteers:
      "[Volunteer](/volunteers/) registration for our [season_year] Sale opens soon.",
    register:
      "Registration opens soon to [Consignors](/consignors/) and [Volunteers](/volunteers/) for our [season_year] Sale!",
    register_fee: FEE_CLASSIC,
  },
  "02_before": {
    ...base,
    home: `[Registration](/register/) is open to [Consignors](/consignors/) and [Volunteers](/volunteers/) for our [season_year] Sale!\n\n${SALE_RUN}\n`,
    consignors: "[Registration](/register/) is now open for Classic Consignors.",
    restocking: "",
    volunteers:
      "[Volunteer registration](/register/) is now open for our [season_year] Sale.",
    register:
      "Registration is open for [Consignors](/consignors/) and [Volunteers](/volunteers/) for our [season_year] Sale!",
    register_fee: FEE_CLASSIC,
  },
  "03_before": {
    ...base,
    home: `[Registration](/register/) is open to [Restocking Consignors](/consignors/restocking-consignors/) and [Volunteers](/volunteers/) for our [season_year] Sale!\n\n${SALE_RUN}\n`,
    consignors:
      "[Registration](/register/) is now open for Restocking Consignors.",
    restocking:
      "[Registration](/register/) is now open for Restocking Consignors.",
    volunteers:
      "[Volunteer registration](/register/) is now open for our [season_year] Sale.",
    register:
      "Registration is open for [Restocking Consignors](/consignors/restocking-consignors/) and [Volunteers](/volunteers/) for our [season_year] Sale!",
    register_fee: FEE_RESTOCKING,
  },
  "04_before": {
    ...base,
    home: `[Registration](/register/) is now closed for [Consignors](/consignors/), but still open for [Volunteers](/volunteers/) and the [New Mom's Presale](/shoppers/first-time-moms/) for our [season_year] Sale!\n\n${SALE_RUN}`,
    consignors: REG_CLOSED,
    restocking: REG_CLOSED,
    volunteers:
      "[Volunteer registration](/register/) is now open for our [season_year] Sale.",
    register:
      "Registration is now closed for [Consignors](/consignors/), but still open for [Volunteers](/volunteers/) for our [season_year] Sale!",
  },
  "05_before": {
    ...closed,
    home: `[Registration](/register/) is now closed for [Consignors](/consignors/) and [Volunteers](/volunteers/) for our [season_year] Sale!\n\n${SALE_RUN}`,
  },
  "06_sunday": { ...closed, home: HOME_SLOTS },
  "07_monday": { ...closed, home: HOME_SLOTS },
  "08_tuesday": {
    ...closed,
    home: "Our [[season_year] Sale](/events/) is open to [new moms](/shoppers/first-time-moms/) today from [times.new_moms]. Sign-ups for New Mom's Night will be available at the door.\n\nOur sale opens to the general public tomorrow!",
  },
  "09_wednesday": {
    ...closed,
    home: "Our [[season_year] Sale](/events/) is open to the public today from [times.public_day1].\n\nWe're also hosting [Mom's Night Out](/shoppers/moms-night-out/) tonight from [times.moms_night]!",
  },
  "10_thursday": {
    ...closed,
    home: "Our [[season_year] Sale](/events/) continues! Today we're open to the public from [times.public_day2].",
  },
  "11_friday_1": {
    ...closed,
    home: "Today is our [[season_year] Sale](/events/) 50% off day! We're open to the public from [times.half_off].",
  },
  "12_friday_2": {
    ...closed,
    home: `${HOME_THANKS}\n\nPlease note that pickup is tomorrow, [pickup] from [times.pickup].\n\nANY ITEMS NOT PICKED UP will be [donated](/consignors/donating-unsold-items/).`,
    volunteers: VOL_REOPEN,
  },
  "13_saturday": {
    ...closed,
    home: `${HOME_THANKS}\n\nWe'll be announcing dates for our next sale soon!`,
    volunteers: VOL_REOPEN,
    moms_night: "",
  },
};
