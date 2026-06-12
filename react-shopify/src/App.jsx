import { Route, Routes, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"

function App() {
  return (
    <>
      <nav>
          <Link className="mr-3" to="/">Home</Link>
          <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/products"
          element={<ProductsPage />}
        />
      </Routes>
    </>
  )
}

export default App


