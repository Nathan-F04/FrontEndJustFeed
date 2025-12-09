import classes from './CartItem.module.css'
import QuantityButton from '../generic/QuantityButton';
import GlobalContext from '../../pages/store/globalContext';
import { useState, useContext } from 'react';

function CartItem(props) {
    const globalCtx = useContext(GlobalContext);
    let [cartPrice, setCartPrice] = useState(props.price * (props.cartNum));

    async function removeItemHandler() {
        globalCtx.updateGlobals({cmd: 'removeCartItem', newVal: props});
    }
    
    function CartIncHandler(){
        let newCartNum = props.cartNum + 1;
        props.setCartNum(newCartNum);
        setCartPrice(props.price * (newCartNum));
    }

    function CartDecHandler(){
        if(props.cartNum > 1) {
            let newCartNum = props.cartNum - 1;
            props.setCartNum(newCartNum);
            setCartPrice(props.price * (newCartNum));
        }
    }

    return (
        <div className={classes.cartItem}>
            <img src={props.image} className={classes.cartItemImage}></img>
            <p className={classes.cartItemText}>Quantity: {props.cartNum}</p>
            <div className={classes.buttonDiv}>
                <QuantityButton text1="+" onClickHandler={CartIncHandler} />
                <span></span>
                <QuantityButton text1="-" onClickHandler={CartDecHandler}/>
            </div>
            <p className={classes.cartItemText}>Price: {cartPrice}</p>
            <div className={classes.buttonDiv}>
                <QuantityButton text1="X" onClickHandler={removeItemHandler}/>
            </div>
        </div>
    );
}

export default CartItem;