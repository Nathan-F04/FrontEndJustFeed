import classes from "./QuantityButton.module.css"

export default function QuantityButton(props) {
  let styleObj = { maxWidth: props.maxWidth, minWidth: props.maxWidth }

  if(props.hide) { /* Move the show / hide code to the component itself: */
    return null
  }

  return (
    <div className={classes.mainDiv} style={styleObj} onClick={() => props.onClickHandler()} >
        <p className={classes.mainText}>{props.text1}</p>
    </div>
  )
}

