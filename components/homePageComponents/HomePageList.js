import HomePageItem from "./HomePageItem";
import classes from "./HomePageList.module.css";

function HomePageList(props) {
  return (
    <ul className={classes.list}>
      {props.foods.map((food) => (
        <HomePageItem
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

export default HomePageList;
