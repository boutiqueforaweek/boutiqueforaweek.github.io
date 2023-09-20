---
title: Register
permalink: /register/
---

{% assign registration_open = "01_before,02_before,03_before" | split: "," %}
{% assign vol_registration_open = "01_before,02_before,03_before,04_before" | split: "," %}
## {{ site.data.sale[site.sale_stage].register | replace: "[season_year]", site.dates.season_year }}

{{ site.data.sale[site.sale_stage].register_fee }}

<ul>
  {% if vol_registration_open contains site.sale_stage %}
  <li><a href="https://www.mysalemanager.net/wrk_start.aspx?partnercode=BFAW">Volunteer Registration</a></li>
  {% endif %}
  {% if registration_open contains site.sale_stage %}
  <li><a href="https://www.mysalemanager.net/reg_start.aspx?partnercode=BFAW&type=new">New Consignor Registration</a></li>
  <li><a href="https://www.mysalemanager.net/reg_start.aspx?partnercode=BFAW">Returning Consignor Registration</a></li>
  {% endif %}
  {% if vol_registration_open contains site.sale_stage %}
  <li><a href="https://www.mysalemanager.net/mom_start.aspx?partnercode=BFAW">New and Expecting Moms Registration</a></li>
  {% endif %}
</ul>

## The deadline for item entry is 11:59 p.m. on the Saturday before Sale Week.

You can still print your tags after the tagging deadline, but you may not enter additional items.

[![Boutique For A Week Facebook Page](/img/FacebookBadge_SM.jpg)](https://www.facebook.com/BoutiqueForAWeek?ref=br_tf "Visit Our Facebook Page") [![Follow Boutique4AWeek on Twitter](https://twitter-badges.s3.amazonaws.com/follow_us-c.png)](https://twitter.com/Boutique4AWeek) [![Instagram](/img/instagram.png)](https://www.instagram.com/boutiqueforaweek/?ref=badge)
