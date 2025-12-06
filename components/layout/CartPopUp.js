import classes from "./CartPopUp.module.css"
import CartItem from './CartItem';

export default function CartPopup(props) {
  return (
    <div className={classes.thePopup}>
      {props.cartItems.map((cartItems) => (
        <CartItem
          key={cartItems.id}
          image={cartItems.image}
          price={cartItems.price}
          cartNum={props.cartNum}
          setCartNum={props.setCartNum}
        />
      ))}
    </div>
  )
}