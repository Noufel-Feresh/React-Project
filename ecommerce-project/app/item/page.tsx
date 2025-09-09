"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/utilitis/CartContext";
import { products, type Product } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ItemDetails({ params }: PageProps) {
  const router = useRouter();
  const context = useContext(CartContext);
  const [item, setItem] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  if (!context) {
    throw new Error('ItemDetails must be used within a CartProvider');
  }

  const { tempCart, setTempCart } = context;

  useEffect(() => {
    const getParams = async () => {
      const { id } = await params;
      const foundItem = products.find((product) => product.id === parseInt(id));
      setItem(foundItem || null);
      setLoading(false);
    };
    getParams();
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

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