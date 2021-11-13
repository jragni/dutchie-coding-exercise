/** Card
 *
 * General purpose component that contains an image and contents.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Thumbnail from './Thumbnail';
import Content from './Content';

export default function Card({thumbnail, content}) {

  return (
    <Wrapper>
      <Thumbnail src={thumbnail}/>
      <Content>
        {content}
      </Content>
    </Wrapper>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string,
  content: PropTypes.any,
}