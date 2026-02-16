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
    details: "I am a mother of 3 boys and Grandmother to 3. I have been making bows for over  12 years now. I have been a Vendor at BFAW since Fall of 2015. I love BFAW and seeing so many repeat customers and watching their children grow up. All my bows are handmade by me."
  - company: NRG Dance
    image: /img/sponsors/nrg-dance.webp
    link: "https://nrg-dancestudios.weebly.com/"
    details: "NRG Dance, located inside the Winter Park Community Center, offers dance classes for children 3-18. We offer classes for all levels of dancers. We love to have fun & DANCE, DANCE, DANCE!!! Sign up for a FREE trial class & join our dance family! Call or text with any questions 407-519-0477"
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
