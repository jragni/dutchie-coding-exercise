/** ProductCard
 * 
 * Displays the information of a product.
 */

import React from 'react'; 
import PropTypes from 'prop-types';

import Card from 'components/Card/index.jsx';
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
import { ThemeContext } from 'styled-components';

export default function ProductCard({
  id,
  name,
  flavors,
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
 strainType = 'Sativa';
 THCContent = 20;
 CBDContent = 1;

  // format text in content
  const toUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const toPercent = new Intl.NumberFormat('en-US', { style: 'percent' });

  const content = (
    <Wrapper>
      <ProductPrice> {toUSD.format(Prices[0])} </ProductPrice>
      <ProductName> {name } </ProductName>
      <Badge>
        <BadgeIcon src={"static/strain-icons/sativa.svg"}/>
        { strainType }
      </Badge>

      <ContentP>
      { THCContent && (
        <THCContentText isCBD={CBDContent}> 
          <strong>THC: </strong> 
          { toPercent.format(THCContent / 100) } 
          { CBDContent ? " | " : null }
        </THCContentText>
      )}
      { CBDContent && (
        <CBDContentText> 
          <strong>CBD: </strong> 
          { toPercent.format(CBDContent / 100) } 
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
