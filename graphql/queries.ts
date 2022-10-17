import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query getOrders {
    orders {
      _id
      status
      customer {
        name
      }
      employee {
        name
      }
      items {
        name
      }
      history {
        status
        updatedAt
      }
    }
  }
`;
