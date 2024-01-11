import Product from "./Product";
import { products } from "../data";

function Body({ onAdd }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => {
        const { name, price, image } = product;

        return (
          <Product name={name} price={price} image={image} onAdd={onAdd} />
        );
      })}
    </div>
  );
}

export default Body;
