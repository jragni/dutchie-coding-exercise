/** Font
 * container that holds text and text modification
 */

import styled from 'styled-components';

const Font = styled.p`

  ${({ fontSize = 1}) => props.fontSize && css`
    font-size: ${fontSize}rem;
  `} 

  ${({ color = 'black'}) => props.color && css`
    color: ${color};
  `} 

  ${({ lineHeight = 1}) => props.lineHeight && css`
    line-height: ${lineHeight}rem;
  `} 

  ${({ fontWeight = 'normal' }) => props.fontWeight && css`
    font-weight: ${fontWeight};
  `} 

  
  ${({ padding = 1 }) => props.padding && css`
    padding: ${padding}rem;
  `} 
  
`;
 
export default Font;