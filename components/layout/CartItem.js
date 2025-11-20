import classes from './CartItem.module.css'
import QuantityButton from '../generic/QuantityButton';

function CartItem(props) {
    return (
        <div className={classes.cartItem}>
            <img src={props.image} className={classes.cartItemImage}></img>
            <p className={classes.cartItemText}>Quantity: {props.quantity}</p>
            <QuantityButton text1="+"/>
            <QuantityButton text1="-" />
            <p className={classes.cartItemText}>Price: {props.price}</p>
            <QuantityButton text1="X"/>
        </div>
    );
}

export default CartItem;