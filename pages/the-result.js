/** ProductCard 
 * 
 */
import React from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/layout/page-wrapper';
// FOR DEV
import ProductCardList from 'components/product/ProductCardList/index.jsx';
// END DEV

// TODO add drop effect 
// TODO learn how to toggle
// TODO add a loding indicator 
// NOTE: ask if the page should render 
export default function ProductResult() {
  return (
    <PageWrapper heading='The Result' icon='menu'>
      <ProductCardList products={[]}/>
     </PageWrapper>
  );
}
