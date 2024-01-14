import { Link } from "react-router-dom";

import Product from "./Product";
import { products } from "../data";

function Body({ onAdd, onRemove }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => {
        const { id } = product;

        return (
          <Link to={`/product/${id}`} key={id}>
            <Product product={product} onAdd={onAdd} onRemove={onRemove} />
          </Link>
        );
      })}
    </div>
  );
}

export default Body;
