import { Product } from "../state/types";

export const fetchProducts = async (limit = 10, skip = 0): Promise<Product[]> => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.products;
};
