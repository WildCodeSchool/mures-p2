import React from 'react';
import "./alternatives.css";
import AlternativesFront from './AlternativesFront';
import AlternativesBack from './AlternativesBack';


function Alternatives( {product, handleFlip, isFlip} ) {
  

    return (

        <div onClick={handleFlip}  className={`card ${isFlip ? 'flip' : ''}`}> 
      {isFlip ? 
      <AlternativesBack product={product} />
      :
      <AlternativesFront />
    }   
     
     </div>

    );
}

export default Alternatives;
