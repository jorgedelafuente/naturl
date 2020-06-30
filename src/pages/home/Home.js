/* eslint-disable jsx-a11y/alt-text */
// import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { StarOutlined, StarFilled, } from "@ant-design/icons";
import { Button } from 'antd';
import {Row, Col } from "antd";
import 'antd/dist/antd.css';
import "../../styles/Categories.scss";
const HomePage = props => (
  <React.Fragment>

    <h1 style={{fontSize:"70px", textAlign:"center", color:"White", backgroundColor:"black", height: "6vh"}}>Naturl</h1>
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
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1498746163870-51e3223d85a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1470072508653-1be229b63562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Third slide"
          />
        </div>
      </div>
      <Link
        className="carousel-control-prev"
        to="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="carousel-control-next"
        to="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </Link>
    </div>
    <hr style={{borderStyle:"solid", borderColor:"black", borderWidth:"2px"}}/>


    <Button block size="large">Shop Now</Button>
    <h2 style={{textAlign:"center"}}>Featured Products</h2>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1588680388198-857d55222183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt="Third slide"
          />
        </div>
        <div className="col-sm">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1588680500419-e221b3c15dd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt="Third slide"
          />
        </div>
        <div className="col-sm">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1511122992789-96b058cc9fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Third slide"
          />

          
        </div>
      </div>
    </div>

    
    <hr style={{borderStyle:"solid", borderColor:"black", borderWidth:"2px"}}/>
    <div className="News">
      <h1>Newsletter</h1>

      <form style={{display:"flex",width:"50%"}}>
        <input style={{width:"100%",height:"56px", borderRadius:"4px"}}
       
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <input style={{width:"100%",height:"56px", borderRadius:"4px"}} type="submit" value="Subscribe" />
      </form>
      <p>
        Sunt consequat est cillum nulla. Quis occaecat id aliquip cillum ut
        incididunt officia veniam aute qui ipsum enim culpa. Sint consectetur
        voluptate sit ex ea incididunt elit proident adipisicing elit. Amet id
        enim proident voluptate consectetur et voluptate ullamco. Amet aliquip
        adipisicing ad deserunt enim reprehenderit ea incididunt tempor sunt.
        Enim aliqua do ipsum dolor ullamco deserunt ex veniam consequat
        consectetur aute magna consectetur.
        
      </p>
    
    
   
    </div>
    <hr style={{borderStyle:"solid", borderColor:"black", borderWidth:"2px"}}/>
    <div className="category__Main">
   
    <Row style={{marginLeft:"20px", marginTop:"20px"}} gutter={[40, 48]}>
        <Col span={12}>
        
            <img
              src="https://images.unsplash.com/photo-1512351660358-6bed42b7b842?ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80"
              width="500px"
              height="500px"
            />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
            <StarOutlined />
            <p>Product Name</p>
            <p>$300</p>
          
        </Col>
        <Col span={12}>
          <Row > 
                 
            <img
              src=" https://images.unsplash.com/photo-1592842312669-1c6a0dc6dc21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              width="400px"
              height="200px"
            />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
            <StarOutlined />
            <p>Product Name</p>
            <p>$300</p>
            <img
              src="https://images.unsplash.com/photo-1544838673-1a1acb7e049d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              width="400px"
              height="200px"
            />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
            <StarOutlined />
            <p>Product Name</p>
            <p>$300</p>
            <img
              src="https://images.unsplash.com/photo-1588680500419-e221b3c15dd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              width="400px"
              height="200px"
            />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
            <StarOutlined />
            <p>Product Name</p>
            <p>$300</p>
            <img
              src="https://images.unsplash.com/photo-1588680388395-95f3f5c524a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              width="400px"
              height="200px"
            />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
            <StarOutlined />
            <p>Product Name</p>
            <p>$300</p>
          </Row>
        </Col>
      </Row>
      </div>  

      <hr style={{borderStyle:"solid", borderColor:"black", borderWidth:"2px"}}/>
      <h1 className="About__us">About Us</h1>
      <p>
        Ipsum in et amet enim laborum labore pariatur do eu officia. Nostrud
        veniam nostrud do dolor cupidatat duis occaecat id duis excepteur sint
        enim. Velit in commodo ad dolore non magna sit proident nisi. Qui cillum
        labore commodo sit. Ipsum proident cupidatat magna do nostrud amet reprehenderit cupidatat commodo ea. Minim eu consequat ipsum veniam minim est proident cillum laboris ad. Mollit quis est ipsum enim ex dolor consectetur mollit dolor incididunt. Laborum magna in aliqua mollit ad voluptate aliquip consequat adipisicing mollit in.
      </p>
      <hr style={{borderStyle:"solid", borderColor:"black", borderWidth:"2px"}}/>
    {/* ------------------footer---------------------------------- */}

  </React.Fragment>
);

export default HomePage;