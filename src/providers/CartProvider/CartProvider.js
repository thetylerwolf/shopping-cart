import { createContext, useEffect, useState } from "react";

import { backendURL } from "../../constants";

export const CartProviderContext = createContext({
  setCart: () => {},
  cart: [],
  count: 0,
  totalValue: 0,
});

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState({
    cart: [],
    count: 0,
    totalValue: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(backendURL + "/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setCartState(json);
    };
    fetchData();
  }, []);

  const setCart = (cart) => setCartState(cart);

  const value = {
    setCart,
    cart: cartState?.cart,
    count: cartState?.count,
    totalValue: cartState?.totalValue,
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
