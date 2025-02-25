import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { register } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("client");
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        if (register(name, email, password, role)) {
            navigate("/login"); // توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل
        } else {
            alert("Email already exists!");
        }
    };

    return (
        <div>
            <div className=' bg-fixed p-30  bg-gradient-to-br  from-black from-10% to-white bg-cover h-screen max-sm:py-20'>
                <div className='  bg-white w-120 h-150 p-5 justify-self-center shadow-2xl shadow-black rounded-3xl max-sm:w-max  ' >

                    <h1 className='text-4xl font-bold text-center text-pink-500  uppercase my-3'>Register</h1>
                    <div className=''>
                        <form onSubmit={handleRegister} className='grid grid-cols-1 mt-10'>

                            <input type="text" placeholder="Name" className='p-3 m-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="email" className='p-3 m-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" className='p-3 m-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <select className='p-3 m-3 text-sm border-1 rounded-xl focus:outline-0 border-gray-500' value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="client">Client</option>
                                <option value="admin">Admin</option>
                            </select>



                            <button type="submit" className="border-2 p-3  rounded-2xl m-3 bg-black text-white hover:bg-pink-600 transition ease-in-out duration-300 cursor-pointer">Register</button>




                            <div className="text-center text-sm ">
                                <p className=" text-gray-500 my-5"> Have an Account ?</p>
                                <p className=" uppercase font-bold cursor-pointer hover:underline" onClick={() => navigate('/Login')}>login</p>
                            </div>



                        </form>
                    </div>

                </div>
            </div >
        </div>
    );
}

export default SignUp;
