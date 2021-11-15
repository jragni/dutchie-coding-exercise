/**ProductModal
 * 
 * Modal that displays the products details
 */

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { 
  ProductImage,
  ProductName,
  ProductOptions,
  Aside,
} from './content';
import { toUSD, toPercent } from 'utils/helpers';

function ProductModal({ 
  Name,
  Image,
  strainType,
  Prices,
  Options,
  Description,
  effects,
  type,
  modalActive,
  setModalActive,
}) {

  function closeModal() {
    setModalActive(false);
  }
  const modalOverlayStyle = {
    backgroundColor: 'rgba(65, 65, 65, 0.7)',
  };

  const modalContent = {
    backgroundColor: '#fbfcfc',
  };

  if (modalActive === false) return null;

  return (
    <Modal 
      isOpen={modalActive}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style = { {overlay: modalOverlayStyle, content: modalContent } }
    >
      <ProductImage src={Image} />
      <Aside>
        <ProductName> {Name} </ProductName>
        <ProductOptions> 
          { Prices.map( price => <div> {toUSD(price)} </div>) }
          { Options.map( option => <div> { option } </div>) }
        </ProductOptions>
      </Aside>
      
    </Modal>
  );
}

ProductModal.propTypes = {
  Name: PropTypes.string,
  Image: PropTypes.string,
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  Description: PropTypes.string,
  effects: PropTypes.object,
  type: PropTypes.string,
};

export default ProductModal;