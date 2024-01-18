import styles from "./Product.module.css";
import useCart from "../hooks/useCart";
import { addItem, removeItem } from "../api";

function Product({ product }) {
  const { setCart } = useCart();
  const { name, price, image } = product;
  const onAdd = async (id) => {
    const cart = await addItem(id, 1);
    setCart(cart);
  };

  const onRemove = async (id) => {
    const cart = await removeItem(id, 1);
    setCart(cart);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <p className={styles.title}>
        {name} - {price} SEK
      </p>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            onAdd(product.id);
          }}
        >
          + Add
        </button>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            onRemove(product.id);
          }}
        >
          - Remove
        </button>
      </div>
    </div>
  );
}

export default Product;
