---
title: Schedule
description: "Consignor drop-off and pick-up schedule for Boutique for a Week. Important dates and times for our children's consignment sale in Casselberry, FL."
permalink: /events/
eleventyNavigation:
  key: "Schedule"
  order: 4
---

{% if site.sale_stage != '13_saturday' %}

## {{ site.dates.start_ordinal }}

**Drop Off**: {{ site.times.dropoff_day1 }}

## {{ site.dates.dropoff_ordinal }}

**Drop Off**: {{ site.times.dropoff_day2 }}  

## {{ site.dates.sale_start_ordinal }}

**Restocking Drop Off**: {{ site.times.restocking_dropoff }}  

## {{ site.dates.pickup_ordinal }}

**Pick Up**: {{ site.times.pickup }}

# Shopping Schedule

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

{% else %}
We'll be announcing dates for our next sale soon!
{% endif %}
