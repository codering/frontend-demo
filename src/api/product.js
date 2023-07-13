import { useQuery } from "react-query";
import { api } from "./apiClient";

export const productKeyFactory = {
  products: ["all-products"],
  productById: (id) => [...productKeyFactory.products, id],
};

export const getAllProducts = async () => {
  return (await api.get("/products")).data;
};

export const useGetAllProducts = (options) => {
  return useQuery({
    queryKey: [...productKeyFactory.products],
    queryFn: getAllProducts,
    ...options,
  });
};

export const getProductById = async (productId) => {
  return (await api.get(`/products/${productId}`)).data;
};

export const useGetProductById = (productId, options) => {
  return useQuery({
    queryFn: () => getProductById(productId),
    queryKey: [...productKeyFactory.productById(productId)],
    ...options,
  });
};
