import React, { useCallback } from 'react';
import firebase from '../../firebase';
import { navigate, Link } from '@reach/router';
import styled from 'styled-components';
import { FormButton } from '../../components/common/button/Button';
import { FormContainer } from '../../components/common/container/Container';

const SignUp = () => {
  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password, password2 } = event.target.elements;

    if (password.value === password2.value) {
      // console.log('passwords match');
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        navigate(`/`);
      } catch (error) {
        alert(error);
      }
    } else {
      alert('passwords do not match');
    }
  }, []);

  return (
    <FormContainer>
      <div className="Logo">
        <h3>NATURL</h3>
      </div>

      <form onSubmit={handleSignUp}>
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

        <div className="InputGroup">
          <label>
            <span>Re-Enter Password</span>
            <input name="password2" type="password" placeholder="Password" />
          </label>
        </div>

        <FormButton type="submit">Sign Up</FormButton>
      </form>

      <div className="Links">
        <Link to="/signin">Already have an account</Link>
      </div>
    </FormContainer>
  );
};

export default SignUp;
