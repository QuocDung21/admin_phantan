import React, { useState } from "react";
import { storage, db } from "../../Config/Config";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
export const AddUsers = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");
  const types = ["image/png", "image/jpeg"]; // image types

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Please select a valid image type (jpg or png)");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => setError(err.message),
      () => {
        storage
          .ref("product-images")
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                ProductName: productName,
                ProductPrice: Number(productPrice),
                ProductImg: url,
              })
              .then(() => {
                setProductName("");
                setProductPrice(0);
                setProductImg("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  const deleteProduct = (productId) => {
    // Xóa sản phẩm từ Firestore dựa trên ProductID
    db.collection("Products")
      .doc(productId)
      .delete()
      .catch((error) => {
        console.error("Error deleting product: ", error);
      });
  };

  return (
    <div className="container">
      <br />
      <div className="flex text-center items-center justify-center">
        <h2>ADD USERS</h2>{" "}
      </div>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProduct}>
        <label htmlFor="product-name">Product Title</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />
        <label htmlFor="product-price">Product Description</label>
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="product-price">Product Price</label>
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="product-img">Product Image</label>
        <input
          type="file"
          className="form-control"
          id="file"
          required
          onChange={productImgHandler}
        />
        <br />

        <button type="submit" className="btn btn-success mr-2">
          ADD
        </button>
        <NavLink className="btn btn-danger" to="/">
          Back
        </NavLink>
      </form>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};
