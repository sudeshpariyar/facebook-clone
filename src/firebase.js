import firebase from "firebase";
import { firestore } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEzKHO31sKUmGRpsrp5Py7-bTxEWXZn-Y",
  authDomain: "faacebook-clone.firebaseapp.com",
  databaseURL: "https://faacebook-clone.firebaseio.com",
  projectId: "faacebook-clone",
  storageBucket: "faacebook-clone.appspot.com",
  messagingSenderId: "104614955747",
  appId: "1:104614955747:web:954f8a031c0e7d74d313d6",
  measurementId: "G-SZSD5F6ECY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
