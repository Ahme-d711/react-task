import axios from "axios";
import { useProductStore } from "../store/productStore";
import type { Product } from "../types/productType";


export const getProductsList = async () => {
    const response = await axios.get<Product[]>(`https://fakestoreapi.com/products`);
    if(response.data){
      const products = response.data.slice(0,6)
      useProductStore.getState().setProductsList(products);
      return products;
    }
  };

export const getProductDetails = async (id: string) => {
  const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
  if(response.data){
    useProductStore.getState().setProduct(response.data);
    return response.data;
  }
};

export const getProducts = async () => {
  const response = await axios.get<Product[]>(`https://fakestoreapi.com/products`);
  if(response.data){
    const products = response.data.slice(0,9);
    useProductStore.getState().setProducts(products);
    return response.data;
  }
};