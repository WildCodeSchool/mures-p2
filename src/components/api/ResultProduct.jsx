import React from 'react';
import "./ResultProduct.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider( {product} ) {

    const baseUrl = "http://react-responsive-carousel.js.org/assets/";
    const datas = [
        {
            id:1,
            image: `${baseUrl}1.jpeg`,
            title: "titre 1",
        },
        {
            id:2,
            image: `${baseUrl}2.jpeg`,
            title: "titre 2",
        },
        {
            id:3,
            image: `${baseUrl}3.jpeg`,
            title: "titre 3",
        },
    ]

    return (
            <main>
                <div className="productName">
                    <h1>{product.product_name}Le nom du produit</h1>
                </div>
            <Carousel 
              autoPlay
              interval={6000} 
              infiniteLoop
              >
                {datas.map(slide => (
                    <div key={slide.id}>
                        <img src={slide.image} alt=""/>
                        <div className="overlay">
                            <h2 className="overlay__title">{slide.title}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
            </main>
    )
}

export default Slider

