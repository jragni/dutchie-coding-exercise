/** Modal
 * 
 * Component that displays the contents on top of
 * the original container.
 * 
 * Props: 
 *  modalActive: boolean that determines if the modal is active.
 *  setModalActive: function that sets the state of modal active.
 */

import React from 'react';
import PropTypes from 'proptypes';

import { Wrapper } from './Wrapper';

export default function Modal({modalActive, setModalActive, content}) {

  // TODO on-click outside of the content, setModalActive to false
 
  if (modalActive === false ) return null;

  return (
    <Wrapper>
      {content}
      <button> hello this is for testing </button>
    </Wrapper>
  )
}

Modal.propTypes = {
  modalActive: PropTypes.bool,
  setModalActive: PropTypes.func,
};