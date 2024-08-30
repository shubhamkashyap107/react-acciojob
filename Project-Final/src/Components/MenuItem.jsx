import React, { useState } from 'react';
import SubMenuItem from './SubMenuItem';

const MenuItem = ({ data }) => {
  const { title, itemCards } = data.card.card;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 bg-gray-100 border-b border-gray-300 font-semibold flex items-center justify-between"
      >
        {title}
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ⮟
        </span>
      </button>
      {isOpen && (
        <div className="p-4">
          {itemCards && itemCards.map((item, index) => (
            <SubMenuItem key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
