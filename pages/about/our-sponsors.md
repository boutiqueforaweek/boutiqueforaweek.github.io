---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Frankly Pelvic
    image: /img/sponsors/frankly-pelvic.webp
    link: https://www.franklypelvic.com/
    details: Dr. Kelly Frank is the owner and primary therapist with Frankly Pelvic, a mobile concierge Pelvic PT practice that serves the greater Orlando area. Dr. Kelly connects with patients to build programs that will meet the needs of a busy individual's time and resources while also educating and advocating to better one's physical, mental, and social well-being. Dr. Kelly enjoys treating all aspects of pelvic dysfunction with a passion for helping the pregnant and postpartum birthing person be their best selves. She is a native Floridian, mom of 2, who enjoys being on the water and spending time at Disney parks with her family!
---

We are proud to share our sponsors with you. When sponsors are listed, you can click on its logo below to visit its website.

If you are interested in being added as a Sponsor/Vendor please [contact us](mailto:{{ site.email }}?subject=Becoming%20a%20Sponsor) for more details.

<div class="container">
  <div class="row row-cols-md-2">
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
          <p class="card-text" style="text-align: justify">{{ sponsor.details }}</p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
