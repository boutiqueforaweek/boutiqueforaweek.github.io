---
title: Schedule
seo_title: "Sale Dates & Hours | [season_year]"
description: "The full schedule for Boutique for a Week's [season_year] children's consignment sale in Casselberry, FL: consignor drop-off and pick-up, pre-sale shopping, public hours and the half-price day."
permalink: /events/
hide_h1: true
faq:
  - question: "When does Boutique for a Week open to the public?"
    answer: "The public sale typically runs for three days, with evening hours on the first day, full hours on the second day, and a half-price sale on the final day. Check our schedule for the exact dates and times for the current sale."
  - question: "Is there an entry fee for Boutique for a Week?"
    answer: "No, there is no entry fee. Boutique for a Week is free and open to the public during public sale hours."
  - question: "Where is Boutique for a Week located?"
    answer: "Boutique for a Week is held at Metro Life Church, 910 S Winter Park Dr, Casselberry, FL 32707."
  - question: "When is the 50% off sale?"
    answer: "The 50% off sale runs on the last day of the sale and is open to the public all day. Volunteers and Consignors get early access to discount shopping the evening before."
eleventyNavigation:
  key: "Schedule"
  order: 4
---

{% if site.sale_stage != '13_saturday' %}

# Drop Off / Pickup

## {{ site.dates.start_ordinal }}

**Drop Off**: {{ site.times.dropoff_day1 }}

## {{ site.dates.dropoff_ordinal }}

**Drop Off**: {{ site.times.dropoff_day2 }}  

## {{ site.dates.sale_start_ordinal }}

**Restocking Drop Off**: {{ site.times.restocking_dropoff }}  

## {{ site.dates.pickup_ordinal }}

**Pick Up**: {{ site.times.pickup }}

# Shopping Schedule

Volunteers, Consignors, White Tag Consignors, and New/Expecting Moms all shop before the public — see [How to Shop Early](src/pages/shoppers/how-to-shop-early.md) for every way to qualify.

## {{ site.dates.dropoff_ordinal }}

**8+ Hour Volunteers**: {{ site.times.vol_8hr }}  
**4 Hour Volunteers**: {{ site.times.vol_4hr }}

## {{ site.dates.presale_ordinal }}

**White Tag Consignors**: {{ site.times.white_tag }}  
**Consignors**: {{ site.times.consignors }}  
**New/Expecting Moms**: {{ site.times.new_moms }}  
**Friends of Consignors**: {{ site.times.friends }}

## {{ site.dates.sale_start_ordinal }}

**Open to the Public**: {{ site.times.public_day1 }}  
**Mom's Night Out**: {{ site.times.moms_night }}

## {{ site.dates.restocking_ordinal }}

**Open to the Public**: {{ site.times.public_day2 }}  
**50% off for Consignors and Volunteers**: {{ site.times.discount_consignors_volunteers }}

## {{ site.dates.sale_end_ordinal }}

**50% off Public Sale**: {{ site.times.half_off }}  

_*50% off applies only to items designated by the Consignor._

{% else %}
We'll be announcing dates for our next sale soon!
{% endif %}
