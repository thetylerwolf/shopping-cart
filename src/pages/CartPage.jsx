import { Link } from "react-router-dom";
import { products } from "../data";
import useCart from "../hooks/useCart";

export default function CartPage() {
  const { get, add, remove } = useCart();
  const cartItems = get();

  if (!cartItems.length) {
    return (
      <div>
        <div>No Items in Cart!</div>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return cartItems.map((item) => {
    const foundItem = products.find((product) => {
      return product.id === item.id;
    });

    if (foundItem) {
      return (
        <CartItem
          count={item.count}
          product={foundItem}
          onAdd={add}
          onRemove={remove}
        />
      );
    } else return undefined;
  });
}

function CartItem({ count, product, onAdd, onRemove }) {
  const { name, price, image } = product;

  return (
    <div style={{ padding: "2em", display: "flex" }}>
      <img width={75} height={75} src={image} alt={name} />
      <p>
        {name} - {price} SEK
      </p>
      <p style={{ marginLeft: 20 }}>{count} in cart</p>
      <button
        style={{ marginLeft: 20 }}
        onClick={(e) => {
          e.preventDefault();
          onAdd(product.id, 1);
        }}
      >
        + Add to cart
      </button>
      <button
        style={{ marginLeft: 20 }}
        onClick={(e) => {
          e.preventDefault();
          onRemove(product.id, 1);
        }}
      >
        - Remove from cart
      </button>
    </div>
  );
}
