import { Route, Routes } from "react-router-dom"
import HomePage from "./HomPage/components/pages/HomePage"
import Header from "./components/Header"


function App() {

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
      <Header />
      <div className="space-y-12">
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
