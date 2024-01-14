function Cart({ cartItems }) {
  let count = 0;

  cartItems.forEach((d) => (count += d.count));

  return <div>Cart ({count})</div>;
}

export default Cart;
