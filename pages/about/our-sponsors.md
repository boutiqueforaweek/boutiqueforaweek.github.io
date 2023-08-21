---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Frankly Pelvic
    image: /img/sponsors/frankly-pelvic.webp
    link: https://www.franklypelvic.com/
    details: Dr. Kelly Frank is the owner and primary therapist with Frankly Pelvic, a mobile concierge Pelvic PT practice that serves the greater Orlando area. Dr. Kelly connects with patients to build programs that will meet the needs of a busy individual's time and resources while also educating and advocating to better one's physical, mental, and social well-being. Dr. Kelly enjoys treating all aspects of pelvic dysfunction with a passion for helping the pregnant and postpartum birthing person be their best selves. She is a native Floridian, mom of 2, who enjoys being on the water and spending time at Disney parks with her family!
  - company: Elizabeth Bevill
    image: /img/sponsors/elizabeth-bevill.webp
    link: https://www.marykay.com/EBevill
    details: Elizabeth Bevill is an Independent Beauty Consultant with Mary Kay. Elizabeth loves using the Mary Kay products and wants to share that experience with her customers and fellow consultants! Whether it be one-on-one, with friends, in-person spa/makeup sessions, online spa/makeup sessions or helping her customer become a consultant, she is your girl! Elizabeth is excited to help you with all your beauty/ skincare needs! She loves the outdoors and hopes to one day travel with her husband around the US in an RV towed by her Pink Cadillac! 💕
  - company: Marie's Modern Design
    image: /img/sponsors/maries-modern-design.webp
    link: https://www.instagram.com/mariesmoderndesign/
    details: "Hello! My name is Diana. I am a stay-at-home mom of 6. Crafting is my passion I love to create new things. It first started off with crocheting. When my babies were smaller I would make them blankets. I even made small hats when my baby girl was a preemie in the hospital. As my little girl's got older I got into making them bows. I really enjoyed making them look really cute and matching with outfits for school. If you can think it, we can create it!"
  - company: Renew
    image: /img/sponsors/renew-elisa-morrison.webp
    link: https://www.instagram.com/renew_studio_salon/
    details: "HI! My name is Elisa and I do Permanent Jewelry. My Permanent Jewelry is 14k gold filled or sterling silver personalized jewelry without a clasp. The piece of your choice is sized just for you and you can add charms for even more unique piece.  Bring your mom, sister, daughter, or bestie and get a special buy one get one half off the pieces of your choice. Can't wait for all of the fun memories that will be made this year at Boutique for a Week!"
  - company: Fun 4 Orlando Kids
    image: /img/sponsors/fun4orlandokids.webp
    link: https://fun4orlandokids.com/
    details: "@Fun4OrlandoKids is a calendar and directory website that lists EVERYTHING for kids & families in Orange County, FL. Find Local Events, Educations & Childcare resources, Camps, Giveaways, Kids Eat Free, Parties & Events, Sports Programs & much more!"
  - company: Donna Grzesik
    image: /img/sponsors/epicure.webp
    link: https://donnagrzesik.epicure.com/en-us/catalog
    details: "I am so excited to share Epicure with all of you at Boutique for a Week. Be sure to stop by my table in the lobby for a free sample of one of our delicious dip mixes. I am passionate about helping you make meal planning easier, grocery shopping cheaper and cooking so much faster with Epicure."
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
