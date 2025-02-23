import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faSnapchat, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-black h-auto w-auto '>
            <div className='grid grid-cols-6 gap-3  text-white p-10 max-lg:grid-cols-4 max-md:grid-cols-3 '>
                {/**div  1 */}
                <div className='col-span-2'>
                    <h1 className='mb-10 mt-2 text-2xl font-medium'>Our Newsletter</h1>
                    <div className='flex my-5'>
                        <input type='email' placeholder='Your Email....' className='w-2/3 focus:outline-0 border-1 p-4 rounded-2xl border-gray-500 border-r-0 rounded-r-none placeholder:text-gray-500' />
                        <button className='w-15 h-15 text-2xl text-white  bg-pink-500 rounded-br-2xl rounded-tr-2xl cursor-pointer hover:bg-white hover:text-black'onClick={() => navigate('/Contact')}><FontAwesomeIcon icon={faArrowTrendUp} /> </button>
                    </div>

                    <div className='text-white py-5'>
                      <a href='https://www.facebook.com/'target="_blank"><span className='border-2 border-gray-300 py-2 px-3 rounded-4xl m-2 hover:bg-pink-500 hover:border-pink-500'><FontAwesomeIcon icon={faFacebookF} /></span></a>  
                      <a href='https://www.instagram.com/'target="_blank"><span className='border-2 border-gray-300 py-2 px-3 rounded-4xl m-2 hover:bg-pink-500 hover:border-pink-500'><FontAwesomeIcon icon={faInstagram} /></span></a>  
                      <a href='https://www.snapchat.com/ar'target="_blank"><span className='border-2 border-gray-300 py-2 px-3 rounded-4xl m-2 hover:bg-pink-500 hover:border-pink-500'><FontAwesomeIcon icon={faSnapchat} /></span></a>  
                      <a href='https://www.linkedin.com/'target="_blank"><span className='border-2 border-gray-300 py-2 px-3 rounded-4xl m-2 hover:bg-pink-500 hover:border-pink-500'><FontAwesomeIcon icon={faLinkedinIn} /></span></a>  
                    </div>
                </div>
                {/**Div  2 */}
                <div>
                    <h1 className='text-2xl my-2'>Category</h1>
                    <div className='grid grid-cols-1 text-gray-400 py-3'>
                        <a href='#' className='py-1 hover:text-pink-500'onClick={() => navigate('/Shop')}>Men</a>
                        <a href='#' className='py-1 hover:text-pink-500'onClick={() => navigate('/Shop')}>Wemen</a>
                        <a href='#' className='py-1 hover:text-pink-500'onClick={() => navigate('/Shop')}>Jewelery</a>

                    </div>
                </div>
                {/**Div   3 */}
                <div className='max-md:col-span-2'>
                    <h1 className='text-2xl my-2'>Quick links</h1>
                    <div className='grid grid-cols-1 text-gray-400 py-3'>
                        <a href='#' className='py-1  hover:text-pink-500'onClick={() => navigate('/')}>Home</a>
                        <a href='#' className='py-1 hover:text-pink-500'onClick={() => navigate('/About')}>About Us</a>
                        <a href='#' className='py-1 hover:text-pink-500' onClick={() => navigate('/Shop')}>Shop</a>
                  
                        <a href='#' className='py-1 hover:text-pink-500'onClick={() => navigate('/Contact')}>Contact</a>

                    </div>
                </div>
                {/**Div   4*/}
                <div className='max-lg:col-span-2 max-md:col-span-1'>
                    <h1 className='text-2xl my-2 '>Get in touch</h1>
                    <div className='grid grid-cols-1 text-gray-400 py-3'>
                        <a href='mailto:rahmahosam111@gmail.com' className='py-2  hover:text-pink-500 text-wrap' >supprt@gmail.com</a>
                        <a href='#' className='py-2  hover:text-pink-500'>+1 854 256 32 32</a>
                        <address className='w-30'>Hammond, New York,13646</address>

                    </div>
                </div>
                {/** Div 5 */}
                <div>
                    <h1 className='text-2xl my-2'>Visit</h1>
                    <div className='grid grid-cols-1 text-gray-400 py-3'>
                        <p className='py-2 text-wrap w-30'>Monday - Friday
                            9:30 to 8:00</p>
                        <p className='py-2 text-wrap w-30'>Saturday
                            11:00 to 5:00</p>
                        <p className='py-2 text-wrap w-30'>Sunday Closed</p>

                    </div>
                </div>



            </div>
            <hr className='text-gray-500 container justify-self-center' />
            <div className='text-gray-500 p-5 text-center'>
                <p>Copyright  &copy; 2025 designed by Rahma - Mona - Heba </p>
            </div>

        </div>
    );
}

export default Footer;
