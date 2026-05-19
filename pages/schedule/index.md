---
title: Schedule
description: "Consignor drop-off and pick-up schedule for Boutique for a Week. Important dates and times for our children's consignment sale in Casselberry, FL."
permalink: /events/
---

{% if site.sale_stage != '13_saturday' %}

## {{ site.schedule.start | ordinal }}

**Drop Off**: {{ site.times.dropoff_day1 }}

## {{ site.schedule.dropoff | ordinal }}

**Drop Off**: {{ site.times.dropoff_day2 }}  

## {{ site.schedule.sale_start | ordinal }}

**Restocking Drop Off**: {{ site.times.restocking_dropoff }}  

## {{ site.schedule.pickup | ordinal }}

**Pick Up**: {{ site.times.pickup }}

# Shopping Schedule

## {{ site.schedule.dropoff | ordinal }}

**8+ Hour Volunteers**: {{ site.times.vol_8hr }}  
**4 Hour Volunteers**: {{ site.times.vol_4hr }}

## {{ site.schedule.presale | ordinal }}

**White Tag Consignors**: {{ site.times.white_tag }}  
**Consignors**: {{ site.times.consignors }}  
**New/Expecting Moms**: {{ site.times.new_moms }}  
**Friends of Consignors**: {{ site.times.friends }}

## {{ site.schedule.sale_start | ordinal }}

**Open to the Public**: {{ site.times.public_day1 }}  
**Mom's Night Out**: {{ site.times.moms_night }}

## {{ site.schedule.restocking | ordinal }}

**Open to the Public**: {{ site.times.public_day2 }}  
**50% off for Consignors and Volunteers**: {{ site.times.discount_consignors_volunteers }}

## {{ site.schedule.sale_end | ordinal }}

**50% off Public Sale**: {{ site.times.half_off }}  

{% else %}
We'll be announcing dates for our next sale soon!
{% endif %}
