function Product(props) {
  const { name, price, image, onAdd } = props;

  return (
    <div>
      <img src={image} alt={name} />
      <p>
        {name} - {price} SEK
      </p>
      <button onClick={onAdd}>+ Add to cart</button>
    </div>
  );
}

export default Product;
