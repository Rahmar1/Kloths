import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Cart from '../Cart';
const Contacts = () => {
     const [cartOpen, setCartOpen] = useState(false);
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem("contactForm");
        return savedData ? JSON.parse(savedData) : {
            name: '',
            number: '',
            email: '',
            adderss: '',
            message: '',
            agree: false
        };
    });

    useEffect(() => {
        localStorage.setItem("contactForm", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agree) {
            toast.error("❌ يجب الموافقة على سياسة الخصوصية!", { position: "top-right" });
            return;
        }
        toast.success("✅ تم حفظ البيانات بنجاح!", { position: "top-right" });
    };

    return (
        <div>

            <div className='h-50 w-auto bg-pink-200'>

            <Navbar onCartClick={() => setCartOpen(true)} />
            <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
                <h1 className='text-5xl text-center mt-5'>How To Reach Out</h1>
            </div>
            <div className='my-20 grid grid-cols-3 gap-5 max-lg:grid-cols-1'>
                <div className='px-10  max-lg:text-center max-md:px-5'>
                    <h1 className='text-5xl py-8 leading-14 '>Need assistance? contact us</h1>
                    <p className='italic text-wrap '>Embrace ultimate coziness with this stylish essential.
                        Crafted for comfort, ultimate coziness with.</p>
                    <p className='py-2  hover:text-pink-500 text-wrap'><a href='mailto:rahmahosam111@gmail.com'>your@gmail.com</a></p>
                    <p className='py-2  hover:text-pink-500'><a href='#'>+1 854 256 32 32</a></p>
                    <address className=''>Hammond, New York,13646</address>
                </div>
                <div className='col-span-2 px-25 mt-5 max-md:px-10'>
                    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' required className='p-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' />
                        <input type='number' name='number' value={formData.number} onChange={handleChange} placeholder='Number' required className='p-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' />
                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' required className='p-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' />
                        <input type='text' name='Address' value={formData.addres} onChange={handleChange} placeholder='Adderss' className='p-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' />
                        <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Your message' className='p-3 col-span-2 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' rows={5}></textarea>

                        <div className='flex col-span-2'>
                            <button type='submit' className='border-2 p-3 w-35 rounded-2xl m-3 bg-black text-white hover:bg-pink-600 transition ease-in-out duration-300 cursor-pointer'>
                                Submit Now
                            </button>
                            <div className='flex items-center'>
                                <input type='checkbox' name='agree' checked={formData.agree} onChange={handleChange} className='h-auto' />
                                <p className='px-2'>I agree to the privacy policy.</p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30931316573!2d31.341639922413403!3d31.041379605536964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2sMansoura%2C%20Mansoura%20Qism%202%2C%20El%20Mansoura%2C%20Dakahlia%20Governorate!5e0!3m2!1sen!2seg!4v1740334637184!5m2!1sen!2seg" className='mt-5' width="100%" height="500px" allowFullScreen loading="lazy"></iframe>
            <Footer />
        </div>
    );
}

export default Contacts;
