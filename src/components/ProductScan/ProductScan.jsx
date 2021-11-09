import React, { useState, useRef, useEffect } from "react";

import DisplayCode from "../api/DisplayCode";
import DisplayScan from "../Scan/DisplayScan";

const ProductScan = ({setProduct, product}) => {
 const reloader = () => {
  window.location.reload()
 }

  return (
    <div className="productScan">
      
      {product === ""
      ? <DisplayScan product={product}  setProduct={setProduct}/>
      :
      
      <DisplayCode product={product}  setProduct={setProduct}/>
      }
      
    </div>
  );
};

export default ProductScan;


//<button className="buttonmenu" onClick={window.location.reload()}>Je scanne un autre produit</button>,