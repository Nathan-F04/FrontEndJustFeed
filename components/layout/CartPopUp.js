import classes from "./CartPopUp.module.css"
import Button from "../generic/Button"

export default function Popup(props) {
  return (
    <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}> 
      <div className={classes.thePopup}>
        <div className={classes.titleDiv}>
          <Button text1="Checkout" maxWidth="100px" onClickHandler={() => checkoutCallback()}/>
        </div>
        <div className={classes.itemlist}>

        </div>
        <div className={classes.buttonDiv}>
          <Button text1="Remove" maxWidth="100px" onClickHandler={() => checkoutCallback()} />
          <Button text1="Cancel" maxWidth="100px" onClickHandler={() => checkoutCallback()} />
        </div>
        </div>
    </div>
  )
}