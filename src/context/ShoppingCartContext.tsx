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
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppinCartContextProvider({
  children,
}: ShoppinCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItems[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
