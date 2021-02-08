import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWuul8yYjrgoUklkykSHDBeP49AwqxbBU",
  authDomain: "crwn-db-6b9e5.firebaseapp.com",
  projectId: "crwn-db-6b9e5",
  storageBucket: "crwn-db-6b9e5.appspot.com",
  messagingSenderId: "288233619217",
  appId: "1:288233619217:web:3dbb2a7c92004ab6d356b0",
  measurementId: "G-9SD58L5J3G",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
