import React, { useContext, useState, useEffect } from "react";
import { signOut, removeWishList, getUserDocument } from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { Link, navigate } from "@reach/router";
import { Alert } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SignIn from "./../signin/SignIn";
import PropTypes from "prop-types";
import "./Profile.scss";

const Profile = ({ data, wishList, setWishList, setItemsInCart }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [wishListRemoveAlert, setWishListRemoveAlert] = useState("none");
  const [displayAlert, setDisplayAlert] = useState("none");
  const { currentUserProfile } = useContext(AuthContext);

  useEffect(() => {
    if (currentUserProfile) {
      Promise.resolve(getUserDocument(currentUserProfile.uid))
        .then((profile) => {
          setProfileInfo(profile);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUserProfile]);

  const handleSignOut = () => {
    setDisplayAlert("block");
    signOut();
    // add timeout with alert
    // clear local storage
    // localStorage.clear();
    // clearWishList
    // setWishList([])
    // navigate(`/`);
    // clear cart
    //setItemsInCart([])
    // clear User id
    // setUserId(null)
  };

  const removeFromWishList = (itemId) => {
    console.log(itemId);
    removeWishList(currentUserProfile.uid, itemId).then((res) => {
      setWishList([...res.wishList]);
      setWishListRemoveAlert("block");
      setTimeout(() => {
        setWishListRemoveAlert("none");
      }, 2000);
    });
  };

  return (
    <>
      {/* logic to handle loading vs logged in  */}
      {/* add spinner */}
      {!currentUserProfile ? (
        <>
          <SignIn />
        </>
      ) : (
        <>
          <div style={{ width: "300" }}>
            <Alert
              banner
              message="Sign Out Successfully"
              type="success"
              showIcon={true}
              closable
              style={{
                display: displayAlert,
              }}
            />
            <Alert
              banner
              message="Item removed from wishlist Successful"
              type="info"
              showIcon={true}
              closable
              style={{
                display: wishListRemoveAlert,
              }}
            />
          </div>
          <div className="Cart">
            <h2 className="Cart-title">
              Welcome <>{profileInfo.displayName}</>
            </h2>

            <div>
              <h2 className="Cart-title">Wishlist</h2>
              {wishList.length > 0 ? (
                <div>
                  {wishList.map((item, index) => (
                    <div key={index}>
                      <div
                        stye={{
                          fontSize: 8,
                        }}
                      >
                        <Link to={`/product/${item}`}>
                          {data.find((product) => product.id === item).name}
                        </Link>

                        <DeleteOutlined
                          onClick={() => removeFromWishList(item)}
                        />
                      </div>
                      <br />

                      <br />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  No Products in your wishlist currently.
                </div>
              )}
            </div>
            <br />

            <h2 className="Cart-title">Purchase History</h2>

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
  data: PropTypes.array,
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
  setItemsInCart: PropTypes.func,
};

export default Profile;
