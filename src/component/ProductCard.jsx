import React from 'react'

const ProductCard = ({Product}) => { 
  return (
    <div>
      <h3>{Product.title}</h3>
      <p>{Product.price}</p>
    </div>
  );
};

export default ProductCard ;