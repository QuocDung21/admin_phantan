import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Navbar } from "./Navbar";

const lucdo = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="flex flex-row justify-around min-w-max">
        <div className="">
          <div className="flex text-center items-center justify-center">
            <h2>Phân tán</h2>{" "}
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
          <h1>MongoDb</h1>
          <form
            autoComplete="off"
            className="form-group"
            //   onSubmit={addProduct}
          >
            <label htmlFor="product-name">ConnectMongodb</label>
            <input
              type="text"
              className="form-control"
              required
              //   onChange={(e) => setProductName(e.target.value)}
              //   value={productName}
            />
            <br />
            <label htmlFor="product-price">colums</label>
            <input
              type="text"
              className="form-control"
              required
              //   onChange={(e) => setProductPrice(e.target.value)}
              //   value={productPrice}
            />
            <br />
            <label htmlFor="product-price">value</label>
            <input
              type="text"
              className="form-control"
              required
              //   onChange={(e) => setProductPrice(e.target.value)}
              //   value={productPrice}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-success mr-2">
              Phân tán
            </button>
            <NavLink className="btn btn-danger" to="/">
              Back
            </NavLink>
          </form>
          {/* {error && <span className="error-msg">{error}</span>} */}
        </div>
        <hr />
        <div className="flex flex-col ">
          <div className="">
            <div className="flex text-center items-center justify-center">
              <h2>Phân tán</h2>{" "}
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
            <h1>Firebase</h1>
            <form
              autoComplete="off"
              className="form-group"
              //   onSubmit={addProduct}
            >
              <label htmlFor="product-name">Connect Firebase</label>
              <textarea
                type="text"
                className="form-control"
                required
                //   onChange={(e) => setProductName(e.target.value)}
                //   value={productName}
              />
              <br />
              <label htmlFor="product-price">colums</label>
              <input
                type="text"
                className="form-control"
                required
                //   onChange={(e) => setProductPrice(e.target.value)}
                //   value={productPrice}
              />
              <br />
              <label htmlFor="product-price">value</label>
              <input
                type="text"
                className="form-control"
                required
                //   onChange={(e) => setProductPrice(e.target.value)}
                //   value={productPrice}
              />
              <br />
              <br />
              <button type="submit" className="btn btn-success mr-2">
                Phân tán
              </button>
              <NavLink className="btn btn-danger" to="/">
                Back
              </NavLink>
            </form>
            {/* {error && <span className="error-msg">{error}</span>} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default lucdo;
