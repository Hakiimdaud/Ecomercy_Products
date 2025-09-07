import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // States for product
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Available");
  const [picture, setPicture] = useState(null);
  const [PrImage, setPrImage] = useState(""); // Existing image

  // Fetch product data and pre-fill form
  useEffect(() => {
    axios
      .get(`http://localhost:7000/readsingle/product/${id}`)
      .then((res) => {
        const data = res.data;
        setName(data.name);
        setPrice(data.price);
        setQuantity(data.quantity);
        setDescription(data.description);
        setStatus(data.status);
        setPrImage(data.PrImage); // For showing existing image
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (picture instanceof File) formData.append("img", picture);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("status", status);

    axios
      .put(`http://localhost:7000/update/product/${id}`, formData)
      .then(() => {
        alert("✅ Product Updated Successfully");
        navigate("/books"); // Redirect after update
      })
      .catch((err) => console.error("Error updating product:", err));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-orange-600">
        Edit Product
      </h1>

      {/* Product Table */}
      <div className="overflow-x-auto mb-6">
        <table className="table-auto border-collapse border border-gray-300 w-full bg-white shadow-md">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <img
                  src={`http://localhost:7000/allimages/${PrImage}`}
                  alt={name}
                  className="h-20 w-20 object-contain mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">{name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">${price}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{quantity}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{description}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <span
                  className={`px-2 py-1 rounded ${
                    status === "Available"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {status}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Update Form */}
      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="border p-2 rounded col-span-2"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 rounded col-span-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Available">Available</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <input
          type="file"
          onChange={(e) => setPicture(e.target.files[0])}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded col-span-2"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
