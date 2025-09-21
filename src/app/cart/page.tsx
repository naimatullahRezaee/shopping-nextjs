import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";

function Cart() {
  return (
    <Container>
      <h1 className="m-4 font-bold">Shopping</h1>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />

        <div className="bg-gray-300 mb-4 p-4">
          <h3>Total Price: 435$</h3>
          <h3>Off Price: 435$</h3>
          <h3>Price: 435$</h3>
          <input type="text" placeholder="Add code off" className="border" />
          <button className="bg-sky-500 px-4 py-1 text-white rounded">
            Add
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
