import React from 'react'
import "./ProductsIngredient.css";

function ProductsIngredientBack({product}) {



    
    return (
        <article className='alimentation'>
            <table>
                <caption>Caractéristiques produit</caption>
                <tr>
                    <th className="caract">Ingredients & traces éventuelles :</th>
                    <td className="td1-3">{product.ingredients_text_fr}</td>
                </tr>
                <tr>
                    <th className="caract">Allergènes : </th>
                    <td className="td2-4">{product.allergens}</td>
                </tr>
            </table>
      </article>
    )
}

export default ProductsIngredientBack;