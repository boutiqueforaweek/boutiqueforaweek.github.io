---
title: Schedule
permalink: /events/
---

{% for day in site.data.schedule.dates %}

## {{ day.date }}

{% for event in day.events %}
**{{ event.name }}**: {{ event.time }}

{% endfor %}
{% endfor %}
