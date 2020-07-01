import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

const StyledFooter = styled.div`
  /* tablet */
  @media (max-width: 700px) and (min-width: 480px) {
    font-size: 0.8rem;
  }
  /* mobile */
  @media (max-width: 480px) {
    font-size: 0.7rem;
    .navbar-links {
      display: none;
    }
  }
  display: flex;
  text-align: center;
  justify-content: center;
  /* align-items: center; */
  /* background-color: white; */
  width: 100%;
  a {
    text-decoration: none;
  }
  & a,
  & span {
    margin-right: 1.25rem;
    color: black;
    text-decoration: none;
    &:hover {
      color: #00677d;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

export default Footer;
