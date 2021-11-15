import React, {useState} from 'react';
import "./ProductsInfos.css";


function ProductsInfosBack( {product}) {

    const [isFav, setIsFav] = React.useState(false);

    function handleClickFav() {
    setIsFav(!isFav);
    }

    return (
        <div className = "back">
 
               <img className="imgproducts" src={product.image_url}></img>
            <div className="nameProduct">
                <h1>{product.product_name} </h1>
            </div>
            <div className="detailProducts">
                <p><u>Code barre </u>:  {product.code}</p>
                <p><u>Marque </u>: {product.brands_tags}</p>
                <p><u>Ajouter aux favoris </u>: </p>
            </div>
            <div className="fav">
            <div
                className={isFav ? "isFavorite" : "notFavorite"}
                onClick={handleClickFav}
                >
                </div> 
            </div>    
    
        
        
        </div>
    );
}

export default ProductsInfosBack;
