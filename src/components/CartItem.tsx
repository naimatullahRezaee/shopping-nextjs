import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";

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
    <div className="mx-3">
      <div className="flex justify-between  shadow-md mb-8 h-50 rounded p-2 bg-gray-200">
        <img className="w-54 h-44" src={product.image} alt="" />
        <div className="w-44 px-4">
          <h2 className="font-bold">{product.title} </h2>
          <p className="font-bold">
            Quantity: <span>{qty}</span>
          </p>
          <p className="font-bold">
            price: <span>{product.price}$</span>
          </p>
          <div className="mt-3">
            <AddToCart id={id.toString()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
