import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";

import './App.css';
import Home from './Componant/Home/Home';
import Shop from './Componant/Shop/Shop';
import About from './Componant/About/About';
import Card from './Componant/Card';
import Cart from './Componant/Cart';
import Navbar from './Componant/Navbar';
import  Contact  from './Componant/Contacts/Contacts';
import { ToastContainer } from 'react-toastify';

function App() {

 
  return (
    <CartProvider>
      <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/card' element={<Card />} />
          <Route path="/product/:id" element={<Card />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
