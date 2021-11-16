import React from 'react';
import "./ProductsNutri.css";
import ProductsNutriBack from './ProductsNutriBack';
import ProductsNutriFront from './ProductsNutriFront';


function ProductsNutri( {product, handleFlip, isFlip} ) {
  

    return (

        <div onClick={handleFlip}  className={`card ${isFlip ? 'flip' : ''}`}> 
      {isFlip ? 
      <ProductsNutriBack product={product} />
      :
      <ProductsNutriFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsNutri;