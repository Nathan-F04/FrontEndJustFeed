import classes from './CartItem.module.css'
import QuantityButton from '../generic/QuantityButton';
import GlobalContext from '../../pages/store/globalContext';
import { useState, useContext } from 'react';

function CartItem(props) {
    const globalCtx = useContext(GlobalContext);
    let [cartPrice, setCartPrice] = useState(props.price);

    async function removeItemHandler() {
        globalCtx.updateGlobals({cmd: 'removeCartItem', newVal: props});
    }

    async function changeItemHandler() {
        globalCtx.updateGlobals({cmd: 'setQuantiyInCart', newVal: {quantity: props.quantity + 1}, id: props.id});
        setCartPrice(props.price * globalCtx.theGlobalObject.cartItems[props.id]?.quantity);
    }

    return (
        <div className={classes.cartItem}>
            <img src={props.image} className={classes.cartItemImage}></img>
            <p className={classes.cartItemText}>Quantity: {props.quantity}</p>
            <QuantityButton text1="+" onClickHandler={changeItemHandler} />
            <QuantityButton text1="-" onClickHandler={changeItemHandler}/>
            <p className={classes.cartItemText}>Price: {cartPrice}</p>
            <QuantityButton text1="X" onClickHandler={removeItemHandler}/>
        </div>
    );
}

export default CartItem;