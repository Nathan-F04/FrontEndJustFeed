import { useContext } from "react";
import classes from "./PaymentForm.module.css";
import GlobalContext from "../../pages/store/globalContext";

function PaymentForm(props) {
  const globalCtx = useContext(GlobalContext);

  function payHandler(event) {
    event.preventDefault();

    const catItemsData = {
      total_amount: sessionStorage.getItem("total_amount"),
      created_at: new Date(),
      items: [...globalCtx.theGlobalObject.cartItems],
    };
    props.onAddItems(catItemsData);
  }

  return globalCtx.theGlobalObject.cardDataLoaded ? (
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
              placeholder={
                globalCtx.theGlobalObject.cards?.cardInfo?.[0]?.nameOnCard ??
                "John"
              }
            />
            <label htmlFor="ccnum">Credit card number</label>
            <input
              type="text"
              id="ccnum"
              required
              placeholder={
                globalCtx.theGlobalObject.cards?.cardInfo?.[0]
                  ?.creditCardNumber ?? "123456789"
              }
            />
            <label htmlFor="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              required
              placeholder={
                globalCtx.theGlobalObject.cards?.cardInfo?.[0]?.expMonth ?? "12"
              }
            />
            <label htmlFor="expyear">Exp Year</label>
            <input
              type="text"
              id="expyear"
              required
              placeholder={
                globalCtx.theGlobalObject.cards?.cardInfo?.[0]?.expYear ??
                "2025"
              }
            />
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              required
              placeholder={
                globalCtx.theGlobalObject.cards?.cardInfo?.[0]?.cvc ?? "111"
              }
            />
            <button onClick={payHandler} className={classes.button}>
              Pay now
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : null;
}

export default PaymentForm;
