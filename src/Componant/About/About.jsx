import React, { useState } from 'react';
import Navbar from '../Navbar';
import Clint from '../Clint';
import Footer from '../Footer';
import Cart from '../Cart';
const About = () => {
     const [cartOpen, setCartOpen] = useState(false);
    return (

        <div>
            <div className='bg-pink-200 h-auto'>
            <Navbar onCartClick={() => setCartOpen(true)} />
            <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
                <div className=' text-center py-10'>
                    <h1 className='text-8xl'>About Us</h1>
                </div>
            </div>
            <div className='flex justify-between h-170  mt-10 max-lg:block mb-25 container justify-self-center  '>
                <div className=' my-5  max-lg:w-auto justify-self-center'>
                    <img src='https://cdn.prod.website-files.com/66bf11df879adcab99a88dbf/6732fc377830f623db16f2aa_Single-col-image2.avif' className='w-auto h-auto rounded-2xl max-sm:p-3  ' ></img>
                </div>
                <div className=' align-middle w-1/2 text-left max-md:text-center p-10 mt-10 max-md:my-10  max-lg:w-auto'>
                    <h1 className='text-6xl my-2 ml-4 max-md:ml-0'>
                        Introducing our best fashion clothes</h1>
                    <p className='text-md font-medium my-7 w-auto text-wrap ml-4 max-md:ml-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo..</p>
                    <p className='text-md font-medium my-7 w-auto text-wrap ml-4 max-md:ml-0'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    <div className='flex justify-between  text-center my-7'>
                        <p className='p-8 w-auto h-auto  text-6xl border-b-2 border-b-gray-300  font-bold max-md:py-8 max-md:px-0'>5+ <span className='text-sm block py-2'>Years</span></p>
                        <p className='p-8 w-auto h-auto  text-6xl border-b-2 border-b-gray-300  font-bold max-md:py-8 max-md:px-0'>2K+ <span className='text-sm block py-2'>Numbers of Clients</span></p>
                        <p className='p-8 w-auto h-auto  text-6xl border-b-2 border-b-gray-300  font-bold  max-md:py-8 max-md:px-0'>50 <span className='text-sm block py-2'>Team Members</span></p>

                    </div>
                </div>

            </div>
            {/**111 */}
            <div className='flex p-8 container justify-self-center bg-pink-200 mt-30 my-8 w-auto h-auto rounded-4xl max-lg:block max-lg:mt-200 max-md:p-2 max-md:mx-2'>
                <div className='flex justify-between w-1/2 my-8 max-lg:w-auto'>
                    <div>
                        <h1 className='text-9xl p-2 mt-10 text-stroke'>1</h1>
                    </div>
                    <div className='p-2 ml-4'>
                        <h1 className='text-6xl my-8  max-md:ml-0'>
                            Look
                        </h1>
                        <p>Every story needs a protagonist, and so does every About Us page. In some cases, that might be you or your founding team. In others,</p>
                    </div>

                </div>
                <div>
                    <img src='https://cdn.prod.website-files.com/66bf11df879adcab99a88dbf/67331dc83735cd01f48d3bc6_Blog1.avif' className='w-auto h-auto rounded-4xl p-5 m-8 max-lg:m-0 max-md:p-2'></img>
                </div>
            </div>

             {/**2 */}
             <div className='flex p-8 container justify-self-center bg-pink-200 mt-10 my-8 w-auto h-auto rounded-4xl max-lg:block max-lg:mt-20 max-md:p-2 max-md:mx-2'>
                <div className='flex justify-between w-1/2 my-8 max-lg:w-auto'>
                    <div>
                        <h1 className='text-9xl p-2 mt-10 text-stroke'>2</h1>
                    </div>
                    <div className='p-2 ml-4'>
                        <h1 className='text-6xl my-8  max-md:ml-0'>
                            
Trend
                        </h1>
                        <p>Every story needs a protagonist, and so does every About Us page. In some cases, that might be you or your founding team. In others,</p>
                    </div>

                </div>
                <div>
                    <img src='https://cdn.prod.website-files.com/66bf11df879adcab99a88dbf/67331dc8759c2413f3d77de6_Blog2.avif' className='w-auto h-auto rounded-4xl p-5 m-8 max-lg:m-0 max-md:p-2'></img>
                </div>
            </div>
            <div className='my-40 max-lg:mb-0'>
                <h1 className='text-6xl text-center p-2'>What our client say</h1>
               <Clint/>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
