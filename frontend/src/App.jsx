import { Route, Routes } from "react-router-dom"
import Product from "./Pages/product"
import Header from "./Header"
import Home from "./Home"
import Dashboard from "./Dashboard"
import AddProduct from "./Pages/Addproducts"
import DisplayProduct from "./Pages/Read"
// import ReadSingleProduct from "./Pages/readsingle"
import EditProduct from "./Pages/updateProducts"

function App() {
  return <div>
    <Header />
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/dash" element={<Dashboard />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
      <Route path="/updateproduct/:id" element={<EditProduct />}></Route>
      <Route path="/readall" element={<DisplayProduct />}></Route>
      {/* <Route path="/readsingle/:id" element={<ReadSingleProduct />}></Route> */}
    </Routes>
  </div>
}

export default App