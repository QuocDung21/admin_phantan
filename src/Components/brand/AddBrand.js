import React, { useState } from "react";
import { storage, db } from "../../Config/Config";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { addBrand, deleteBrand, updateBrand } from "../../import/apiFirebase";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const AddBrand = () => {
  const [titleBrand, setTitleBrand] = useState();
  const [error, setError] = useState("");
  const [brands, setBrands] = useState([""]);
  const [brand, setBrand] = useState([""]);
  const [up, setUp] = useState(false);
  const getBrandById = (brandId) => {
    db.collection("Brands")
      .doc(brandId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const brandData = doc.data();
          setBrand({ brandData, brandId });
        } else {
          toast("No brand found with the given ID");
        }
      })
      .catch((error) => {
        toast("Error getting brand by ID: ", error);
      });
  };
  useEffect(() => {
    const getBrands = () => {
      db.collection("Brands")
        .get()
        .then((querySnapshot) => {
          const brands = [];
          querySnapshot.forEach((doc) => {
            brands.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          console.log(brands);
          return setBrands(brands);
        })
        .catch((error) => {
          console.error("Error getting brands: ", error);
        });
    };
    getBrands();
  }, []);

  return (
    <div className="container">
      <br />
      <div className="flex text-center items-center justify-center">
        <h2>ADD BRAND</h2>{" "}
      </div>
      <hr />
      <form
        autoComplete="off"
        className="form-group"
        onSubmit={(e) => {
          e.preventDefault();
          if (brand.brandId == undefined) {
            addBrand(titleBrand);
            return;
          }
          alert(JSON.stringify(brand.brandId, titleBrand));
          return;
          updateBrand(brand.brandId, titleBrand);
        }}
      >
        <input type="text" className="form-control" value={brand?.brandId} />
        <br />
        <label htmlFor="product-name">Brand Title</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setTitleBrand(e.target.value)}
          value={titleBrand}
        />
        <br />
        <button type="submit" className="btn btn-success mr-2">
          SUBMIT
        </button>
        <NavLink className="btn btn-danger" to="/">
          Back
        </NavLink>
      </form>
      {error && <span className="error-msg">{error}</span>}

      <hr />
      <div>
        {brands.map((dt) => (
          <div className="border-collapse">
            <span>{dt.title}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                setTitleBrand(dt.title);
                setUp(true);
                getBrandById(dt.id);
              }}
              className="m-2 text-blue-500"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setTitleBrand(null);
                deleteBrand(dt.id);
              }}
              className="m-2 text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
