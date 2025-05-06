"use client";
import React, { createContext, useState, ReactNode } from "react";

interface CartContextType {
  tempCart: any[];
  setTempCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [tempCart, setTempCart] = useState<any[]>([]);

  return (
    <CartContext.Provider value={{ tempCart, setTempCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;