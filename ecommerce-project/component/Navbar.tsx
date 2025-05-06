"use client";

import React, { useContext } from "react";
import { CartContext } from "@/utilitis/CartContext";
import { redirect } from "next/navigation";

const Navbar = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { tempCart } = context;

  return (
    <div className="navbar">
      <div className="navbar-name">Ecommerce Basics</div>
      <div className="navbar-links">
        <div className="navbar-links-item" onClick={() => redirect("/")}>
          Home
        </div>
        <div className="navbar-links-item" onClick={() => redirect("/cart")}>
          Cart: {tempCart?.length || 0}
        </div>
      </div>
    </div>
  );
};

export default Navbar;