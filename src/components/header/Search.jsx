import React from 'react';
import { useState, useEffect } from "react";
import "./Search.css";
import axios from 'axios';
import Slider from '../api/ResultProduct'
import Home from '../home/Home'
import Resultproduct from '../api/Resultproduct';


function Search(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.onSubmit(searchTerm)
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
