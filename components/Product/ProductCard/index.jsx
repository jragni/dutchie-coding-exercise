/** ProductCard
 * 
 * Displays the information of a product.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card/index.jsx';
import { 
  Wrapper,
  THCContentText,
  CBDContentText,
  ProductFlavor,
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
 flavors = ['chocolate'];
 Prices = [100.02];
 THCContent = 20;
 CBDContent = 1;
 // END DEV TESTING

 //TODO: create a helper function that capitalizes the flavors
  const toUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const toPercent = new Intl.NumberFormat('en-US', { style: 'percent' });

  const content = (
    <Wrapper>
      <ProductPrice> {toUSD.format(Prices[0])} </ProductPrice>
      <ProductName> {name} </ProductName>
      { flavors && 
        <ProductFlavor> {flavors[0]}</ProductFlavor>
      }
      <p>
      { THCContent && (
        <THCContentText> 
          <strong>THC: </strong> 
          { toPercent.format(THCContent / 100) } 
        </THCContentText>
      )}
      { CBDContent && (
        <CBDContentText> 
          <strong>CBD: </strong> 
          { toPercent.format(CBDContent / 100) } 
        </CBDContentText>
      )}
      </p>
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

