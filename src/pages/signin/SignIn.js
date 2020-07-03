import React, { useCallback, useContext } from 'react';
import firebase from '../../firebase';
import { AuthContext } from '../../auth/Auth';
import { navigate, Link } from '@reach/router';
import { FormButton } from '../../components/common/button/Button';
import { FormContainer } from '../../components/common/container/Container';

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
    <FormContainer>
      <div className="Logo">
        <h3>NATURL</h3>
      </div>

      {/* {currentUser && <div>{currentUser.email}</div>} */}

      <form onSubmit={handleLogin}>
        <div className="InputGroup">
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div className="InputGroup">
          <label>
            <span>Password</span>
            <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <FormButton type="submit">Sign In</FormButton>
      </form>

      <div className="Links">
        <Link to="/signup">Create a new account</Link>
      </div>
    </FormContainer>
  );
};

export default Login;
