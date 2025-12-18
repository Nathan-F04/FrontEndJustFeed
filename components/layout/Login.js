import Card from "../ui/Card";
import { useRef, useState, useContext } from "react";
import classes from "./Login.module.css";
import GlobalContext from "../../pages/store/globalContext";

function Login() {
  const globalCtx = useContext(GlobalContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [toggleModal, setToggleModal] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginDetails = {
      email: enteredEmail,
      password: enteredPassword,
    };

    if (toggleModal) {
      await globalCtx.updateGlobals({
        cmd: "createAccount",
        newVal: loginDetails,
      });
    } else {
      await globalCtx.updateGlobals({ cmd: "login", newVal: loginDetails });
    }
  }

  function preventDefaultEvent(event) {
    event.preventDefault();
  }

  function toggleModalHandler() {
    setToggleModal(!toggleModal);
  }

  return (
    <div className={classes.mainDiv}>
      <Card>
        <form className={classes.form} onSubmit={preventDefaultEvent}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" required id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="text" required id="password" ref={passwordInputRef} />
          </div>
          <div>
            {toggleModal ? (
              <button
                className={classes.buttonLink}
                onClick={toggleModalHandler}
              >
                Already Have an Account?
              </button>
            ) : (
              <button onClick={toggleModalHandler}>Create an Account</button>
            )}
            <div className={classes.actions}>
              {toggleModal ? (
                <button onClick={submitHandler}>Create an Account</button>
              ) : (
                <button onClick={submitHandler}>Login</button>
              )}
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
