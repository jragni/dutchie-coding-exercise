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
import { PRODUCT } from './gql-queries';
import ModalContext from '../contexts/ModalContext';

import ProductModal from 'components/product/ProductModal/index';
import ProductCardList from 'components/product/ProductCardList/index';
import LoadingIndicator from 'components/LoadingIndicator/index';


export default function ProductResult(props) {
  const [ modalActive, setModalActive ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);

  const [ 
    getProductDetails, { 
      called,
      loading,
      error,
      data,
    },
  ] = useLazyQuery( PRODUCT );

  // TODO FOR DEV
  console.log('cartItems: ', cartItems);
  // END FOR DEV

  if (called && loading) {
    return <LoadingIndicator /> 
  } 

  if (error) {
    return <h1> {error.message} </h1>;
  }

  return (
    <PageWrapper heading='The Result' icon='menu'>
      <ModalContext.Provider value={{ cartItems, setCartItems ,getProductDetails, setModalActive }} >
      { data && modalActive &&
        <ProductModal {...data.Product} 
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
      }
      <ProductCardList />
      </ModalContext.Provider>
    </PageWrapper>
  );
}
