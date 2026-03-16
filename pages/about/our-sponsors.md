---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Fun 4 Seminole Kids
    image: /img/sponsors/fun4seminolekids.webp
    link: "https://www.fun4seminolekids.com/"
    details: "Fun4SeminoleKids.com is your local resource for family friendly events and activities in Seminole County! Our website includes a Calendar and Directory detailing kids events, children programs and classes, youth sports, kids eat free directory, birthday party resources, rainy day activities, free fun for kids, summer camps and MORE fun things for kids and families to do in and around Seminole County."
  - company: My Central Florida Family
    image: /img/sponsors/my_central_florida_family.webp
    link: "https://mycentralfloridafamily.com/"
    details: "MyCentralFloridaFamily.com is your go-to resource for family fun in Central Florida, featuring a daily events calendar, local event news, seasonal guides, and things to do year-round. We’re also proud to produce the Florida Kids & Family Expo, returning August 22–23, 2026 to the Orange County Convention Center. Visit our site to stay in the know — because Orlando family fun starts here."
  - company: Tie A Bow On
    image: /img/sponsors/tie-a-bow-on.webp
    link: "https://www.etsy.com/shop/tieabowon/"
    details: "Meet Bethany, the owner and creator behind Tie A Bow On! With over 14 years of experience, Bethany has been handcrafting beautiful boutique-style hair bows designed to add the perfect finishing touch to any outfit.
From solid, everyday bows in popular styles to stunning one-of-a-kind bows for special occasions, each piece is thoughtfully made with care and attention to detail. Whether it’s for school days, celebrations, or photo-perfect moments, Tie A Bow On has a bow for every occasion. Tie A Bow has been a vendor with BFAW since Fall of 2015. "
  - company: NRG Dance
    image: /img/sponsors/nrg-dance.webp
    link: "https://nrg-dancestudios.weebly.com/"
    details: "NRG Dance, located inside the Winter Park Community Center, offers dance classes for children 3-18. We offer classes for all levels of dancers. We love to have fun & DANCE, DANCE, DANCE!!! Sign up for a FREE trial class & join our dance family! Call or text with any questions 407-519-0477"
  - company: Extra Blessings
    image: /img/sponsors/extra-blessings.webp
    link: https://www.instagram.com/extrablessings
    details: "Hi, my name is Ory, the person behind EXTRA BLESSINGS. I’ll always be a message away to help you with any special orders that you are looking for. Here at the shop, you will find cups, tumblers, t-shirts, tote bags, bows, keychains, bracelets, and earrings, and more, which a ll can be personalized to your liking with custom designs or with designs we have already made. We specialize in personalized items, those that a re close to your heart and make you happy."
  - company: Anchor Pelvic
    image: /img/sponsors/anchor-pelvic.webp
    link: https://www.anchorpelvicpt.com/
    details: "Anchor Pelvic Physical Therapy is more than just a clinic, they are partners in healing. As a locally owned, women-led pelvic health practice, their team is deeply committed to creating a space where every patient feels seen, valued, and empowered. They understand that pelvic health is personal, and they strive to provide care that is not only clinically excellent, but also compassionate, respectful, and rooted in connection.

Through personalized, one-on-one, hour-long sessions with no overlap, their providers take the time to listen, educate, and develop thoughtful treatment plans tailored to each individual. They treat a wide variety of pelvic health concerns and conditions using a whole-body, evidence-based approach that recognizes the connection between movement, breath, nervous system regulation, and overall well-being.

Guided by strong core values and an unwavering commitment to exceptional customer service, their team prioritizes a truly patient-centered experience from the first phone call to the final visit. Anchor Pelvic is dedicated to helping individuals heal, regain confidence, and reclaim their lives, feeling strong, supported, and at home in their bodies. 💙"
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
