import { useProductStore } from "../store/productStore";
import ProductCard from "./ProductsCard";

export default function ProductList() {
  const { productsList: products } = useProductStore();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Featured Products</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
      {products?.map((product) => (
        <ProductCard product={product}/>
      ))}
    </div>
    </div>
  )
}
