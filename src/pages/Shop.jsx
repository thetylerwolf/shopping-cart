import Body from "../components/Body";
import Header from "../components/Header";

function Shop({ cartItems, handleAddToCart }) {
  return (
    <div>
      <Header cartItems={cartItems} />
      <Body onAdd={handleAddToCart} />
    </div>
  );
}

export default Shop;
