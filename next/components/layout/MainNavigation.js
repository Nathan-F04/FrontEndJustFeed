import classes from './MainNavigation.module.css'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"
import Cart from "../generic/Cart"
import Sidebar from "./Sidebar"
import CartPopUp from "./CartPopUp"
import GlobalContext from '../../pages/store/globalContext'
import { useRouter } from 'next/router'
import Login from './Login'
import { GiShoppingCart } from 'react-icons/gi'
import { useState, useContext } from 'react'

function MainNavigation() {
  let [popupToggle, setPopupToggle] = useState(false);
  let [cartpopupToggle, setCartPopupToggle] = useState(false);
  let [cartNum, setCartNum] = useState(1);
  const globalCtx = useContext(GlobalContext);
  const router = useRouter();

  function checkoutCallback() {
    router.push("/checkout");
  }

  function toggleMenuHide() {
    setPopupToggle(!popupToggle)
  }

  function cartMenuHide() {
    setCartPopupToggle(!cartpopupToggle)
  }

  return (
    <header className={classes.header}>
      {!globalCtx.theGlobalObject.isLoggedIn && <Login/>}
      {!globalCtx.theGlobalObject.isLoggedIn && <div className={classes.backgroundBlur}></div>}
      {popupToggle && <Sidebar toggleMenuHide={() => toggleMenuHide()}/>}
      {cartpopupToggle && <CartPopUp cartItems={globalCtx.theGlobalObject.cartItems} cartNum={cartNum} setCartNum={setCartNum} toggleMenuHide={() => cartMenuHide()}/>}
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.v1}></div>
      <img className={classes.logo} src="Just-feed.png" alt="Logo"/>
      <Cart maxWidth="70px" icon={<GiShoppingCart/>} toggleMenuHide={() => cartMenuHide()}/>
      <Button text1="Checkout" maxWidth="100px" onClickHandler={() => checkoutCallback()} />
    </header> 
  );
}

export default MainNavigation
