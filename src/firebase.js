import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firebase-storage';

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

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

// firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  console.log(user);

  const userRef = firestore.doc(`publicProfiles/${user.uid}`);

  console.log(userRef);
  const snapshot = await userRef.get();

  console.log(snapshot);

  if (!snapshot.exist) {
    const { displayName, email } = user;
    let photoUrl = 'testhello';
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoUrl,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection('publicProfiles')
      .doc(uid)
      .get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error.message);
  }

  // return getUserDocument(user.uid);
};

// export const getUserDocument = async (uid) => {
//   if (!uid) return null;
//   try {
//     return firestore.collection('users').doc(uid);
//   } catch (error) {
//     console.error('Error fetching user', error.message);
//   }
// };


export default firebase;
