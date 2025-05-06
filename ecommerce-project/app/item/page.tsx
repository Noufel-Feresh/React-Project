"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/utilitis/CartContext";
import { products } from "../data";

export default function ItemDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { tempCart, setTempCart } = useContext(CartContext);

  const item = products.find((product) => product.id === parseInt(params.id));

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAddtoCart = () => {
    const itemIndex = tempCart.findIndex((it) => it.productId === item.id);

    if (itemIndex === -1) {
      setTempCart([
        ...tempCart,
        {
          productId: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          count: 1,
        },
      ]);
    } else {
      const newCart = [...tempCart];
      newCart[itemIndex].count++;
      setTempCart(newCart);
    }
  };

  return (
    <div className="item-details">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: Rs. {item.price}</p>
      <button onClick={handleAddtoCart}>Add to Cart</button>
      <button onClick={() => router.push("/cart")}>Go to Cart</button>
    </div>
  );
}