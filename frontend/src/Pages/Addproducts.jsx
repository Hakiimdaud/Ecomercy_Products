import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const navigate = useNavigate();

  const handleCreateData = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("img", picture);

    axios.post("http://localhost:7000/create/product", formData).then(() => {
        alert("✅ Product Added Successfully");
        navigate("/readall"); // redirect to book list page
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
        placeholder="Quantity"
        className="border p-2 mb-2 w-full"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        className="border p-2 mb-2 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />


    

      <input
        type="file"
        className="border p-2 mb-2 w-full"
        onChange={(e) => setPicture(e.target.files[0])}
      />
      <Link to={"/readall"}>
      <button
        onClick={handleCreateData}
        className="bg-orange-500 text-white px-4 py-2 rounded w-full"
        >
        Add Product
      </button>
      </Link>
    </div>
  );
};

export default AddProduct;
