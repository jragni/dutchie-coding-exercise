/** ProductCardList
 * 
 * Component that displays the list of ProductCards.
 * 
 * Props:
 *  setSelectedProduct: function that accepts an id of the product
 * 
 * States: 
 * 
 * ProductResults -> ProductCardList -> ProductCard
 */

import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'

import { PRODUCTS } from './queries';
import { Wrapper } from './Wrapper';
import ProductCard from '../ProductCard/index';
import LoadingIndicator from 'components/LoadingIndicator/index';

function ProductCardList(props) {

  // Fetch data from server
  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) return <LoadingIndicator />;

  if (error) {
    return (<div> {error.message} </div>);
  }

  if (data.allProducts.length === 0) {
    return (<h1> No products to show </h1>)
  }

  return (
    <Wrapper className="ProductCardList">
       { data.allProducts.map(product => ( 
        <ProductCard
          {...product} 
          key={product.id} 
        />)
      )} 
    </Wrapper> 
  );
}
export default ProductCardList;