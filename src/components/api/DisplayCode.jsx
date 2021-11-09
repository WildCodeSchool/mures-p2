import React from 'react';

import ProductsPack from "./ProductsPack"
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css"



function DisplayCode({product, setProduct}) {
  const reloader = () => {
    window.location.reload()
   }
  return (
      <div>
   
        <article className='DisplayCode'> 
        <button className="buttonmenu" onClick={reloader}>Je scanne un autre produit</button>
          <ProductsPack product={product} />
          <ProductsProxi product={product} />
        </article>        
      </div>
    
  );
}

export default DisplayCode;