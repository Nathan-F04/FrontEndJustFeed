import { useContext } from "react";
import classes from "./PaymentForm.module.css";
import GlobalContext from "../../store/globalContext";

function PaymentForm(props) {
  const globalCtx = useContext(GlobalContext);

  function payHandler(event) {
    event.preventDefault();

    const catItemsData = {
      user_id: globalCtx.theGlobalObject.userId,
      total_amount: Number(sessionStorage.getItem("total_amount")),
      created_at: new Date(),
      items: [...globalCtx.theGlobalObject.cartItems],
    };
    console.log(catItemsData);
    props.onAddItems(catItemsData);
  }
  // globalCtx.theGlobalObject.cardDataLoaded ?
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.orderCard}>
          <h3>Billing Address</h3>
          <div className={classes.container}>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" required placeholder="John M. Doe" />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              required
              placeholder="john@example.com"
            />
            <label htmlFor="adr">Address</label>
            <input
              type="text"
              id="adr"
              required
              placeholder="542 W. 15th Street"
            />
            <label htmlFor="city">City</label>
            <input type="text" id="city" required placeholder="New York" />
            <label htmlFor="state">State</label>
            <input type="text" id="state" required placeholder="NY" />
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" required placeholder="10001" />
            <h3>Payment</h3>
            <label htmlFor="cname">Name on Card</label>
            <input
              type="text"
              id="cname"
              required
              defaultValue={globalCtx.theGlobalObject.cards?.[0]?.nameOnCard}
            />
            <label htmlFor="ccnum">Credit card number</label>
            <input
              type="text"
              id="ccnum"
              required
              defaultValue={
                globalCtx.theGlobalObject.cards?.[0]?.creditCardNumber
              }
            />
            <label htmlFor="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              required
              defaultValue={globalCtx.theGlobalObject.cards?.[0]?.expMonth}
            />
            <label htmlFor="expyear">Exp Year</label>
            <input
              type="text"
              id="expyear"
              required
              defaultValue={globalCtx.theGlobalObject.cards?.[0]?.expYear}
            />
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              required
              defaultValue={globalCtx.theGlobalObject.cards?.[0]?.cvc}
            />
            <button onClick={payHandler} className={classes.button}>
              Pay now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
