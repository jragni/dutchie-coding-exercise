/** ProductCard
 *
 * Displays the product details. On click of the card, another card will
 * appear ontop.
 *
 * Props:
 *    - product {Object}: the product being displayed LIKE:
 *              { id, name, strainType, Prices, THCContent, CBDContent }
 *
 * State:
 *  No states for this component.
 *
 * Render -> CardList -> Card
 */

import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/index';
import H2 from './H2.jsx';
import Wrapper from './Wrapper';
import Container from './Container';
import Content from './Content';

ProductCardItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  THCContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  CBDContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default function ProductCardItem(props) {
  // TODO replace let with const after dev testing
  let { id, name, image, strainType, Prices, THCContent, CBDContent } = props;
  // FOR DEV TESTING
  id = 1;
  image = 'https://s3-us-west-2.amazonaws.com/dutchie-images/e9da65afc7bcf48c3f9c6bcdd69d024d';
  name = 'TEST NAME';
  strainType = 'Sativa';
  Prices = [100.02];
  THCContent = 20;
  CBDContent = 1;
  // END DEV TESTING
  const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const percentFormatter = new Intl.NumberFormat('en-US', { style: 'percent' });

  return (
    <Wrapper key={id} className='ProductCardItem'>
      <ProductImage className='ProductCardItem__Image' src={image} alt={name} />
      <Container className='ProductCardItem__ProductDetails'>
        <H2.Blue className='ProductCardItem__Price'>
          {/* TODO display prices assosciated with size*/}
          {currencyFormatter.format(Prices[0])}
        </H2.Blue>
        <H2.Regular className='ProductCardItem__ProductName'><strong>{name} </strong></H2.Regular>
        <div className='ProductCardItem__StrainType'>
          {/* TODO add a container for sativa such that it appears as a button with an icon */}
          {strainType}
        </div>
        <Content.Container className='ProductCardItem__Contents'>
          {THCContent && (
            <span className='ProductCardItem__THCContent' >
              <Content.Label>THC: </Content.Label>
              <Content.Percentage>{percentFormatter.format(THCContent / 100)} </Content.Percentage>
            </span>
          )}
          {CBDContent && (
            <span className='ProductCardItem__CBDContent'>
              <Content.Label>CBD: </Content.Label>
              <Content.Percentage>{percentFormatter.format(CBDContent / 100)} </Content.Percentage>
            </span>
          )}
        </Content.Container>
      </Container>
    </Wrapper>
  );
}
