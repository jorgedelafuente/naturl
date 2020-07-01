import React from 'react';
import { Link } from '@reach/router';
// import firebase from '../../firebase';
// import { signInWithGoogle } from '../../firebase';
import styled from 'styled-components';

const StyledNavBar = styled.div`
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
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 30px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  & a,
  & span {
    margin-right: 1.25rem;
    color: black;
    text-decoration: none;
    &:hover {
      color: #00677d;
    }
  }
  div:nth-child(1) {
    margin-left: 0.5rem;
  }
  /* z-index: 10; */
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <div>
        <span>
          <Link to="/">NATURL</Link>
        </span>
      </div>
      <div>
        <span className="navbar-links">
          <Link to="/products">Products</Link>
        </span>
        <span className="navbar-links">
          <Link to="/products-vegan">Vegan</Link>
        </span>
        <span className="navbar-links">
          <Link to="/products-gluten-free">Gluten Free</Link>
        </span>
        <span>
          <Link to="/signin">Sign In</Link>
        </span>
        <span>Cart</span>
      </div>
      {/* <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button> */}
    </StyledNavBar>
  );
};

export default NavBar;
