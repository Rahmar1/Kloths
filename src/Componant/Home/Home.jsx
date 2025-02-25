import React from 'react';
import Header from '../Header';
import Products from '../Products';
import Clint from '../Clint';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <Products/>
{/*1*/}
        <div className='flex justify-between h-170  mt-10 max-lg:block mb-25 '>
            <div className='w-1/2  max-lg:w-auto justify-self-center'>
                <img src='https://cdn.prod.website-files.com/66bf11df879adcab99a88dbf/672ca88eaaef78fe2b1fe70e_single-col-img.avif'  className='w-auto h-170 max-md:h-auto  ' ></img>
            </div>
            <div className=' align-middle w-1/2 text-left max-md:text-center p-10 mt-30 max-md:my-10 ml-7 max-lg:w-auto max-lg:mt-10 max-lg:text-center max-sm:ml-0'>
                <h1 className='text-6xl my-7 ml-4 max-md:ml-0'>
                Effortless style for everyday wear</h1>
                <p className='text-lg my-7 w-auto text-wrap ml-4 max-md:ml-0'>Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.</p>
                <button className='border-2 outline-0 p-3 w-30 rounded-2xl m-3 bg-black text-white hover:bg-pink-600 transition ease-in-out duration-300 cursor-pointer  ' onClick={() => navigate('/Shop')}> Shop Now</button>
            </div>
        </div>

       {/*2*/} 
       <div className='flex justify-between h-170 w-100% mt-10  bg-gray-100 max-lg:block max-lg:mt-130  max-md:mb-160 max-md:mt-100 max-sm:mb-120  max-sm:my-90  '>
           
            <div className=' align-middle w-1/2 text-center p-10 mt-30 ml-7 max-lg:w-auto max-sm:ml-0 '>
                <h1 className='text-6xl my-7 '>
                Be cute be fashionable</h1>
                <p className='text-md my-7  '>Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.</p>
               <div className='flex justify-center  text-center  gap-8 my-7 max-sm:gap-6'>
                <p className='p-2 w-20 h-25 border-3 border-gray-300 rounded-2xl text-3xl font-medium'>10 <span className='text-2xl'>Days</span></p>
                <p className='p-2 w-20 h-25 border-3 border-gray-300 rounded-2xl text-3xl font-medium'>09 <span className='text-2xl'>Hrs</span></p>
                <p className='p-2 w-20 h-25 border-3 border-gray-300 rounded-2xl text-3xl font-medium'>30 <span className='text-2xl'>Min</span></p>
                <p className='p-2 w-20 h-25 border-3 border-gray-300 rounded-2xl text-3xl font-medium'>50 <span className='text-2xl'>Sec</span></p>
               </div>
                <button className='border-2 outline-0 p-3 w-30 rounded-2xl m-3 bg-black text-white hover:bg-pink-600 transition ease-in-out duration-300 cursor-pointer ' onClick={() => navigate('/Shop')}> Shop Now</button>
            </div>
             <div className='w-1/2 max-lg:w-auto justify-self-center'>
                <img src='https://cdn.prod.website-files.com/66bf11df879adcab99a88dbf/672de6ca56f53a4160c77ca5_cta-img.avif' className='w-auto h-170  max-md:h-auto' ></img>
            </div>
        </div>
        <Clint/>
        <Footer/>
        </div>
    );
}

export default Home;
