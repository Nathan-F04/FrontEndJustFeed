import classes from "./NotificationBox.module.css";
import Notifications from "../notifcation/Notifcations"; 
export default function NotificationBox(props) {
  return (
    <div className={classes.thePopup}>
        <Notifications></Notifications>
    </div>
  );
}
