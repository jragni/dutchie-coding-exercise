/**ProductModal
 *
 * Modal that displays the products details
 * 
 * Props: 
 *  Name: name of the product 
 *  Image: string link to image source 
 *  strainType: the type of strain ex: "Sativa", "Indica", "Hybrid"
 *  Prices: array of prices
 *  Options: options for size/flavor that corresponds to the price 
 *  Description: Product description 
 *  THCContent: THC potency  
 *  CBDContent: CBD potency 
 *  effects: Array of effects of the product ex: [{Inspired: 3}, {Happy: 3}]
 *  type: type of product ex: "edible" or "flower"
 *  modalActive: Boolean that determines whether the modal is active or not,
 *  setModalActive: hook to set state for modal
 *  
 */

import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import ModalContext from '../../../contexts/ModalContext.jsx';
import Font from 'components/shared/Font';
import Box from 'components/shared/Box';
import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductOption,
  ProductDescription,
  Aside,
  CloseButton,
  Wrapper,
} from './content';

import Badge from 'components/Badge/index';
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

  // NOTE: naming for props was decided to accomodate to data query.

  // Combined prices and options array
  const priceAndOptions = zip(Prices, Options);
  const { cartItems, setCartItems} = useContext(ModalContext);



  function closeModal() {
    setModalActive(false);
  }

  // Adds item name, price, and option to the cartItems array as an object 
  function onClickAddToCart(entry, evt) {
    evt.preventDefault();
    evt.stopPropagation();
    setCartItems(items => [...items, {Name, price: entry[0], option: entry[1]}])
  }

  const modalOverlayStyle = {
    backgroundColor: 'rgba(65, 65, 65, 0.7)',
  };

  // This acts as the Wrapper for the Modal
  const modalContent = {
    backgroundColor: '#fbfcfc',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  if (modalActive === false) return null;

  return (
    <Wrapper onClick={closeModal}>
      <Modal
        isOpen={modalActive}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{ overlay: modalOverlayStyle, content: modalContent }}
      >
        <ProductImage src={Image} />
          <Aside>
            <ProductName> {Name} </ProductName>

            <Box
              className="ProductModal__OptionsContainer"
              display="flexbox"
              flexWrap="wrap"
              marginLeft=".5rem"
            >
              {priceAndOptions.map((entry) => (
                <Box
                  key={`${entry[0]}-${entry[1]}`}
                  className="ProductModal_Option"
                  textAlign="center"
                  border="2px solid #4999df"
                  borderRadius="1rem"
                  padding="0.5rem"
                  margin="0.5rem"
                  onClick={(evt) =>{ onClickAddToCart(entry, evt)}}
                >
                  <ProductOption key={`${entry[0]}-${entry[1]}-option`} >
                    {entry[1]}
                  </ProductOption>
                  <ProductPrice key={`${entry[0]}-${entry[1]}-value`} >
                     {toUSD(entry[0])}
                  </ProductPrice>
                </Box>
              ))}
            </Box>

            <Badge label={strainType} src={STRAINS_IMAGE[strainType]} />
            <Badge label={`Type: ${type}`} />
            <Box 
              className="ProductModal__Potency"
              display="flex"
            >
              <Font 
                className='ProductModal__THCContent' 
                color='#5f6b78' 
                paddingLeft={1}
              >
                <strong>THC: </strong>
                {toPercent(THCContent / 100)}
              </Font>
              <Font 
                className='ProductModal__CBDContent' 
                color='#5f6b78' 
                paddingLeft={0.25}
              >
                <strong>CBD: </strong>
                { toPercent(CBDContent / 100) }
              </Font>
            </Box>
            <ProductDescription> {Description} </ProductDescription>
              <Box
                className="ProductModal__EffectsContainer"
                display="flex"
                flexWrap="wrap"
              >
              {Object.entries(effects).map((effect) => (
                <Box
                  key={`ProductModal__Effect_${effect[0]}-${Name}`}
                  className="ProductModal__Effect"
                  margin="0.5rem"
                  padding="1rem"
                  bgColor="#eaeff2"
                  borderRadius="1rem"
                >
                  <p>
                    {effect[0]}: {effect[1]}{' '}
                  </p>
                </Box>
              ))}
              </Box>
          </Aside>
        <CloseButton onClick={closeModal}> X </CloseButton>
      </Modal>
    </Wrapper>
  );
}

ProductModal.propTypes = {
  Name: PropTypes.string,
  Image: PropTypes.string,
  Options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  Description: PropTypes.string,
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  Description: PropTypes.string,
  effects: PropTypes.object,
  type: PropTypes.string,
  THCContent: PropTypes.number,
  CBDContent: PropTypes.number,
  modalActive: PropTypes.bool,
  setModalActive: PropTypes.func,
};

export default ProductModal;
