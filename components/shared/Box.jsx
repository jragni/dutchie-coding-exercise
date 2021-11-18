/** Box 
 * General use component.
 */

import styled,  { css } from 'styled-components';

const Box = styled.div`
  ${({ margin = 1}) => props.margin && css`
    margin: ${margin}rem;
  `} 

  ${({ marginLeft = 1}) => props.marginLeft && css`
    margin-left: ${marginLeft}rem;
  `} 

  ${({ marginRight = 1}) => props.marginRight && css`
    margin-right: ${marginRight}rem;
  `} 

  ${({ padding = 1}) => props.padding && css`
    padding: ${padding}rem;
  `} 

  ${({ width = 100}) => props.width && css`
    width: ${width}%;
  `} 

  ${({ maxWidth = 400}) => props.maxWidth && css`
    max-width: ${maxWidth}px;
  `} 

  ${({ height = 100}) => props.height && css`
    height: ${height}%;
  `} 

  ${({ maxHeight = 400}) => props.maxHeight && css`
    max-width: ${maxHeight}px;
  `} 

  ${({ display = 'block'}) => props.display && css`
    display: ${display};
  `} 

  ${({ flexWrap = 'flex'}) => props.flexWrap && css`
    flex-wrap: ${flexWrap};
  `} 

  ${({ border = '1px black solid'}) => props.border && css`
    border: ${border};
  `} 
`;

export default Box;