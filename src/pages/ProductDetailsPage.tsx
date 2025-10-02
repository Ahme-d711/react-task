import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../hooks/useActions';
import { useProductStore } from '../store/productStore';

const ProductDetails = () => {
  const { id } = useParams();
  const { product, addToCart } = useProductStore();

  useEffect(() => {
    if (id) getProductDetails(id);
  }, [id]);

  if (!product) return <div className="text-red-600 text-center text-xl font-semibold mt-8">Product not found</div>;
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8 bg-card rounded-lg shadow-lg p-6">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            className="w-full h-96 object-contain rounded-lg"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-card-foreground mb-4">{product.title}</h1>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-destructive mb-4">${product.price}</p>
            <p className="text-card-foreground mb-2">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="text-card-foreground mb-6">
              <span className="font-semibold">Rating:</span> {product.rating.rate} / 5 ({product.rating.count} reviews)
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="w-full sm:w-auto bg-ring text-white font-medium py-2 px-6 rounded hover:bg-ring/80 transition duration-300"
              onClick={() => window.history.back()}
            >
              Back to Products
            </button>
            <button
              className="w-full sm:w-auto bg-destructive text-white font-medium py-2 px-6 rounded hover:bg-destructive/80 transition duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;