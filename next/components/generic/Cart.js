import classes from "./Cart.module.css"

export default function Cart(props) {
  let styleObj = { maxWidth: props.maxWidth, minWidth: props.maxWidth }

  if(props.hide) { /* Move the show / hide code to the component itself: */
    return null
  }

  return (
    <div className={classes.mainDiv} style={styleObj} onClick={() => props.toggleMenuHide()} >
      {props.icon != undefined &&
        <div className={classes.iconDiv}>
           {props.icon}
        </div>
      }
    </div>
  )
}
