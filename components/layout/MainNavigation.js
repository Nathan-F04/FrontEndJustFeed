import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"
import Cart from "../generic/Cart"
import { GiShoppingCart } from 'react-icons/gi'
import { useState } from 'react'

function MainNavigation() {
  let noOfOrders = 50;

  let [popupToggle, setPopupToggle] = useState(false)

  function cartCallback(aNumber) {
    alert("You clicked the button, and passed: " + aNumber)
  }

  function checkoutCallback() {
    alert("You clicked the checkout button")
  }

  let menuPopupJsx

  function toggleMenuHide() {
    if (popupToggle == true) {
      setPopupToggle(false)
    } else {
      setPopupToggle(true)
    }
  }
  if (popupToggle == true) {
    menuPopupJsx = <Button text1="The Menu" maxWidth="100px" onClickHandler={() => toggleMenuHide()} />

  } else {
    menuPopupJsx = undefined
  }

  let testTest = 0;
 // setInterval(() => {testTest++; console.log(testTest)}, 1000);

  return (
    <header className={classes.header}>
      {/* Original JSX logic: */}
      {menuPopupJsx}
      {/* Move the show / hide code to the component itself: */}
      {/* Ternary operator alternative: */}
      {popupToggle ? <Button text1="Ternary" text2="operator" maxWidth="100px" onClickHandler={() => toggleMenuHide()} /> : null}
      {/* Another conditional rendering alternative: */}
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.v1}></div>
      <div className={classes.gap}></div>
      <img className={classes.logo} src="Just-feed.png" alt="Logo"/>
      <div className={classes.gap}></div>
      <Cart maxWidth="70px" onClickHandler={() => cartCallback(noOfOrders)} icon={<GiShoppingCart />}/>
      <Button text1="Checkout" maxWidth="100px" onClickHandler={() => checkoutCallback()} />
    </header>
  );
}

export default MainNavigation
