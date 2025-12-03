import classes from './CartItem.module.css'
import QuantityButton from '../generic/QuantityButton';
import GlobalContext from '../../pages/store/globalContext';
import { useState, useContext } from 'react';

function CartItem(props) {
    let [cartNum, setCartNum] = useState(props.quantity)
    let [cartPrice, setCartPrice] = useState(props.price)
    const globalCtx = useContext(GlobalContext)

    async function removeItemHandler() {
        globalCtx.updateGlobals({cmd: 'removeCartItem', newVal: props})
    }
    
    function CartIncHandler(){
        setCartNum(cartNum+1)
        setCartPrice(cartPrice = props.price * (cartNum+1))
    }

    function CartDecHandler(){
        if(cartNum > 1) {
            setCartNum(cartNum-1)
            setCartPrice(cartPrice = props.price * (cartNum-1))
        }
    }

    return (
        <div className={classes.cartItem}>
            <img src={props.image} className={classes.cartItemImage}></img>
            <p className={classes.cartItemText}>Quantity: {cartNum}</p>
            <QuantityButton text1="+" onClickHandler={CartIncHandler}/>
            <QuantityButton text1="-" onClickHandler={CartDecHandler}/>
            <p className={classes.cartItemText}>Price: {cartPrice}</p>
            <QuantityButton text1="X" onClickHandler={removeItemHandler}/>
        </div>
    );
}

export default CartItem;