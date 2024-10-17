import { Product } from "@prisma/client";
import { axiosInstance } from "./axios";

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product>("/product/search", {
    params: { query },
  });
  return data;
};
