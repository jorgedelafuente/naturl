import React, { useCallback, useState } from "react";
import firebase, { createUserProfileDocument } from "../../../firebase";
import { Link } from "@reach/router";
import "../FormContainer.scss";
import { Alert } from "antd";

const SignUp = () => {
  const [passwordErrorAlert, setPasswordErrorAlert] = useState("none");
  const [serverErrorAlert, setServerErrorAlert] = useState("none");
  const [successAlert, setSuccessAlert] = useState("none");

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password, password2, displayName } = event.target.elements;
    if (password.value === password2.value) {
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        await createUserProfileDocument(user, displayName.value);
        setSuccessAlert("block");
        setTimeout(() => {
          setSuccessAlert("none");
        }, 3000);
      } catch (error) {
        setSuccessAlert("none");
        setServerErrorAlert("block");
        setTimeout(() => {
          setServerErrorAlert("none");
        }, 3000);
      }
    } else {
      setPasswordErrorAlert("block");
      setTimeout(() => {
        setPasswordErrorAlert("none");
      }, 3000);
    }
  }, []);

  return (
    <div className="form-container">
      <div className="Logo">
        <h3>NATURL</h3>
      </div>

      <div>
        <Alert
          message="Account created"
          type="success"
          style={{ display: successAlert }}
          showIcon={true}
          closable
        />

        <Alert
          message="Server Error"
          type="error"
          style={{ display: serverErrorAlert }}
          showIcon={true}
          closable
        />

        <Alert
          message="Passwords Do not Match"
          type="error"
          style={{ display: passwordErrorAlert }}
          showIcon={true}
          closable
        />
      </div>

      <form onSubmit={handleSignUp}>
        <div className="InputGroup">
          <label>
            <span>Name</span>
            <input required name="displayName" type="text" placeholder="Name" />
          </label>
        </div>

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
              minLength="6"
            />
          </label>
        </div>

        <div className="InputGroup">
          <label>
            <span>Re-Enter Password</span>
            <input
              required
              name="password2"
              type="password"
              placeholder="Password"
              minLength="6"
            />
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
