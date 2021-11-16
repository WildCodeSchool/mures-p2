import React from 'react';
import "./productsPack.css";
import ProductsPackFront from './ProductsPackFront';
import ProductsPackBack from './ProductsPackBack';


function ProductsPack ( {product, handleFlip, isFlip} ) {
  

    return (

        <div onClick={handleFlip}  className={`card ${isFlip ? 'flip' : ''}`}> 
      {isFlip ? 
      <ProductsPackBack product={product} />
      :
      <ProductsPackFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsPack;

