import { useRef, useEffect, useContext } from "react";
import classes from "./NewBankForm.module.css";
import GlobalContext from "../../pages/store/globalContext";

function PaymentForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const descriptionInputRef = useRef();
  const globalCtx = useContext(GlobalContext);
  let currentCard = [];

  useEffect(() => {
    currentCard = globalCtx.theGlobalObject.cards;
  }, []);

  function submitHandler(event) {
    event.preventDefault();

    const enteredname = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      name: enteredname,
      email: enteredEmail,
      password: enteredPassword,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return globalCtx.theGlobalObject.dataLoaded ? (
    <div>
      <form>
        <div className={classes.orderCard}>
          <h3>Billing Address</h3>
          <label htmlFor="fname">Full Name</label>
          <input type="text" id="fname" placeholder="John M. Doe" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="john@example.com" />
          <label htmlFor="adr">Address</label>
          <input type="text" id="adr" placeholder="542 W. 15th Street" />
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="New York" />

          <div className={classes.row}>
            <div className={classes.col_50}>
              <label htmlFor="state">State</label>
              <input type="text" id="state" placeholder="NY" />
            </div>
            <div className={classes.col_50}>
              <label htmlFor="zip">Zip</label>
              <input type="text" id="zip" placeholder="10001" />
            </div>
          </div>
        </div>

        <div className={classes.orderCard}>
          <h3>Payment</h3>
          <label htmlFor="fname">Accepted Cards</label>
          <div className={classes.icon_container}>
            <i className="fa fa-cc-visa"></i>
            <i className="fa fa-cc-amex"></i>
            <i className="fa fa-cc-mastercard"></i>
            <i className="fa fa-cc-discover"></i>
          </div>
          <label htmlFor="cname">Name on Card</label>
          <input
            type="text"
            id="cname"
            placeholder={currentCard[0]?.nameOnCard}
          />
          <label htmlFor="ccnum">Credit card number</label>
          <input
            type="text"
            id="ccnum"
            placeholder={currentCard[0]?.creditCardNumber}
          />
          <label htmlFor="expmonth">Exp Month</label>
          <input
            type="text"
            id="expmonth"
            placeholder={currentCard[0]?.expMonth}
          />
          <div className={classes.row}>
            <div className={classes.col_50}>
              <label htmlFor="expyear">Exp Year</label>
              <input
                type="text"
                id="expyear"
                placeholder={currentCard[0]?.expYear}
              />
            </div>
            <div className={classes.col_50}>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder={currentCard[0]?.cvc}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : null;
}

export default PaymentForm;
