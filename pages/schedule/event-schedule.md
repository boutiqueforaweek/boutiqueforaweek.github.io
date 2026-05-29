---
title: When Can I Shop?
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
eleventyNavigation:
  key: "When Can I Shop?"
  parent: "Schedule"
  order: 2
---

{% if site.sale_stage != '13_saturday' %}
## Volunteers, Consignors, New/Expecting/Adopting/Foster Moms:

* 8+ Hour Volunteers: {{ site.dates.dropoff_ordinal }}, {{ site.times.vol_8hr }}
* 4+ Hour Volunteers: {{ site.dates.dropoff_ordinal }}, {{ site.times.vol_4hr }}
* [White Tag Consignors](pages/consignors/white-tag-consignors.md): {{ site.dates.presale_ordinal }}, {{ site.times.white_tag }}
* Consignors: {{ site.dates.presale_ordinal }}, {{ site.times.consignors }}
* [New/Expecting/Adopting/Foster Moms](pages/shoppers/first-time-moms.md): {{ site.dates.presale_ordinal }}, {{ site.times.new_moms }}
* Friends of Consignors: {{ site.dates.presale_ordinal }}, {{ site.times.friends }}
* Volunteers and Consignors 50% off* sale: {{ site.dates.restocking_ordinal }}, {{ site.times.discount_consignors_volunteers }} and {{ site.dates.sale_end_ordinal }}, {{ site.times.half_off }}

## Boutique For A Week is open to the Public:

* {{ site.dates.sale_start_ordinal }}, {{ site.times.public_day1 }}
* {{ site.dates.restocking_ordinal }}, {{ site.times.public_day2 }}
* {{ site.dates.sale_end_ordinal }}, {{ site.times.half_off }}, 50% off* sale

_*50% off applies only to items designated by the Consignor._
{% else %}
We'll be announcing dates for our next sale soon!
{% endif %}
