import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import { log } from "console";

interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItemProps) {
  const [product, setProducts] = useState({} as IProductItemProps);
  useEffect(() => {
    axios(`http://localhost:3001/products/${id}`).then((result) => {
      const { data } = result;
      setProducts(data);
    });
  }, [id]);

  return (
    <div>
      <div className="grid grid-cols-12 shadow-md m-4 h-50 rounded p-2 bg-gray-200">
        <img className="col-span-3 h-44" src={product.image} alt="" />
        <div className="col-span-9 px-4">
          <h2 className="font-bold">{product.title} </h2>
          <p className="font-bold">
            Quantity: <span>{qty}</span>
          </p>
          <p className="font-bold">
            price: <span>{product.price}$</span>
          </p>
          <div className="mt-3">
            <button className="px-4 py-1 rounded bg-sky-500 text-white">
              +
            </button>
            <span className="mx-2">{qty}</span>
            <button className="px-4 py-1 rounded bg-sky-500 text-white">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
