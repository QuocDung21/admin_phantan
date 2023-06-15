import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyDGmVBx5LAYJuIq_Ni1nZBenfcVUFX-SyY",
//   authDomain: "ecommerce-with-react-2ac06.firebaseapp.com",
//   databaseURL: "https://ecommerce-with-react-2ac06.firebaseio.com",
//   projectId: "ecommerce-with-react-2ac06",
//   storageBucket: "ecommerce-with-react-2ac06.appspot.com",
//   messagingSenderId: "690603499200",
//   appId: "1:690603499200:web:09860bc318b5b7fd74d725",
//   measurementId: "G-88N35MC51Q",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCuzfGHR6V82mYa8z_50rR_pofGFcrM3xc",
  authDomain: "phantamecom.firebaseapp.com",
  projectId: "phantamecom",
  storageBucket: "phantamecom.appspot.com",
  messagingSenderId: "813400707894",
  appId: "1:813400707894:web:c28132222e122e3940d997",
  measurementId: "G-0ZV0DQ6TKR",
  databaseURL: "https://ecommerce-with-react-2ac06.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
