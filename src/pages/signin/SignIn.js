import React, { useCallback, useContext } from 'react';
import firebase from '../../firebase';
import { AuthContext } from '../../auth/Auth';
import { navigate } from '@reach/router';

const Login = () => {
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser);
  }

  return (
    <div>
      <h1>Log in</h1>

      {currentUser && <div>{currentUser.email}</div>}

      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
