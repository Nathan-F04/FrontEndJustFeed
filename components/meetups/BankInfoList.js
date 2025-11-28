import BankInfoItem from './BankInfoItem';
import classes from './BankInfoList.module.css';

function BankInfoList(props) {
  return (
    <ul className={classes.list}>
      {props.foods.map((food) => (
        <BankInfoItem
          key={food.foodId}
          title={food.title}
          price={food.price}
          image={food.image}
          description={food.description}
        />
      ))}
    </ul>
  );
}

export default BankInfoList;
