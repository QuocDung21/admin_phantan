import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { dbName } from "../import/dbName";
import { db } from "../Config/Config";
import { toast } from "react-toastify";

export const AddBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = () => {
    db.collection(dbName.blogs)
      .get()
      .then((querySnapshot) => {
        const blogsdt = [];
        querySnapshot.forEach((doc) => {
          blogsdt.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        toast("Blogs:", blogsdt);
        console.log(blogsdt);
        return setBlogs(blogsdt);
      })
      .catch((error) => {
        toast("Error getting blogs: ", error);
      });
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <Navbar />
      <hr />
      <div className="flex flex-row justify-around min-w-max">
        <div className="">
          <div className="flex text-center items-center justify-center">
            <h2>ADD BLOGS</h2>{" "}
            {/* <button
              className="btn btn-primary m-5"
              onClick={(e) => {
                e.preventDefault();
                AddUsersPhantan();
                getAllUsers();
              }}
            >
              Phân tán users
            </button> */}
          </div>
          <hr />
          {/* <form autoComplete="off" className="form-group" onSubmit={addProduct}>
            <label htmlFor="product-name">Firstname</label>
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
          {error && <span className="error-msg">{error}</span>} */}
        </div>
        <hr />
        <div className="flex flex-col ">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <button
                  className="btn btn-primary w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    getBlogs();
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
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Author
                      </th>{" "}
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Description
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
                  {blogs.map((dt) => (
                    <>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {dt?.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {dt?.author}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap three-line-paragraph">
                            {dt?.description}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {dt?.title}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button className="text-green-500 hover:text-green-700">
                              Edit
                            </button>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
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
    </>
  );
};
