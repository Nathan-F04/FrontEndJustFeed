import { useContext, useRef, useState } from "react";

import Card from "../ui/Card";
import Modal from "../generic/Modal";
import classes from "./NewSettingsForm.module.css";
import GlobalContext from "../../store/globalContext";

function NewSettingsForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const cardHolderNameInputRef = useRef();
  const creditCardNumberInputRef = useRef();
  const expMonthInputRef = useRef();
  const expYearInputRef = useRef();
  const cvcInputRef = useRef();

  const [toggleModal, setToggleModal] = useState(false);
  const [toggleSaveButton, setToggleSaveButton] = useState(false);
  const [toggleAddCardForm, setAddCardForm] = useState(false);
  const [toggleErrorMsg, setToggleErrorMsg] = useState(false);
  const globalCtx = useContext(GlobalContext);

  async function submitCardHandler(event) {
    event.preventDefault();

    const enteredcardHolderName = cardHolderNameInputRef.current.value;
    const enteredcreditCardNumber = creditCardNumberInputRef.current.value;
    const enteredexpMonth = expMonthInputRef.current.value;
    const enteredexpYear = expYearInputRef.current.value;
    const enteredcvc = cvcInputRef.current.value;

    const cardData = {
      nameOnCard: enteredcardHolderName,
      creditCardNumber: enteredcreditCardNumber,
      expMonth: parseInt(enteredexpMonth),
      expYear: parseInt(enteredexpYear),
      cvc: parseInt(enteredcvc),
    };

    console.log(cardData);
    console.log(globalCtx.theGlobalObject.cards);

    props.onAddCard(cardData);
  }

  async function editCardHandler(event) {
    event.preventDefault();

    const enteredcardHolderName = cardHolderNameInputRef.current.value;
    const enteredcreditCardNumber = creditCardNumberInputRef.current.value;
    const enteredexpMonth = expMonthInputRef.current.value;
    const enteredexpYear = expYearInputRef.current.value;
    const enteredcvc = cvcInputRef.current.value;

    const cardData = {
      nameOnCard: enteredcardHolderName,
      creditCardNumber: enteredcreditCardNumber,
      expMonth: enteredexpMonth,
      expYear: enteredexpYear,
      cvc: enteredcvc,
    };

    props.onAddCard(cardData);
  }

  async function submitDetailsHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const details = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    if (details.name && details.email && details.password) {
      setToggleErrorMsg(false);
      props.onChangeDetails(details);
    } else {
      setToggleErrorMsg(true);
    }
  }

  function toggleModalHandler() {
    setToggleModal(true);
  }

  async function confirmHandler() {
    await globalCtx.updateGlobals({ cmd: "deleteAccount" });
    setToggleModal(false);
  }

  function cancelHandler() {
    setToggleModal(false);
  }

  function toggleAddCardFormHandler() {
    setAddCardForm(!toggleAddCardForm);
  }

  function onEdit() {
    setToggleSaveButton(true);
  }

  return (
    <div className={classes.center}>
      {toggleModal ? (
        <Modal
          text1={"Do you want to delete your account"}
          onConfirmHandler={confirmHandler}
          onCancelHandler={cancelHandler}
        />
      ) : (
        <>
          <Card>
            <form>
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
                <input
                  type="text"
                  required
                  id="password"
                  ref={passwordInputRef}
                />
              </div>
              {toggleErrorMsg && (
                <p className={classes.errorMsg}>
                  Please fill out ALL provided fields
                </p>
              )}
              <div className={classes.actions}>
                <button onClick={submitDetailsHandler}>Save details</button>
                <div></div>
                <button onClick={toggleModalHandler}>Delete Account</button>
              </div>
            </form>
          </Card>
          <button
            className={classes.addCardButton}
            onClick={toggleAddCardFormHandler}
          >
            {toggleAddCardForm ? "Cancel" : "+ Add Card"}
          </button>
          {toggleAddCardForm && (
            <Card>
              <form>
                <div className={classes.control}>
                  <label htmlFor="name on card">Name on card:</label>
                  <input
                    type="text"
                    required
                    id="name on card"
                    placeholder="John"
                    ref={cardHolderNameInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="card number">Card Number:</label>
                  <input
                    type="text"
                    required
                    id="card number"
                    placeholder="1234567890123456"
                    ref={creditCardNumberInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="month of expirtion">Month of expiry:</label>
                  <input
                    type="text"
                    required
                    placeholder="12"
                    id="month of expirtion"
                    ref={expMonthInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="year of expirtion">Year of expiry:</label>
                  <input
                    type="text"
                    required
                    placeholder="2025"
                    id="year of expirtion"
                    ref={expYearInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="cvc">CVC:</label>
                  <input
                    type="text"
                    placeholder="123"
                    required
                    id="cvc"
                    ref={cvcInputRef}
                  />
                </div>
                <div className={classes.actions}>
                  <div></div>
                  <button onClick={submitCardHandler}>Save Card</button>
                </div>
              </form>
            </Card>
          )}
          <h1>Past Cards:</h1>
          {globalCtx.theGlobalObject.cards.map((card) => (
            <Card>
              <form>
                <div className={classes.control}>
                  <label htmlFor="name on card">Name on card:</label>
                  <input
                    type="text"
                    defaultValue={card.nameOnCard}
                    onChange={onEdit}
                    required
                    id="name on card"
                    ref={cardHolderNameInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="card number">Card Number:</label>
                  <input
                    type="text"
                    defaultValue={card.creditCardNumber}
                    onChange={onEdit}
                    required
                    id="card number"
                    ref={creditCardNumberInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="month of expirtion">Month of expiry:</label>
                  <input
                    type="text"
                    defaultValue={card.expMonth}
                    onChange={onEdit}
                    required
                    id="month of expirtion"
                    ref={expMonthInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="year of expirtion">Year of expiry:</label>
                  <input
                    type="text"
                    defaultValue={card.expYear}
                    onChange={onEdit}
                    required
                    id="year of expirtion"
                    ref={expYearInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="cvc">CVC:</label>
                  <input
                    type="text"
                    defaultValue={card.cvc}
                    onChange={onEdit}
                    required
                    id="cvc"
                    ref={cvcInputRef}
                  />
                </div>
                <div className={classes.actions}>
                  {/* <button>Set as Active</button> needs to be implemented on the backend */}
                  <div></div>
                  {toggleSaveButton && (
                    <button onClick={editCardHandler}>Save Changes</button>
                  )}
                </div>
              </form>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}

export default NewSettingsForm;
