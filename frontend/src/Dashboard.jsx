import { Link } from "react-router-dom";
import AddProduct from "./Pages/Addproducts";

export default function Dashboard() {
  return (
    <div className="flex h-screen fixed">
      {/* Sidebar */}
      <div className="w-60 bg-orange-600 text-white flex flex-col py-6">
        <h1 className="text-center font-bold text-xl mb-10">Dashboard</h1>

        <nav className="flex flex-col space-y-4 px-6">
          <Link to="/" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/updateproduct" className="hover:text-gray-200">Books</Link>
          <Link to="/addproduct" className="hover:text-gray-200">Add Book</Link>
          <Link to="/customers" className="hover:text-gray-200">Customers</Link>
          <Link to="/orders" className="hover:text-gray-200">Orders</Link>
          <Link to="/add-order" className="hover:text-gray-200">Add Orders</Link>
          <Link to="/reports" className="hover:text-gray-200">Reports</Link>
          <Link to="/settings" className="hover:text-gray-200">Settings</Link>
        </nav>
      </div>

      {/* Content area placeholder */}
      <div className="flex-1">
        {/* Right side will be handled by API */}
        <AddProduct />
      </div>
    </div>
  );
}
