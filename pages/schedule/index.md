---
title: Schedule
permalink: /events/
---

{% if site.sale_stage != '13_saturday' %}
## {{ site.schedule.start | ordinal }}

**Drop Off**: 4:00 p.m. - 9:00 p.m

## {{ site.schedule.dropoff | ordinal }}

**Drop Off**: 9:30 a.m. - 12:30 p.m  
**8+ Hour Volunteers**: 5:00 p.m. - 9:00 p.m.  
**4 Hour Volunteers**: 7:00 p.m. - 9:00 p.m.

## {{ site.schedule.presale | ordinal }}

**White Tag Consignors**: 1:00 p.m. - 8:00 p.m.  
**Consignors**: 2:00 p.m. - 8:00 p.m.  
**New/Expecting Moms**: 4:00 p.m. - 8:00 p.m.

## {{ site.schedule.sale_start | ordinal }}

**Restocking**: 12:00 p.m. - 2:00 p.m.  
**Open to the Public**: 4:00 p.m. - 10:00 p.m.  
**Mom's Night Out**: 8:00 p.m. - 10:00 p.m.

## {{ site.schedule.restocking | ordinal }}

**Open to the Public**: 11:00 a.m. - 8:00 p.m.  
**50% off for Consignors and Volunteers**: 4:00 p.m. - 8:00 p.m.

## {{ site.schedule.sale_end | ordinal }}

**50% off Public Sale**: 10:00 a.m. - 5:00 p.m.  
**Sort**: 5:00 p.m. - 11:00 p.m.

## {{ site.schedule.pickup | ordinal }}

**Pick Up**: 10:00 a.m. - 1:00 p.m.
{% else %}
We'll be announcing dates for our next sale soon!
{% endif %}
