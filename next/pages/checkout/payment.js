import PaymentForm from "../../components/meetups/PaymentForm";
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext";
import { useContext } from 'react';

function PaymentPage() {
    const router = useRouter();
    const globalCtx = useContext(GlobalContext);

    async function addItemsHandler(enteredItemsData)  {
        await globalCtx.updateGlobals({cmd: 'addItems', newVal: enteredItemsData})
        router.push('/');
    }
    return (
        <PaymentForm onAddItems={addItemsHandler}/>
    );
}

export default PaymentPage;
