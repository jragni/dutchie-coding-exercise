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

ProductCardItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  strainType: PropTypes.string,
  Prices: PropTypes.arrayOf(PropTypes.number),
  THCContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  CBDContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default function ProductCardItem(props) {
  let { id, name, image, strainType, Prices, THCContent, CBDContent } = props;
  // FOR DEV TESTING
  id = 1;
  image = 'https://s3-us-west-2.amazonaws.com/dutchie-images/e9da65afc7bcf48c3f9c6bcdd69d024d';
  name = 'TEST NAME'
  strainType = 'TEST STRAIN TYPE';
  Prices = [100];
  THCContent = 20;
  CBDContent = 0;
  // END DEV TESTING

  return (
    <div key={id} className="ProductCardItem">
      <ProductImage className="ProductCardItem__Image" src={image} alt={name} />
      <h4 className="ProductCardItem__Price">
        {/* TODO display prices assosciated with size*/}
        {Prices[0]}
      </h4>
      <h3 className="ProductCardItem__ProductName">
        {name}
      </h3>
      <div className="ProductCardItem__ProductDetails">
        <p className="ProductCardItem__StrainType">
          {strainType}
          {THCContent &&
            <span className='ProductCardItem__THCContent'>
              <strong>THC: </strong> {THCContent}
            </span>
          }
          {CBDContent &&
            <span className='ProductCardItem__CBDContent'>
              <strong>THC: </strong> {CBDContent}
            </span>
          }
        </p>
      </div>
    </div>
  );
}