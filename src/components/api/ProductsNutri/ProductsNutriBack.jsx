import React from 'react'
import "./ProductsNutri.css"

export default function ProductsNutri({slide}) {
    return (
        <article className='nutrition' > 
            <table>
                <caption>Informations nutritionnelles</caption>
                <tr>
                    <th className="caract">Matières grasses: </th>
                    <td className="td1-3">{slide.nutrient_levels.fat}</td>
                </tr>
                <tr>
                    <th className="caract">Sel: </th>
                    <td className="td2-4">{slide.nutrient_levels.salt}</td>
                </tr>
                <tr>
                    <th className="caract">Sucre: </th>
                    <td className="td1-3">{slide.nutrient_levels.sugars}</td>
                </tr>
                <tr>
                    <th className="caract">Taille d'une portion : </th>
                    <td className="td2-4">{slide.serving_size}</td>
                </tr>
                <tr>
                    <th className="caract">Groupe Nova : </th>
                    <td className="td1-3">{slide.nova_group}</td>
                </tr>
                <tr>
                    <th className="caract">Nutriscore : </th>
                    <td className="td2-4">{slide.nutrition_grades}</td>
                </tr>
            </table>
      </article>
    )
}
