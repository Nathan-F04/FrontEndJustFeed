import classes from "./QuantityButton.module.css"

export default function QuantityButton(props) {
  let styleObj = { maxWidth: props.maxWidth, minWidth: props.maxWidth }

  return (
    <div className={props.text1 === "X" ? classes.xDiv : classes.mainDiv} style={styleObj} onClick={() => props.onClickHandler()} >
        <p className={classes.mainText}>{props.text1}</p>
    </div>
  )
}

