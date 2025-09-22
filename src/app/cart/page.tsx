"use client";
import CartItem from "@/components/CartItem";

import Container from "@/components/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import React from "react";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <Container>
      <h1 className="m-4 font-bold">Shopping</h1>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="bg-gray-300 mb-4 p-4">
        <h3>Total Price: 435$</h3>
        <h3>Off Price: 435$</h3>
        <h3>Price: 435$</h3>
        <input type="text" placeholder="Add code off" className="border" />
        <button className="bg-sky-500 px-4 py-1 text-white rounded">Add</button>
      </div>
    </Container>
  );
}

export default Cart;
