import React, { useEffect, useState } from 'react';
import Alternatives from "./Alternatives";
import ProductsInfos from './ProductsInfos';
import ProductsIngredient from './ProductsIngredient';
import ProductsNutri from './ProductsNutri';
import ProductsPack from "./ProductsPack"
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css"
import axios from 'axios';

function Product({ match }) {
  const [product, setProduct] = useState();
  const [isNotFound, setIsNotFound] = useState(false);

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
              <>
                <div>
                  <ProductsInfos product={product} />
                </div>
                <div>
                  <ProductsIngredient product={product} />
                </div>
                <div>
                  <ProductsNutri product={product} />
                </div>
                <div>
                  <ProductsProxi product={product} />
                </div>
                <div>
                  <Alternatives product={product} />
                </div>
                <ProductsPack product={product} />
                <ProductsProxi product={product} />
              </>
            )
        }
      </article>
    </div>
  );
}

export default Product;