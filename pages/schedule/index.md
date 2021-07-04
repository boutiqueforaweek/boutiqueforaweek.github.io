---
title: Schedule
permalink: /events/
---

![Schedule](/img/header_Schedule.png "Schedule")

{% for day in site.data.schedule.dates %}
<h2>{{ day.date }}</h2>
{% for event in day.events %}
<p><strong>{{ event.name }}</strong>: {{ event.time }}</p>
{% endfor %}
{% endfor %}
