import Card from '../ui/Card';
import classes from './BankInfoItem.module.css';
import { useRouter } from 'next/router';

function BankInfoItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <img src={props.image}/>
          <p>€ {props.price}</p>
          <p>{props.description}</p>
          <button onClick={showDetailsHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

export default BankInfoItem;
