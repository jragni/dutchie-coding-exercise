/** Box
 *
 * Multipurpose component that displays a box.
 */
import React from 'react';
import styled from 'styled-components';

export default function Box({ 
  margin = sizes.auto, 
  padding = sizes.auto, 
  variant = 'div', 
  content
}) {
  const Wrapper = styled[variant]`
    margin: ${sizes[margin]};
    padding: ${sizes[padding]};
  `;
  return <Wrapper>{content}</Wrapper>;
}

const sizes = {
  none: 0,
  xs: '5rem',
  sm: '10rem',
  md: '15rem',
  lg: '20rem',
  xl: '25rem',
  auto: 'auto'
};

const variants = {
  div: 'div',
  span: 'span',
  section: 'section',
};
