import React from 'react';
import { Link } from '@reach/router';
import { StarOutlined, StarFilled } from '@ant-design/icons';
// import { Button } from 'antd';
// import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './Home.scss';
import CustomChatbot from '../chatbot/Chatbot';
// import { Components } from 'antd/lib/date-picker/generatePicker';
import { Carousel } from 'antd';
function onChange(a, b, c) {
  console.log(a, b, c);
}
const { Meta } = Card;
function HomePage(props) {
  return (
    <div className="Home-Main">
      <h1 className="Main_Logo">Naturl</h1>

      <Carousel autoplay afterChange={onChange}>
        <div className="HeroCarouselImage">
          <div className="Carousel_Text">
            <h2 style={{ color: 'white' }}>Naturl Los Angeles</h2>
            <p>
              “My dad used to say makeup was a shallow girl's sport, but it's
              not. It's armor.” ― Courtney Summers
            </p>
          </div>
        </div>
        <div className="HeroCarouselImage HeroCarouselImage1">
          <div className="Carousel_Text">
            <h2 style={{ color: 'white' }}>Naturl Paris</h2>
            <p>
              “Beneath the makeup and behind the smile I am just a girl who
              wishes for the world.” ― Marilyn Monroe
            </p>
          </div>
        </div>

        <div className="HeroCarouselImage HeroCarouselImage2">
          <div className="Carousel_Text">
            <h2 style={{ color: 'white' }}>Naturl Global</h2>
            <p>
              “Beauty, to me, is about being comfortable in your own skin. That,
              or a kick-ass red lipstick.” ― Gwyneth Paltrow
            </p>
          </div>
        </div>
      </Carousel>

      <hr className="Home__Hr" />
      {/* END OF CAROSEL */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            cursor: 'pointer',
            padding: '29px 48px',
            fontSize: '2rem',
            backgroundColor: '#000000',
            borderRadius: '31px',
            color: '#ffffff',
            margin: 'auto',
            outline: 'none',
          }}
        >
          <Link style={{ color: 'white' }} to="/products">
            Shop Now
          </Link>
        </button>
      </div>
      <h2 style={{ textAlign: 'center', fontSize: '35px' }}>
        Featured Products
      </h2>

      <div className="category__Main_feature carousal-column">
        {props.data.slice(45, 48).map((data, index) => (
          <div style={{ width: '300px' }} key={index}>
            {' '}
            <Link
              to={`/product/${data.id}`}
              className="feature-item"
              key={index}
            >
              <Carousel autoplay>
                <div>
                  <img
                    src={data.api_featured_image}
                    className="mx-auto"
                    width="100%"
                    style={{ backgroundColor: 'rgba(0,0,0,1)' }}
                    height="400px"
                    alt="carousel1"
                  />
                </div>
                <div>
                  <img
                    src={data.api_featured_image}
                    className="mx-auto"
                    width="100%"
                    style={{ backgroundColor: 'rgba(0,0,0,1)' }}
                    height="400px"
                    alt="carousel2"
                  />
                </div>
              </Carousel>
            </Link>
          </div>
        ))}
      </div>

      <CustomChatbot />
      <hr />
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
      <hr />
      <div className="category__Main">
        <div className="Left-Cards">
          {props.data.slice(6, 7).map((data, index) => {
            return (
              <Link to={`/product/${data.id}`} key={index}>
                {' '}
                <Card
                  hoverable
                  key={index}
                  className="column-card column-card-left"
                >
                  <img
                    src={data.api_featured_image}
                    className="left-Card-main-image"
                    alt="product1"
                  />{' '}
                  <Meta title={data.name} /> <p></p>
                  <Meta title={`$ ${data.price}`} />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarOutlined />
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="Right-Cards">
          {props.data.slice(7, 11).map((data, index) => {
            return (
              <Link
                to={`/product/${data.id}`}
                className="column-card"
                key={index}
              >
                <Card hoverable className="column-card">
                  <img
                    src={data.api_featured_image}
                    className="right-Card-main-image"
                    alt="product2"
                  />
                  <Meta title={data.name} /> <p></p>
                  <Meta title={`$ ${data.price}`} />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarOutlined />
                  <StarOutlined />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <hr className="Home__Hr" />
      <h1 className="About__us">About Us</h1>
      <p className="About__text">
        We are a team with high criteria. We dedicate ourselves fully each day.
        We love to laugh and supply our bodies with positive energy. We are
        creative and curious, and we find pleasure in everything that is
        beautiful. We are convinced that it is equally important to nourish your
        body, mind and emotions.
      </p>
      <hr className="Home__Hr" />

      {/* ------------------footer---------------------------------- */}
    </div>
  );
}

export default HomePage;
