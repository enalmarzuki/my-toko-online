import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAUvo8uSok44J7onsa_W3xRSemZzFi7gc",
  authDomain: "my-toko-online.firebaseapp.com",
  projectId: "my-toko-online",
  storageBucket: "my-toko-online.appspot.com",
  messagingSenderId: "305685763807",
  appId: "1:305685763807:web:a1593285ab76dd6110bb6a",
  measurementId: "G-Y5V0JD8XBD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const database = firebase.database();
export default firebase;
