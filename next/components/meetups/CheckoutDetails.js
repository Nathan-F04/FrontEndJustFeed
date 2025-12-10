import classes from './CheckoutDetails.module.css';
import Items from './Items';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

function CheckoutDetails(props) {
    const router = useRouter();
    const [price, setPrice] = useState(0);
    function checkoutPayment() {
    router.push("/checkout/payment");
    }

    function getTotal() {
        let total_amount = 0;
        props.items.map((item) => (total_amount = total_amount + item.price))
        setPrice(total_amount);
    }

    useEffect(() => {
        getTotal();
    }, [])

  return (
    <li className={classes.item}>
      <div className={classes.orderCard}>
        <div className={classes.content}>
            {props.items.map((item) => (
                <Items //This is what is called and needs to be formatted for alex's db
                    key={item.id}               
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                />
            ))}
        </div>
      </div>
      <section className={classes.orderInfo}>
        <p>Total Amount: {price}</p>
        <div></div>
        <button onClick={checkoutPayment}>Proceed to payment</button>
      </section>
    </li>
  );
}

export default CheckoutDetails;