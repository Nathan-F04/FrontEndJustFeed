import PaymentForm from "../../components/paymentPageComponents/PaymentForm";
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext";
import { useContext } from 'react';

function PaymentPage() {
    const router = useRouter();
    const globalCtx = useContext(GlobalContext);

    async function addItemsHandler(enteredItemsData)  {
        await globalCtx.updateGlobals({cmd: 'addItems', newVal: enteredItemsData});
        for(const item in globalCtx.theGlobalObject.cartItems) {
            await globalCtx.updateGlobals({cmd: 'setQuantiyInCart', newVal: { quantity: 1 }, id: item.id});
        }
        await globalCtx.updateGlobals({cmd: 'clearCart'});
        router.push('/');
    }
    return (
        <PaymentForm onAddItems={addItemsHandler}/>
    );
}

export default PaymentPage;
