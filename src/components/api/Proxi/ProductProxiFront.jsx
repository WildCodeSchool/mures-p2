import React, {useState} from 'react';
import "./productsProxi.css";


function ProductsProxiFront() {

    return (
        
            <div className="front">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#84BF04" width="140">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h1 className="titleFront">Où acheter ce produit ?</h1>
            </div>
            
    );
}

export default ProductsProxiFront;
