const API_URL = "http://localhost:5000/api/products";

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
