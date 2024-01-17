import useCart from "../hooks/useCart";

function Product({ product }) {
  const { name, price, image } = product;
  const { add, remove } = useCart();

  return (
    <div style={{ padding: "2em" }}>
      <img width={200} height={200} src={image} alt={name} />
      <p style={{ textDecoration: "none" }}>
        {name} - {price} SEK
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          add(product.id, 1);
        }}
      >
        + Add to cart
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          remove(product.id, 1);
        }}
      >
        - Remove from cart
      </button>
    </div>
  );
}

export default Product;
