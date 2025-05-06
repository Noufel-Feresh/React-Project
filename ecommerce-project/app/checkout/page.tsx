"use client";

import { useContext } from "react";
import { CartContext } from "@/utilitis/CartContext";

const CheckoutPage = () => {
  const { tempCart, setTempCart } = useContext(CartContext);

  const totalPrice = tempCart.reduce((acc, item) => acc + item.price * item.count, 0);

  const handlePlaceOrder = () => {
    alert("Order is placed!");
    setTempCart([]); // Clear the cart after placing the order
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <table className="checkout-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {tempCart.map((item) => (
            <tr key={item.productId}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.count}</td>
              <td>Rs. {item.price}</td>
              <td>Rs. {item.price * item.count}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} style={{ textAlign: "right" }}><strong>Total Price:</strong></td>
            <td><strong>Rs. {totalPrice}</strong></td>
          </tr>
        </tfoot>
      </table>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;