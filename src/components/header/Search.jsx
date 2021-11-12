import React from 'react';
import { useState, useEffect } from "react";
import "./Search.css";
import axios from 'axios';


function Search(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.onSubmit(await getOpenFoodFact())
    }

    const getOpenFoodFact = async () => {
        // Send the request 
        setIsLoading(true)
        const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${ searchTerm }&json=true`
        const response = await axios(url);
        setIsLoading(false)
        return response.data.products?.[0]
    }

    return (
        <div>
            <form className="searchBar" action="" onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm} value={searchTerm} />
                <button className={!isLoading ? "searchButton" : 'loadingButton'} > </button>
            </form>
        </div>
    )
}

export default Search;
