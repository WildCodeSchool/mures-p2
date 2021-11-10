import React, {useState} from 'react';
import "./Resultproduct.css"
import logo from "../../assets/logo.png"

function Resultproduct( {product} ) {

    

    return (
        <main className="resultproduct">
            <div className="slideimg">
                <img className="imgproduct1" src={logo}/>
                <img className="imgproduct2" src={logo}/>
                <img className="imgproduct3" src={logo}/>
            </div>
            <div className="slideshowDots">
                <div className="slideshowDot"></div>
                <div className="slideshowDot"></div>
                <div className="slideshowDot"></div>
            </div>
        </main>
    )
}

export default Resultproduct


