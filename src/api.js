import { backendURL } from "./constants";

export const fetchData = async (path, method, payload) => {
  const response = await fetch(backendURL + path, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const json = await response.json();

  return json;
};

export const addItem = async (id, quantity) =>
  await fetchData("/cart/add", "PUT", { id, quantity });

export const removeItem = async (id, quantity) =>
  await fetchData("/cart/remove", "PUT", { id, quantity });
