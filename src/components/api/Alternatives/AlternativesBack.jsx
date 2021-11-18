import React, { useEffect, useState } from 'react';
import "./alternatives.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Alternatives({ product }) {
    const [alternativeProduct, setalternativeProduct] = useState()
    const [isLoading, setIsLoading] = useState(true);

    const [isFavorite, setIsFavorite] = useState(false);
    const history = useHistory();


    const getOpenFoodFact = async () => {
        // Send the request 
        const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${ product.product_name }&tagtype_1=nutrition_grades&tag_contains_1=contains&json=true&fields=id,code,product_name,nutrition_grades,categories,countries&=`
        try {
            const response = await axios(url);
            const [alternativeProduct] = response.data.products.sort((a, b) => a?.nutrition_grades?.charCodeAt(0) - b?.nutrition_grades?.charCodeAt(0))
            if (alternativeProduct) {
                setalternativeProduct(alternativeProduct)
            }
        } catch {
            console.log('Une erreur est arrivée')
        } finally {
            setIsLoading(false)
        }
    }

    const handleRedirect = () => {
        console.log("handleRedirect")
        console.log("alternativeProduct", alternativeProduct)
        window.location.assign(`/ProductId/${ alternativeProduct.id }`)
        
    }



    useEffect(() => {
        if (product) {
            setIsLoading(true)
            getOpenFoodFact()
        }
    }, [product])

    return (
            <article className="alternative">
                <div className="info-product">
                    {
                        isLoading ? <p>Chargement en cours...</p> :
                            alternativeProduct && (
                                <>
                                    <h1 className="text-center">{alternativeProduct.product_name}</h1>
                                    <p><u>Code barre</u> : {alternativeProduct.code} </p>
                                    <p><u>NutriScore</u> : {alternativeProduct.nutrition_grades}</p>
                                    <p><u>Catégorie</u> : {alternativeProduct.categories}</p>
                                    <p><u>Pays</u> : {alternativeProduct.countries}</p>
                                    <span
                                        id="favorite"
                                        className={isFavorite ? "isFavorite" : "notFavorite"}
                                        onClick={() => {
                                            setIsFavorite(!isFavorite)
                                        }}
                                    />
                                    <div className="product-btn">
                                        <button onClick={handleRedirect} type="button">Voir fiche Produit</button>
                                    </div>
                                </>
                            )
                    }
                </div>
            </article>

    );
}

export default withRouter(Alternatives);