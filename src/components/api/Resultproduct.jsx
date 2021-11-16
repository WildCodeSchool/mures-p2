import React, { useEffect, useState } from 'react';
import "./Resultproduct.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import {useParams} from "react-router-dom";
import { withRouter } from 'react-router-dom';


function Resultproduct() {

    const [ searchResults, setSearchResults ] = useState([]);


    const { searchTerm } = useParams();

    const getOpenFoodFact = async () => {
        // Send the request 
        const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${ searchTerm }&json=true`
        const response = await axios(url);
       setSearchResults(response.data.products);
    }

    useEffect(() => {
        getOpenFoodFact()
    }, [searchTerm])



    return (
            <main className="slider">
            <Carousel 
              autoPlay
              interval={6000} 
              infiniteLoop
              centerMode
              >
                {
                searchResults.filter((product) => (product._id.length === 13) && product.countries.includes('France')).slice(0, 10).map(slide => (
                    <div key={slide._id}>
                        <img className="imgslide"   src={slide.image_url} />
                        <div className="overlay">
                          <a href={`/ProductId/${slide._id}`}> <button className="overlay__button">Go to Product</button> </a> 
                            <h2 className="overlay__title">{slide.product_name}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
            </main>

    )
}


export default withRouter(Resultproduct);