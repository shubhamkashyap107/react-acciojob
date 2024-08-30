import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../Utils/CartSlice';
import { Link } from 'react-router-dom';

const imageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => {return store.cart});

  const handleRemove = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  return (
    <div>
      <nav className="bg-orange-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            HandsomeNavbar
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/" className="text-white hover:text-orange-200">Home</Link>
            <Link to="/restaurants" className="text-white hover:text-orange-200">Restaurants</Link>
            <Link to="/random" className="text-white hover:text-orange-200">Random</Link>
            <Link to="/example" className="text-white hover:text-orange-200">Example</Link>
            <Link to="/cart" className="text-white hover:text-orange-200 flex items-center">
              🛒
              <span className="ml-2">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-6 w-8/12">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                <img
                  src={`${imageURL}${item.imageId}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <p className="text-lg font-bold">₹{(item.price / 100).toFixed(2)}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
