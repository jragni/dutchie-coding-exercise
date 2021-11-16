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
  ProductOptionContainer,
  ProductPrice,
  ProductOption,
  ProductDescription,
  Aside,
  Flexbox,
  MarginLeft,
  EffectsContainer,
  CBDTHCContentContainer
} from './content';
import { THCContentText, CBDContentText } from 'components/product/ProductCard/content';

import Badge from 'components/Badge/Badge.jsx';
import { STRAINS_IMAGE } from '../ProductCard/constants';

import { zip, toUSD, toPercent } from 'utils/helpers';

function ProductModal({
  Name,
  Image,
  strainType,
  Prices,
  Options,
  Description,
  THCContent,
  CBDContent,
  effects,
  type,
  modalActive,
  setModalActive,
}) {
  // Combined prices and options array
  const priceAndOptions = zip(Prices, Options);

  function closeModal() {
    setModalActive(false);
  }
  const modalOverlayStyle = {
    backgroundColor: 'rgba(65, 65, 65, 0.7)',
  };

  // This acts as the Wrapper for the Modal
  const modalContent = {
    backgroundColor: '#fbfcfc',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '0.5rem',
  };

  if (modalActive === false) return null;

  return (
    <div onClick={closeModal}>
      <Modal
        isOpen={modalActive}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{ overlay: modalOverlayStyle, content: modalContent }}
      >
        <ProductImage src={Image} />
        <MarginLeft>
          <Aside>
            <ProductName> {Name} </ProductName>

            <Flexbox>
              {priceAndOptions.map((entry) => (
                <ProductOptionContainer key={`${entry[0]}-${entry[1]}`}>
                  <ProductOption> {entry[1]}</ProductOption>
                  <ProductPrice> {toUSD(entry[0])} </ProductPrice>
                </ProductOptionContainer>
              ))}
            </Flexbox>

            <Badge label={strainType} src={STRAINS_IMAGE[strainType]} />
            <Badge label={`Type: ${type}`} />
            <CBDTHCContentContainer>
              <THCContentText isCBD={CBDContent}>
                <strong>THC: </strong>
                {toPercent(THCContent / 100)}
              </THCContentText>
              <MarginLeft>
              <CBDContentText>
                <strong>CBD: </strong>
                {toPercent(CBDContent / 100)}
              </CBDContentText>
              </MarginLeft>
            </CBDTHCContentContainer>
            <ProductDescription> {Description} </ProductDescription>

            <Flexbox>
              {Object.entries(effects).map((effect) => (
                <EffectsContainer key={`${effect[0]}-${Name} `}>
                  <p>
                    {effect[0]}: {effect[1]}{' '}
                  </p>
                </EffectsContainer>
              ))}
            </Flexbox>
          </Aside>
        </MarginLeft>
      </Modal>
    </div>
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
