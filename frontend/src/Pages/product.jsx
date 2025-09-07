import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);

  const handleReadData = async () => {
    try {
      axios.get("http://localhost:7000/read/product").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    handleReadData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar Categories */}
      <div className="col-span-1 space-y-4 text-lg font-medium text-gray-700">
        <p className="hover:text-yellow-500 cursor-pointer">Smart Phones</p>
        <p className="hover:text-yellow-500 cursor-pointer">Laptops</p>
        <p className="hover:text-yellow-500 cursor-pointer">Tv</p>
        <p className="hover:text-yellow-500 cursor-pointer">Desktop</p>
      </div>

      {/* Products Grid */}
      <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={`http://localhost:7000/allimages/${item.PrImage}`}
              alt={item.PrImage}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <p className="font-bold mt-2">Price: ${item.price}</p>
            <p className="text-sm mt-1">Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
