import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Product from "../components/Product";
import { products } from "../data";

export default function ItemPage({ handleAddToCart, cartItems }) {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const foundItem = products.find((p) => {
      return p.id === +id;
    });
    setItem(foundItem);
  }, [id]);

  if (!item) return <div>Item not found</div>;

  const { description } = item;

  return (
    <div style={{ display: "flex" }}>
      <Product product={item} onAdd={handleAddToCart} />
      <div style={{ marginTop: "10em" }}>{description}</div>
    </div>
  );
}
