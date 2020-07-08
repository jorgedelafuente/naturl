import React, { useContext, useState, useEffect } from "react";
import { signOut, removeWishList, getUserDocument } from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
// import { Link } from "@reach/router";
import { Alert } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";
import SignIn from "./../signin/SignIn";
import PropTypes from "prop-types";
import PurchaseHistory from "../../../components/purchaseHistory/purchaseHistory";
import WishlistList from "../../../components/wishlist/wishlistList";
import "./Profile.scss";

const Profile = ({
  data,
  wishList,
  setWishList,
  setItemsInCart,
  setUserId,
  userId,
}) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [wishListRemoveAlert, setWishListRemoveAlert] = useState("none");
  const [displayAlert, setDisplayAlert] = useState("none");
  const { currentUserProfile } = useContext(AuthContext);

  useEffect(() => {
    if (currentUserProfile) {
      Promise.resolve(getUserDocument(currentUserProfile.uid))
        .then((profile) => {
          setProfileInfo(profile);
          setPurchaseHistory([...profile.purchaseHistory]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUserProfile]);

  const handleSignOut = () => {
    setDisplayAlert("block");
    setTimeout(() => {
      setDisplayAlert("none");
    }, 5000);
    signOut();
    localStorage.clear("cart");
    setWishList([]);
    setItemsInCart([]);
    setUserId(null);
    setProfileInfo({});
    // navigate(`/`);
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
      {userId !== null ? (
        <>
          <div className="Profile-Alert-Container">
            <Alert
              banner
              message="Sign Out Complete"
              type="success"
              showIcon={true}
              closable
              style={{
                display: displayAlert,
              }}
            />
            <Alert
              banner
              message="Item removed from wishlist"
              type="info"
              showIcon={true}
              closable
              style={{
                display: wishListRemoveAlert,
              }}
            />
          </div>

          <div className="Profile-Container">
            <h2 className="Profile-Welcome-title">
              Welcome <>{profileInfo.displayName} </>
            </h2>

            <h2 className="Profile-Category-Title Wishlist-Title">
              Your Wishlist
            </h2>

            <div>
              {wishList.length > 0 ? (
                <>
                  {wishList.map((item, index) => (
                    <WishlistList
                      key={index}
                      removeFromWishList={removeFromWishList}
                      wishListData={data.find((product) => product.id === item)}
                    />
                  ))}
                </>
              ) : (
                <div className="Profile-EmptyList">
                  No Products in your wishlist currently.
                </div>
              )}
            </div>

            {purchaseHistory.length > 0 ? (
              <PurchaseHistory purchaseHistory={purchaseHistory} />
            ) : (
              <>
                <h2 className="Profile-Category-Title Purchase-Title">
                  Your Purchase History
                </h2>
                <div className="Profile-EmptyList">
                  You haven&apos;t purchased anything yet.
                </div>
              </>
            )}

            <button className="form-button" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </>
      ) : (
        <>
          <SignIn />
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
  setUserId: PropTypes.func,
  userId: PropTypes.string,
};

export default Profile;
