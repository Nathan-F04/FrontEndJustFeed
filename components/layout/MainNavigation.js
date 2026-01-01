import classes from "./MainNavigation.module.css";
import HamMenu from "../generic/HamMenu";
import Button from "../generic/Button";
import Cart from "../generic/Cart";
import Sidebar from "./Sidebar";
import CartPopUp from "./CartPopUp";
import GlobalContext from "../../store/globalContext";
import { useRouter } from "next/router";
import Login from "./Login";
import { GiShoppingCart } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { useState, useContext } from "react";
import NotificationBox from "./NotificationBox";

function MainNavigation() {
  let [popupToggle, setPopupToggle] = useState(false);
  let [cartpopupToggle, setCartPopupToggle] = useState(false);
  let [notificationBoxToggle, setNotificationBoxToggle] = useState(false);
  const globalCtx = useContext(GlobalContext);
  const router = useRouter();

  function checkoutCallback() {
    router.push("/checkout");
  }

  function toggleMenuHide() {
    setPopupToggle(!popupToggle);
  }

  function cartMenuHide() {
    setCartPopupToggle(!cartpopupToggle);
  }

  function notificationBoxHide() {
    setNotificationBoxToggle(!notificationBoxToggle);
  }

  return (
    <header className={classes.header}>
      {!globalCtx.theGlobalObject.isLoggedIn && (
        <>
          <div className={classes.backgroundBlur}></div>
          <Login />
        </>
      )}
      {popupToggle && <Sidebar toggleMenuHide={() => toggleMenuHide()} />}
      {cartpopupToggle && (
        <CartPopUp
          cartItems={globalCtx.theGlobalObject.cartItems}
          toggleMenuHide={() => cartMenuHide()}
        />
      )}
      {notificationBoxToggle && <NotificationBox />}
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.v1}></div>
      <img className={classes.logo} src="Just-feed.png" alt="Logo" />
      <div className={classes.badge}>
        {globalCtx.theGlobalObject.messages?.length > 0 && (
          <span>{globalCtx.theGlobalObject.messages.length}</span>
        )}
        <Cart
          maxWidth="70px"
          icon={<FaBell />}
          toggleMenuHide={() => notificationBoxHide()}
        />
      </div>
      <Cart
        maxWidth="70px"
        icon={<GiShoppingCart />}
        toggleMenuHide={() => cartMenuHide()}
      />
      <Button
        text1="Checkout"
        maxWidth="100px"
        onClickHandler={() => checkoutCallback()}
      />
    </header>
  );
}

export default MainNavigation;
