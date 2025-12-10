import GlobalContext from "../../pages/store/globalContext"
import OrderItemList from '../../components/meetups/OrderItemList';
import { useContext } from 'react'

function NewMeetupPage() {
    const globalCtx = useContext(GlobalContext)

    return globalCtx.theGlobalObject.isPastOrdersLoaded ? (
        <OrderItemList orders={globalCtx.theGlobalObject.pastOrders.OrderRead}/>
    ): null;
}

export default NewMeetupPage