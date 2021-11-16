import React, { useState, useRef, useEffect } from "react";

import DisplayCode from "../api/DisplayCode";
import DisplayScan from "../Scan/DisplayScan";
import "../Scan/display.css"

const ProductScan = ({setProduct, product}) => {
 const reloader = () => {
  window.location.reload()
 }

  return (
    <main className="productScan">
      
      {product === ""
      ? <DisplayScan product={product}  setProduct={setProduct}/>
      :
      
      <DisplayCode product={product}  setProduct={setProduct}/>
      }
      
    </main>
  );
};

export default ProductScan;


//<button className="buttonmenu" onClick={window.location.reload()}>Je scanne un autre produit</button>,