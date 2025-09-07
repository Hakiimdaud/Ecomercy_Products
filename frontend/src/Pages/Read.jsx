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
    axios.delete(`http://localhost:7000/delete/product/${id}`).then(() => {
      alert("Product deleted successfully");
      handleReadData();
    });
  };

  return (
    <div className="px-10 py-4 pl-10 ml-[23%]">
      <div className="flex justify-between">
        <div>
          <Link to="/addproduct">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-6 font-semibold">
              Add New Product
            </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-6 font-semibold">
              Back
            </button>
          </Link>
        </div>
      </div>

      <div>
        <table className="w-[80%] border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-1 px-2">ID</th>
              <th className="py-1 px-2">Image</th>
              <th className="py-1 px-2">Name</th>
              <th className="py-1 px-2">Quantity</th>
              <th className="py-1 px-2">Price</th>
              <th className="py-1 px-2">Status</th>
              <th className="py-1 px-2">Options</th>
            </tr>
          </thead>

          {data.length > 0 ? (
            data.map((item) => (
              <tbody key={item._id}>
                <tr>
                  <td className="py-1 px-5 text-xl text-center">{item.id}</td>
                  <td className="py-1 px-5 text-xl text-center">
                    <img
                      src={`http://localhost:7000/allimages/${item.PrImage}`}
                      alt={item.PrImage}
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  </td>
                  <td className="py-1 px-5 text-xl text-center">{item.name}</td>
                  <td className="py-1 px-5 text-xl text-center">{item.quantity}</td>
                  <td className="py-1 px-5 text-xl text-center">${item.price}</td>
                  <td
                    className={`py-1 px-5 text-xl text-center font-semibold ${
                      item.status === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="py-1 px-5 text-xl text-center flex justify-center space-x-10">
                    <Link to={`/updateproduct/${item._id}`}>
                      <i className="fa-solid fa-edit text-green-500"></i>
                    </Link>
                    <i
                      onClick={() => handleDelete(item._id)}
                      className="fa-solid fa-trash text-red-500 cursor-pointer"
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tr>
        <td colSpan={3} className="text-center py-6 text-gray-500 text-2xl">
          There is no data
        </td>
      </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default DisplayProduct;
