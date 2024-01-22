import useCart from "../hooks/useCart";

function Cart() {
  const { cart } = useCart();
  const cartItems = cart;

  let count = 0;

  cartItems.forEach((d) => (count += d.count));

  return <div>Cart ({count})</div>;
}

export default Cart;
