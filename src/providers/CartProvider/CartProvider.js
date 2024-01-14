import { useState } from "react";
import CartProviderContext from "./CartProvider.context";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]),
    [count, setCount] = useState(0);

  const get = () => {
    return cart;
  };

  // const set = () => {};

  const add = (id, quantity) => {
    // setCount(count + 1);
  };

  const remove = (id, quantity) => {
    // setCount(count - 1);
  };

  const value = {
    get,
    // set,
    add,
    remove,
    count,
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
