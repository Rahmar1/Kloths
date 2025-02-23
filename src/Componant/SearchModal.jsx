import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // استبعاد الإلكترونيات
        const filteredData = data.filter((product) => product.category !== "electronics");
        setProducts(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black opacity-95 flex justify-center items-center  z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold">✖</button>
        <h2 className="text-lg font-bold mb-4">Search Products</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* نتائج البحث */}
        <ul className="mt-4 max-h-60 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li 
                key={product.id} 
                className="p-2 border-b flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  onClose(); // إغلاق النافذة بعد اختيار منتج
                }}
              >
                <img src={product.image} alt={product.title} className="w-10 h-10 object-contain" />
                <span>{product.title.slice(0, 25)}...</span>
                <span className="ml-auto font-semibold">${product.price}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-2">No products found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
