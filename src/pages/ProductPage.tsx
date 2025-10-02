import { useProductStore } from '../store/productStore'
import ProductCard from '../components/ProductsCard';
import { useEffect } from 'react';
import { getProducts } from '../hooks/useActions';
import Pagination from '../components/Pagination';

export default function ProductPage() {
  const {products} = useProductStore();


  useEffect(() => {
    getProducts();
  },[])

  if (!products) return <div className="text-red-600 text-center text-xl font-semibold mt-8">Product not found</div>;

  return (
      <div className="space-y-4 mt-8">
        <h1 className="text-2xl font-bold">All Products</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {products?.map((product) => (
          <ProductCard product={product}/>
        ))}
      </div>
      <div className="">
        <Pagination />
      </div>
      </div>
  )
}
