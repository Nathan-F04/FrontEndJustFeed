import classes from "./Sidebar.module.css"
import HamMenu from "../generic/HamMenu"

export default function Popup(props) {
  return (
    <div className={classes.mainDiv}>
      <HamMenu onClick={() => props.toggleMenuHide()}/>
      <div className={classes.greyBackground}></div>
      <div className={classes.thePopup}></div>
    </div>
  )
}