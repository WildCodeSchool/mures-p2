import React from 'react';
import "./productsProxi.css";
import ProductsProxiBack from './ProductsProxiBack';
import ProductProxiFront from './ProductProxiFront';

function ProductProxi( {product, handleFlip, isFlip} ) {
  
    return (

        <div onClick={handleFlip}  className={`card ${isFlip ? 'flip' : ''}`}> 
      {isFlip ? 
      <ProductsProxiBack product={product} />
      :
      <ProductProxiFront />
    }   
     
     </div>

    );
}

export default ProductProxi;