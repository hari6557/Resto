import React from "react";
import "./Nav.css";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

function Nav() {
  return (
    <div className="nav_content">
      <h3 className="title ">Resto Cafe</h3>
      <h5 className="orders">My orders</h5>
      <ShoppingCart className="cart" />
    </div>
  );
}

export default Nav;
