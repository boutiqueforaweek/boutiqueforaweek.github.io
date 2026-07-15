---
title: Our Sponsors
description: "Meet the local businesses that sponsor Boutique for a Week, Central Florida's premier children's consignment sale in Casselberry, FL."
permalink: /about/our-sponsors/
sponsors:
  - company: NRG Dance
    image: /img/sponsors/nrg-dance.webp
    link: "https://nrg-dancestudios.weebly.com/"
    details: "NRG Dance, located inside the Winter Park Community Center, offers dance classes for children 3-18. We offer classes for all levels of dancers. We love to have fun & DANCE, DANCE, DANCE!!! Sign up for a FREE trial class & join our dance family! Call or text with any questions 407-519-0477"
  - company: Tie A Bow On
    image: /img/sponsors/tie-a-bow-on.webp
    link: "https://www.etsy.com/shop/tieabowon/"
    details: "Meet Bethany, the owner and creator behind Tie A Bow On! With over 14 years of experience, Bethany has been handcrafting beautiful boutique-style hair bows designed to add the perfect finishing touch to any outfit.
From solid, everyday bows in popular styles to stunning one-of-a-kind bows for special occasions, each piece is thoughtfully made with care and attention to detail. Whether it’s for school days, celebrations, or photo-perfect moments, Tie A Bow On has a bow for every occasion. Tie A Bow has been a vendor with BFAW since Fall of 2015."
  - company: Fun 4 Seminole Kids
    image: /img/sponsors/fun4seminolekids.webp
    link: "https://fun4seminolekids.com/"
    details: "Fun4SeminoleKids.com is your local resource for family friendly events and activities in Seminole County! Our website includes a Calendar and Directory detailing kids events, children programs and classes, youth sports, kids eat free directory, birthday party resources, rainy day activities, free fun for kids, summer camps and MORE fun things for kids and families to do in and around Seminole County."
  - company: Isabelle Chopin
    image: /img/sponsors/enhanced-home-inspection.webp
    link: "https://www.enhancedhomeinspection.com/"
    details: "As the owner and dedicated licensed Home Inspector of Enhanced Home Inspections, I believe that safety should always come first. As an entrepreneur and working mom of four, I know how important it is to have a home that is not only beautiful, but safe, stable, and reliable.  Every inspection I perform is approached with the same care and attention I would give my own home, because I understand that behind every property is a family, an investment, and a future. My goal is to give you peace of mind by providing thorough, honest, and detailed inspections you can trust. I am also proud to offer services in both English and Spanish. Whether you are buying, selling, or maintaining your home, Enhanced Home Inspections is here to help you make confident, informed decisions every step of the way."
  - company: Little Mess Express
    image: /img/sponsors/little-mess-express.webp
    link: "https://littlemessclean.com/"
    details: "Hi, my name is Danae, also known as Ms. Nae. For six years, I've been blessed to provide TLC to children through both a commercial daycare and an in-home Mother's Day Out In Home Program. I have always loved providing parents with peace of mind — knowing their little ones are not only cared for with love, but also in a clean and safe environment.
Little Mess Express allows me to continue this service. My goal is to help parents maintain that same peace of mind by keeping car seats, strollers, and other everyday essentials fresh, sanitized, and safe from the germs that come with daily use. Because when children are cared for in clean, healthy spaces, everyone can breathe easier. Exceptional cleaning service for baby gear, including car seats, high chairs and more. Bundle and save when you book 3 or more items. Gift cards available — ask about our bundle packages."
eleventyNavigation:
  key: "Sponsors"
  order: 6
---

We are proud to share our sponsors with you. When sponsors are listed, you can click on its logo below to visit its website.

If you are interested in being added as a Sponsor/Vendor please [contact us](mailto:{{ site.email }}?subject=Becoming%20a%20Sponsor) for more details.

<div class="container">
  <div id="sponsors" class="row">
    <div{% if sponsors.size > 1 %} class="multi-col"{% endif %}>
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
