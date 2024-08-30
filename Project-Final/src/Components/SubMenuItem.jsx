import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../Utils/CartSlice';

const imageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const SubMenuItem = ({ data }) => {
  const { name, price, description, imageId, id } = data.card.info;
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  
  // Convert paise to INR
  const priceInINR = (price / 100).toFixed(2);

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, description, imageId }));
    setInCart(true);
    alert(`${name} has been added to your cart!`);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem({ id }));
    setInCart(false);
    alert(`${name} has been removed from your cart!`);
  };

  return (
    <div className="flex items-start p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <img
        src={`${imageURL}${imageId}`}
        alt={name}
        className="w-1/3 h-32 object-cover rounded-lg mr-4"
      />
      <div className="w-2/3">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-lg font-bold mb-2">₹{priceInINR}</p>
        <div className="flex space-x-2">
          {inCart ? (
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubMenuItem;
