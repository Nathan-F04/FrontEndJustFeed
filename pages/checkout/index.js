import CheckoutDetails from "../../components/checkoutPageComponents/CheckoutDetails";
import { useContext } from "react";
import GlobalContext from "../store/globalContext";

function CheckouPage() {
  const globalCtx = useContext(GlobalContext);

  return <CheckoutDetails items={globalCtx.theGlobalObject.cartItems} />;
}

export default CheckouPage;
