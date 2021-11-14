/** ProductCard
 * 
 * Displays the information of a product.
 * 
 * Props: 
 *  name: name of the product flavors
 *  image: url of the image
 *  strainType: the product's strain (Indica, Sativa, Hybrid, High CBD) 
 *  Prices: the array of prices for the product per size
 *  THCContent: THC potency 
 *  CBDContent: CBD potency
 *  displayDetails: Shows the modal of the product with more details. 
 * 
 * ProductCardList -> ProductCard
 */

import React from 'react'; 
import PropTypes from 'prop-types';

import Card from 'components/Card/index.jsx';
import { STRAINS_IMAGE, toUSD, toPercent } from './constants';
import Badge from 'components/Badge/badge.jsx';
import { 
  ContentWrapper,
  ContentP,
  THCContentText,
  CBDContentText,
  ProductPrice,
  ProductName,
} from './Content';
import { Wrapper } from './Wrapper';

export default function ProductCard({
  displayDetails,
  Name,
  Image,
  strainType,
  Prices,
  THCContent,
  CBDContent,
}) {

 // FOR DEV TESTING
//  image = 'https://s3-us-west-2.amazonaws.com/dutchie-images/e9da65afc7bcf48c3f9c6bcdd69d024d';
//  name ='Purefectionery | Eclipse Gummies', 
//  Prices = [100.02];
//  strainType = 'Sativa';
//  THCContent = 20.25;
//  CBDContent = 1;
//  displayDetails = (evt) => alert('hello') ;

 // TODO onclick display a modal
  const content = (
    <ContentWrapper> 
      <ProductPrice> { toUSD(Prices[0]) } </ProductPrice>
      <ProductName> {Name } </ProductName>
      <Badge src={ STRAINS_IMAGE[strainType] } label={ strainType }/>
      <ContentP>
        <THCContentText isCBD={CBDContent}> 
          <strong>THC: </strong> 
          { toPercent(THCContent / 100) }
          { CBDContent != undefined ? " | " : null }
        </THCContentText>
        <CBDContentText> 
          <strong>CBD: </strong> 
          { toPercent(CBDContent / 100) } 
        </CBDContentText>
      </ContentP>
    </ContentWrapper>
  );

  return ( 
    <Wrapper onClick={displayDetails}>
      <Card className="ProductCard" thumbnail={Image} content={content}/> 
    </Wrapper>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  flavors: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string, 
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  THCContent: PropTypes.number,
  CBDContent: PropTypes.number,
  displayDetails: PropTypes.func,
}
