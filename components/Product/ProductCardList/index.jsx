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
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks'

import { PRODUCTS } from './queries';
import { Wrapper } from './Wrapper';
import ProductCard from '../ProductCard/index';

// TODO loading indicator
// TODO error message component
// FIXME: Did not expect server HTML to contain a <div> in <div>

export default function ProductCardList({ getProductDetails }) {

  // Fetch data from server
  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) return <i> Loading... </i>;

  if (error) {
    return (<div> {error.message} </div>);
  }

  if (data.allProducts.length === 0) {
    // TODO add an icon for empty products here
    return (<h1> No products to show</h1>)
  }
  return (
    <Wrapper className="ProductCardList">
       { data.allProducts.map(product => ( 
        <ProductCard
          {...product} 
          getProductDetails={getProductDetails}
          key={product.id} 
        />)
      )} 
    </Wrapper> 
  );
}
