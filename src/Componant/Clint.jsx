import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Clint = () => {
    return (
        <div>
            <div  className='flex text-center my-30 h-auto max-lg:block max-lg:mt-150 max-md:mt-50' >
                <div className='max-lg:my-30 '>

                    <span className='text-2xl text-white bg-pink-600 px-4 py-5 m-8 rounded-4xl '><FontAwesomeIcon icon={faQuoteLeft} size='2xl' /></span>
                    <p className='italic text-lg m-8 font-medium text-wrap' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <span className='text-lg'>Christian Cooper
                    -  </span><span> Designer Manager</span>
                </div>
                <div>
                <span className='text-2xl text-white bg-pink-600 px-4 py-5 m-8 rounded-4xl'><FontAwesomeIcon icon={faQuoteLeft} size='2xl' /></span>
                    <p className='italic text-lg m-8 font-medium text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <span className='text-lg'>Christian Cooper
                    -  </span><span> Designer Manager</span>
                </div>
            </div>
        </div>
    );
}

export default Clint;
