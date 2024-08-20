import React from 'react';

const ProductBox = ({ name, price, salePrice }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '200px' }}>
      <h2 style={{ fontSize: '1.5em', margin: '0 0 10px 0', color: '#333' }}>{name}</h2>
      <p style={{ margin: '0 0 10px 0', color: '#555' }}>Price: ${price}</p>
      {salePrice && (
        <p style={{ margin: '0', color: '#d9534f', fontWeight: 'bold' }}>Sale Price: ${salePrice}</p>
      )}
    </div>
  );
};

export default ProductBox;
