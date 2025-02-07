---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Tie A Bow On
    image: /img/sponsors/tie-a-bow-on.webp
    link: "https://tieabowon.etsy.com/"
    details: "I am a mother of 3 boys and Grandmother to 3. I have been making bows for over  12 years now. I have been a Vendor at BFAW since Fall of 2015. I love BFAW and seeing so many repeat customers and watching their children grow up. All my bows are handmade by me."
  - company: Marked
    image: /img/sponsors/marked.webp
    link: "https://www.instagram.com/marked.bookmarks"
    details: "Meg and Molly, long-time church friends with a shared passion for creativity and the mystery of the Living Word, co-founded marked., a small business sparked by a single moment creating wedding favors for Molly’s wedding. But God had something much bigger in mind—handmade, vintage-style bookmarks with handwritten Scriptures. The mission of marked. is to make the Word of God the first and last thing book lovers see every time they curl up with their favorite book and their favorite cup of cozy!"
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
          <p class="card-text" style="text-align: justify">{{ sponsor.details }}</p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
