import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (product) => product.category !== "electronics"
        );
        setProducts(filteredData);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-8 my-10">
      <h1 className="text-4xl font-bold mb-6 text-center uppercase tracking-wide">
        Our Latest Fashion Trends
      </h1>

      <div className="flex justify-center gap-3 mb-6 max-md:gap-2">
        {["all", "men's clothing", "women's clothing", "jewelery"].map((cat) => (
          <button
            key={cat}
            className={` px-6 py-2 rounded-full transition max-sm:px-2 max-sm:py-1 max-sm:text-sm ${
              category === cat
                ? "bg-black text-white"
                : "bg-gray-200  hover:bg-pink-600 transition  hover:text-white"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white h-auto p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2  hover:scale-110"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-50 object-contain rounded-md mb-4 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h2 className="text-lg font-semibold my-2">{product.title.slice(0,22)}</h2>
              <p className="text-gray-600">${product.price}</p>
          
              <button className="mt-7 w-60 text-center align-bottom bg-black text-white py-2 rounded-md hover:bg-pink-600 transition max-xl:w-40 cursor-pointer " onClick={() => navigate(`/product/${product.id}`)}>
                            Add to Cart
                        </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;