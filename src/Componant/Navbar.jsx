import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars, faMagnifyingGlass, faShoppingCart, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import SearchModal from "./SearchModal";
import { AuthContext } from "../Context/AuthContext";
const Navbar = ({ onCartClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);


    return (
        <>
            <div className=' flex justify-between p-5 container justify-self-center '>
                <div>
                    <h1 className='text-3xl tracking-wide cursor-pointer  font-bold' onClick={() => navigate('/')}>kloths</h1>
                </div>

                <div className="links flex gap-5 font-medium mt-2 text-center tracking-wide max-lg:hidden">

                    <button className='font-medium cursor-pointer' onClick={() => navigate('/')}>Home</button>
                    <button className='font-medium cursor-pointer' onClick={() => navigate('/Shop')}>Shop</button>
                    <button className='font-medium cursor-pointer' onClick={() => navigate('/About')}>About Us</button>

                    <button className='font-medium cursor-pointer' onClick={() => navigate('/Contact')}>Contacts</button>


                </div>





                <div className='flex gap-4 max-lg:hidden'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' onClick={() => setIsSearchOpen(true)} className='text-white bg-black p-2 rounded-3xl hover:bg-pink-600 transition-all duration-250 cursor-pointer' />
                    <FontAwesomeIcon icon={faHeart} size='lg' onClick={() => navigate('/Favorites')} className='text-white cursor-pointer bg-black p-2 rounded-3xl hover:bg-pink-600 transition-all duration-250' />

                    {user ? (
                        <div className="flex gap-2 items-center">
                            <span className="font-medium">{user.name}</span>
                            <button onClick={logout} className="text-pink-500 font-medium border-2 p-1 rounded-2xl cursor-pointer  hover:text-red-500">Logout</button>
                        </div>
                    ) : (
                        <FontAwesomeIcon icon={faCircleUser} size='lg' className='text-white bg-black p-2 rounded-3xl hover:bg-pink-600 transition-all duration-250 cursor-pointer' onClick={() => navigate('/Login')} />
                    )}


                    <button className='text-lg font-medium cursor-pointer relative' onClick={onCartClick}>
                        <FontAwesomeIcon icon={faShoppingCart} /> Cart
                    </button>
                </div>
                <div className='hidden max-lg:block'>
                    <FontAwesomeIcon icon={faBars} size='xl' onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer transition-transform duration-300" />
                </div>
            </div>



            {menuOpen && (
                <div className={`hidden absolute top-20 left-0 w-full bg-gray-100 max-lg:block shadow-md z-50 transition-all duration-400 ease-in-out transform
                    ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                    <div className='grid grid-cols-2 mt-2  gap-x-30 '>


                        <div>  <button className='font-medium cursor-pointer block px-4 py-2 transition hover:underline decoration-solid' onClick={() => navigate('/')}>Home</button>
                            <button className='font-medium cursor-pointer block px-4 py-2 transition hover:underline decoration-solid' onClick={() => navigate('/Shop')}>Shop</button>
                            <button className='font-medium cursor-pointer block px-4 py-2 transition hover:underline decoration-solid' onClick={() => navigate('/About')}>About Us</button>

                            <button className='font-medium cursor-pointer block px-4 py-2 transition hover:underline decoration-solid' onClick={() => navigate('/Contact')}>Contacts</button>

                        </div>
                        <div className='grid grid-cols-1 justify-self-center  '>

                            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' onClick={() => setIsSearchOpen(true)} className='text-white my-2 bg-black p-2 rounded-3xl hover:bg-pink-600 transition-all duration-250' />
                            <FontAwesomeIcon icon={faHeart} size='lg' onClick={() => navigate('/Favorites')} className='text-white bg-black my-2 cursor-pointer p-2 rounded-3xl hover:bg-pink-600 transition-all duration-250' />


                            <button className='text-lg font-medium cursor-pointer relative my-2 text-center' onClick={onCartClick}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Cart
                            </button>
                        </div>
                        {user ? (
                    <div className=" col-span-2   items-center justify-self-center justify-between py-2">
                        
                        <button onClick={logout} className="text-pink-500 font-medium border-2 p-2 rounded-2xl cursor-pointer  hover:text-red-500">Logout</button>
                    </div>
                ) : (
                    <FontAwesomeIcon icon={faCircleUser} size='lg' className=' col-span-2 text-white justify-self-center my-2 bg-black p-2 text-center rounded-3xl hover:bg-pink-600 transition-all duration-250 cursor-pointer' onClick={() => navigate('/Login')} />
                )}
                    </div>

                </div>

            )} {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
        </>
    );
}

export default Navbar;
