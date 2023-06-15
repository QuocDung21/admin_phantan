import React from "react";
import { Navbar } from "./Navbar";
import { dbName } from "../import/dbName";
import { db } from "../Config/Config";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";

const AddCateblogs = () => {
  const [categoriesBlogDt, setCategoriesBlogDt] = useState([""]);
  const getCategories = () => {
    db.collection(dbName.cateblogs)
      .get()
      .then((querySnapshot) => {
        const categoriesBlogsData = [];
        querySnapshot.forEach((doc) => {
          categoriesBlogsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        toast("Cateblogs :", categoriesBlogsData);
        return setCategoriesBlogDt(categoriesBlogsData);
      })
      .catch((error) => {
        toast("Error getting Cateblogs : ", error);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Navbar />
      <hr />
      <div className="flex flex-row justify-around min-w-max">
        <hr />
        <div className="flex flex-col ">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <button
                  className="btn btn-primary w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    getCategories();
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
                        Title
                      </th>{" "}
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
                  {categoriesBlogDt.map((dt) => (
                    <>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {dt?.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {dt?.name}
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
                                //   deleteUser(dt.id);
                                //   getAllUsers();
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

export default AddCateblogs;
