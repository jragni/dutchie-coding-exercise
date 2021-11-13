/** ProductCard 
 * 
 */
import React from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/layout/page-wrapper';
// FOR DEV
import ProductCard from 'components/Product/ProductCard/index.jsx';
// END DEV

// TODO add drop effect 
// TODO learn how to toggle
// TODO add a loding indicator 
export default function ProductResult() {
  return (
    <PageWrapper heading='The Result' icon='menu'>
      <ProductCard/>
    </PageWrapper>
  );
}
