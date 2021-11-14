/** ProductCard
 * 
 * Displays the information of a product.
 * 
 * Props: 
 *  id: server given id of product
 *  name: name of the product flavors
 *  image: url of the image
 *  strainType: the product's strain (Indica, Sativa, Hybrid, High CBD) 
 *  Prices: the array of prices for the product per size
 *  THCContent: THC potency 
 *  CBDContent: CBD potency
 */

import React from 'react'; 
import PropTypes from 'prop-types';

import Card from 'components/Card/index.jsx';
import { STRAINS_IMAGE, toUSD, toPercent } from './constants';
import { 
  Wrapper,
  ContentP,
  THCContentText,
  CBDContentText,
  Badge,
  BadgeIcon,
  ProductPrice,
  ProductName,
} from './Content';

export default function ProductCard({
  id,
  name,
  image,
  strainType,
  Prices,
  THCContent,
  CBDContent,
}) {

 // FOR DEV TESTING
 id = 1;
 image = 'https://s3-us-west-2.amazonaws.com/dutchie-images/e9da65afc7bcf48c3f9c6bcdd69d024d';
 name ='Purefectionery | Eclipse Gummies', 
 Prices = [100.02];
 strainType = 'Indica';
 THCContent = 20.25;
 CBDContent = 1;

 // TODO onclick display a modal
  const content = (
    <Wrapper>
      <ProductPrice> { toUSD(Prices[0]) } </ProductPrice>
      <ProductName> {name } </ProductName>
      <Badge>
        <BadgeIcon src={ STRAINS_IMAGE[strainType] }/>
        { strainType }
      </Badge>

      <ContentP>
      { THCContent && (
        <THCContentText isCBD={CBDContent}> 
          <strong>THC: </strong> 
          { toPercent(THCContent / 100) }
          { CBDContent ? " | " : null }
        </THCContentText>
      )}
      { CBDContent && (
        <CBDContentText> 
          <strong>CBD: </strong> 
          { toPercent(CBDContent / 100) } 
        </CBDContentText>
      )}
      </ContentP>
    </Wrapper>
  );

  return ( <Card className="ProductCard" thumbnail={image} content={content}/> );
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  name: PropTypes.string,
  flavors: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string, 
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  THCContent: PropTypes.number,
  CBDContent: PropTypes.number,
}
