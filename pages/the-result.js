/** ProductCard 
 * 
 */
import React from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/layout/page-wrapper';
// FOR DEV
import ProductCardItem from 'components/ProductCardItem/index';
// END DEV

// TODO add drop effect 
// TODO learn how to toggle
export default function ProductCard() {
  return (
    <PageWrapper heading='The Result' icon='menu'>
      <ProductCardItem />
    </PageWrapper>
  );
}
