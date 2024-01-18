import useCart from "../hooks/useCart";

function Cart() {
  const { count } = useCart();

  return <div>Cart ({count})</div>;
}

export default Cart;
