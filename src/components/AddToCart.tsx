"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

function AddToCart() {
  const { cartItems } = useShoppingCartContext();
  return (
    <div>
      <div className="mt-3">
        <button className="px-4 py-1 rounded bg-sky-500 text-white">+</button>
        <span className="mx-2">20</span>
        <button className="px-4 py-1 rounded bg-sky-500 text-white">-</button>
      </div>
    </div>
  );
}

export default AddToCart;
