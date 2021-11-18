/** Badge
 *  
 * A badge that displays an icon and text.
 * 
 * Props:
 *  src: string that contains the path to the image.
 *  label: string that is the label for the badge.
 *  content: additional contents for the badge
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, BadgeIcon, BadgeLabel} from './content';

export default function Badge({src, label, content}) {
  return (
      <Wrapper>
        <BadgeIcon src={ src }/>
        <BadgeLabel> 
          { label }
        </BadgeLabel>
        {content}
      </Wrapper>
  )
}

Badge.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
};