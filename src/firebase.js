import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-storage";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

// export const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, displayName) => {
  console.log("test3", user, displayName);
  if (!user) return;
  const userRef = firestore.doc(`publicProfiles/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exist) {
    const { email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        wishList: [],
        purchaseHistory: [],
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("publicProfiles")
      .doc(uid)
      .get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export const addWishList = async (uid, itemId) => {
  if (!uid) return;
  const wishListRef = firestore.doc(`publicProfiles/${uid}`);
  const snapshot = await wishListRef.get();

  if (!snapshot.exist) {
    try {
      await wishListRef.update({
        wishList: firebase.firestore.FieldValue.arrayUnion(itemId),
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return getUserDocument(uid);
};

export const removeWishList = async (uid, itemId) => {
  if (!uid) return;
  const wishListRef = firestore.doc(`publicProfiles/${uid}`);
  const snapshot = await wishListRef.get();

  if (!snapshot.exist) {
    try {
      await wishListRef.update({
        wishList: firebase.firestore.FieldValue.arrayRemove(itemId),
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return getUserDocument(uid);
};

export default firebase;
