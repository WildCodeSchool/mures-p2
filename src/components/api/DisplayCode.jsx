import React from 'react';
import Alternatives from "./Alternatives";
import ProductsInfos from './ProductsInfos';
import ProductsIngredient from './ProductsIngredient';
import ProductsNutri from './ProductsNutri';
import ProductsPack from "./ProductsPack"
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css";



function DisplayCode({product, setProduct}) {
  const reloader = () => {
    window.location.reload()
   }
  return (
    product && (
      <main>
      <button className="scan-again-btn" onClick={reloader}>Je scanne un autre produit</button>
        <section className='DisplayCode'> 
          <ProductsInfos product={product}/>
          <ProductsIngredient product={product} />
          <ProductsNutri  product={product}/>
          <Alternatives/>
          <ProductsPack product={product} />
          <ProductsProxi product={product} />
        </section>        
      </main>
    )

  );
}

export default DisplayCode;