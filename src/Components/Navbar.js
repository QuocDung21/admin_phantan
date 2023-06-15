import React, { useContext } from "react";
import logo from "../images/ecommerce.svg";
import { Link } from "react-router-dom";
import { auth } from "../Config/Config";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { useHistory } from "react-router-dom";
import { CartContext } from "../Global/CartContext";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AddProductsPhantan, AddUsersPhantan } from "../import/apiPhantan";

export const Navbar = ({ user }) => {
  const history = useHistory();
  const { totalQty } = useContext(CartContext);
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="navbox flex justify-around">
      {/* <div className="leftside ">
        <img src={logo} alt="" />
      </div> */}
      <div className="leftside cursor-pointer ">
        <NavLink className="text-decoration-none" to="/addusers">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Users
          </span>
        </NavLink>
        <NavLink className="text-decoration-none" to="/">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Products
          </span>
        </NavLink>
        <NavLink className="text-decoration-none" to="/addcategories">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Categorys
          </span>
        </NavLink>
        <NavLink className="text-decoration-none" to="/addbrands">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Brands
          </span>
        </NavLink>
        <NavLink className="text-decoration-none" to="/addblogs">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Blogs
          </span>
        </NavLink>
        <NavLink className="text-decoration-none" to="/addreviews">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Reviews
          </span>
        </NavLink>{" "}
        <NavLink className="text-decoration-none" to="/addcontacts">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Contacts
          </span>
        </NavLink>{" "}
        <NavLink className="text-decoration-none" to="/addorders">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Orders
          </span>
        </NavLink>{" "}
        <NavLink className="text-decoration-none" to="/addcateblog">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Cate Blog
          </span>
        </NavLink>{" "}
        <NavLink className="text-decoration-none" to="/luocdo">
          <span className="ml-3 cursor-pointer text-xl font-weight-bold">
            Phân tán
          </span>
        </NavLink>{" "}
        {/* addcateblog */}
      </div>
      {!user && (
        <div className="rightside">
          <span>
            <Link to="signup" className="navlink">
              SIGN UP
            </Link>
          </span>
          <span>
            <Link to="login" className="navlink">
              LOGIN
            </Link>
          </span>
        </div>
      )}
      {user && (
        <div className="rightside">
          <span>
            <Link to="/" className="navlink">
              {user}
            </Link>
          </span>
          <span>
            <Link to="cartproducts" className="navlink">
              <Icon icon={cart} />
            </Link>
          </span>
          <span className="no-of-products">{totalQty}</span>
          <span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </span>
        </div>
      )}
    </div>
  );
};
