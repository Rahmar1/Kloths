import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";

import './App.css';
import Home from './Componant/Home/Home';
import Shop from './Componant/Shop/Shop';
import About from './Componant/About/About';
import Card from './Componant/Card';
import  Contact  from './Componant/Contacts/Contacts';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Componant/ProtectedRoute";
import Login from './Componant/Login';

import SignUp from './Componant/SignUp';
function App() {

 
  return (
    <AuthProvider>
    <CartProvider>
      <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/card' element={<Card />} />
          <Route path="/product/:id" element={<ProtectedRoute><Card /></ProtectedRoute> } />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
        </Routes>
      </Router>
      <ToastContainer />
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
