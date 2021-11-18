/** Font
 * container that holds text and text modification
 */

import styled, { css } from 'styled-components';

const Font = styled.p`

  ${({ fontSize = 1}) => fontSize && css`
    font-size: ${fontSize}rem;
  `} 

  ${({wordBreak = 'normal'}) => wordBreak && css`
    word-break: ${wordBreak};
  `} 


  ${({ color = 'black'}) => color && css`
    color: ${color};
  `} 

  ${({ lineHeight = 1}) => lineHeight && css`
    line-height: ${lineHeight}rem;
  `} 

  ${({ fontWeight = 'normal' }) => fontWeight && css`
    font-weight: ${fontWeight};
  `} 

  
  ${({ padding }) => padding && css`
    padding: ${padding}rem;
  `} 

  ${({ paddingLeft }) => paddingLeft && css`
    padding-left: ${paddingLeft}rem;
  `} 

  ${({ width }) => width && css`
    width: ${ width }rem;
  `} 
  
`;
 
export default Font;