import classes from './CartItem.module.css'
import QuantityButton from '../generic/QuantityButton';
import GlobalContext from '../../pages/store/globalContext';
import { useState, useContext } from 'react';

function CartItem(props) {
    const globalCtx = useContext(GlobalContext);
    let [cartPrice, setCartPrice] = useState(props.price * props.quantity);

    async function removeItemHandler() {
        globalCtx.updateGlobals({cmd: 'removeCartItem', newVal: props});
    }

    async function decChangeItemHandler() {
        if (props.quantity > 1) {
            globalCtx.updateGlobals({cmd: 'setQuantiyInCart', newVal: {quantity: props.quantity - 1}, id: props.id});
            setCartPrice(props.price * (props.quantity - 1));
        }
    }

    async function incChangeItemHandler() {
        globalCtx.updateGlobals({cmd: 'setQuantiyInCart', newVal: {quantity: props.quantity + 1}, id: props.id});
        setCartPrice(props.price * (props.quantity + 1));
    }

    return (
        <div className={classes.cartItem}>
            <img src={props.image} className={classes.cartItemImage}></img>
            <p className={classes.cartItemText}>Quantity: {props.quantity}</p>
            <QuantityButton text1="+" onClickHandler={incChangeItemHandler} />
            <QuantityButton text1="-" onClickHandler={decChangeItemHandler}/>
            <p className={classes.cartItemText}>Price: {cartPrice.toFixed(2)}</p>
            <QuantityButton text1="X" onClickHandler={removeItemHandler}/>
        </div>
    );
}

export default CartItem;