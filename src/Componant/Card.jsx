import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';
import { CartContext } from '../Context/CartProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart ,faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FavoriteContext } from "../Context/FavoriteContext";
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartOpen, setCartOpen] = useState(false);
    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("");
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);

    const isFavorite = product ? favorites.some((fav) => fav.id === product.id) : false;



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching product details:", error));
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (!product) return <p className="text-center text-red-500">Product not found</p>;



    return (
        <div>
            <div className='h-50 w-auto bg-pink-200'>
                <Navbar onCartClick={() => setCartOpen(true)} />
                <h1 className='text-5xl text-center mt-5 '>{product.title.slice(0, 22)}</h1>
                <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
            </div>


            <div className="container grid grid-cols-2 my-30 max-lg:grid-cols-1 bg justify-self-center">
                <div>
                    <img src={product.image} alt={product.title} className="w-120 h-auto border-2 border-pink-200 rounded-3xl p-2 mx-auto mb-4" />
                </div>
                <div className=" relative p-10 bg-gradient-to-b from-pink-200 to-white rounded-2xl">
                    <h1 className="text-4xl font-bold py-5">{product.title}</h1>
                    <p className="text-lg text-black font-bold my-5">${product.price}</p>
                    <p className="text-gray-700 italic py-2">{product.description}</p>
                    <FontAwesomeIcon
                        icon={isFavorite ? solidHeart : regularHeart}
                        className={`absolute top-3 right-3 text-3xl cursor-pointer transition-all ${isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
                            }`}
                            onClick={() => {
                                if (product) {
                                    isFavorite ? removeFromFavorites(product.id) : addToFavorites(product);
                                }
                            }}
                            
                    />
                    <hr className="w-auto" />

                    <label className="mt-10 text-2xl font-medium block">Colors</label>
                    <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="my-4 w-50 rounded-xl border-2 p-2">
                        <option value="">None</option>
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                    </select>

                    <label className="mt-8 text-2xl font-medium block">Quantity</label>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(x) => setQuantity(Number(x.target.value))}
                        className="text-black border-2 w-15 rounded-xl h-10 text-center my-4 block"
                    />

                    <button className="mt-7 w-60 bg-black text-white py-2 rounded-md hover:bg-pink-600 transition" onClick={() => addToCart({ ...product, quantity, color: selectedColor })}>
                        Add to Cart
                    </button>
                </div>
            </div>
          <div className='mt-5 mb-18'>
            <h1 className='text-center text-3xl'>For More Products <span className=' px-3 bg-pink-500 text-white rounded-3xl py-3 cursor-pointer hover:text-pink-50  ' onClick={() => navigate('/Shop')}> <FontAwesomeIcon icon={faArrowTrendUp}  />  </span></h1>
          </div>

            <Footer />
        </div>
    );
};

export default Card;
