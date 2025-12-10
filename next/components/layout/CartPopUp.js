import classes from "./CartPopUp.module.css"
import CartItem from './CartItem';

export default function CartPopup(props) {
  return (
    <div className={classes.thePopup}>
      {props.cartItems.map((cartItems) => (
        <CartItem
          key={cartItems.id}
          id={cartItems.id}
          image={cartItems.image}
          price={cartItems.price}
          quantity={cartItems.quantity}
        />
      ))}
    </div>
  )
}