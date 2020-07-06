import React, { useCallback, useContext, useState } from "react";
import firebase from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { navigate, Link } from "@reach/router";
import "../FormContainer.scss";
import { Alert } from "antd";

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
      console.log(error);
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
      navigate(`/`);
    }, 2000);
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser.uid);
  }

  return (
    <div className="form-container">
      <div className="Logo">
        <h3>NATURL</h3>
      </div>

      <div className="form-alerts">
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

      {/* {currentUser && <div>{currentUser.email}</div>} */}

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

export default Login;
