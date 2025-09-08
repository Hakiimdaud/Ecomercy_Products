import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-500">
        Book <span className="text-gray-800">Haven</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/product">Categories</Link>
        <Link to="/">Best Sellers</Link>
        <Link to="/">Contact</Link>
      </nav>

      {/* Auth + Buttons */}
      <div className="flex gap-4 items-center">
        <button className="text-gray-600">Login</button>
        <button className="text-gray-600">Register</button>
        <Link to={"/cart"}>
        <button className="bg-yellow-400 px-4 py-2 rounded-lg text-white">
          Cart
        </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
