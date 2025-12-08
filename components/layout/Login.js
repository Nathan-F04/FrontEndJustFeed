import Card from '../ui/Card';
import { useRef, useState, useContext } from 'react';
import Link from 'next/link'
import classes from './Login.module.css'
import GlobalContext from "../../pages/store/globalContext"

function Login() {
    const globalCtx = useContext(GlobalContext);
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [toggleModal, setToggleModal] = useState(false);

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (toggleModal) {
            const loginDetails = {
                email: enteredEmail,
                password: enteredPassword,
            };
            console.log(loginDetails)
        } else {
            const loginDetails = {
                name: enteredName,
                email: enteredEmail,
                password: enteredPassword,
            };
            console.log(loginDetails)
        }
        // props.onLogin(loginDetails);
    }

    function clicked() {
        globalCtx.updateGlobals({ cmd: 'login', newVal: true });
    }

    function toggleModalHandler() {
        setToggleModal(!toggleModal);
    }

    return (
        <div className={classes.mainDiv}>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    {toggleModal && <div className={classes.control}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' required id='name' ref={nameInputRef} />
                    </div>}
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' required id='email' ref={emailInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='text' required id='password' ref={passwordInputRef} />
                    </div>
                    <div>
                        {toggleModal ? <button className={classes.buttonLink} onClick={toggleModalHandler}>Already Have an Account?</button> : <button onClick={toggleModalHandler}>Create an Account</button> }
                        <div className={classes.actions}>
                            {toggleModal ? <button onClick={toggleModalHandler}>Create an Account</button> : <button onClick={clicked}>Login</button>}
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Login;