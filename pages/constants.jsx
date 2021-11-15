/** Page constants */
import { gql } from 'apollo-boost';

export const PRODUCT = gql`
  query getProduct($id: ID!){
    Product (id: $id) {
      Name,
      Image,
      strainType,
      Prices,
      Description,
      effects,
      type,
    }
  }
`;