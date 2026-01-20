---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
---

We are proud to share our sponsors with you. When sponsors are listed, you can click on its logo below to visit its website.

If you are interested in being added as a Sponsor/Vendor please [contact us](mailto:{{ site.email }}?subject=Becoming%20a%20Sponsor) for more details.

<div class="container">
  <div id="sponsors" class="row">
    <div>
      {% for sponsor in page.sponsors %}
      <div class="p-2">
        <div class="card col">
          <a href="{{ sponsor.link }}" target="_blank" style="text-decoration:none">
            <img src="{{ sponsor.image }}" class="card-img-top" alt="{{ sponsor.company }}">
          </a>
          <div class="card-body">
            <h1 class="card-title">
              <a href="{{ sponsor.link }}" target="_blank" style="text-decoration:none">{{ sponsor.company }}</a>
            </h1>
            <p class="card-text" style="text-align: justify">{{ sponsor.details | markdownify }}</p>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
