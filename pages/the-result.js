/** ProductResult
 * 
 * Displays the list of products and the modal of those products when modal 
 * is active.
 * 
 * Props:
 *  None
 * 
 * States: 
 *  modalActive: Boolean that determines if the modal is active.
 * 
 * ProductResult -> { ProductCardList, ProductModal }
 */

import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import PageWrapper from 'components/layout/page-wrapper';
// FOR DEV
import ProductCardList from 'components/product/ProductCardList/index';
import ProductModal from 'components/product/ProductModal/index';
import { PRODUCT } from './constants';
import LoadingIndicator from 'components/LoadingIndicator/index';
// END DEV

// NOTE: ask if the page should render the Product Card List the way it is now 
export default function ProductResult(props) {

  const [ modalActive, setModalActive ] = useState(false);

  const [ 
    getProductDetails, { 
      called,
      loading,
      error,
      data,
    },
  ] = useLazyQuery( PRODUCT );

  if (called) {
    console.log('called!');
  }
  if (called && loading) {
    return <LoadingIndicator /> 
  } 

  if (error) {
    return <h1> {error.message} </h1>;
  }

 
  return (
    <PageWrapper heading='The Result' icon='menu'>
      { data && modalActive &&
        <ProductModal {...data.Product} 
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
      }
      <ProductCardList 
        getProductDetails={getProductDetails} 
        setModalActive={setModalActive}
      />
    </PageWrapper>
  );
}
