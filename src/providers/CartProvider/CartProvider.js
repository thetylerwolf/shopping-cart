import { createContext } from "react";
import { useState } from "react";

export const CartProviderContext = createContext({
  get: () => [],
  set: () => {},
  add: () => {},
  remove: () => {},
  count: 0,
  totalValue: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]),
    [count, setCount] = useState(0);

  const get = () => {
    return cartItems;
  };

  const addRemoveFromCart = (id, quantity) => {
    let foundItemInCart = false;

    const cart = cartItems.map((d) => {
      let newCount = d.count;

      if (d.id === id) {
        foundItemInCart = true;
        newCount = newCount + quantity;
      }

      return {
        ...d,
        count: newCount,
      };
    });

    if (!foundItemInCart && quantity > 0) {
      cart.push({ id, count: quantity });
    }

    const readyCart = cart.filter((d) => d.count > 0);

    setCartItems(readyCart);
  };

  const add = (id, quantity) => {
    addRemoveFromCart(id, quantity);
  };

  const remove = (id, quantity) => {
    addRemoveFromCart(id, -quantity);
  };

  const value = {
    get,
    add,
    remove,
    // count,
    // totalValue
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
