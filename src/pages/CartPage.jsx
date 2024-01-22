import { Link } from "react-router-dom";
import { products } from "../data";
import styles from "./CartPage.module.css";

import useCart from "../hooks/useCart";

export default function CartPage() {
  const { cart, add, remove } = useCart();
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

  return (
    <div>
      {cartItems.map((item) => {
        const foundItem = products.find((product) => {
          return product.id === item.id;
        });

        if (foundItem) {
          return (
            <div className={styles.container} key={item.id}>
              <CartItem
                count={item.count}
                product={foundItem}
                onAdd={add}
                onRemove={remove}
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
              onAdd(product.id, 1);
            }}
          >
            +
          </button>
          <button
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              onRemove(product.id, 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
