import React, {useState} from 'react';
import "./ProductsIngredient.css";
import ProductsIngredientFront from './ProductsIngredientFront';
import ProductsIngredientBack from './ProductsIngredientBack';


function ProductsIngredients( {product} ) {

  const [ isFlipIng, setIsFlipIng ] = useState(false);


  const handleFlip = () => {
    setIsFlipIng(!isFlipIng)
  }

    return (

        <div onClick={handleFlip}  className={`card ${isFlipIng ? 'flip' : ''}`}> 
      {isFlipIng ? 
      <ProductsIngredientBack product={product} />
      :
      <ProductsIngredientFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsIngredients;

