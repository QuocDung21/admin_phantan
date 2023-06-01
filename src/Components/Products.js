import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import { db } from "../Config/Config";
import { deleteProduct } from "../import/apiFirebase";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const updatedData = {
    ProductName: "New Product Name",
    ProductPrice: 99.99,
    ProductImg: "https://example.com/new-image.jpg",
  };
  return (
    <>
      <div>
        {products.length !== 0 && <h1 className="">Products List </h1>}
        <div className="products-container">
          {products.length === 0 && (
            <div>slow internet...no products to display</div>
          )}
          {products.map((product) => (
            <div className="product-card" key={product.ProductID}>
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
