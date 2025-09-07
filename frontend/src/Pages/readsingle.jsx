// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// const ReadSingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:7000/readsingle/product/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error("Error fetching product:", err));
//   }, [id]);

//   if (!product) {
//     return <h2 className="text-center mt-10">Loading product...</h2>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-6 text-orange-600">
//         Product Details
//       </h1>

//       <div className="overflow-x-auto">
//         <table className="table-auto border-collapse border border-gray-300 w-full bg-white shadow-md">
//           <thead>
//             <tr className="bg-orange-600 text-white">
//               <th className="border border-gray-300 px-4 py-2">Image</th>
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Price</th>
//               <th className="border border-gray-300 px-4 py-2">Quantity</th>
//               <th className="border border-gray-300 px-4 py-2">Description</th>
//               <th className="border border-gray-300 px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <img
//                   src={`http://localhost:7000/allimages/${product.PrImage}`}
//                   alt={product.name}
//                   className="h-20 w-20 object-contain mx-auto"
//                 />
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 {product.name}
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 ${product.price}
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 {product.quantity}
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 {product.description}
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <span
//                   className={`px-2 py-1 rounded ${
//                     product.status === "Available"
//                       ? "bg-green-200 text-green-800"
//                       : "bg-red-200 text-red-800"
//                   }`}
//                 >
//                   {product.status}
//                 </span>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-between mt-6">
//         <Link
//           to={`/update-product/${product.id}`}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Edit
//         </Link>

//         <Link to="/books" className="bg-gray-500 text-white px-4 py-2 rounded">
//           Back
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ReadSingleProduct;
