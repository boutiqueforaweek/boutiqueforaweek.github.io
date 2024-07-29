---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Tie A Bow On
    image: /img/sponsors/tie-a-bow-on.webp
    link: "https://tieabowon.etsy.com/"
    details: "I am a mother of 3 boys and Grandmother to 3. I have been making bows for over  12 years now. I have been a Vendor at BFAW since Fall of 2015. I love BFAW and seeing so many repeat customers and watching their children grow up. All my bows are handmade by me."
  - company: Renew
    image: /img/sponsors/renew-elisa-morrison.webp
    link: https://www.instagram.com/renew_studio_salon/
    details: "HI! My name is Elisa and I do Permanent Jewelry. My Permanent Jewelry is 14k gold filled or sterling silver personalized jewelry without a clasp. The piece of your choice is sized just for you and you can add charms for even more unique piece.  Bring your mom, sister, daughter, or bestie and get a special buy one get one half off the pieces of your choice. Can't wait for all of the fun memories that will be made this year at Boutique for a Week!"
  - company: Donna Grzesik
    image: /img/sponsors/epicure.webp
    link: https://donnagrzesik.epicure.com/en-us/catalog
    details: "I am so excited to share Epicure with all of you at Boutique for a Week. Be sure to stop by my table in the lobby for a free sample of one of our delicious dip mixes. I am passionate about helping you make meal planning easier, grocery shopping cheaper and cooking so much faster with Epicure."
  - company: Kristy Smith
    image: /img/sponsors/thirty-one.webp
    link: https://www.mythirtyone.com/us/en/kristylsmith
    details: "I am so excited to share all things Thirty-One with you this spring during the Boutique for a Week sale! I will be celebrating my 8th year with Thirty-One this year!! Make sure to stop by and say hi while you're at the sale!"
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
