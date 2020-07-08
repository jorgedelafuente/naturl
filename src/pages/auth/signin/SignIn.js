import React, { useCallback, useState } from "react";
import firebase from "../../../firebase";
import { Link } from "@reach/router";
import { Alert } from "antd";
import "../FormContainer.scss";

const SignIn = () => {
  const [errorAlert, setErrorAlert] = useState("none");

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      // .then(() => {
      //   showSuccess();
      // });
    } catch (error) {
      console.error(error);
      showError();
    }
  }, []);

  const showError = () => {
    setErrorAlert("block");
    setTimeout(() => {
      setErrorAlert("none");
    }, 3000);
  };

  return (
    <div className="form-container">
      <div className="Logo">
        <Link to="/">
          <h3>NATURL</h3>
        </Link>
      </div>

      <div className="Home-EmailSignUp-container">
        <div className="Home-EmailSignUp-container-alert">
          <Alert
            message="Credentials Incorrect"
            type="error"
            style={{ display: errorAlert }}
            showIcon={true}
            closable
          />
        </div>
      </div>

      <form onSubmit={handleLogin}>
        <div className="InputGroup">
          <label>
            <span>Email</span>
            <input required name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div className="InputGroup">
          <label>
            <span>Password</span>
            <input
              required
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
        </div>
        <button className="form-button" type="submit">
          Sign In
        </button>
      </form>

      <div className="form-links">
        <Link to="/signup">Create a new account</Link>
      </div>
    </div>
  );
};

export default SignIn;
