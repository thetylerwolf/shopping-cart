import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import Root from "./pages/Root";
import CartPage from "./pages/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item, quantity = 1) {
    let foundItemInCart = false;
    const { id } = item;

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
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root cartItems={cartItems} />}>
          <Route
            index
            element={
              <Shop cartItems={cartItems} handleAddToCart={handleAddToCart} />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} onAddRemove={handleAddToCart} />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ItemPage
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
