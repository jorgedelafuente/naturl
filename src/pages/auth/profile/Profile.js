import React, { useContext, useState, useEffect } from "react";
import { signOut, getUserDocument, removeWishList } from "../../../firebase";
import { AuthContext } from "../../../auth/Auth";
import { Link, navigate } from "@reach/router";
import { Alert } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SignIn from "./../signin/SignIn";
import PropTypes from "prop-types";
import "./Profile.scss";

const Profile = ({ data }) => {
  const [profileInfo, setProfileInfo] = useState({});
  // const [purchaseHistory, setPurchaseHistory] = useState({
  //   // date: Date.now(),
  //   date: 22,
  //   order: [
  //     { item: "bronzer2", quantity: 3, price: 12, id: 101 },
  //     { item: "lipstick2", quantity: 2, price: 33, id: 1011 },
  //     { item: "eyeliner2", quantity: 3, price: 20.3, id: 1021 },
  //   ],
  // });
  const [wishList, setWishlist] = useState([]);
  const [wishListRemoveAlert, setWishListRemoveAlert] = useState("none");
  const [displayAlert, setDisplayAlert] = useState("none");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      Promise.resolve(getUserDocument(currentUser.uid))
        .then((profile) => {
          setProfileInfo(profile);
          setWishlist([...profile.wishList]);
          // setUserProfile(profile);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser]);

  const handleSignOut = () => {
    setDisplayAlert("block");
    signOut();
    navigate(`/`);
  };

  const removeFromWishList = (itemId) => {
    console.log(itemId);
    removeWishList(currentUser.uid, itemId).then((res) => {
      setWishlist([...res.wishList]);
      setWishListRemoveAlert("block");
      setTimeout(() => {
        setWishListRemoveAlert("none");
      }, 2000);
    });
  };

  // const savePurchase = () => {
  //   console.log(purchaseHistory);
  //   addOrderHistory(currentUser.uid, purchaseHistory).then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <>
      {!currentUser ? (
        <>
          <SignIn />
        </>
      ) : (
        <>
          <div>
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
            {/* <div>
                <h4>Purchase History</h4>
              </div> */}
            {/* <Button type="primary" onClick={savePurchase}>
                Add Purchase History
              </Button>
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
  data: PropTypes.array,
};

export default Profile;
