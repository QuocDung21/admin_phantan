import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import { db } from "../Config/Config";
import { deleteProduct, getAllProducts } from "../import/apiFirebase";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AddProductsPhantan } from "../import/apiPhantan";

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  getAllProducts();
  return (
    <>
      <div className="flex flex-row justify-around m-5">
        {/* <div className="">
          <div className="">
            <br />
            <div className="flex flex-col  text-center items-center justify-center ">
              <h2>ADD PRODUCTS</h2>{" "}
              <button
                className="btn btn-primary w-full"
                onClick={(e) => {
                  e.preventDefault();
                  AddProductsPhantan();
                  getAllProducts();
                }}
              >
                Add data
              </button>
            </div>
            <hr />
            <form autoComplete="off" className="form-group">
              <label htmlFor="product-name">Product Title</label>
              <input type="text" className="form-control" required />
              <br />
              <label htmlFor="product-price">Product Description</label>
              <input type="number" className="form-control" required />
              <br />
              <label htmlFor="product-price">Product Price</label>
              <input type="number" className="form-control" required />
              <br />
              <label htmlFor="product-img">Product Image</label>
              <input type="file" className="form-control" id="file" required />
              <br />

              <button type="submit" className="btn btn-success">
                ADD
              </button>
              <NavLink className="btn btn-danger ml-2" to="/">
                Back
              </NavLink>
            </form>

            <hr />
            <div></div>
          </div>
        </div> */}

        <div className="products-container">
          <button className="btn btn-primary w-full">Reset</button>
          {products.length === 0 && (
            <div>slow internet...no products to display</div>
          )}
          {products.map((product) => (
            <div className="product-card " key={product.ProductID}>
              <div className="product-img">
                <img src={product.ProductImg} alt="not found" />
              </div>
              <div className="product-name">{product.ProductName}</div>
              <div className="product-price">Rs {product.ProductPrice}.00</div>
              <button
                className="addcart-btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    id: product.ProductID,
                    product,
                  })
                }
              >
                ADD TO CART
              </button>
              <button
                className="addcart-btn"
                onClick={(e) => {
                  e.preventDefault();

                  return alert(JSON.stringify(product.ProductID));
                  deleteProduct(product.ProductID);
                }}
              >
                DELETE
              </button>
              <button
                className="addcart-btn"
                onClick={(e) => {
                  e.preventDefault();
                  deleteProduct(product.ProductID);
                }}
              >
                EDIT
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
