import useFetch from "./useFetch";

export default function useGetProduct(id) {
  const { data } = useFetch(`/products/${id}`);
  const product = data;
  return { product };
}
