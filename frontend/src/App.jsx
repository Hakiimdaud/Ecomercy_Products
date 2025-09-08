import { Route, Routes } from "react-router-dom"
import Product from "./Pages/product"
import Header from "./Header"
import Home from "./Home"
import Dashboard from "./Dashboard"
import AddProduct from "./Pages/Addproducts"
import DisplayProduct from "./Pages/DisplayProduct"
import UpdateProduct from "./Pages/updateProducts"
import Cart from "./cart"

function App() {
  return <div>
    <Header />
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/dash" element={<Dashboard />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
      <Route path="/update/product/:id" element={<UpdateProduct />}></Route>
      <Route path="/readall" element={<DisplayProduct />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      
      
    </Routes>
  </div>
}

export default App