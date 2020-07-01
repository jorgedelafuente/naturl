import React from 'react';
import firebase from '../../firebase';
import { Link } from '@reach/router';
import { signInWithGoogle } from '../../firebase';

const NavBar = () => {
  return (
    <div>
      <Link to="/signin">Sign In</Link>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default NavBar;
