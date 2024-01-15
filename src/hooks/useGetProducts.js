// import { useEffect, useState } from "react";
// import useFetch from "./useFetch";
import { products } from "../data";

export default function useGetProducts() {
  return { products };
  // const { data } = useFetch("/products");
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   setProducts(data);
  // }, [data]);
  // return { products };
}
