import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("Available");

  const navigate = useNavigate();

  const handleCreateData = () => {
    const formData = new FormData();
    formData.append("img", picture);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("status", status);

    axios.post("http://localhost:7000/create/product", formData).then(() => {
        alert("✅ Product Added Successfully");
        navigate("/books"); // redirect to book list page
      })
      // .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="p-6 w-[450px] shadow-md rounded-lg bg-white mt-12 ml-[40%]">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>

      <input
        type="text"
        placeholder="Product Name"
        className="border p-2 mb-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="border p-2 mb-2 w-full"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        className="border p-2 mb-2 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Quantity"
        className="border p-2 mb-2 w-full"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <select
        className="border p-2 mb-2 w-full"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Available">Available</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>

      <input
        type="file"
        className="border p-2 mb-2 w-full"
        onChange={(e) => setPicture(e.target.files[0])}
      />

      <button
        onClick={handleCreateData}
        className="bg-orange-500 text-white px-4 py-2 rounded w-full"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
