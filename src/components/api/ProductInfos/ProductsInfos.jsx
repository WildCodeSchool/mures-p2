import React from 'react';
import "./ProductsInfos.css";
import ProductsInfosFront from './ProductsInfosFront';
import ProductsInfosBack from './ProductsInfosBack';


function ProductsInfos( {product, handleFlip, isFlip} ) {
  

    return (

        <div onClick={handleFlip}  className={`card ${isFlip ? 'flip' : ''}`}> 
      {isFlip ? 
      <ProductsInfosBack product={product} />
      :
      <ProductsInfosFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsInfos;
