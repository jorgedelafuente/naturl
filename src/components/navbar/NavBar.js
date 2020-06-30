import React from 'react';
import { Link } from '@reach/router';
// import firebase from '../../firebase';
// import { signInWithGoogle } from '../../firebase';
import styled from 'styled-components';

const StyledNavBar = styled.div`
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
  color: black;
  a,
  span {
    margin-right: 1.25rem;
    color: black;
    text-decoration: none;
    &: hover {
      color: palevioletred;
    }
  }

  /* z-index: 10; */
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <div>
        <span>
          <Link to="/">NatURL</Link>
        </span>
      </div>
      <div>
        <span>
          <Link to="/category">Vegan</Link>
        </span>
        <span>
          <Link to="/category">Gluten Free</Link>
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
