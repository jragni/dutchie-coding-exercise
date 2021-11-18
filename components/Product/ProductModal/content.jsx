/**
 * ProductModal Content styled components.
 */

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ProductImage = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  height: auto;
  aspect-ratio: 1/1;
`;

export const Aside = styled.aside`
  display:inline-block;
  width: 50%; 
  margin: 0 1rem;
`;

export const ProductName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1rem;
`;


export const ProductPrice = styled.div`
  color: #4999df;
  font-size: 1rem; 
`;

export const ProductOption = styled.div`
  color: #4999df;
  font-size: 1rem; 
  margin-bottom: .25rem;
`;

export const ProductDescription = styled.p`
  margin-left: 1rem;
  margin-top: 1rem;
  width: 55vw;
  line-height: 1.75rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  margin: 1rem;
  font-weight: 900;
  color: red;
`;