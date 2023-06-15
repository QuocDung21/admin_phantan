import React, { useState } from "react";
import { storage, db } from "../../Config/Config";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
  addBrand,
  deleteBrand,
  deleteSl,
  updateBrand,
} from "../../import/apiFirebase";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AddBrandsPhantan, AddProductsPhantan } from "../../import/apiPhantan";
import { Navbar } from "../Navbar";
import { dbName } from "../../import/dbName";
export const AddBrand = () => {
  const [titleBrand, setTitleBrand] = useState();
  const [error, setError] = useState("");
  const [brands, setBrands] = useState([""]);
  const [brand, setBrand] = useState([""]);
  const getBrandById = (brandId) => {
    db.collection(dbName.brands)
      .doc(brandId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          const brandData = doc.data();
          setBrand({ brandData, brandId });
          setTitleBrand(brandData.title);
        } else {
          toast("No brand found with the given ID");
        }
      })
      .catch((error) => {
        toast("Error getting brand by ID: ", error);
      });
  };
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
        return setBrands(brands);
      })
      .catch((error) => {
        console.error("Error getting brands: ", error);
      });
  };
  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-row m-5 ml-5 justify-around min-w-max">
          {/* <div>
            <div className="flex justify-around text-center items-center  ">
              <h2>ADD BRAND</h2>{" "}
              <button
                className="btn btn-primary m-2"
                onClick={(e) => {
                  e.preventDefault();
                  AddBrandsPhantan();
                  getBrands();
                }}
              >
                Phân tán brand
              </button>
            </div>
            <hr />
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={(e) => {
                e.preventDefault();
                const updatedData = {
                  title: titleBrand,
                };
                if (brand.brandId == undefined) {
                  addBrand(titleBrand);
                  getBrands();
                  return;
                }
                updateBrand(brand.brandId, updatedData);
                getBrands();
                return getBrands();
              }}
            >
              <input
                type="text"
                className="form-control"
                value={brand?.brandId}
              />
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
                {brand?.brandId == undefined ? "Thêm" : "Sửa"}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setBrand(null);
                }}
                className="btn btn-success mr-2"
              >
                Hủy
              </button>
              <NavLink className="btn btn-danger" to="/">
                Back
              </NavLink>
            </form>
            {error && <span className="error-msg">{error}</span>}
          </div> */}

          <hr />
          <div className="flex flex-col ">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <button
                    className="w-full btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      getBrands();
                    }}
                  >
                    Reset
                  </button>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Edit
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    {brands?.map((dt) => (
                      <>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {dt.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {dt.title}
                            </td>
                            {/* <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {}
                            </td> */}
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  getBrandById(dt.id);
                                }}
                                className="text-green-500 hover:text-green-700"
                              >
                                Edit
                              </button>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  deleteSl(dt.id, dbName.brands);
                                  setTimeout(() => {
                                    getBrands();
                                  }, 100);
                                }}
                                className="text-red-500 hover:text-red-700"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
