---
title: Our Sponsors
description: "Meet the local businesses that sponsor Boutique for a Week, Central Florida's premier children's consignment sale in Casselberry, FL."
permalink: /about/our-sponsors/
sponsors:
eleventyNavigation:
  key: "Sponsors"
  order: 6
---

We are proud to share our sponsors with you. When sponsors are listed, you can click on its logo below to visit its website.

If you are interested in being added as a Sponsor/Vendor please [contact us](mailto:{{ site.email }}?subject=Becoming%20a%20Sponsor) for more details.

<div class="container">
  <div id="sponsors" class="row">
    <div>
      {% for sponsor in sponsors %}
      <div class="p-2">
        <div class="card col">
          <a href="{{ sponsor.link }}" target="_blank" rel="noopener noreferrer">
            <img src="{{ sponsor.image }}" class="card-img-top" alt="{{ sponsor.company }}" loading="lazy">
          </a>
          <div class="card-body">
            <h2 class="card-title">
              <a href="{{ sponsor.link }}" target="_blank" rel="noopener noreferrer">{{ sponsor.company }}</a>
            </h2>
            <p class="card-text">{{ sponsor.details | markdownify }}</p>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
