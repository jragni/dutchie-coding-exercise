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
 * ProductResult -> { ProductCardList, Modal }
 */

import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import PageWrapper from 'components/layout/page-wrapper';
// FOR DEV
import ProductCardList from 'components/product/ProductCardList/index.jsx';
import Modal from 'components/Modal/index.jsx';
import { PRODUCT } from './constants';
// END DEV

// TODO add drop effect 
// TODO learn how to toggle
// TODO add a loding indicator 
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
  if (data) console.log('data: ', data);
  return (
    <PageWrapper heading='The Result' icon='menu'>
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
      <ProductCardList 
        getProductDetails={getProductDetails} 
      />
    </PageWrapper>
  );
}
