import React, { useCallback, useState } from "react";
import firebase, { createUserProfileDocument } from "../../../firebase";
import { navigate, Link } from "@reach/router";
import "../FormContainer.scss";
import { Alert } from "antd";

const SignUp = () => {
  const [errorAlert, setErrorAlert] = useState("none");
  const [successAlert, setSuccessAlert] = useState("none");

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password, password2, displayName } = event.target.elements;

    if (password.value === password2.value) {
      // console.log('passwords match');
      try {
        const { user } = await firebase.auth.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(user);
        const consoleUser = await createUserProfileDocument(user, {
          displayName,
        });
        console.log(consoleUser);
        // await firebase
        //   .auth()
        //   .createUserWithEmailAndPassword(email.value, password.value);
        // navigate(`/`);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("passwords do not match");
    }
  }, []);

  // const showError = () => {
  //   setErrorAlert("block");
  //   setTimeout(() => {
  //     setErrorAlert("none");
  //   }, 3000);
  // };
  // const showSuccess = () => {
  //   setSuccessAlert("block");
  //   setTimeout(() => {
  //     setSuccessAlert("none");
  //     navigate(`/`);
  //   }, 2000);
  // };

  return (
    <div className="form-container">
      <div className="Logo">
        <h3>NATURL</h3>
      </div>

      <div className="form-alerts">
        <Alert
          message="Account created"
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

      <form onSubmit={handleSignUp}>
        <div className="InputGroup">
          <label>
            <span>Name</span>
            <input name="displayName" type="text" placeholder="Name" />
          </label>
        </div>

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

        <button className="form-button" type="submit">
          Sign Up
        </button>
      </form>

      <div className="form-links">
        <Link to="/signin">Already have an account</Link>
      </div>
    </div>
  );
};

export default SignUp;
