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
  handleDecreaseProductQty: (id: number) => void;
  handleReomveProduct: (id: number) => void;
  getProductQty: (id: number) => number;
  cartTotalQty: number;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppinCartContextProvider({
  children,
}: ShoppinCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItems[]>([]);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const cartTotalQty = cartItems.reduce((totalqty, item) => {
    return totalqty + item.qty;
  }, 0);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const inNotProductExist =
        currentItem.find((item) => item.id === id) == null;

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

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const isLastOne = currentItem.find((item) => item.id == id)?.qty == 1;
      if (isLastOne) {
        return currentItem.filter((item) => item.id != id);
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleReomveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleReomveProduct,
        cartTotalQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
