import { Link } from "react-router-dom";
import Product from "./Pages/product";
import img from "../src/imgHOME/THREE.jpg"
function Home() {
  return (
    <div>
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-gray-50">
      {/* Left Content */}
      <div className="max-w-lg space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
          Discover Your <span className="text-yellow-500">Next</span> Favorite{" "}
          <span className="text-yellow-500">Book</span>
        </h1>
        <p className="text-gray-600">
          Explore thousands of titles across genres. Dive into stories,
          knowledge, and inspiration.
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 px-6 py-3 rounded-lg text-white font-medium">
            Shop Now
          </button>
          <button className="border border-yellow-400 px-6 py-3 rounded-lg text-yellow-500 font-medium">
            Browse Categories
          </button>
        </div>

        {/* Features */}
        <div className="flex gap-6 mt-6">
          <div className="text-center">
            <p className="font-semibold text-gray-700">New Release</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-700">Top Rated</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-700">Free Delivery</p>
          </div>
        </div>
      </div>

      {/* Right Image / Illustration */}
      <div className="mt-10 md:mt-0">
        <img
          src={img}
          alt="Books Illustration"
          className="w-[350px] rounded-[10%]"
        />
      </div>
    </section>
    <Product />
    </div>

  );
}

export default Home;
