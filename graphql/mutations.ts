import { gql } from "@apollo/client";

export const UPDATE_ORDER_STATUS = gql`
  mutation updateOrderStatus($id: String!, $status: String!) {
    updateOrderStatus(id: $id, status: $status) {
      status
      history {
        status
        updatedAt
      }
    }
  }
`;
