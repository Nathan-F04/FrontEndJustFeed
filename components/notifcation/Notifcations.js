import { useContext } from "react";
import GlobalContext from "../../store/globalContext";
import classes from "./Notifications.module.css";

export default function Notifications() {
  const globalCtx = useContext(GlobalContext);
  return (
    <ul className={classes.list}>
      {globalCtx.theGlobalObject.messages.map((msg, i) => (
        <li key={i}>{msg}</li>
      ))}
    </ul>
  );
}
