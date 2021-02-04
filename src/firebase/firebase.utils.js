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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
