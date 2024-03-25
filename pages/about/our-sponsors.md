---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Renew
    image: /img/sponsors/renew-elisa-morrison.webp
    link: https://www.instagram.com/renew_studio_salon/
    details: "HI! My name is Elisa and I do Permanent Jewelry. My Permanent Jewelry is 14k gold filled or sterling silver personalized jewelry without a clasp. The piece of your choice is sized just for you and you can add charms for even more unique piece.  Bring your mom, sister, daughter, or bestie and get a special buy one get one half off the pieces of your choice. Can't wait for all of the fun memories that will be made this year at Boutique for a Week!"
  - company: Trinity Noelle
    image: /img/sponsors/leya-victoria.webp
    link: http://eepurl.com/ivbOD2
    details: "I started our children’s boutique business in search of a way to fulfill my dream to remain a stay-at-home Mom. My idea was to share my love for comfortable and playful children’s clothing while having lots of fun doing it! We carry trendy and unique clothing and accessories for girls and boys sizes 0-12 years. The best way to see all we have to offer is to sign up for our newsletter which acts as our website! Receive dozens of new items and prints to choose from plus yummy, healthy kid-friendly recipes in your mailbox each week! We also have a small in person display at Tree Of Life Birthing Center in Altamonte Springs, Fl. Click on the link above to enjoy 50% off your first item when you sign up for our newsletter! We hope it is the bright spot in your week!"
  - company: Ddelightful_creations
    image: /img/sponsors/ddelightful_creations.webp
    link: "https://www.instagram.com/ddelightful_creations"
    details: "Hello, my name is Daisy Daniels and my passion for crafting over the years has led me to start my own business. I subliminate 20oz tumblers, 12oz kids' tumblers, 11oz mugs and custom made bendable pens. Please stop by my table at Boutique for a Week to take a look at my merchandise or just to say hi. You will be able to purchase available items or place an order from the many image I will also have available to choose from."
  - company: Kristy Smith
    image: /img/sponsors/thirty-one.webp
    link: https://www.mythirtyone.com/us/en/kristylsmith
    details: "I am so excited to share all things Thirty-One with you this spring during the Boutique for a Week sale! I will be celebrating my 8th year with Thirty-One this year!! Make sure to stop by and say hi while you're at the sale!"
  - company: Donna Grzesik
    image: /img/sponsors/epicure.webp
    link: https://donnagrzesik.epicure.com/en-us/catalog
    details: "I am so excited to share Epicure with all of you at Boutique for a Week. Be sure to stop by my table in the lobby for a free sample of one of our delicious dip mixes. I am passionate about helping you make meal planning easier, grocery shopping cheaper and cooking so much faster with Epicure."
  - company: Tie A Bow On
    image: /img/sponsors/tie-a-bow-on.webp
    link: "https://tieabowon.etsy.com/"
    details: "I am a mother of 3 boys and Grandmother to 3. I have been making bows for over  12 years now. I have been a Vendor at BFAW since Fall of 2015. I love BFAW and seeing so many repeat customers and watching their children grow up. All my bows are handmade by me."
  - company: Extra Blessings
    image: /img/sponsors/extra-blessings.webp
    link: https://www.instagram.com/extrablessings
    details: "Hi, my name is Ory, the person behind EXTRA BLESSINGS. I’ll always be a message away to help you with any special orders that you are looking for. Here at the shop, you will find cups, tumblers, t-shirts, tote bags, bows, keychains, bracelets, and earrings, and more, which all can be personalized to your liking with custom designs or with designs we have already made. We specialize in personalized items, those that are close to your heart and make you happy."
  - company: Pediatrix
    image: /img/sponsors/pediatrix.webp
    link: https://www.pediatrix.com/find-care/practices/urgentcareflorida?utm_source=internal&utm_medium=digital-ad&utm_campaign=practice-marketing&utm_content=boutiqueforaweek-sponsorad
    details: "Our expert clinicians and staff offer a wide range of urgent care services for your children, from X-rays and lab services to IV hydration and much more. We provide exceptional pediatric urgent care seven days a week. We are open until midnight every night."
  - company: Elizabeth Bevill
    image: /img/sponsors/elizabeth-bevill.webp
    link: https://www.marykay.com/EBevill
    details: "Elizabeth Bevill is an Independent Beauty Consultant with Mary Kay. Elizabeth loves using the Mary Kay products and wants to share that experience with her customers and fellow consultants! Whether it be one-on-one, with friends, in-person spa/makeup sessions, online spa/makeup sessions or helping her customer become a consultant, she is your girl! Elizabeth is excited to help you with all your beauty/ skincare needs! She loves the outdoors and hopes to one day travel with her husband around the US in an RV towed by her Pink Cadillac! 💕"
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
