import { Link } from "react-router-dom";
import { products } from "../data";
import styles from "./CartPage.module.css";

import useCart from "../hooks/useCart";
import { addItem, removeItem } from "../api";

export default function CartPage() {
  const { cart, setCart } = useCart();
  const cartItems = cart;

  if (!cartItems.length) {
    return (
      <div className={styles.noItems}>
        <div>No Items in Cart!</div>
        <Link to="/">
          <span className={styles.link}>Back to Home</span>
        </Link>
      </div>
    );
  }

  const onAdd = async (id) => {
    const cart = await addItem(id, 1);
    setCart(cart);
  };

  const onRemove = async (id) => {
    const cart = await removeItem(id, 1);
    setCart(cart);
  };

  return (
    <div>
      {cartItems.map((item) => {
        const foundItem = products.find((product) => {
          return product.id === +item.id;
        });

        if (foundItem) {
          return (
            <div className={styles.container}>
              <CartItem
                count={item.count}
                product={foundItem}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </div>
          );
        } else return undefined;
      })}
    </div>
  );
}

function CartItem({ count, product, onAdd, onRemove }) {
  const { name, price, image } = product;

  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.description}>
        <p className={styles.title}>
          {name} - {price} SEK
        </p>
        <p>x {count}</p>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              onAdd(product.id);
            }}
          >
            +
          </button>
          <button
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              onRemove(product.id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
