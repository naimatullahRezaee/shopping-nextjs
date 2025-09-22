"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface IAddToCartProps {
  id: string;
}
function AddToCart({ id }: IAddToCartProps) {
  const {
    cartItems,
    handleIncreaseProductQty,
    getProductQty,
    handleDecreaseProductQty,
    handleReomveProduct,
  } = useShoppingCartContext();
  return (
    <div>
      <div className="mt-3">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="px-4 py-1 rounded bg-sky-500 text-white"
        >
          +
        </button>
        <span className="mx-2">{getProductQty(parseInt(id))}</span>
        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="px-4 py-1 rounded bg-sky-500 text-white"
        >
          -
        </button>
      </div>
      <button
        onClick={() => handleReomveProduct(parseInt(id))}
        className="bg-red-500 text-white rounded px-2 py-1 mt-2"
      >
        Remove
      </button>
    </div>
  );
}

export default AddToCart;
