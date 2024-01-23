---
title: Event Schedule
permalink: /events/event-schedule/
---

{% if site.sale_stage != '13_saturday' %}
## Volunteers, Consignors, New/Expecting/Adopting/Foster Moms:

* 8+ Hour Volunteers: {{ site.schedule.dropoff | ordinal }}, 5:00 p.m. - 9:00 p.m.
* 4+ Hour Volunteers: {{ site.schedule.dropoff | ordinal }}, 7:00 p.m. - 9:00 p.m.
* [White Tag Consignors]({% link pages/consignors/white-tag-consignors.md %}): {{ site.schedule.presale | ordinal }}, 1:00 p.m. - 8:00 p.m.
* Consignors: {{ site.schedule.presale | ordinal }}, 2:00 p.m. - 8:00 p.m.
* [New/Expecting/Adopting/Foster Moms]({% link pages/shoppers/first-time-moms.md %}): {{ site.schedule.presale | ordinal }}, 4:00 p.m. - 8:00 p.m.
* Friends of Consignors: {{ site.schedule.presale | ordinal }}, 6:00 p.m. - 8:00 p.m.
* Volunteers and Consignors 50% off* sale: {{ site.schedule.restocking | ordinal }}, 4:00 p.m. - 8:30 p.m. and {{ site.schedule.sale_end | ordinal }}, 10:00 a.m. - 5:00 p.m.

## Boutique For A Week is open to the Public:

* {{ site.schedule.sale_start | ordinal }}, 4:00 p.m. - 10:00 p.m.
* {{ site.schedule.restocking | ordinal }}, 11:00 a.m. - 8:30 p.m.
* {{ site.schedule.sale_end | ordinal }}, 10:00 a.m. - 5:00 p.m., 50% off* sale

_*50% off applies only to items designated by the Consignor._
{% else %}
We'll be announcing dates for our next sale soon!
{% endif %}
