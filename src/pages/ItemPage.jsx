import { useParams } from "react-router-dom";

import useGetProduct from "../hooks/useGetProduct";
import styles from "./ItemPage.module.css";
import useCart from "../hooks/useCart";

export default function ItemPage() {
  const { id } = useParams();
  const { product } = useGetProduct(id);
  const { add } = useCart();
  const item = product;

  if (!item) return <div>Item not found</div>;

  const { name, image, price, description } = item;

  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.title}>
        {name} - {price} SEK
      </p>
      <button className={styles.button} onClick={() => add(id, 1)}>
        + Add to cart
      </button>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
