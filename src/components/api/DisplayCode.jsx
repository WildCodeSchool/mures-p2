import React, { useEffect, useState } from 'react';
import Alternatives from "./Alternatives";
import ProductsInfos from './ProductsInfos';
import ProductsIngredient from './ProductsIngredient';
import ProductsNutri from './ProductsNutri';
import ProductsPack from "./ProductsPack"
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css"
import axios from 'axios';

function DisplayCode({ match }) {
  const [product, setProduct] = useState();
  const [isNotFound, setIsNotFound] = useState(false);
  const reloader = () => {
    window.location.reload()
   }

  const { id } = match.params

  const getOpenFoodFact = async () => {
    setIsNotFound(false)
    // Send the request
    await axios
      .get(`https://fr.openfoodfacts.org/api/v2/product/${ id }`)
      .then((response) => response.data)
      .then((data) => {
        setProduct(data.product);
      }).catch(() => {
        setIsNotFound(true)
      });
  };

  useEffect(() => {
    getOpenFoodFact();
  }, [id]);

  return (
    <div>
      <article className='DisplayCode'>
        {
          isNotFound ? <p>Aucun produit trouvé</p> :
            product && (
              <main>
                <button className="buttonmenu" onClick={reloader}>Je scanne un autre produit</button>
                <section className='DisplayCode'> 
                    <ProductsInfos product={product} />
                    <ProductsIngredient product={product} />
                    <ProductsNutri product={product} />
                    <ProductsProxi product={product} />
                    <Alternatives product={product} />
                    <ProductsPack product={product} />
                </section>
              </main>
            )
        }
      </article>
    </div>
  )};

export default DisplayCode