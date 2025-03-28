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
  - company: Kristy Smith
    image: /img/sponsors/thirty-one.webp
    link: https://www.facebook.com/groups/bagsgalorewithkristy
    details: "As many of you know, Thirty-One closed their doors in December after being in business for 21 years. However, I am EXCITED to share with you all that I will still be at Boutique for a week with the remaining of my Thirty-One inventory. Do not miss out on purchasing your last Thirty-One products! If you want to shop ahead of the sale, make sure to visit my Facebook page (click the title link)."
  - company: Apogee Orlando
    image: /img/sponsors/apogee-orlando.webp
    link: "https://www.apogeestrongorlando.com/"
    details: "Apogee Strong Orlando is an innovative private school that fosters an environment where children are free to explore their passions, develop physical health alongside academic excellence, and cultivate a supportive community of families committed to growing together. We believe every child has unique, God-given gifts, and our campus is intentionally designed to nurture these individual strengths while igniting a lifelong love of learning. Our mission goes beyond traditional textbooks and rigid curricula; through a child-centered approach, we focus on developing character, resilience, creativity, competence, and confidence. With low student-teacher ratios and engaging, hands-on learning experiences, we are dedicated to preparing children for life, not just passing exams."
  - company: LifeSkills
    image: /img/sponsors/lifeskills.webp
    link: "https://www.lifeskillscenter.com/"
    details: |
      At LifeSkills, we provide Occupational Therapy with a specialized focus on Sensory Integration Therapy. We are a trusted provider with the highest reputation for our expertise, compassionate care, and proven success helping children improve their quality of life since 1993.

      As part of our commitment to the community, we are offering “Free Screening for Children” during April to honor Occupational Therapy Month. This screening is designed to identify children who may be experiencing sensory-related difficulties and could benefit from Sensory Integration Therapy, along with parent education.
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
