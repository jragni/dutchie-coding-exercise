/** Img
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function ProductImage(props) {
  return <Img className={props.className} src={props.src} alt={props.alt} />;
}