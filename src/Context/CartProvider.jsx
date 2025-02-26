import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    let itemExists = false;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id && i.color === item.color);

      if (existingItem) {
        itemExists = true;
        return prevItems.map((i) =>
          i.id === item.id && i.color === item.color ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }

      return [...prevItems, { ...item, quantity: item.quantity }];
    });


    if (!itemExists) {
      toast.success('Added To The Cart Successfully!', { position: "top-right" });
    }
  };

  const decreaseQuantity = (itemId, color) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === itemId && item.color === color ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (itemId, color) => {
    setCartItems((prevItems) => prevItems.filter(item => !(item.id === itemId && item.color === color)));
    toast.info('Removed From Cart Successfully', { position: "top-right" });
  };
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); 
    toast.info('Cart Empty ', { position: "top-right" });
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart ,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
