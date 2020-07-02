import React, { useCallback, useContext } from 'react';
import firebase from '../../firebase';
import { AuthContext } from '../../auth/Auth';
import { navigate, Link } from '@reach/router';
import styled from 'styled-components';

const SubmitButton = styled.button`
  &:hover {
    border: 1px solid #00677d;
    background-color: #00677d;
    /* color: #63418f; */
  }

  width: 100%;
  height: 40px;
  border: 0;
  margin: 10px 0;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 40px;
  cursor: pointer;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7d7e7d+0,0e0e0e+100;Black+3D */
  background: rgb(125, 126, 125); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=1 ); IE6-9 */
`;

const FormContainer = styled.div`
  min-width: 340px;
  width: 20%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 5px 0px #cecece;
  border-radius: 3px;
  margin-top: 5%;
  .Logo {
    margin: 0 auto;
  }

  label > span {
    font-weight: bold;
  }
  input {
    margin-top: 5px;
    display: block;
  }

  label,
  input {
    display: block;
    width: 100%;
  }

  .InputGroup {
    padding: 10px 0;
  }
  .InputGroup > input {
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid #cecece;
    font-weight: bold;
    color: #666;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .InputGroup > input::placeholder {
    font-family: 'Lato';
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    outline: none;
  }

  .Links {
    display: flex;
    justify-content: center;
  }
`;

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
    // console.log(currentUser);
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
        <SubmitButton className="SubmitGradientButton" type="submit">
          Sign In
        </SubmitButton>
      </form>

      <div className="Links">
        <Link to="/signup">Create a new account</Link>
      </div>
    </FormContainer>
  );
};

export default Login;
