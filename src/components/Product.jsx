import styles from './Product.module.css';
import useCart from "../hooks/useCart";

function Product({ product }) {
  const { name, price, image } = product;
  const { add, remove } = useCart();

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
            add(product.id, 1);
          }}
        >
          + Add
        </button>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            remove(product.id, 1);
          }}
        >
          - Remove
        </button>
      </div>
    </div>
  );
}

export default Product;
