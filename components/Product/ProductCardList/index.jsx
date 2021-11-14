/** ProductCardList
 * 
 * Component that displays the list of ProductCards.
 * 
 * Props:
 *  products: list of products
 * 
 * States: 
 * 
 * ProductResults -> ProductCardList -> ProductCard
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks'

import { PRODUCTS } from './queries';
import { Wrapper } from './Wrapper';
import ProductCard from '../ProductCard/index';

// TODO List the products in a column layout on mobile and row on desktop.
// TODO loading indicator

export default function ProductCardList({products}) {

  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) return <i> Loading... </i>
  if (error){  
    console.log(error);
    return <div> error</div> ;
  } 
  products = data.allProducts;

  if (products.length === 0) {
    // TODO add an icon for empty products here
    return (<h1> No products to show</h1>)
  }

  return (
    <Wrapper className="ProductCardList">
       { products.map( product => (
          <ProductCard 
            {...product} key={product.id} displayDetails={() => null }
          />
        )
      )}
    </Wrapper>
  );
}

ProductCardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};