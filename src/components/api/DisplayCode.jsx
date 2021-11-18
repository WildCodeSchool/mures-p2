import React, { useState } from 'react';
import Alternatives from "./Alternatives/Alternatives";
import ProductsInfos from './ProductInfos/ProductsInfos';
import ProductsIngredient from './ProductsIngredient/ProductsIngredient';
import ProductsNutri from './ProductsNutri/ProductsNutri';
import ProductsPack from "./ProductsPack/ProductsPack"
import ProductProxi from './Proxi/ProductProxi';
import "./DisplayCode.css"


function DisplayCode({ product }) {
 


  return (

    <div>
        
      <article className='DisplayCode'>
                    <ProductsInfos product={product} />
                    <ProductsIngredient product={product} />
                    <ProductsNutri product={product} />
                    <ProductProxi product={product} />
                    <Alternatives product={product} />
                  <ProductsPack product={product} />
                </article>
    </div>
  )
}
export default DisplayCode;