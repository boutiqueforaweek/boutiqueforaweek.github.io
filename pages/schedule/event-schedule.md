---
title: Event Schedule
seo_title: "Sale Dates & Hours | [season_year]"
description: "View the full schedule for Boutique for a Week's [season_year] children's consignment sale in Casselberry, FL. Pre-sale shopping, public sale hours and half-price day."
permalink: /events/event-schedule/
faq:
  - question: "When does Boutique for a Week open to the public?"
    answer: "The public sale typically runs for three days, with evening hours on the first day, full hours on the second day, and a half-price sale on the final day. Check our schedule for the exact dates and times for the current sale."
  - question: "Is there an entry fee for Boutique for a Week?"
    answer: "No, there is no entry fee. Boutique for a Week is free and open to the public during public sale hours."
  - question: "Where is Boutique for a Week located?"
    answer: "Boutique for a Week is held at Metro Life Church, 910 S Winter Park Dr, Casselberry, FL 32707."
  - question: "When is the 50% off sale?"
    answer: "The 50% off sale runs on the last day of the sale and is open to the public all day. Volunteers and Consignors get early access to discount shopping the evening before."
---

{% if site.sale_stage != '13_saturday' %}
## Volunteers, Consignors, New/Expecting/Adopting/Foster Moms:

* 8+ Hour Volunteers: {{ site.schedule.dropoff | ordinal }}, 5:00 p.m. - 9:00 p.m.
* 4+ Hour Volunteers: {{ site.schedule.dropoff | ordinal }}, 7:00 p.m. - 9:00 p.m.
* [White Tag Consignors]({% link pages/consignors/white-tag-consignors.md %}): {{ site.schedule.presale | ordinal }}, 12:00 p.m. - 8:00 p.m.
* Consignors: {{ site.schedule.presale | ordinal }}, 1:00 p.m. - 8:00 p.m.
* [New/Expecting/Adopting/Foster Moms]({% link pages/shoppers/first-time-moms.md %}): {{ site.schedule.presale | ordinal }}, 4:00 p.m. - 8:00 p.m.
* Friends of Consignors: {{ site.schedule.presale | ordinal }}, 6:00 p.m. - 8:00 p.m.
* Volunteers and Consignors 50% off* sale: {{ site.schedule.restocking | ordinal }}, 5:00 p.m. - 9:00 p.m. and {{ site.schedule.sale_end | ordinal }}, 10:00 a.m. - 5:00 p.m.

## Boutique For A Week is open to the Public:

* {{ site.schedule.sale_start | ordinal }}, 5:00 p.m. - 10:00 p.m.
* {{ site.schedule.restocking | ordinal }}, 12:00 p.m. - 9:00 p.m.
* {{ site.schedule.sale_end | ordinal }}, 10:00 a.m. - 5:00 p.m., 50% off* sale

_*50% off applies only to items designated by the Consignor._
{% else %}
We'll be announcing dates for our next sale soon!
{% endif %}
