import classes from "./CheckoutDetails.module.css";
import Items from "./Items";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function CheckoutDetails(props) {
  const router = useRouter();
  const [price, setPrice] = useState(0);
  function checkoutPayment() {
    router.push("/checkout/payment");
  }

  function getTotal() {
    const total = props.items.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );
    setPrice(total);
    sessionStorage.setItem("total_amount", total);
  }

  useEffect(() => {
    getTotal();
  }, [props.items]);

  return (
    <li className={classes.item}>
      <div className={classes.orderCard}>
        <div className={classes.content}>
          {props.items.map((item) => (
            <Items
              key={item.id}
              title={item.title}
              price={item.price * item.quantity}
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
