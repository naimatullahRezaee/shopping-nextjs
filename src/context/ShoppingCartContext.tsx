"use client";
import { createContext, useContext, useState } from "react";

type ShoppinCartContextProviderProps = {
  children: React.ReactNode;
};
type TCartItems = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
  cartItems: TCartItems[];
  handleIncreaseProductQty: (id: number) => void;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppinCartContextProvider({
  children,
}: ShoppinCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItems[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const inNotProductExist =
        currentItem.find((item) => (item.id = id)) == null;
      if (inNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
