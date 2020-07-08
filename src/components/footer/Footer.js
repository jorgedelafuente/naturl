import React from "react";
import { Link } from "@reach/router";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./Footer.scss";

// const StyledFooter = styled.div``;

const Footer = () => {
  return (
    <div className="footer">
      <hr className="Home__Hr" />
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-container">
            <h4>About</h4>
            <p>
              NATURL is a culture and movement founded in Los Angeles inspired
              by artists. Our mission is to inspire confidence in our community
              by embracing uniqueness and individuality with beuty products.
            </p>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-top-right-pages">
            <p>Pages</p>
            <Link to="/products">Products</Link>
            <Link to="/products-vegan">Vegan</Link>
            <Link to="/products-gluten-free">Gluten Free</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-top-right-info">
            <p>Info</p>
            <Link to="/">Returns</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
          </div>
          <div className="footer-top-right-follow-us">
            <p>Follow Us</p>
            <div>
              <a href="https://www.instagram.com">
                <InstagramOutlined />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com">
                <FacebookOutlined />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com">
                <YoutubeOutlined />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          <Link to="/">NATURL</Link>
        </span>
        <p>Copyright © 2020 NATURL</p>
      </div>
    </div>
  );
};

export default Footer;
