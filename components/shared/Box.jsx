/** Box 
 * General use component.
 */

import styled,  { css } from 'styled-components';

const Box = styled.div`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `} 

  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `} 

  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight}rem;
  `} 

  ${({ padding }) => padding && css`
    padding: ${padding};
  `} 

  ${({ paddingRight }) => paddingRight && css`
    padding: ${paddingRight}rem;

  `}

  ${({ paddingLeft }) => paddingLeft && css`
    padding: ${paddingLeft};
  `} 

  ${({ width }) => width && css`
    width: ${width};
  `} 

  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `} 

  ${({ height }) => height && css`
    height: ${height};
  `} 

  ${({ maxHeight }) => maxHeight && css`
    max-width: ${maxHeight};
  `} 

  ${({ display = 'block'}) => display && css`
    display: ${display};
  `} 

  ${({ flexWrap = 'flex'}) => flexWrap && css`
    flex-wrap: ${flexWrap};
  `} 

  ${({ border }) => border && css`
    border: ${border};
  `} 
  ${({ borderRadius }) => borderRadius && css`
    border-radius: ${borderRadius};
  `} 

  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign};
  `} 

  ${({ bgColor }) => bgColor && css`
    background-color: ${bgColor};
  `} 
`;

export default Box;