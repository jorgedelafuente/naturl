import React, { useEffect, useState } from "react";
import firebase, { getUserDocument } from "./../firebase";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children, setWishList, setUserId }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  // const [currentUserProfile, setCurrentUserProfile] = useState(null);

  // const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      // console.log(user.uid);
      setCurrentUser(user);
      if (user.uid !== null) {
        getUserDocument(user.uid)
          .then((profile) => {
            setCurrentUserProfile(profile);
            setWishList(profile.wishList);
            setUserId(profile.uid);
          })
          .catch((error) => console.log(error));
      }
      // if (user.email) {
      //   console.log("user-email:", user.email);
      // }
      // setPending(false);
    }); // eslint-disable-next-line
  }, [setCurrentUser]);

  // if (pending) {
  //   return <>Loading...</>;
  // }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentUserProfile,
        setCurrentUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
  setWishList: PropTypes.func,
  setUserId: PropTypes.func,
};
