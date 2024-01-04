import Product from "./Product";
import { products } from "../data";

function Body(props) {
  const { onAdd } = props;

  return (
    <div style={{ display: "flex" }}>
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
