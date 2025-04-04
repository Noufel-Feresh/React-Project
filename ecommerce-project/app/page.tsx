"use client";

import Navbar from "@/component/Navbar";
import { cart, products } from "./data";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/utilitis/CartContext";

const prices = [
  {
    type: 0,
    minPrice: 0,
    maxPrice: 100,
    price: "0-100",
  },
  {
    type: 1,
    minPrice: 100,
    maxPrice: 200,
    price: "100-200",
  },
  {
    type: 2,
    minPrice: 200,
    maxPrice: 300,
    price: "200-300",
  },
  {
    type: 4,
    minPrice: 300,
    maxPrice: 100000,
    price: "300 & above",
  },
];

export default function Home() {
  const [tempData, setTempData] = useState<any>([]);
  const { tempCart, setTempCart } = useContext(CartContext);

  const [selectedPrice, setSelectedPrice] = useState([]);

  useEffect(() => {
    if (selectedPrice.length === 0) {
      setTempData(products);
    } else {
      setTempData(() => {
        return selectedPrice.flatMap((item) =>
          products.filter(
            (it) => it.price >= item.minPrice && it.price <= item.maxPrice
          )
        );
      });
    }
  }, [selectedPrice]);

  const handleAddtoCart = (item) => {
    let itemIndex = tempCart.findIndex((it) => it.productId === item.id);

    console.log(itemIndex);
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
      console.log("newCart", newCart);
      setTempCart(newCart);
    }
  };

  console.log("Cart", tempCart);

  return (
    <div className="home">
      <Navbar />

      <div className="home-sidebar">


        <div className="home-sidebar-heading">Price based filter</div>
        <div className="home-sidebar-prices">
          {prices.map((item) => {
            return (
              <label
                className="home-sidebar-prices-item"
                key={item.type}
                htmlFor={item.price}
              >
                <input
                  type="checkbox"
                  name="price"
                  id={item.price}
                  // checked={item.price === selectedPrice.price}
                  onChange={() => {
                    if (selectedPrice.includes(item)) {
                      setSelectedPrice(
                        selectedPrice.filter((prop) => prop.type !== item.type)
                      );
                    } else {
                      setSelectedPrice([...selectedPrice, item]);
                    }
                  }}
                />
                {item.price}
              </label>
            );
          })}
        </div>
      </div>
      <div className="home-data">


        {tempData.map((item, ind) => {
          return (
            <div className="home-data-item" key={ind}>
              <div className="home-data-item-name">{item.name}</div>
              <div className="home-data-item-description">
                {item.description}
              </div>
              <div className="home-data-item-price">
                Price: <span>Rs. {item.price}</span>
              </div>
              <button
                className="home-data-item-button"
                onClick={() => handleAddtoCart(item)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/*

[]
we update our array based on the price we selected

we create a copy of out data

we updated our copied data based on the price selected

{
  productId:
  name: 
  description:
  count:
}





*/