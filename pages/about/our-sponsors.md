---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Whatever is Pure
    image: /img/sponsors/whatever-is-pure.webp
    link: "https://www.whateverispure.net/"
    details: "Whatever Is Pure, LLC is a home bakery in Lake Mary making delicious organic chemical-free breads and skin care products. Everything is made to order. Bread can be healthy and nutritious! I mill the flour at home so there are no chemicals involved and all the nutrients are preserved. Wheat naturally has a lot of fiber, protein and B-complex vitamins but they are lost in the process of making flour in factories. Skin care should be helping your skin, not destroying it. I battled eczema and skin allergies for years. My lotion, deodorant, laundry soap and lip balm soothe skin, heal small cuts and (along with an anti-inflammatory and chemical free diet) took away the eczema."
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
          <p class="card-text" style="text-align: justify">{{ sponsor.details | markdownify }}</p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
