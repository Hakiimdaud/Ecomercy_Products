import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  // fetch single product
  const handleReadSingle = () => {
    axios
      .get(`http://localhost:7000/readsingle/product/${params.id}`).then((res) => {
        setName(res.data[0].name);
        setPrice(res.data[0].price);
        setQuantity(res.data[0].quantity);
        setDescription(res.data[0].description);
        setImage(res.data[0].prImage)
      });
  };

  // update product
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("img", picture);

    axios
      .put(`http://localhost:7000/update/product/${params.id}`, formData)
      .then(() => {
        alert("✅ Product Updated Successfully");
        navigate("/readall");
      });
  };

  useEffect(() => {
    handleReadSingle();
  }, []);

  return (
    <div className="p-6 w-[450px] shadow-md rounded-lg bg-white mt-12 ml-[40%]">
      <h1 className="text-2xl font-bold mb-4 text-center">Update Product</h1>

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
          onClick={handleUpdate}
          className="bg-orange-500 text-white px-4 py-2 rounded w-full"
        >
          Update Product
        </button>
      </Link>
    </div>
  );
}

export default UpdateProduct;
