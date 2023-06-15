import * as firebase from "firebase";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig_1 } from "./listConfig";

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

firebase.initializeApp(firebaseConfig_1);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
