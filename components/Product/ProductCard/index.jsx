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

import React from 'react'; 
import PropTypes from 'prop-types';

import Card from 'components/Card/index.jsx';
import { STRAINS_IMAGE, } from './constants';
import Badge from 'components/Badge/badge.jsx';
import { toUSD, toPercent } from 'utils/helpers';
import { 
  ContentWrapper,
  ContentP,
  THCContentText,
  CBDContentText,
  ProductPrice,
  ProductName,
} from './content';
import { Wrapper } from './Wrapper';

export default function ProductCard({
  id,
  Name,
  Image,
  strainType,
  Prices,
  THCContent,
  CBDContent,
  getProductDetails,
  setModalActive,
}) {

  function startProductFetch() {
    getProductDetails({variables: { id }});
    setModalActive(true);
  }

  // Content for the card
  const content = (
    <ContentWrapper> 
      <ProductPrice> { toUSD(Prices[0]) } </ProductPrice>
      <ProductName> { Name } </ProductName>
      <Badge src={ STRAINS_IMAGE[strainType] } label={ strainType }/>
      <ContentP>
        <THCContentText isCBD={CBDContent}> 
          <strong>THC: </strong> 
          { toPercent(THCContent / 100) }
          { CBDContent !== undefined ? " | " : "" }
        </THCContentText>
        <CBDContentText> 
          <strong>CBD: </strong> 
          { toPercent(CBDContent / 100) } 
        </CBDContentText>
      </ContentP>
    </ContentWrapper>
  );

  return ( 
    <Wrapper onClick={startProductFetch}>
      <Card className="ProductCard" thumbnail={Image} content={content}/> 
    </Wrapper>
  );
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  flavors: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string, 
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  THCContent: PropTypes.number,
  CBDContent: PropTypes.number,
  getProductDetails: PropTypes.func,
  setModalActive: PropTypes.func,
}
