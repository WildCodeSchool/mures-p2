import React from 'react'
import "./ProductsNutri.css"

export default function ProductsNutri({product}) {
    return (
        <article className='nutrition' > 
            <table>
                <caption>Informations nutritionnelles</caption>
                <tr>
                    <th className="caract">Matières grasses: </th>
                    <td className="td1-3">{product.nutriments.fat_100g} gr</td>
                </tr>
                <tr>
                    <th className="caract">Sel: </th>
                    <td className="td2-4">{product.nutriments.salt_100g} gr</td>
                </tr>
                <tr>
                    <th className="caract">Sucre: </th>
                    <td className="td1-3">{product.nutriments.sugars_100g} gr</td>
                </tr>
                <tr>
                    <th className="caract">Taille d'une portion : </th>
                    <td className="td2-4">{product.serving_size}</td>
                </tr>
                <tr>
                    <th className="caract">Groupe Nova : </th>
                    <td className="td1-3">{product.nova_group}</td>
                </tr>
                <tr>
                    <th className="caract">Nutriscore : </th>
                    <td className="td2-4">{product.nutrition_grades}</td>
                </tr>
            </table>
      </article>
    )
}
