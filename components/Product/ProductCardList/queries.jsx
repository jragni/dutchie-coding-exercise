/**
 * GraphQL queries for the ProductCardList
 */


import { gql } from 'apollo-boost';

export const PRODUCTS = gql`
  query {
    allProducts {
      id,
      Name,
      Image,
      strainType,
      Prices,
      THCContent,
      CBDContent
    }
  }
`;
