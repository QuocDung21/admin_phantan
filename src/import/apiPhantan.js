import firebase from "firebase";
import { db } from "../Config/Config";
import { dataBrands, dataProducts, dataUsers } from "../data/data";
import { dbName } from "./dbName";
import { toast } from "react-toastify";

export const AddProductsPhantan = () => {
  const convertTimestamp = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && "$date" in obj[key]) {
        obj[key] = firebase.firestore.Timestamp.fromDate(
          new Date(obj[key].$date)
        );
      } else if (typeof obj[key] === "object") {
        convertTimestamp(obj[key]);
      }
    }
  };

  const convertData = (obj) => {
    if ("_id" in obj) {
      obj.id = obj._id.$oid;
      delete obj._id;
    }
    convertTimestamp(obj);
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        convertData(obj[key]);
      }
    }
  };

  const convertedData = dataProducts.map((doc) => {
    const convertedDoc = { ...doc };
    convertData(convertedDoc);
    return convertedDoc;
  });

  const checkDuplicateId = async (collectionName, id) => {
    const querySnapshot = await db
      .collection(collectionName)
      .where("id", "==", id)
      .get();
    return !querySnapshot.empty;
  };

  convertedData.forEach(async (doc) => {
    const { id } = doc;
    const collection = "Products";
    const isDuplicateId = await checkDuplicateId(collection, doc.id);
    if (isDuplicateId) {
      console.error("Duplicate ID: ", doc.id);
      return;
    }
    await db
      .collection("Products")
      .doc(doc.id)
      .set(doc)
      .then(async () => {
        console.log("Document written with ID: ", doc.id);
        return await delete doc.id;
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  });
};

export const AddUsersPhantan = () => {
  const convertTimestamp = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && "$date" in obj[key]) {
        obj[key] = firebase.firestore.Timestamp.fromDate(
          new Date(obj[key].$date)
        );
      } else if (typeof obj[key] === "object") {
        convertTimestamp(obj[key]);
      }
    }
  };

  const convertData = (obj) => {
    if ("_id" in obj) {
      obj.id = obj._id.$oid;
      delete obj._id;
    }
    convertTimestamp(obj);
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        convertData(obj[key]);
      }
    }
  };

  const convertedData = dataUsers.map((doc) => {
    const convertedDoc = { ...doc };
    convertData(convertedDoc);
    return convertedDoc;
  });

  const checkDuplicateId = async (collectionName, id) => {
    const querySnapshot = await db
      .collection(collectionName)
      .where("id", "==", id)
      .get();
    return !querySnapshot.empty;
  };

  convertedData.forEach(async (doc) => {
    const { id } = doc;
    const collection = "Users";
    const isDuplicateId = await checkDuplicateId(collection, doc.id);
    if (isDuplicateId) {
      console.error("Duplicate ID: ", doc.id);
      return;
    }
    await db
      .collection("Users")
      .doc(doc.id)
      .set(doc)
      .then(async () => {
        console.log("Document written with ID: ", doc.id);
        return await delete doc.id;
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  });
};

export const AddBrandsPhantan = () => {
  const convertTimestamp = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && "$date" in obj[key]) {
        obj[key] = firebase.firestore.Timestamp.fromDate(
          new Date(obj[key].$date)
        );
      } else if (typeof obj[key] === "object") {
        convertTimestamp(obj[key]);
      }
    }
  };

  const convertData = (obj) => {
    if ("_id" in obj) {
      obj.id = obj._id.$oid;
      delete obj._id;
    }
    convertTimestamp(obj);
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        convertData(obj[key]);
      }
    }
  };

  const convertedData = dataBrands.map((doc) => {
    const convertedDoc = { ...doc };
    convertData(convertedDoc);
    return convertedDoc;
  });

  const checkDuplicateId = async (collectionName, id) => {
    const querySnapshot = await db
      .collection(collectionName)
      .where("id", "==", id)
      .get();
    return !querySnapshot.empty;
  };

  convertedData.forEach(async (doc) => {
    const collection = "Brands";
    const isDuplicateId = await checkDuplicateId(collection, doc.id);
    if (isDuplicateId) {
      console.error("Duplicate ID: ", doc.id);
      return;
    }
    await db
      .collection(dbName.brands)
      .doc(doc.id)
      .set(doc)
      .then(async () => {
        toast.success("Document written with ID: ", doc.id);
        return await delete doc.id;
      })
      .catch((error) => {
        toast.error("Error adding document: ", error);
      });
  });
};
