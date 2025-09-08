import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DisplayProduct() {
  const [data, setData] = useState([]);

  const handleReadData = () => {
    axios.get("http://localhost:7000/read/product").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleReadData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:7000/delede/product/${id}`).then(() => {
      alert("✅ Product deleted successfully");
      handleReadData();
    });
  };

  return (
    <div className="px-8 py-6">
      {/* Header Buttons */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/addproduct">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg shadow-md transition">
            + Add New Product
          </button>
        </Link>

        <Link to="/book">
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md transition">
            Back
          </button>
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 border-b last:border-none"
                >
                  <td className="py-3 px-4 text-center font-medium">{item.id}</td>
                  <td className="py-3 px-4">
                    <img
                      src={`http://localhost:7000/allimages/${item.PrImage}`}
                      alt={item.PrImage}
                      className="w-14 h-14 object-cover rounded-md mx-auto border"
                    />
                  </td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4 text-center">{item.quantity}</td>
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    ${item.price}
                  </td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      item.status === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="py-3 px-4 flex justify-center space-x-6">
                    <Link to={`/update/product/${item._id}`}>
                      <i className="fa-solid fa-pen-to-square text-blue-500 hover:text-blue-700 cursor-pointer text-lg"></i>
                    </Link>
                    <i
                      onClick={() => handleDelete(item._id)}
                      className="fa-solid fa-trash text-red-500 hover:text-red-700 cursor-pointer text-lg"
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8 text-gray-500 text-lg"
                >
                  🚫 No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayProduct;
