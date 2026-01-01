import Card from "../ui/Card";
import { useContext, useRef, useState } from "react";
import GlobalContext from "../../store/globalContext";
import classes from "./PastCards.module.css";

function PastCards(props) {
  const editCardHolderNameInputRef = useRef();
  const editCreditCardNumberInputRef = useRef();
  const editExpMonthInputRef = useRef();
  const editExpYearInputRef = useRef();
  const editCvcInputRef = useRef();

  const [toggleSaveButton, setToggleSaveButton] = useState(false);
  const globalCtx = useContext(GlobalContext);

  function onEdit() {
    setToggleSaveButton(true);
  }

  async function deleteCardDetailsHandler(event, id) {
    event.preventDefault();
    await globalCtx.updateGlobals({ cmd: "deleteCard", newVal: id });
  }

  async function editCardDetailsHandler(event, id) {
    event.preventDefault();

    const enteredcardHolderName = editCardHolderNameInputRef.current.value;
    const enteredcreditCardNumber = editCreditCardNumberInputRef.current.value;
    const enteredexpMonth = editExpMonthInputRef.current.value;
    const enteredexpYear = editExpYearInputRef.current.value;
    const enteredcvc = editCvcInputRef.current.value;

    const cardData = {
      user_id: globalCtx.theGlobalObject.userId,
      nameOnCard: enteredcardHolderName,
      creditCardNumber: enteredcreditCardNumber,
      expMonth: enteredexpMonth,
      expYear: enteredexpYear,
      cvc: enteredcvc,
    };

    await globalCtx.updateGlobals({
      cmd: "editCard",
      newVal: cardData,
      id: id,
    });
    setToggleSaveButton(false);
  }
  return (
    <>
      <Card>
        <form>
          <div className={classes.control}>
            <label htmlFor="name on card">Name on card:</label>
            <input
              type="text"
              defaultValue={props.nameOnCard}
              onChange={onEdit}
              required
              id="name on card"
              ref={editCardHolderNameInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="card number">Card Number:</label>
            <input
              type="text"
              defaultValue={props.creditCardNumber}
              onChange={onEdit}
              required
              id="card number"
              ref={editCreditCardNumberInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="month of expirtion">Month of expiry:</label>
            <input
              type="text"
              defaultValue={props.expMonth}
              onChange={onEdit}
              required
              id="month of expirtion"
              ref={editExpMonthInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="year of expirtion">Year of expiry:</label>
            <input
              type="text"
              defaultValue={props.expYear}
              onChange={onEdit}
              required
              id="year of expirtion"
              ref={editExpYearInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="cvc">CVC:</label>
            <input
              type="text"
              defaultValue={props.cvc}
              onChange={onEdit}
              required
              id="cvc"
              ref={editCvcInputRef}
            />
          </div>
          <div className={classes.actions}>
            {}
            <div></div>
            {
              <button
                onClick={(event) => deleteCardDetailsHandler(event, props.id)}
              >
                Delete
              </button>
            }
          </div>
          <div className={classes.actions}>
            {}
            <div></div>
            {toggleSaveButton && (
              <button
                onClick={(event) => editCardDetailsHandler(event, props.id)}
              >
                Save Changes
              </button>
            )}
          </div>
        </form>
      </Card>
      <div className={classes.space}></div>
    </>
  );
}

export default PastCards;
