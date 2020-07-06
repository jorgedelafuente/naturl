import React, { useContext, useState, useEffect } from "react";
import {
  signOut,
  getUserDocument,
  addWishList,
  removeWishList,
} from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { navigate } from "@reach/router";
import { Alert, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "../FormContainer.scss";
import SignIn from "./../signin/SignIn";
import PropTypes from "prop-types";

const Profile = ({ setUserProfile }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [wishList, setWishlist] = useState([]);
  const [wishListAlert, setWishListAlert] = useState("none");
  // const [spinner, setSpinner] = useState(true);
  const [displayAlert, setDisplayAlert] = useState("none");
  const { currentUser } = useContext(AuthContext);

  //REDO with USE EFFECT

  useEffect(() => {
    if (currentUser) {
      // console.log("test");
      console.log(currentUser);
      Promise.resolve(getUserDocument(currentUser.uid))
        .then((profile) => {
          setProfileInfo(profile);
          setWishlist([...profile.wishList]);
          // console.log(profile);
          setUserProfile(profile);
          // setSpinner(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser]);

  console.log(wishList);

  // if (currentUser) {
  //   // console.log(currentUser.id);
  //   Promise.resolve(getUserDocument(currentUser.uid)).then((profile) => {
  //     setProfileInfo(profile);
  //     console.log(profile);
  //     // setUserProfile(profile);
  //     setSpinner(false);
  //   });
  // }

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

  // const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const addToWishList = () => {
    addWishList(currentUser.uid, "123").then((res) => {
      setWishlist([...res.wishList]);
    });
  };
  const removeFromWishList = () => {
    removeWishList(currentUser.uid, "123").then((res) => {
      console.log(res);
      //  setProfileInfo(res);
      // setWishlist();
      setWishlist([...res.wishList]);
      setWishListAlert("block");
      setTimeout(() => {
        setWishListAlert("none");
      }, 2000);
    });
  };

  return (
    <>
      {!currentUser ? (
        <>
          <SignIn />
        </>
      ) : (
        <>
          <div className="form-container">
            <div className="Logo">
              <h3>NATURL</h3>
            </div>

            <div className="form-alerts">
              <Alert
                banner
                message="Sign Out Successfully"
                type="success"
                showIcon={true}
                closable
                style={{ display: displayAlert }}
              />
              <Alert
                banner
                message="Item removed from wishlist Successful"
                type="success"
                showIcon={true}
                closable
                style={{ display: wishListAlert }}
              />
            </div>

            <>
              <div>
                <h2>
                  Welcome <>{profileInfo.displayName}</>
                </h2>
              </div>

              <br />

              <div>
                <h4>Wishlist</h4>
                {wishList.length > 0 ? (
                  <div>
                    {wishList.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                ) : (
                  <div>No Products in your wishlist currently.</div>
                )}
              </div>

              <br />
              <button
                style={{ border: "1px solid black" }}
                onClick={addToWishList}
              >
                add to wishlist
              </button>
              <br />

              <br />
              <button
                style={{ border: "1px solid red" }}
                onClick={removeFromWishList}
              >
                remove from wishlist
              </button>
              <br />

              <div>
                <h4>Purchase History</h4>
              </div>
            </>

            {/* <>
              <div className="form-spinner">
                <Spin indicator={antIcon} />
              </div>
            </> */}

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
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  setUserProfile: PropTypes.func,
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
