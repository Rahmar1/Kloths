import React, { useContext ,useState } from "react";
import { FavoriteContext } from "../Context/FavoriteContext";
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
const Favorites = () => {
    const { favorites, removeFromFavorites } = useContext(FavoriteContext);
 const [cartOpen, setCartOpen] = useState(false);
 const navigate = useNavigate();
    return (
        <div >
          
          <div  className='bg-pink-200 h-auto'>
             <Navbar onCartClick={() => setCartOpen(true)} />
             <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
              <div className=' text-center py-10'>
                    <h1 className='text-8xl max-md:text-6xl'>Favorites List</h1>
                </div>
                </div>
                
            {favorites.length === 0 ? (
                <div>
                     <p className="text-center text-3xl my-5" >You Don't Have Favorites!</p>
                     <h1 className="text-center text-xl my-5 italic text-gray-400">
                        You can Explore Our Products 
                     </h1>
                     <div className='mt-15 mb-18'>
                                 <h1 className='text-center text-4xl font-bold'>For More Products <span className=' px-3 bg-pink-500 text-white rounded-3xl py-3 cursor-pointer hover:text-pink-50  ' onClick={() => navigate('/Shop')}> <FontAwesomeIcon icon={faArrowTrendUp}  />  </span></h1>
                               </div>
                </div>
               
                
            ) : (
                <div className="grid  grid-cols-3 overflow-hidden  max-xl:grid-cols-2 max-md:grid-cols-1 gap-2 my-20 mx-5 ">
                    {favorites.map((product) => (
                        <div key={product.id} className="mx-2 p-4 my-5  ring-gray-500/50 ring-1 shadow-xl w-100 rounded-2xl max-xl:w-auto max-xl:mx-10  max-md:mx-5 ">
                            <img src={product.image} alt={product.name} className="w-full h-80 object-contain " />
                            <h3 className="text-lg font-semibold mt-2 mx-2">{product.title}</h3>
                            <p className="text-gray-600 font-bold py-2 mx-2">{product.price} $</p>
                            <button
                                className="mt-2 w-30 text-center align-bottom bg-black text-white py-2 rounded-md hover:bg-pink-600 transition max-xl:w-40 cursor-pointer "
                                onClick={() => removeFromFavorites(product.id)}
                            >
                                Delete ❌
                            </button>
                        </div>
                    ))}
                </div>
            )}
        
          <Footer/>
       </div> );
};

export default Favorites;
