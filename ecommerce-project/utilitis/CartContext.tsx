"use client";
import React, { createContext, useState, ReactNode } from "react";
import { CartItem } from "@/app/data";

interface CartContextType {
  tempCart: CartItem[];
  setTempCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [tempCart, setTempCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ tempCart, setTempCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;