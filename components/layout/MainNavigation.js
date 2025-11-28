import classes from './MainNavigation.module.css'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"
import Cart from "../generic/Cart"
import Sidebar from "./Sidebar"
import CartPopUp from "./CartPopUp"
import { GiShoppingCart } from 'react-icons/gi'
import { useState } from 'react'

function MainNavigation() {
  let [popupToggle, setPopupToggle] = useState(false)
  let [cartpopupToggle, setCartPopupToggle] = useState(false)

  function checkoutCallback() {
    alert("You clicked the checkout button")
  }

  function toggleMenuHide() {
    setPopupToggle(!popupToggle)
  }

  function cartMenuHide() {
    setCartPopupToggle(!cartpopupToggle)
  }

  const cartItems = [
    {
      image: "Just-feed.png",
      quantity: 1,
      price: 2,
    },
    {
      image: "Just-feed.png",
      quantity: 1,
      price: 1,
    },
    {
      image: "Just-feed.png",
      quantity: 1,
      price: 1,
    },

    {
      image: "Just-feed.png",
      quantity: 1,
      price: 1,
    },

    {
      image: "Just-feed.png",
      quantity: 1,
      price: 1,
    },


    {
      image: "Just-feed.png",
      quantity: 1,
      price: 1,
    },

    {
      image: "Just-feed.png",
      quantity: 1,
      price: 1,
    },
  ]

  return (
    <header className={classes.header}>
      {popupToggle && <Sidebar toggleMenuHide={() => toggleMenuHide()}/>}
      {cartpopupToggle && <CartPopUp cartItems={cartItems} toggleMenuHide={() => cartMenuHide()}/>}
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.v1}></div>
      <div className={classes.gap}></div>
      <img className={classes.logo} src="Just-feed.png" alt="Logo"/>
      <div className={classes.gap}></div>
      <Cart maxWidth="70px" icon={<GiShoppingCart/>} toggleMenuHide={() => cartMenuHide()}/>
      <Button text1="Checkout" maxWidth="100px" onClickHandler={() => checkoutCallback()} />
    </header>
  );
}

export default MainNavigation
