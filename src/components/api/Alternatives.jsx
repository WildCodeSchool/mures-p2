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
            console.log('Une erreur est arrivé')
        } finally {
            setIsLoading(false)
        }
    }

    const handleRedirect = () => {
        history.push(`/product/${ alternativeProduct.id }`)
    }



    useEffect(() => {
        if (product) {
            setIsLoading(true)
            getOpenFoodFact()
        }
    }, [product])

    return (
        <div>
            <article>
                <div>
                    <h1 className="text-center">Recommandation</h1>
                </div>
                <div className="info-product">
                    {
                        isLoading ? <p>Chargement en cours...</p> :
                            alternativeProduct && (
                                <>
                                    <p>{alternativeProduct.product_name}</p>
                                    <p>Code barre : {alternativeProduct.code} </p>
                                    <p>NutriScore : {alternativeProduct.nutrition_grades}</p>
                                    <p>Categorie : {alternativeProduct.categories}</p>
                                    <p>countrie : {alternativeProduct.countries}</p>
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
        </div>

    );
}

export default withRouter(Alternatives);