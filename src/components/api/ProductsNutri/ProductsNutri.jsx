import React, {useState} from 'react';
import "./ProductsNutri.css";
import ProductsNutriBack from './ProductsNutriBack';
import ProductsNutriFront from './ProductsNutriFront';


function ProductsNutri( {slide, handleFlip, isFlip} ) {
  

    return (

        <div onClick={handleFlip}  className={`card ${isFlip ? 'flip' : ''}`}> 
      {isFlip ? 
      <ProductsNutriBack slide={slide} />
      :
      <ProductsNutriFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsNutri;