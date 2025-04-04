import React, { useContext } from "react";
import { CartContext } from "@/utilitis/CartContext";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { tempCart } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="navbar-name">Ecommerce Basics</div>
      <div className="navbar-links">
 {/* <div className="cart">Cart Items: {tempCart.length}</div>*/}        <div className="navbar-links-item" onClick={() => redirect("/")}>
          Home
        </div>

        <div className="navbar-links-item" onClick={() => redirect("/cart")}>
          Cart:{tempCart.length}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
