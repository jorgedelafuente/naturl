import React, { useCallback, useContext } from "react";
import firebase from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { navigate, Link } from "@reach/router";
// import { FormButton } from '../../../components/common/button/FormButton';
import "../FormContainer.scss";

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
    <div className="form-container">
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
