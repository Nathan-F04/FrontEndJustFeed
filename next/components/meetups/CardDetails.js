import classes from "./NewBankForm.module.css";

function CardDetails(props) {
  return (
    <div>
      <div className={classes.control}>
        <p>{props.cardHolderName}</p>
      </div>
      <div className={classes.control}>
        <p>{props.cardNumber}</p>
      </div>
      <div className={classes.control}>
        <p>{props.expMonth}</p>
      </div>

      <div className={classes.control}>
        <p>{props.expYear}</p>
      </div>
      <div className={classes.control}>
        <p>{props.cvc}</p>
      </div>
    </div>
  );
}

export default CardDetails;
