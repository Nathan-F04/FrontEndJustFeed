import classes from './OrderItem.module.css';
import Items from './Items';

function OrderItem(props) {

  return (
    <li className={classes.item}>
      <div className={classes.orderCard}>
        <div className={classes.content}>
            {props.items.map((item) => (
                <Items
                    key={item.id}               
                    title={item.item_name}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                />
            ))}
        </div>
      </div>
      <section className={classes.orderInfo}>
        <p>Purchased on: {props.created_at}</p>
        <div></div>
        <p>Total Amount: {props.total_amount}</p>
      </section>
    </li>
  );
}

export default OrderItem;