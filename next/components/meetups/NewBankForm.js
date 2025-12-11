import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewBankForm.module.css";

function NewBankForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const cardHolderNameInputRef = useRef();
  const creditCardNumberInputRef = useRef();
  const expMonthInputRef = useRef();
  const expYearInputRef = useRef();
  const cvcInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredcardHolderName = cardHolderNameInputRef.current.value;
    const enteredcreditCardNumber = creditCardNumberInputRef.current.value;
    const enteredexpMonth = expMonthInputRef.current.value;
    const enteredexpYear = expYearInputRef.current.value;
    const enteredcvc = cvcInputRef.current.value;

    const meetupData = {
      nameOnCard: enteredcardHolderName,
      creditCardNumber: enteredcreditCardNumber,
      expMonth: enteredexpMonth,
      expYear: enteredexpYear,
      cvc: enteredcvc,
    };

    props.onAddCard(meetupData);
  }

  return (
    <div className={classes.center}>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" required id="name" ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" required id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="text" required id="password" ref={passwordInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="name on card">Name on card:</label>
            <input
              type="text"
              required
              id="name on card"
              ref={cardHolderNameInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="card number">Card Number:</label>
            <input
              type="text"
              required
              id="card number"
              ref={creditCardNumberInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="month of expirtion">Month of expiry:</label>
            <input
              type="text"
              required
              id="month of expirtion"
              ref={expMonthInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="year of expirtion">Year of expiry:</label>
            <input
              type="text"
              required
              id="year of expirtion"
              ref={expYearInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="cvc">CVC:</label>
            <input type="text" required id="cvc" ref={cvcInputRef} />
          </div>

          <div className={classes.actions}>
            <button onClick={submitHandler}>Save details</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewBankForm;
