import BankInfoList from "../components/meetups/BankInfoList";
import { useContext } from "react";
import GlobalContext from "./store/globalContext";

function HomePage() {
  const globalCtx = useContext(GlobalContext);

  if (globalCtx.theGlobalObject.dataLoaded == true) {
    return <BankInfoList foods={globalCtx.theGlobalObject.orders} />;
  }
  return null;
}

export default HomePage;
