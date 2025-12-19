import classes from "./Modal.module.css";

export default function Modal(props) {
  return (
    <div className={classes.mainDiv}>
      <p className={classes.mainText}>{props.text1}</p>
      <div className={classes.actions}>
        <button onClick={() => props.onConfirmHandler()}>Confirm</button>
        <div></div>
        <button onClick={() => props.onCancelHandler()}>Cancel</button>
      </div>
    </div>
  );
}
