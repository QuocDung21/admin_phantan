const admin = require("firebase-admin");
const fs = require("fs");

// Đường dẫn đến tập tin xuất ra từ MongoDB
const filePath = "./data.json";

// Đường dẫn đến tệp tin cấu hình dịch vụ Firebase
// const serviceAccount = require("path/to/serviceAccountKey.json");
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

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://your-project-id.firebaseio.com",
});

// Đọc tập tin xuất ra từ MongoDB
const data = fs.readFileSync(filePath, "utf8");
const jsonData = JSON.parse(data);

// Thêm dữ liệu vào Firestore
const db = admin.firestore();
const collectionRef = db.collection("your-collection");

jsonData.forEach((doc) => {
  collectionRef
    .add(doc)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
