import classes from "./OrderItemList.module.css";
import OrderItem from "../orderPageComponents/OrderItem";

function OrderItemList(props) {
  return (
    <ul className={classes.list}>
      {props.orders.map((order) => (
        <OrderItem
          key={order.id}
          total_amount={order.total_amount}
          status={order.status}
          created_at={order.created_at}
          items={order.items}
        />
      ))}
    </ul>
  );
}

export default OrderItemList;
