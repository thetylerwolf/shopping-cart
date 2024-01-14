function Product({ product, onAdd, onRemove }) {
  const { name, price, image } = product;

  return (
    <div style={{ padding: "2em" }}>
      <img width={200} height={200} src={image} alt={name} />
      <p style={{ textDecoration: "none" }}>
        {name} - {price} SEK
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          onAdd(product, 1);
        }}
      >
        + Add to cart
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(product, 1);
        }}
      >
        - Remove from cart
      </button>
    </div>
  );
}

export default Product;
