import GlobalContext from "../../store/globalContext";
import OrderItemList from "../../components/orderPageComponents/OrderItemList"; 
import { useContext } from "react";

function NewMeetupPage() {
  const globalCtx = useContext(GlobalContext);

  return globalCtx.theGlobalObject.isPastOrdersLoaded ? (
    <OrderItemList orders={globalCtx.theGlobalObject.pastOrders.OrderRead} />
  ) : null;
}

export default NewMeetupPage;
