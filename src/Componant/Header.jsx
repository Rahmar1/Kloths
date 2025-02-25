import React, { useState } from 'react';
import'../Componant/Header.css';
import Navbar from './Navbar';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
const Header = () => {
     const navigate = useNavigate();
    const [cartOpen, setCartOpen] = useState(false);
    return (
        
        <div className=' bg-[url(https://cdn.prod.website-files.com/66bf11df879adcab99a88dbf/675ac79c115414a9152688cd_Banner-img3.avif)]   bg-top bg-no-repeat max-lg:bg-center-top max-md:bg-[auto_500px] max-md:h-100  max-lg:h-150 max-xl:h-200 '>
        <Navbar onCartClick={() => setCartOpen(true)} />
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        <div>
            <div className='container justify-self-center mt-30 max-md:mt-10 h-150 max-md:ml-7 max-md:w-auto'>
                   <h1 className='text-9xl text-wrap w-250 font-extralight tracking-wide uppercase mb-5 max-xl:text-8xl max-xl:w-200 max-lg:text-6xl max-lg:w-150 max-md:text-5xl max-md:leading-15 max-md:w-auto '>Elevate your <b >style</b> with trend</h1>
             <button className=' p-3  w-30 rounded-2xl m-3 bg-black text-white hover:bg-pink-600 transition ease-in-out duration-300 cursor-pointer ' onClick={() => navigate('/Shop')}> Shop Now</button>
            </div>
          <div>
            
          </div>
        </div>
           

        </div>
    );
}

export default Header;
