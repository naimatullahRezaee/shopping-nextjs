"use client";
import CartItem from "@/components/CartItem";

import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IDiscountData {
  id: number;
  code: string;
  percentage: number;
}

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>([]);
  const [discountCode, setDiscountCode] = useState<IDiscountData[]>([]);
  const [descountCode, setDescountCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  useEffect(() => {
    axios("http://localhost:3001/products").then((result) => {
      const { data } = result;
      setData(data);
    });
  });
  useEffect(() => {
    axios("http://localhost:3001/discounts").then((result) => {
      const { data } = result;
      setDiscountCode(data);
    });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = data.find(
      (product) => product.id === item.id.toString()
    );
    return total + Number(selectedProduct?.price || 0) * item.qty;
  }, 0);
  const handleDescount = () => {
    axios(`http://localhost:3001/discounts?code=${descountCode}`).then(
      (result) => {
        const data = result.data as IDiscountData[];
        const discountPrice = (totalPrice * data[0].percentage) / 100;
        const finalPrice = totalPrice - discountPrice;
        setFinalPrice(finalPrice);
        setDiscountPrice(discountPrice);
      }
    );
  };

  return (
    <Container>
      <h1 className="m-4 font-bold">Shopping</h1>
      <div className="flex justify-between">
        <div className="grid grid-cols-2 gap-x-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="bg-gray-200 rounded mb-4 p-4 h-[540px] w-[320px] ">
          <div className="mb-6">
            <h3>
              Total Price:
              <span>{totalPrice}$</span>
            </h3>
            <h3>
              Off Price: <span>{discountPrice}</span> $
            </h3>
            <h3>
              Final Price: <span>{finalPrice}</span> $
            </h3>
            <input
              type="text"
              onChange={(e) => setDescountCode(e.target.value)}
              placeholder="Add code off"
              className="border"
            />
            <button
              onClick={handleDescount}
              className="bg-sky-500 px-4 py-1 ml-2 text-white rounded"
            >
              Add
            </button>
          </div>
          <div className="">
            <h2 className="font-bold">List Off Code: </h2>
            <div className="grid grid-cols-4 gap-8 text-center mt-4">
              {discountCode.map((item) => (
                <h4 className="col-span-2" key={item.id}>
                  {item.code}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
