import { useContext } from "react";
import { CartProviderContext } from "../providers/CartProvider/CartProvider";

export default function useCart() {
  return useContext(CartProviderContext);
}
