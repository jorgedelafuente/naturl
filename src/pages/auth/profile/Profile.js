import React, { useContext, useState, useEffect } from "react";
import {
  signOut,
  getUserDocument,
  addWishList,
  removeWishList,
} from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { navigate } from "@reach/router";
import { Alert } from "antd";
// import { Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
import "../FormContainer.scss";
import SignIn from "./../signin/SignIn";
import PropTypes from "prop-types";

const Profile = ({ setUserProfile, data }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [wishList, setWishlist] = useState([]);
  const [wishListAddAlert, setWishListAddAlert] = useState("none");
  const [wishListRemoveAlert, setWishListRemoveAlert] = useState("none");
  // const [spinner, setSpinner] = useState(true);
  const [displayAlert, setDisplayAlert] = useState("none");
  const { currentUser } = useContext(AuthContext);

  // console.log(data);

  useEffect(() => {
    if (currentUser) {
      // console.log("test");
      // console.log(currentUser);
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
  }, [currentUser, setUserProfile]);

  // console.log(wishList);

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
    addWishList(currentUser.uid, "itemid: 123").then((res) => {
      setWishlist([...res.wishList]);
      setWishListAddAlert("block");
      setTimeout(() => {
        setWishListAddAlert("none");
      }, 2000);
    });
  };
  const removeFromWishList = () => {
    removeWishList(currentUser.uid, "itemid: 123").then((res) => {
      setWishlist([...res.wishList]);
      setWishListRemoveAlert("block");
      setTimeout(() => {
        setWishListRemoveAlert("none");
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
                message="Item added to wishlist Successful"
                type="success"
                showIcon={true}
                closable
                style={{ display: wishListAddAlert }}
              />
              <Alert
                banner
                message="Item removed from wishlist Successful"
                type="info"
                showIcon={true}
                closable
                style={{ display: wishListRemoveAlert }}
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
