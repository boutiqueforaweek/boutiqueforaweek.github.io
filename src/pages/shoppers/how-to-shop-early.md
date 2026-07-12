---
title: How to Shop Early
seo_title: "How to Shop Before the Public Sale"
description: "Every way to shop Boutique for a Week before the public: volunteer, consign, white tag, or register as a new/expecting mom. See who shops when at our Casselberry, FL sale."
permalink: /shoppers/how-to-shop-early/
faq:
  - question: "How do I shop early at Boutique for a Week?"
    answer: "There are several ways to shop before the public sale: volunteer for a shift, register as a Consignor or White Tag Consignor, register as a New/Expecting/Adopting/Foster Mom, or come as a Friend of a Consignor. The more you give, the earlier you shop — 8+ hour volunteers shop first."
  - question: "Who shops first at the pre-sale?"
    answer: "8+ hour volunteers shop earliest, followed by 4 hour volunteers, then White Tag Consignors, Consignors, New/Expecting/Adopting/Foster Moms, and Friends of Consignors, before the sale opens to the public."
eleventyNavigation:
  key: "How to Shop Early"
  parent: "Shoppers"
  order: 1
---

Almost everyone can shop **before** we open to the public — you just have to earn your
spot. The more you give to the sale, the earlier you get in. Here is every way to shop
early, from earliest access to last:

## 1. Volunteer

Volunteers shop first — before *everyone*. Work an 8+ hour shift for the earliest
shopping time of all, or a 4 hour shift for the next slot. See
[Volunteers](src/pages/volunteers/index.md) for shifts and how to sign up.

## 2. Become a White Tag Consignor

[White Tag Consignors](src/pages/consignors/white-tag-consignors.md) tag exclusively with
white cardstock and donate all unsold items. In return they shop the Consignor Pre-Sale a
full hour earlier than classic Consignors.

## 3. Become a Consignor

Sell your own items and you shop the Pre-Sale too. See
[Consignors](src/pages/consignors/index.md) to learn how, then
[register](src/pages/register.md).

## 4. Register as a New, Expecting, Adopting, or Foster Mom

Pregnant moms, moms with a child under age 1, and adopting or foster moms can register to
shop the Pre-Sale. See [New & Expecting Moms](src/pages/shoppers/first-time-moms.md) to
sign up.

## 5. Come as a Friend of a Consignor

Friends of a Consignor can shop the Friends of Consignors Pre-Sale. You do not need your
Consignor to accompany you — just check in at the door and give us their name.

## Who shops when

{% if site.sale_stage != '13_saturday' %}
| Shopping group | When they shop |
| --- | --- |
| 8+ Hour Volunteers | {{ site.dates.dropoff_ordinal }}, {{ site.times.vol_8hr }} |
| 4 Hour Volunteers | {{ site.dates.dropoff_ordinal }}, {{ site.times.vol_4hr }} |
| White Tag Consignors | {{ site.dates.presale_ordinal }}, {{ site.times.white_tag }} |
| Consignors | {{ site.dates.presale_ordinal }}, {{ site.times.consignors }} |
| New/Expecting/Adopting/Foster Moms | {{ site.dates.presale_ordinal }}, {{ site.times.new_moms }} |
| Friends of Consignors | {{ site.dates.presale_ordinal }}, {{ site.times.friends }} |
| **Open to the Public** | {{ site.dates.sale_start_ordinal }}, {{ site.times.public_day1 }} |

For the complete sale schedule, including public days and the 50% off sale, see the
[Schedule](/events/).
{% else %}
We'll be announcing dates and pre-sale times for our next sale soon! Check the
[Schedule](/events/) for updates.
{% endif %}

## Bringing guests

{% assign gp_role = "Early shoppers" %}{% assign gp_presale = "Pre-Sale" %}**{% include policy/guest-policy.html %}** Each early-shopping group has its own guest rules — check that group's page above for specifics.
