import classes from './CartItem.module.css'
import QuantityButton from '../generic/QuantityButton';
import { useState } from 'react';

function CartItem(props) {
    let [cartNum, setCartNum] = useState(1)
    let [cartPrice, setCartPrice] = useState(props.price)
    
    function CartIncHandler(){
        setCartNum(cartNum+1)
        setCartPrice(cartPrice = props.price * cartNum+1)
    }

    function CartDecHandler(){
        if(cartNum > 1) {
            setCartNum(cartNum-1)
            setCartPrice(cartPrice = props.price * cartNum-1)
        }
    }

    return (
        <div className={classes.cartItem}>
            <img src={props.image} className={classes.cartItemImage}></img>
            <p className={classes.cartItemText}>Quantity: {cartNum}</p>
            <QuantityButton text1="+" onClickHandler={CartIncHandler}/>
            <QuantityButton text1="-" onClickHandler={CartDecHandler}/>
            <p className={classes.cartItemText}>Price: {cartPrice}</p>
            <QuantityButton text1="X"/>
        </div>
    );
}

export default CartItem;