---
title: Our Sponsors
permalink: /about/our-sponsors/
sponsors:
  - company: Tie A Bow On
    image: /img/sponsors/tie-a-bow-on.webp
    link: "https://tieabowon.etsy.com/"
    details: "I am a mother of 3 boys and Grandmother to 3. I have been making bows for over  12 years now. I have been a Vendor at BFAW since Fall of 2015. I love BFAW and seeing so many repeat customers and watching their children grow up. All my bows are handmade by me."
  - company: Donna Grzesik
    image: /img/sponsors/epicure.webp
    link: https://donnagrzesik.epicure.com/en-us/catalog
    details: "I am so excited to share Epicure with all of you at Boutique for a Week. Be sure to stop by my table in the lobby for a free sample of one of our delicious dip mixes. I am passionate about helping you make meal planning easier, grocery shopping cheaper and cooking so much faster with Epicure."
  - company: Renew
    image: /img/sponsors/renew-elisa-morrison.webp
    link: https://www.instagram.com/renew_studio_salon/
    details: "HI! My name is Elisa and I do Permanent Jewelry. My Permanent Jewelry is 14k gold filled or sterling silver personalized jewelry without a clasp. The piece of your choice is sized just for you and you can add charms for even more unique piece.  Bring your mom, sister, daughter, or bestie and get a special buy one get one half off the pieces of your choice. Can't wait for all of the fun memories that will be made this year at Boutique for a Week!"
  - company: Fun 4 Orlando Kids
    image: /img/sponsors/fun4orlandokids.webp
    link: https://fun4orlandokids.com/
    details: "@Fun4OrlandoKids is a calendar and directory website that lists EVERYTHING for kids & families in Orange County, FL. Find Local Ev
ents, Educations & Childcare resources, Camps, Giveaways, Kids Eat Free, Parties & Events, Sports Programs & much more!"
  - company: Kristy Smith
    image: /img/sponsors/thirty-one.webp
    link: https://www.mythirtyone.com/us/en/kristylsmith
    details: "I am so excited to share all things Thirty-One with you this spring during the Boutique for a Week sale! I will be celebrating my 8th year with Thirty-One this year!! Make sure to stop by and say hi while you're at the sale!"
  - company: Elizabeth Bevill
    image: /img/sponsors/elizabeth-bevill.webp
    link: https://www.marykay.com/EBevill
    details: "Elizabeth Bevill is an Independent Beauty Consultant with Mary Kay. Elizabeth loves using the Mary Kay products and wants to share that experience with her customers and fellow consultants! Whether it be one-on-one, with friends, in-person spa/makeup sessions, online spa/makeup sessions or helping her customer become a consultant, she is your girl! Elizabeth is excited to help you with all your beauty/ skincare needs! She loves the outdoors and hopes to one day travel with her husband around the US in an RV towed by her Pink Cadillac! 💕"
  - company: Extra Blessings
    image: /img/sponsors/extra-blessings.webp
    link: https://www.instagram.com/extrablessings
    details: "Hi, my name is Ory, the person behind EXTRA BLESSINGS. I’ll always be a message away to help you with any special orders that you
are looking for. Here at the shop, you will find cups, tumblers, t-shirts, tote bags, bows, keychains, bracelets, and earrings, and more, which a
ll can be personalized to your liking with custom designs or with designs we have already made. We specialize in personalized items, those that a
re close to your heart and make you happy."
  - company: Nemours
    image: /img/sponsors/nemours.webp
    link: https://www.nemours.org/
    details: "When you choose a Nemours Children's pediatrician for your child, you get much more than a knowledgeable and compassionate doctor. You gain access to an internationally recognized health system devoted to one thing: the health and well-being of children. It’s the best of both worlds — the comfort of knowing your child is being cared for by board-certified pediatric experts and the convenience of care that’s close to home."
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
