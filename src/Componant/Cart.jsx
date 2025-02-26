import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { useNavigate } from "react-router-dom";
const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity ,clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  if (!isOpen) return null;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className=" absolute top-14 right-10 w-120 h-auto bg-white shadow-lg p-5 z-50 overflow-y-auto rounded-2xl max-md:w-auto max-sm:right-0 ">
      <button onClick={onClose} className="absolute top-2 right-4 text-lg font-bold cursor-pointer">✖</button>
      <div className="flex justify-between my-5">
        <h2 className="text-2xl align-middle font-bold px-5 ">Your Cart</h2>
        <button
              onClick={clearCart}
              className=" bg-red-600 w-auto p-2 text-white cursor-pointer  rounded-md hover:bg-red-700 transition "
            >
              Delete All
            </button>
      </div>
      

      {cartItems.length === 0 ? (
        
        <p className="text-gray-500 text-center py-5">No items in cart.</p>
        
      ) : (

        cartItems.map((item) => (
          <div key={`${item.id}-${item.color}`} className="border-b py-4 flex items-center justify-between hover:bg-pink-100 mt-5 p-2">
            <img src={item.image} className="w-16 h-16 object-contain border rounded-md cursor-pointer " onClick={() => navigate(`/product/${item.id}`)} alt={item.title} />
            <div className="flex-1 px-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
              <p className="text-sm font-medium">Color: <span className="font-bold">{item.color}</span></p>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => addToCart({ ...item, quantity: item.quantity, color: item.color })}
                className="bg-green-500 text-white px-2 py-1 rounded-md mx-1"
              >+</button>

              <p className="text-lg font-bold">{item.quantity}</p>

              <button
                onClick={() => decreaseQuantity(item.id, item.color)}
                className="bg-red-500 text-white px-2 py-1 rounded-md mx-1"
              >-</button>
            </div>

            <button
              onClick={() => removeFromCart(item.id, item.color)}
              className="text-red-500 cursor-pointer text-sm underline ml-4"
            >
              Remove
            </button>
            
          </div>

        ))
      )}
      <div className="mt-3 font-bold flex justify-between">
              <p className="p-4">Total = ${totalPrice.toFixed(2)}</p>
              <button type='submit' className='border-2 p-2 w-auto rounded-2xl  bg-black text-white hover:bg-pink-600 transition ease-in-out duration-300 cursor-pointer'onClick={() => navigate('/Contact')}>
                               Order Now
                            </button>
            </div>
    </div>
  );
};

export default Cart;
