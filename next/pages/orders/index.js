import GlobalContext from "../../pages/store/globalContext"
import OrderItemList from '../../components/meetups/OrderItemList';
import { useContext } from 'react'

function NewMeetupPage() {
    const globalCtx = useContext(GlobalContext)
    //TODO: Remove hardcoded values
    const orders = [
        {
            id: 1,
            user_id: 1,
            total_amount: 200,
            status: "complete",
            created_at: "2014-08-18 21:11:35.537000",
            items: [{
                id: 1,
                order_id: 1,
                item_name: "test item 1",
                image: "Just-feed.png",
                price: 20,
                description: "test wevfiYEYViy evclvaslhclAHV; LIOUQV;DIUVQ; W UODV; OQUWVD;AUV;IAV LCVLIVDIQVLIDVLIq yvwdilyvLIQVFEWFFFFFF FFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFF FFFFFFFFFFF",
                quantity: 1
            },
            {
                id: 2,
                order_id: 2,
                item_name: "test item 2",
                image: "Just-feed.png",
                price: 180,
                description: "test 2",
                quantity: 1
            }]
        },
        {
            id: 2,
            user_id: 2,
            total_amount: 200,
            status: "complete",
            created_at: "2014-08-18 21:11:35.537000",
            items: [{
                id: 1,
                order_id: 1,
                item_name: "test item 1",
                image: "Just-feed.png",
                price: 20,
                description: "test",
                quantity: 1
            },
            {
                id: 2,
                order_id: 2,
                item_name: "test item 2",
                image: "Just-feed.png",
                price: 180,
                description: "test 2",
                quantity: 1
            }]
        }
    ]

    return (
        <section>
            <OrderItemList orders={orders}/>
        </section>
    );
}

export default NewMeetupPage