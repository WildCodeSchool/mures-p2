import React, { useEffect, useState } from 'react';
import Alternatives from "./Alternatives";
import ProductsInfos from './ProductInfos/ProductsInfos';
import ProductsIngredient from './ProductsIngredient/ProductsIngredient';
import ProductsNutri from './ProductsNutri/ProductsNutri';
import ProductsPack from "./ProductsPack"
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css"


function DisplayCode({ product }) {
 
  const [ isFlip, setIsFlip ] = useState(false);


  const handleFlip = () => {
    setIsFlip(!isFlip)
  }

  return (

    <div>
        
      <article className='DisplayCode'>
     
                    <ProductsInfos product={product} handleFlip={handleFlip} isFlip={isFlip} />
                    <ProductsIngredient product={product} handleFlip={handleFlip} isFlip={isFlip} />
                    <ProductsNutri product={product} handleFlip={handleFlip} isFlip={isFlip}/>
                    <ProductsProxi product={product} handleFlip={handleFlip} isFlip={isFlip}/>
                    <Alternatives product={product} handleFlip={handleFlip} isFlip={isFlip}/>
                    <ProductsPack product={product} handleFlip={handleFlip} isFlip={isFlip}/>

                </article>
    </div>
  )
}
export default DisplayCode;