import { Link } from "react-router-dom";
import type { Product } from "../types/productType";

const ProductCard = ({ product }: { product: Product}) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-card m-4 transition-transform transform hover:scale-105">
      <img 
        className="w-full h-70 object-contain" 
        src={product.image} 
        alt={product.title} 
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-card-foreground mb-2 line-clamp-1">{product.title}</h2>
        <h2 className="text-primary mb-2 line-clamp-2">{product.description}</h2>
        <p className="text-lg font-bold text-destructive mb-4">${product.price}</p>
        <Link to={`/react-task/products/${product.id}`} >
        <button className="w-full bg-destructive text-card-foreground font-medium py-2 px-4 rounded hover:bg-destructive/80 cursor-pointer transition duration-300">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;