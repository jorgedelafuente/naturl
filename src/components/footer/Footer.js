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
      <span>
        <Link to="/">NATURL</Link>
      </span>
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
  );
};

export default Footer;
