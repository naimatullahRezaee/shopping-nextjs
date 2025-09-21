"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface IAddToCartProps {
  id: string;
}
function AddToCart({ id }: IAddToCartProps) {
  const { cartItems, handleIncreaseProductQty } = useShoppingCartContext();
  return (
    <div>
      <div className="mt-3">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="px-4 py-1 rounded bg-sky-500 text-white"
        >
          +
        </button>
        <span className="mx-2">68</span>
        <button className="px-4 py-1 rounded bg-sky-500 text-white">-</button>
      </div>
    </div>
  );
}

export default AddToCart;
