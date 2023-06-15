import React, { createContext } from "react";
import { db } from "../Config/Config";

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const prevProducts = this.state.products;
    db.collection("Products").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          prevProducts.push({
            ProductID: change.doc.data().id,
            ProductName: change.doc.data().title,
            ProductPrice: change.doc.data().ProductPrice,
            ProductImg:
              change.doc.data().images.length > 0
                ? change.doc.data().images[0].url
                : "",
          });
        }
        this.setState({
          products: prevProducts,
        });
      });
    });
  }
  render() {
    return (
      <ProductsContext.Provider value={{ products: [...this.state.products] }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
