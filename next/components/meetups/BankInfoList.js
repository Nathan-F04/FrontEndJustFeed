import BankInfoItem from './BankInfoItem';
import classes from './BankInfoList.module.css';

function BankInfoList(props) {
  return (
    <ul className={classes.list}>
      {props.foods.map((food) => (
        <BankInfoItem
          key={food.id}
          id={food.id}
          title={food.item_name}
          price={food.price}
          image={food.image}
          description={food.description}
          quantity={food.quantity}
        />
      ))}
    </ul>
  );
}

export default BankInfoList;
