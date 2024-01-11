import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import Root from "./pages/Root";

function App() {
  const [cartItems, setCartItems] = useState(0);

  function handleAddToCart() {
    const newItemCount = cartItems + 1;
    setCartItems(newItemCount);
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
