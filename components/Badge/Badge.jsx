/** Badge
 *  
 * A badge that displays an icon and text.
 * 
 * Props:
 *  src: string that contains the path to the image.
 *  label: string that is the label for the badge.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, BadgeIcon, BadgeLabel} from './Content';

export default function Badge({src, label}) {
  return (
      <Wrapper>
        <BadgeIcon src={ src }/>
        <BadgeLabel> 
          { label }
        </BadgeLabel>
      </Wrapper>
  )
}

Badge.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
};