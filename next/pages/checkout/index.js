import CheckoutDetails from "../../components/meetups/CheckoutDetails";
import { useContext } from "react";
import GlobalContext from "../store/globalContext";

function CheckouPage() {
  const globalCtx = useContext(GlobalContext);

  return <CheckoutDetails items={globalCtx.theGlobalObject.cartItems} />;
}

export default CheckouPage;
