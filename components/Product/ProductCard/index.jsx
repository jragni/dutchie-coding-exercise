/** ProductCard
 *
 * Displays the information of a product.
 *
 * Props:
 *  id: the server define id.
 *  name: name of the product flavors
 *  image: url of the image
 *  strainType: the product's strain (Indica, Sativa, Hybrid, High CBD)
 *  Prices: the array of prices for the product per size
 *  THCContent: THC potency
 *  CBDContent: CBD potency
 *
 * ProductCardList -> ProductCard
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/index.jsx';
import ModalContext from '../../../contexts/ModalContext.jsx';
import { STRAINS_IMAGE } from './constants';
import Badge from 'components/Badge/index';
import { toUSD, toPercent } from 'utils/helpers';
import Box from 'components/shared/Box';
import Font from 'components/shared/Font';

import { ContentWrapper,  ProductPrice } from './content';
import Wrapper from './Wrapper';

export default function ProductCard({ 
  id, 
  Name, 
  Image, 
  strainType, 
  Prices, 
  THCContent, 
  CBDContent,
 }) {
  const { getProductDetails, setModalActive } = useContext(ModalContext);

  // On click, the modal state will be active and the product details fetched
  function onClickHandler() {
    getProductDetails({ variables: { id } });
    setModalActive(true);
  }

  // TODO for dev, whill change on final decision
  // On click of Add cart button, add id, Name, price to cart
  // function onClickAddCart() {
  //   setCartItems([...cartItems, {id, Name, }])
  // }

  // Content for the card
  const content = (
    <ContentWrapper>
      <ProductPrice> {toUSD(Prices[0])} </ProductPrice>
      <Font
        className="ProductCard__ProductName"
        fontWeight="bold"
        fontSize={1.25}
        padding={"0 1"}
        lineHeight={1.2}
        wordBreak={'break-word'}
      >
        { Name } 
      </Font>
      <Badge src={STRAINS_IMAGE[strainType]} label={strainType} />
      <Box 
        className='ProductCard__PotencyContainer'
        width={120} display='inline-flex' 
        flex-wrap='wrap' 
        padding-bottom={1}
      >
        <Font 
          className='ProductCard__THCContent' 
          color='#5f6b78' 
          paddingLeft={1}
        >
          <strong>THC: </strong>
          {toPercent(THCContent / 100)}
          {CBDContent !== undefined ? ' | ' : ''}
        </Font>
        <Font 
          className='ProductCard__CBDContent' 
          color='#5f6b78' 
          paddingLeft={0.25}
        >
          <strong>CBD: </strong>
          {toPercent(CBDContent / 100)}
        </Font>
        {/* TODO to refactor for more aesthetic appearance */}
        {/* For DEV will return upon furhter study and decision */}
        {/* <button> Add to cart</button> */}
      </Box>
    </ContentWrapper>
  );

  return (
    <Wrapper onClick={onClickHandler}>
      <Card className='ProductCard' thumbnail={Image} content={content} />
    </Wrapper>
  );
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  image: PropTypes.string,
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  THCContent: PropTypes.number,
  CBDContent: PropTypes.number,
};
