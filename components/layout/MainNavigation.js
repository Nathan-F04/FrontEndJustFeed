import classes from './MainNavigation.module.css'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"
import Cart from "../generic/Cart"
import Sidebar from "./Sidebar"
import CartPopUp from "./CartPopUp"
import GlobalContext from '../../pages/store/globalContext'
import { GiShoppingCart } from 'react-icons/gi'
import { useState, useContext } from 'react'

function MainNavigation() {
  let [popupToggle, setPopupToggle] = useState(false)
  let [cartpopupToggle, setCartPopupToggle] = useState(false)
  const globalCtx = useContext(GlobalContext)

  function checkoutCallback() {
    alert("You clicked the checkout button")
  }

  function toggleMenuHide() {
    setPopupToggle(!popupToggle)
  }

  function cartMenuHide() {
    setCartPopupToggle(!cartpopupToggle)
  }

  return (
    <header className={classes.header}>
      {popupToggle && <Sidebar toggleMenuHide={() => toggleMenuHide()}/>}
      {cartpopupToggle && <CartPopUp cartItems={globalCtx.theGlobalObject.cartItems} toggleMenuHide={() => cartMenuHide()}/>}
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.v1}></div>
      <img className={classes.logo} src="Just-feed.png" alt="Logo"/>
      <Cart maxWidth="70px" icon={<GiShoppingCart/>} toggleMenuHide={() => cartMenuHide()}/>
      <Button text1="Checkout" maxWidth="100px" onClickHandler={() => checkoutCallback()} />
    </header>
  );
}

export default MainNavigation
