import React from 'react';

const WithSaleTag = (WrappedComponent) => {
  return function EnhancedProductBox(props) {
    const { isOnSale, salePrice, ...restProps } = props;

    return (
      <div style={{ position: 'relative', padding: '10px', border: '1px solid #eee', borderRadius: '8px' }}>
        {isOnSale && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#d9534f',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '0.9em',
            fontWeight: 'bold'
          }}>
            On Sale!
          </div>
        )}
        <WrappedComponent {...restProps} salePrice={isOnSale ? salePrice : null} />
      </div>
    );
  }
}

export default WithSaleTag;
