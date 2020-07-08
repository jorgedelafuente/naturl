import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import firebase from "../../../firebase";
import { Link } from "@reach/router";
import { Alert } from "antd";
import "../FormContainer.scss";

const Login = () => {
  const [errorAlert, setErrorAlert] = useState("none");
  const [successAlert, setSuccessAlert] = useState("none");

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          showSuccess();
        });
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
  const showSuccess = () => {
    setSuccessAlert("block");
    setTimeout(() => {
      setSuccessAlert("none");
    }, 2000);
  };

  return (
    <div className="form-container">
      <div className="Logo">
        <Link to="/">
          <h3>NATURL</h3>
        </Link>
      </div>

      <div>
        <Alert
          message="Login Successful"
          type="success"
          style={{ display: successAlert }}
          showIcon={true}
          closable
        />
        <Alert
          message="Credentials Incorrect"
          type="error"
          style={{ display: errorAlert }}
          showIcon={true}
          closable
        />
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

Login.propTypes = {
  setUserProfile: PropTypes.func,
};

export default Login;
