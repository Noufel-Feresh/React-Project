"use client";
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [tempCart, setTempCart] = useState<any>([]);
  return (
    <CartContext.Provider value={{ count, setCount, tempCart, setTempCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;