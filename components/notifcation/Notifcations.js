import { useContext } from "react";
import GlobalContext from "../../store/globalContext";

export default function Notifications() {
  const globalCtx = useContext(GlobalContext);
  console.log(globalCtx.theGlobalObject.messages);
  return <ul>{globalCtx.theGlobalObject.messages.map((msg, i) => <li key={i}>{msg}</li>)}</ul>;
}
