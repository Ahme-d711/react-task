import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { getProductsList } from "../hooks/useActions";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

export default function HomePage() {
  useEffect(() => {
    getProductsList();
  },[])
  return (
    <div className="space-y-12">
      <HeroSection />
      <ProductList />
      <Footer />
    </div>
  )
}
