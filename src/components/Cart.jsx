import { useCart } from "../providers/CartProvider/CartProvider.hook";

function Cart() {
  const { get } = useCart();
  const cartItems = get();

  let count = 0;

  cartItems.forEach((d) => (count += d.count));

  return <div>Cart ({count})</div>;
}

export default Cart;
