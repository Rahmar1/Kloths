import React, { useState } from 'react';
import Navbar from '../Navbar';
import Products from '../Products';
import Footer from '../Footer';
import Cart from '../Cart';

const Shop = () => {
        const [cartOpen, setCartOpen] = useState(false);
    
    return (
        <div>
            <div className='bg-pink-200 h-auto'>
            <Navbar onCartClick={() => setCartOpen(true)} />
            <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
                <div className=' text-center py-10'>
                    <h1 className='text-8xl'>Our Shop</h1>
                </div>
               
            </div>
            <Products/>
            <Footer/>
            
        </div>
    );
}

export default Shop;
