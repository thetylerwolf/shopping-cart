import Body from "../components/Body";

function Shop({ handleAddToCart, handleRemoveFromCart }) {
  return <Body onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />;
}

export default Shop;
