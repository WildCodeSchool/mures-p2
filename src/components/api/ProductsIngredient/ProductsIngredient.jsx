import React, {useState} from 'react';
import "./ProductsIngredient.css";
import ProductsIngredientFront from './ProductsIngredientFront';
import ProductsIngredientBack from './ProductsIngredientBack';


function ProductsIngredients( {product, handleFlip, isFlip} ) {
  

    return (

        <div onClick={handleFlip}  className={`card ${isFlip ? 'flip' : ''}`}> 
      {isFlip ? 
      <ProductsIngredientBack product={product} />
      :
      <ProductsIngredientFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsIngredients;

