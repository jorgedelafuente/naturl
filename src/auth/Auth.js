import React, { useEffect, useState } from "react";
import firebase from "./../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user.email);
      setCurrentUser(user);
      // if (user.email) {
      //   console.log("user-email:", user.email);
      // }
      // setPending(false);
    });
  }, []);

  // if (pending) {
  //   return <>Loading...</>;
  // }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
