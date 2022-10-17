import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { UPDATE_ORDER_STATUS } from "../graphql/mutations";
import { GET_ORDERS } from "../graphql/queries";
import {
  GraphQLMutation,
  GraphQLOrder,
  GraphQLOrderStatus,
  GraphQLQuery,
} from "../graphql/types";
import style from "../styles/Index.module.scss";
import Content from "./components/Content";
import Order from "./components/Order";

const Index = () => {
  const [orders, setOrders] = useState<GraphQLOrder[]>([]);

  const { loading, error, data, refetch } = useQuery<GraphQLQuery>(GET_ORDERS, {
    onCompleted: (data) => setOrders(data?.orders || []),
  });

  const [updateOrderStatus, { loading: updateLoading, error: updateError }] =
    useMutation<GraphQLMutation>(UPDATE_ORDER_STATUS);

  const update = async (order: GraphQLOrder) => {
    let status = GraphQLOrderStatus.InProgress;

    if (order.status === GraphQLOrderStatus.InProgress) {
      status = GraphQLOrderStatus.Complete;
    }
    const { data } = await updateOrderStatus({
      variables: { id: order._id, status },
    });

    if (data?.updateOrderStatus.status === status) {
      alert("UPDATED");
      await refetch();
    }
  };

  if (loading && !data) return "Loading ...";

  if (error) return error.message;

  if (updateError) return updateError.message;

  return (
    <Content className={style.grid}>
      {orders.map((order, index) => (
        <div className={style.container} key={index}>
          <Order order={order} key={index} />
          {(order.status === GraphQLOrderStatus.Open ||
            order.status === GraphQLOrderStatus.InProgress) && (
            <button onClick={() => update(order)} disabled={loading}>
              {updateLoading ? "UPDATING" : "UPDATE"}
            </button>
          )}
        </div>
      ))}
    </Content>
  );
};

export default Index;
