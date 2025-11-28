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
          <h3>{props.name}</h3>
          <p>{props.email}</p>
          <p>{props.password}</p>
          <p>{props.description}</p>
        </div>
          <button onClick={showDetailsHandler}>Show Details</button>
      </Card>
    </li>
  );
}

export default BankInfoItem;
