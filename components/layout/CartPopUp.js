import classes from "./CartPopUp.module.css"
import CartItem from './CartItem';

export default function CartPopup(props) {
  return (
    <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}> 
      <div className={classes.thePopup}>
        <div className={classes.cart}>
          {props.cartItems.map((cartItems) => (
            <CartItem
              image={cartItems.image}
              quantity={cartItems.quantity}
              price={cartItems.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}