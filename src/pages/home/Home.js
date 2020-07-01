import React from 'react';
import { Link } from '@reach/router';
import { StarOutlined, StarFilled } from '@ant-design/icons';
// import { Button } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './Home.scss';
import CustomChatbot from '../chatbot/Chatbot';
// import { Components } from 'antd/lib/date-picker/generatePicker';
import { Carousel } from 'antd';

const { Meta } = Card;
function HomePage(props) {
  return (
    <React.Fragment>
      <h1 className="Main_Logo">Naturl</h1>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
              alt="First slide"
            />
            <div className="carousel-caption">
              <h3 style={{ color: 'white' }}>Naturl Los Angeles</h3>
              <p>
                “My dad used to say makeup was a shallow girl's sport, but it's
                not. It's armor.” ― Courtney Summers
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1498746163870-51e3223d85a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Second slide"
            />
            <div className="carousel-caption">
              <h3 style={{ color: 'white' }}>Naturl Paris</h3>
              <p>
                “Beneath the makeup and behind the smile I am just a girl who
                wishes for the world.” ― Marilyn Monroe
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1470072508653-1be229b63562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h3 style={{ color: 'white' }}>Naturl Global</h3>
              <p>
                “Beauty, to me, is about being comfortable in your own skin.
                That, or a kick-ass red lipstick.” ― Gwyneth Paltrow
              </p>
            </div>
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          to="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev"
            href="#demo"
            data-slide="prev"
            aria-hidden="true"
          />
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="carousel-control-next"
          to="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next"
            href="#demo"
            data-slide="next"
            aria-hidden="true"
          />
          <span className="sr-only">Next</span>
        </Link>
      </div>
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
          Shop Now
        </button>
      </div>
      <h2 style={{ textAlign: 'center', fontSize: '35px' }}>
        Featured Products
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {props.data.slice(44, 45).map((data, index) => {
              return (
                <div key={index} className="row">
                  <div className="col-md-4">
                    <Carousel autoplay key={index}>
                      <div key={index}>
                        {' '}
                        <h1 key={index}>
                          <img
                            src={data.api_featured_image}
                            className="mx-auto"
                            width="350px"
                            alt="Product image"
                          />
                        </h1>
                      </div>
                      <div key={index}>
                        {' '}
                        <h2 key={index}>
                          <img
                            src={data.api_featured_image}
                            className="mx-auto"
                            width="350px"
                            alt="Product image"
                          />
                        </h2>
                      </div>
                    </Carousel>
                  </div>
                  <div className="col-md-4">
                    <Carousel autoplay key={index}>
                      <div key={index}>
                        {' '}
                        <h1 key={index}>
                          <img
                            src={data.api_featured_image}
                            className="mx-auto"
                            width="350px"
                            alt="Product image"
                          />
                        </h1>
                      </div>
                      <div key={index}>
                        {' '}
                        <h2 key={index}>
                          <img
                            src={data.api_featured_image}
                            className="mx-auto"
                            width="350px"
                            alt="Product image"
                          />
                        </h2>
                      </div>
                    </Carousel>
                  </div>
                  <div className="col-md-4">
                    <Carousel autoplay key={index}>
                      <div key={index}>
                        {' '}
                        <h1 key={index}>
                          <img
                            src={data.api_featured_image}
                            className="mx-auto"
                            width="350px"
                            alt="Product image"
                          />
                        </h1>
                      </div>
                      <div key={index}>
                        {' '}
                        <h2 key={index}>
                          <img
                            src={data.api_featured_image}
                            className="mx-auto"
                            width="350px"
                            alt="Product image"
                          />
                        </h2>
                      </div>
                    </Carousel>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CustomChatbot />
      <hr className="Home__Hr" />
      <div className="News">
        <h1>Subscribe to our newsletter!</h1>
        <form style={{ display: 'flex', width: '50%' }}>
          <input
            style={{ width: '100%', height: '56px', borderRadius: '4px' }}
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            style={{ width: '100%', height: '56px', borderRadius: '4px' }}
            type="submit"
            value="Subscribe"
          />
        </form>
        <p className="News__Text">
          Sunt consequat est cillum nulla. Quis occaecat id aliquip cillum ut
          incididunt officia veniam aute qui ipsum enim culpa. Sint consectetur
          voluptate sit ex ea incididunt elit proident adipisicing elit. Amet id
          enim proident voluptate consectetur et voluptate ullamco. Amet aliquip
          adipisicing ad deserunt enim reprehenderit ea incididunt tempor sunt.
          Enim aliqua do ipsum dolor ullamco deserunt ex veniam consequat
          consectetur aute magna consectetur.
        </p>
      </div>
      <hr className="Home__Hr" />
      <div className="category__Main">
        <Row
          style={{ marginLeft: '20px', marginTop: '20px' }}
          gutter={[40, 48]}
        >
          <Col span={12}>
            {props.data.slice(6, 7).map((data, index) => {
              return (
                <Card hoverable key={index}>
                  <img
                    src={data.api_featured_image}
                    width="500px"
                    height="500px"
                    alt="Product image"
                  />{' '}
                  <Meta title="Product Name" /> <p></p>
                  <Meta title="$300" />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarOutlined />
                  <StarOutlined />
                </Card>
              );
            })}
          </Col>
          <Col span={12}>
            <Row>
              {props.data.slice(7, 11).map((data, index) => {
                return (
                  <div key={index}>
                    <Card hoverable>
                      <img
                        src={data.api_featured_image}
                        width="500px"
                        height="500px"
                        alt="Product image"
                      />
                      <Meta title="Product Name" /> <p></p>
                      <Meta title="$300" />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarOutlined />
                      <StarOutlined />
                    </Card>
                  </div>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>

      <hr className="Home__Hr" />
      <h1 className="About__us">About Us</h1>
      <p className="About__text">
        Ipsum in et amet enim laborum labore pariatur do eu officia. Nostrud
        veniam nostrud do dolor cupidatat duis occaecat id duis excepteur sint
        enim. Velit in commodo ad dolore non magna sit proident nisi. Qui cillum
        labore commodo sit. Ipsum proident cupidatat magna do nostrud amet
        reprehenderit cupidatat commodo ea. Minim eu consequat ipsum veniam
        minim est proident cillum laboris ad. Mollit quis est ipsum enim ex
        dolor consectetur mollit dolor incididunt. Laborum magna in aliqua
        mollit ad voluptate aliquip consequat adipisicing mollit in.
      </p>
      <hr className="Home__Hr" />

      {/* ------------------footer---------------------------------- */}
    </React.Fragment>
  );
}

export default HomePage;
