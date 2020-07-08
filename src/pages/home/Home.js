import React from "react";
import { Link } from "@reach/router";
// import { StarOutlined, StarFilled } from '@ant-design/icons';
// import { Button } from 'antd';
// import { Row, Col } from 'antd';
// import { Card } from 'antd';
// import { Components } from 'antd/lib/date-picker/generatePicker';
// const { Meta } = Card;
// import "antd/dist/antd.css";
import "./Home.scss";

import { Carousel } from "antd";
import CustomChatbot from "../../components/chatbot/Chatbot";
import ProductCard from "../../components/product-card/Product-card";

function onChange(a, b, c) {
  // console.log(a, b, c);
}

function HomePage(props) {
  return (
    <div className="Home-Main">
      <Carousel autoplay afterChange={onChange}>
        <div className="HeroCarouselImage">
          <div className="Carousel_Text">
            <Link className="carousel-button" to={`/products`}>
              SHOP NOW
            </Link>
            <h2 style={{ color: "white" }}>Naturl Toronto</h2>
            {/* <p>
              “My dad used to say makeup was a shallow girl's sport, but it's
              not. It's armor.” ― Courtney Summers
            </p> */}
          </div>
        </div>
        <div className="HeroCarouselImage HeroCarouselImage1">
          <div className="Carousel_Text">
            <Link className="carousel-button" to={`/products`}>
              SHOP NOW
            </Link>
            <h2 style={{ color: "white" }}>Naturl Paris</h2>
            {/* <p>
              “Beneath the makeup and behind the smile I am just a girl who
              wishes for the world.” ― Marilyn Monroe
            </p> */}
          </div>
        </div>

        <div className="HeroCarouselImage HeroCarouselImage2">
          <div className="Carousel_Text">
            <Link className="carousel-button" to={`/products`}>
              SHOP NOW
            </Link>
            <h2 style={{ color: "white" }}>Naturl Global</h2>
            {/* <p>
              “Beauty, to me, is about being comfortable in your own skin. That,
              or a kick-ass red lipstick.” ― Gwyneth Paltrow
            </p> */}
          </div>
        </div>
      </Carousel>
      <h2
        className="home-page-featured-products"
        style={{ textAlign: "center", fontSize: "35px" }}
      >
        Featured Products
      </h2>
      <div className="category__Main">
        <div className="Right-Cards">
          {props.data.slice(104, 110).map((data, index) => {
            return (
              <>
                <ProductCard
                  key={index}
                  image={data.api_featured_image}
                  name={data.name}
                  price={data.price}
                  id={data.id}
                  wishList={props.wishList.includes(data.id)}
                  userId={props.userId}
                />
              </>
            );
          })}
        </div>
      </div>

      <h2
        className="home-featuredproducts-header"
        style={{ textAlign: "center", fontSize: "35px" }}
      >
        New Arrivals
      </h2>

      <div className="category__Main_feature carousal-column">
        {props.data.slice(0, 4).map((data, index) => (
          <div style={{ width: "300px" }} key={index}>
            {" "}
            <Link
              to={`/product/${data.id}`}
              className="feature-item"
              key={index}
            >
              <Carousel autoplay>
                <div className="home-featureproducts-carousal-image-container">
                  <img src={data.api_featured_image} alt="carousel1" />
                </div>
                <div className="home-featureproducts-carousal-image-container">
                  <img src={data.api_featured_image} alt="carousel2" />
                </div>
              </Carousel>
            </Link>
          </div>
        ))}
      </div>

      <CustomChatbot data={props.data} />

      <h1 className="About__us">NATURL</h1>
      <p className="About__text">
        We are a team with high criteria. We dedicate ourselves fully each day.
        We love to laugh and supply our bodies with positive energy. We are
        creative and curious, and we find pleasure in everything that is
        beautiful. We are convinced that it is equally important to nourish your
        body, mind and emotions.
      </p>

      <div className="News">
        <div className="News_div">
          <h1>Subscribe to our newsletter!</h1>
          <p className="News__Text">
            Signup for our weekly newsletter to get the latset news, updates and
            amazing offers delivered directly to your inbox.
          </p>
        </div>
        <form className="NewsLetterInput">
          <input
            type="email"
            id="email"
            name="email"
            className="Email_input"
            placeholder="Email Address"
          />
          <button className="Email-button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
