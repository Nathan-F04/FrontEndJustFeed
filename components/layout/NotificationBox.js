import classes from "./NotificationBox.module.css";
import Notifications from "../notifcation/Notifcations";
export default function NotificationBox() {
  return (
    <div className={classes.thePopup}>
      <Notifications></Notifications>
    </div>
  );
}
