import React, { useState } from "react";
import SimpleTextCard from "./SimpleTextCard";
import SimpleImageCard from "./SimpleImageCard";
import { Alert } from "antd";
import "./style.scss";

const About = () => {
  const [displayAlert, setDisplayAlert] = useState("none");

  const handleEmailNewsletterSignUp = (e) => {
    e.preventDefault();
    setDisplayAlert("block");
    setTimeout(() => {
      setDisplayAlert("none");
    }, 5000);
  };

  return (
    <div className="About-Wrapper">
      <div className="about-heading wow zoomIn " id="about-page-header">
        <h1>Our Story</h1>
      </div>
      <p className="wow zoomIn">
        Naturl is a culture and movement founded in Los Angeles inspired by
        musicians in the studio, surfers at the beach, and athletes before/after
        the game. Our mission is to inspire cool confidence in our community by
        embracing uniqueness and individuality.
      </p>
      <br />
      <p className="wow zoomIn">
        As we grow, our eyes are set on three things: doing truly good business,
        celebrating individuality globally, and giving back in any way we can.
      </p>
      <img
        src={require("../../images/about-fadein1.png")}
        alt="about"
        className="left-image"
      />
      <img
        src={require("../../images/about-fadein.png")}
        alt="about2"
        className="right-image"
      />
      <div className="flex-box-about about-margin">
        <SimpleTextCard
          alt="About img"
          heading="GIVE BACK"
          text={`We are citizens of the world, and this world offers us its beauty
           and wonder. As such, we must find ways to give back in order for it to
           continue to thrive and bless us with its beauty. We also understand
           that no great achievement is made alone, and Naturl is no different.
            Without the world and those around us, we would not be here. We believe
            our success must be shared by all the people around us and the world that
             they reside in.`}
        />
        <SimpleImageCard
          alt="About img"
          img={require("../../images/about2.jpg")}
          heading="THE ‘Naturl’ STANDARD"
          text1={`
          Naturl New York Cosmetics is the result of owners hardwork, big name makeup craftsman and restorative aesthetician. The majority of our items are intended to make ladies put their best self forward while keeping up the wellbeing and care of their skin.
        `}
          text2={`Now, in the midst of the global 2020 pandemic, we are working to
            raise funds for personal protective equipment for frontline
            healthcare works in Canada and the United States.
            `}
        />
        <SimpleImageCard
          alt="About img"
          img={require("../../images/about1.jpg")}
          heading="100% PURE"
          text1={`
          What makes Naturl so exceptional? The PRODUCTS – our pride! Joining a logical innovation with energetic hues brought about an amazing wealth of items and hues to begin to look all starry eyed at. 95 % of the makeup cosmetics and adornments are fabricated in our own condition of workmanship office. Unquestionably more vitally, top notch fixings run connected at the hip with reasonable costs.
        `}
        />
      </div>
      <div className="flex-box-about about-margin-1">
        <div className="show-two-cards-right">
          <div className="flex-box-about">
            <div className="Simple-image-Card Simple-Image-Right">
              <img
                src={require("../../images/about3.jpg")}
                alt="img"
                className="wow zoomIn"
              />
              <div className="about-heading simpleImage-heading wow zoomIn">
                Adore It. Offer It. Live It.
              </div>
              <p className="wow zoomIn">
                With more than 30 years of experience we center around steady
                advancement. The neighborhood achievement drove us to
                acquainting the brand with the worldwide market. Since 2006 the
                guide of areas has been thriving hitting the world’s esteemed
                spots. Makeup devotees will discover us on 6 landmasses in more
                than 800 areas from London’s Oxford Street, Piazza del Duomo in
                Milan, Times Square in New York to Grand Canal Shoppes in Las
                Vegas.
              </p>
            </div>
            <div className="Simple-image-Card Simple-Image-Right">
              <img
                src={require("../../images/about4.jpg")}
                alt="photo2"
                className="wow zoomIn"
              />
              <div className="about-heading simpleImage-heading wow zoomIn">
                Nature. Love. Science.
              </div>
              <p className="wow zoomIn">
                At Natrul we are a youthful, unique group, excellence eager and
                as differing as our items. We adore cosmetics and are
                continually searching for the coolest items from around the
                globe. Quality at great costs is our best need, as is
                cold-bloodedness free cosmetics. For more than ten years we have
                been rousing our clients and our consideration has been the
                mystery of our prosperity.
              </p>
            </div>
          </div>
          <div className="Simple-image-Card Simple-Image-Right">
            <img
              src={require("../../images/about5.jpg")}
              alt="about5"
              className="wow zoomIn"
            />
            <div className="about-heading simpleImage-heading wow zoomIn">
              Our Belief
            </div>
            <p className="wow zoomIn">
              Notwithstanding our magnificence specialists and pattern scouts,
              ‘Organization Name’ utilizes inventive visual craftsmen,
              fastidious IT experts, charming record administrators and steady
              logisticians. Fulfilled and upbeat clients are our inspiration to
              do the best each day.
            </p>
          </div>
        </div>
        <div className="Simple-text-Card Simple-text-Card-1 wow zoomIn">
          <div className="sticky-text">
            <div className="about-heading simpleCard-heading sticky-header wow zoomIn">
              <p className="aboutpage-purple-block">OUR INGREDIENTS</p>
            </div>
            <p className="wow zoomIn">
              Dissimilar to ordinary mineral makeup items that utilization
              either too-shimmery Mica or getting dried out Bismuth Oxychloride
              as the base for their powder plans, ‘Organization Name’ New York’s
              innovative work group put resources into the remedial
              ‘Organization Name’ Peptide Complex to go about as a piece of its
              one of a kind center base. Peptides are mixes comprised of various
              amino acids (which are known as the “building squares of protein”)
              that are connected into a chain. On account of peptides, in every
              corrosive, the carboxyl gathering of one amino is joined to the
              amino gathering, by means of obligations of oxygen, carbon,
              hydrogen and nitrogen. Peptides are fundamental to life on Earth.
              They are found in each living cell, and they have various
              capacities—delivering catalysts so your body can separate remote
              substances, reinforcing your safe framework, and controlling your
              hormones. We have utilized these peptides to plan the best makeup
              items with skincare benefits. Truly, consolidating skincare items
              with excellence items has been done previously, yet never with the
              master contact of our organizer, which incorporates his perpetual
              inventiveness, undying energy to give magnificence to ladies all
              over the place, and the extremely valuable learning expected to
              make excellent items that can be delighted in by all races. We
              trust that the best methodology is in most extreme
              trustworthiness. With long stretches of understanding, solid
              items, and propelled systems, we guarantee you the best items –
              conveyed with assurance and polished methodology to meet the
              majority of your skincare needs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-box-about about-margin wow zoomIn">
        <div className="Simple-text-Card Simple-text-Card-2">
          <div className="sticky-text">
            <div className="about-heading simpleCard-heading sticky-header wow zoomIn">
              <p className="aboutpage-greenblock">Our Difference</p>
            </div>
            <p className="wow zoomIn">
              We are citizens of the world, and this world offers us its beauty
              and wonder. As such, we must find ways to give back in order for
              it to continue to thrive and bless us with its beauty. We also
              understand that no great achievement is made alone, and Naturl is
              no different. Without the world and those around us, we would not
              be here. We believe our success must be shared by all the people
              around us and the world that they reside in.
            </p>
          </div>
        </div>
        <SimpleImageCard
          alt="About img"
          img={require("../../images/about6.jpg")}
          heading="OUR PROMISE"
          text1={`
          Our guarantee to you is that we just stock viable, perfect, natural and common cosmetics that are free from fixings, for example, parabens. They ought to likewise be delivered by moral and enthusiastic organizations; 
        `}
          text2={`which means definitely no creature testing, a mindful way to deal with the earth and heaps of affection immersed your natural healthy skin alongside the best fixings nature brings to the table! We likewise have a veggie lover channel, which allows you effectively show vegetarian cosmetics items as it were.
            `}
        />
        <SimpleImageCard
          alt="About img"
          img={require("../../images/about.jpg")}
          heading="‘Beauty’ To Us"
          text1={`
          Truly, consolidating skincare items with excellence items has been done previously, yet never with the master contact of our organizer, which incorporates his perpetual inventiveness, undying energy to give magnificence to ladies all over the place, and the extremely valuable learning expected to make excellent items that can be delighted in by all races.
        `}
        />
      </div>
      <div className="bottom-text wow zoomIn">
        SUBSCRIBE TO OUR MAILING LIST
      </div>

      <div className="subscribe-wrapper wow zoomIn">
        <div className="About-EmailSignUp-container-input">
          <div className="About-EmailSignUp-container-alert">
            <Alert
              banner
              message="A sample email newsletter submit"
              type="info"
              showIcon={true}
              style={{
                display: displayAlert,
              }}
            />
          </div>

          <input placeholder="email@example.com" className="input-bottom" />
        </div>

        <button className="subscribe" onClick={handleEmailNewsletterSignUp}>
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default About;
