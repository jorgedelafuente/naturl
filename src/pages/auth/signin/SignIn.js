import React, { useCallback, useContext, useState } from "react";
import firebase, { getUserDocument } from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { Link } from "@reach/router";
import "../FormContainer.scss";
import { Alert } from "antd";
import PropTypes from "prop-types";

const Login = ({ setUserProfile }) => {
  const [errorAlert, setErrorAlert] = useState("none");
  const [successAlert, setSuccessAlert] = useState("none");

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then((data) => {
            getUserDocument(data.user.uid).then((userInfo) =>
              setUserProfile({ ...userInfo })
            );
            showSuccess();
          });
      } catch (error) {
        console.log(error);
        showError();
      }
    },
    [setUserProfile]
  );

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

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    // console.log(currentUser.uid);
  }

  return (
    <div className="form-container">
      <div className="Logo">
        <h3>NATURL</h3>
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

Login.propTypes = {
  setUserProfile: PropTypes.func,
};

export default Login;
