import React, { useContext, useState } from "react";
// import {
//   auth,
//   createUserProfileDocument,
//   signOut,
//   getUserDocument,
// } from '../../firebase';
import { signOut, getUserDocument } from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { navigate } from "@reach/router";
import { Alert } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "../FormContainer.scss";

const Profile = () => {
  const [displayName, setDisplayName] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [displayAlert, setDisplayAlert] = useState("none");
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  //REDO with USE EFFECT

  if (currentUser) {
    console.log(currentUser.id);
    Promise.resolve(getUserDocument(currentUser.uid)).then((profile) => {
      setDisplayName(profile.displayName);
      setSpinner(false);
    });
  }

  // const handleUpdate = () => {
  //   console.log('test');
  // };

  const handleSignOut = () => {
    setDisplayAlert("block");

    signOut();

    setTimeout(() => {
      navigate(`/`);
      setDisplayAlert("none");
    }, 2000);
  };

  // function callback(key) {
  //   console.log(key);
  // }

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="form-container">
      <div className="Logo">
        <h3>NATURL</h3>
      </div>

      <div className="form-alerts">
        <Alert
          banner
          message="Sign Out Successful"
          type="success"
          showIcon={true}
          closable
          style={{ display: displayAlert }}
        />
      </div>

      {currentUser && (
        <>
          <div>
            <h2>
              Welcome Back <>{displayName}</>
            </h2>
          </div>

          <div>
            <h4>Wishlist</h4>
          </div>

          <div>
            <h4>Purchase History</h4>
          </div>
        </>
      )}

      {spinner && (
        <>
          <div className="form-spinner">
            <Spin indicator={antIcon} />
          </div>
        </>
      )}

      {/* <form onSubmit={handleUpdate}>
        <div className="InputGroup">
          <label>
            <span>First Name</span>
            <input name="firstname" type="text" placeholder="First Name" />
          </label>
        </div>

        <div className="InputGroup">
          <label>
            <span>Last Name</span>
            <input name="lastname" type="text" placeholder="Last Name" />
          </label>
        </div>

        <div className="InputGroup">
          <label>
            <span>Address</span>
            <input name="address" type="text" placeholder="Address" />
          </label>
        </div>

        <FormButton type="submit">Update Profile</FormButton>
      </form>
      <br /> */}
      <button className="form-button" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
};

export default Profile;

// class Profile extends Component {
//   state = { displayName: '', email: '', password: '' };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { email, password, displayName } = this.state;

//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       console.log(user);

//       const consoleUser = await createUserProfileDocument(user, {
//         displayName,
//       });
//       console.log(consoleUser);
//     } catch (error) {
//       console.error(error);
//     }

//     this.setState({ displayName: '', email: '', password: '' });
//   };

//   render() {
//     const { displayName, email, password } = this.state;

//     return (
//       <div>
//         <form className="SignUp" onSubmit={this.handleSubmit}>
//           <h2>Sign Up</h2>
//           <input
//             type="text"
//             name="displayName"
//             placeholder="Display Name"
//             value={displayName}
//             onChange={this.handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <input type="submit" value="Sign Up" />
//         </form>

//         <br />
//         <br />

//         <button style={{ backgroundColor: 'green' }} onClick={() => signOut()}>
//           Sign out
//         </button>
//       </div>
//     );
//   }
// }

// export default Profile;
