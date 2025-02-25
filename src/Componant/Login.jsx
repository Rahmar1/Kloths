import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate("/"); // توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
        } else {
            toast.error("Invalid email or password ", { position: "top-right" });
        }
    };

    return (
        <div>
            <div className=' bg-fixed p-30  bg-gradient-to-br  from-black from-10% to-white bg-cover h-screen max-sm:py-20  ' >
                <div className='  bg-white w-120 h-150 p-5 justify-self-center shadow-2xl shadow-black rounded-3xl max-sm:w-max  ' >

                    <h1 className='text-4xl font-bold text-center text-pink-500  uppercase my-3'>Login</h1>
                    <div className=''>
                        <form onSubmit={handleLogin} className='grid grid-cols-1 mt-10'>


                            <input type="email" className='p-3 m-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" className='p-3 m-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <button type="submit" className="border-2 p-3  rounded-2xl m-3 bg-black text-white hover:bg-pink-600 transition ease-in-out duration-300 cursor-pointer">Login</button>
                            <div className="text-center text-sm mt-10">
                                <p className=" text-gray-500 my-5">didn’t have an Account ?</p>
                                <p className=" uppercase font-bold cursor-pointer hover:underline" onClick={() => navigate('/Signup')} >sign up</p>
                            </div>



                        </form>
                    </div>

                </div>
            </div >
        </div >
    );
}

export default Login;
