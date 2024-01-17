import { useContext } from "react";
import CartProviderContext from "./CartProvider.context";

export default function useCart() {
  return useContext(CartProviderContext);
}
