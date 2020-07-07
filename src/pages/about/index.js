import React from "react";
import "./style.scss";
import SimpleTextCard from "./SimpleTextCard";
import SimpleImageCard from "./SimpleImageCard";

const About = () => {
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
        In 2017, we gave all of our profits to helping victims of Hurricane
        Harvey. In 2019, we worked with Bali Children's Project to restore
        and build children's libraries in Bali.
        `}
          text2={`Now, in the midst of the global 2020 pandemic, we are working to
            raise funds for personal protective equipment for frontline
            healthcare works in the United States. See our current efforts here.
            `}
        />
        <SimpleImageCard
          alt="About img"
          img={require("../../images/about1.jpg")}
          heading="100% PURE"
          text1={`
        In 2017, we gave all of our profits to helping victims of Hurricane
        Harvey. In 2019, we worked with Bali Children's Project to restore
        and build children's libraries in Bali.
        Now, in the midst of the global 2020 pandemic, we are working to
            raise funds for personal protective equipment for frontline
            healthcare works in the United States. See our current efforts here.
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
                At Naturl we are a youthful, unique group, excellence eager and
                as differing as our items. We adore cosmetics and are
                continually searching for the coolest items from around the
                globe. Quality at great costs is our best need, as is
                cold-bloodedness free cosmetics. For more than ten years we have
                been rousing our clients and our consideration has been the
                mystery of our prosperity.
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
                In 2017, we gave all of our profits to helping victims of
                Hurricane Harvey. In 2019, we worked with Bali Children's
                Project to restore and build children's libraries in Bali. Now,
                in the midst of the global 2020 pandemic, we are working to
                raise funds for personal protective equipment for frontline
                healthcare works in the United States. See our current efforts
                here.
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
              In 2017, we gave all of our profits to helping victims of
              Hurricane Harvey. In 2019, we worked with Bali Children's Project
              to restore and build children's libraries in Bali. Now, in the
              midst of the global 2020 pandemic, we are working to raise funds
              for personal protective equipment for frontline healthcare works
              in the United States. See our current efforts here.
            </p>
          </div>
        </div>
        <div className="Simple-text-Card Simple-text-Card-1 wow zoomIn">
          <div className="sticky-text">
            <div className="about-heading simpleCard-heading sticky-header wow zoomIn">
              OUR INGREDIENTS
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
      </div>
      <div className="flex-box-about about-margin wow zoomIn">
        <div className="Simple-text-Card Simple-text-Card-2">
          <div className="sticky-text">
            <div className="about-heading simpleCard-heading sticky-header wow zoomIn">
              Our Difference
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
        In 2017, we gave all of our profits to helping victims of Hurricane
        Harvey. In 2019, we worked with Bali Children's Project to restore
        and build children's libraries in Bali.
        `}
          text2={`Now, in the midst of the global 2020 pandemic, we are working to
            raise funds for personal protective equipment for frontline
            healthcare works in the United States. See our current efforts here.
            `}
        />
        <SimpleImageCard
          alt="About img"
          img={require("../../images/about.jpg")}
          heading="‘Beauty’ To Us"
          text1={`
        In 2017, we gave all of our profits to helping victims of Hurricane
        Harvey. In 2019, we worked with Bali Children's Project to restore
        and build children's libraries in Bali.
        Now, in the midst of the global 2020 pandemic, we are working to
            raise funds for personal protective equipment for frontline
            healthcare works in the United States. See our current efforts here.
        `}
        />
      </div>
      <div className="bottom-text wow zoomIn">
        SUBSCRIBE TO OUR MAILING LIST
      </div>
      <div className="subscribe-wrapper wow zoomIn">
        <input placeholder="email@example.com" className="input-bottom" />
        <button className="subscribe">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default About;
