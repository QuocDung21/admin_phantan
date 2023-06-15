import React, { Component } from "react";
import { ProductsContextProvider } from "./Global/ProductsContext";
import { Home } from "./Components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";
import { NotFound } from "./Components/NotFound";
import { auth, db } from "./Config/Config";
import { CartContextProvider } from "./Global/CartContext";
import { Cart } from "./Components/Cart";
import { AddProducts } from "./Components/AddProducts";
import { Cashout } from "./Components/Cashout";
import ListProduct from "./Components/admin/ListProduct";
import Layouts from "./Components/layout/layout";
import { AddUsers } from "./Components/users/AddUsers";
import { Navbar } from "./Components/Navbar";
import { AddBrand } from "./Components/brand/AddBrand";
import AddCategorys from "./Components/AddCategorys";
import { AddBlogs } from "./Components/AddBlogs";
import AddRiews from "./Components/AddRiews";
import AddContacts from "./Components/AddContacts";
import AddOrders from "./Components/AddOrders";
import AddCateblogs from "./Components/AddCateblogs";
import lucdo from "./Components/lucdo";

export class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            this.setState({
              user: snapshot?.data()?.Name,
            });
          });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }
  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Switch>
              {/* home */}
              <Route
                exact
                path="/"
                component={() => <Home user={this.state.user} />}
              />
              {/* signup */}
              <Route path="/signup" component={Signup} />
              {/* login */}
              <Route path="/login" component={Login} />
              {/* cart products */}
              <Route
                path="/cartproducts"
                component={() => <Cart user={this.state.user} />}
              />
              {/* add products */}
              <Route path="/addproducts" component={AddProducts} />
              {/* cashout */}
              <Route path="/addusers" component={AddUsers} />
              <Route path="/addbrands" component={AddBrand} />
              <Route path="/addcategories" component={AddCategorys} />
              <Route path="/addblogs" component={AddBlogs} />
              <Route path="/addreviews" component={AddRiews} />
              {/* <Route path="/addcontacts" component={AddRiews} /> */}
              <Route path="/addcontacts" component={AddContacts} /> //Orders
              <Route path="/addorders" component={AddOrders} />
              <Route path="/addcateblog" component={AddCateblogs} />
              <Route path="/luocdo" component={lucdo} />
              <Route
                path="/cashout"
                component={() => <Cashout user={this.state.user} />}
              />
              <Route path="/listproducts" component={() => <Layouts />} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    );
  }
}

export default App;
