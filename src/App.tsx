import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ProductPage from "./pages/ProductPage"
import AboutPage from "./pages/AboutPage"


function App() {

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
      <Header />
      <div className="space-y-12">
        <Routes>
          <Route path="/react-task/" element={<HomePage />}/>
          <Route path="/react-task/products" element={<ProductPage />}/>
          <Route path="/react-task/products/:id" element={<ProductDetailsPage />}/>
          <Route path="/react-task/about" element={<AboutPage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
