/**
 * ProductModal Content styled components.
 */

import styled from 'styled-components';

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


export const FullWidth = styled.div`
  width: 100%;
`;
export const Flexbox = styled.span`
  display: flexbox;
  flex-wrap: wrap;
`;
export const ProductOptionContainer = styled.div`
  text-align: center; 
  border:2px solid #4999df;
  border-radius: 1rem;
  padding: .75rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 0rem;
  margin-bottom: 1rem;
`;

export const MarginLeft = styled.span`
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

export const CBDTHCContentContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ProductDescription = styled.p`
  margin-left: 1rem;
  margin-top: 1rem;
  width: 55vw;
  line-height: 1.75rem;
`;

export const EffectsContainer = styled.div`
  margin: .5rem;
  padding: 1rem;
  background: #eaeff2;
  border-radius: 1rem;
`;