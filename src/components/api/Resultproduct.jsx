import React, { useEffect, useState } from 'react';
import "./Resultproduct.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import {useParams} from "react-router-dom";


function Slider() {

    const [ searchResults, setSearchResults ] = useState([]);

    const { searchTerm } = useParams();

    const getOpenFoodFact = async () => {
        // Send the request 
        const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${ searchTerm }&json=true`
        const response = await axios(url);

       console.log(response.data.products);
       setSearchResults(response.data.products);
    }

    useEffect(() => {
        getOpenFoodFact()
    }, [searchTerm])

    const [goProducts, setGoProducts] = useState('');

    const handleClick = (e) => {
        setGoProducts(e.target.value)
    };


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
                    <h1>Le nom du produit</h1>
                </div>
            <Carousel 
              autoPlay
              interval={6000} 
              infiniteLoop
              >
                {searchResults.map(slide => (
                    <div key={slide._id}>
                        <img className="imgslide" onClick={handleClick} src={slide.image_url} alt=""/>
                        <div className="overlay">
                            <h2 className="overlay__title">{slide.product_name}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
            </main>
    )
}

export default Slider

