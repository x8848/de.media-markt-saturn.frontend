import dayjs from "dayjs";
import { FC } from "react";
import style from "../../styles/Order.module.scss";
import { DATE_TIME_FORMAT } from "../../utils/constants";
import { OrderProps } from "../../utils/types";

const Order: FC<OrderProps> = ({ order }) => {
  if (!order) return null;

  const { _id, status, customer, employee, items, history } = order;

  const orderItems = items.map((item) => item.name).join(", ");

  return (
    <div className={style.order}>
      <div>
        ID: <span>{_id}</span>
      </div>
      <div>
        Status: <span className={style[status]}>{status}</span>
      </div>
      <div>
        Customer: <span>{customer.name}</span>
      </div>
      <div>
        Employee: <span>{employee?.name}</span>
      </div>
      <div>
        Items: <span>{orderItems}</span>
      </div>
      <div>
        History:
        <ul>
          {history.map((item, index) => (
            <li className={style[item.status]} key={index}>
              {item.status} {dayjs(item.updatedAt).format(DATE_TIME_FORMAT)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Order;
