import classes from "./CartPopUp.module.css"
import CartItem from './CartItem';

export default function CartPopup(props) {
  return (
    <div className={classes.thePopup}>
      {props.cartItems.map((cartItems) => (
        <CartItem
          image={cartItems.image}
          quantity={cartItems.quantity}
          price={cartItems.price}
        />
      ))}
    </div>
  )
}