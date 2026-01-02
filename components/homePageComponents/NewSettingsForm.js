import { useContext, useRef, useState } from "react";

import Card from "../ui/Card";
import Modal from "../generic/Modal";
import classes from "./NewSettingsForm.module.css";
import GlobalContext from "../../pages/store/globalContext";
import PastCards from "./PastCards";

function NewSettingsForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const addCardHolderNameInputRef = useRef();
  const addCreditCardNumberInputRef = useRef();
  const addExpMonthInputRef = useRef();
  const addExpYearInputRef = useRef();
  const addCvcInputRef = useRef();
  const formRef = useRef();

  const [toggleModal, setToggleModal] = useState(false);
  const [toggleAddCardForm, setAddCardForm] = useState(false);
  const [toggleErrorMsg, setToggleErrorMsg] = useState(false);
  const globalCtx = useContext(GlobalContext);

  async function submitCardHandler(event) {
    event.preventDefault();

    const enteredcardHolderName = addCardHolderNameInputRef.current.value;
    const enteredcreditCardNumber = addCreditCardNumberInputRef.current.value;
    const enteredexpMonth = addExpMonthInputRef.current.value;
    const enteredexpYear = addExpYearInputRef.current.value;
    const enteredcvc = addCvcInputRef.current.value;

    const cardData = {
      user_id: globalCtx.theGlobalObject.userId,
      nameOnCard: enteredcardHolderName,
      creditCardNumber: enteredcreditCardNumber,
      expMonth: parseInt(enteredexpMonth),
      expYear: parseInt(enteredexpYear),
      cvc: parseInt(enteredcvc),
    };

    props.onAddCard(cardData);
    formRef.current.reset();
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
              <form ref={formRef}>
                <div className={classes.control}>
                  <label htmlFor="name on card">Name on card:</label>
                  <input
                    type="text"
                    required
                    id="name on card"
                    placeholder="John"
                    ref={addCardHolderNameInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="card number">Card Number:</label>
                  <input
                    type="text"
                    required
                    id="card number"
                    placeholder="1234567890123456"
                    ref={addCreditCardNumberInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="month of expirtion">Month of expiry:</label>
                  <input
                    type="text"
                    required
                    placeholder="12"
                    id="month of expirtion"
                    ref={addExpMonthInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="year of expirtion">Year of expiry:</label>
                  <input
                    type="text"
                    required
                    placeholder="2025"
                    id="year of expirtion"
                    ref={addExpYearInputRef}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="cvc">CVC:</label>
                  <input
                    type="text"
                    placeholder="123"
                    required
                    id="cvc"
                    ref={addCvcInputRef}
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
            <PastCards
              key={card.id}
              id={card.id}
              nameOnCard={card.nameOnCard}
              creditCardNumber={card.creditCardNumber}
              expMonth={card.expMonth}
              expYear={card.expYear}
              cvc={card.cvc}
            />
          ))}
        </>
      )}
    </div>
  );
}
export default NewSettingsForm;
