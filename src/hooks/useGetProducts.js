import useFetch from "./useFetch";

export default function useGetProducts() {
  const { data } = useFetch("/products", "GET");
  return { products: data };
}
