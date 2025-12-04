import classes from './Items.module.css';

function Items(props) {

  return (
    <li className={classes.item}>
        <div className={classes.content}>
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <div className={classes.description}>{props.description}</div>
            <h3>€ {props.price}</h3>
        </div>
    </li>
  );
}

export default Items;