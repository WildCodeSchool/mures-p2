import React, {useState} from 'react';
import "./ProductsInfos.css";


function ProductsInfos( {product}) {

    const [isFav, setIsFav] = React.useState(false);

    function handleClickFav() {
    setIsFav(!isFav);
    }

    return (
        <article className='InfoPrincipales'>
               <img className="imgproducts" src={product.image_url}></img>
            <div className="nameProduct">
                <h1>{product.product_name_fr} </h1>
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
        </article>
    );
}

export default ProductsInfos;
