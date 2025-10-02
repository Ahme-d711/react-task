import { create } from "zustand";
import type { Product } from "../types/productType";

interface ProductStore {
  products: Product[] | null;
  productsList: Product[] | null;
  product: Product | null;
  cart: Product[] | null;
  setProducts: (products: Product[]) => void;
  setProductsList: (productsList: Product[]) => void;
  setProduct: (product: Product) => void;
  addToCart: (product: Product) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: null,
  productsList: null,
  product: null,
  cart: null,
  setProducts: (products) => set({ products }),
  setProductsList: (productsList) => set({ productsList }),
  setProduct: (product) => set({ product }),
  addToCart: (product) => {
    const cart = useProductStore.getState().cart;
    if (cart) {
      set({ cart: [...cart, product] });
    } else {
      set({ cart: [product] });
    }
  }
}));