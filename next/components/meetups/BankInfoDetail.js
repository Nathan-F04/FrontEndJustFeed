import classes from "./MeetupDetail.module.css";

function BankInfoDetail(props) {
  return (
    <section className={classes.detail}>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.password}</p>
      <p>{props.description}</p>
    </section>
  );
}

export default BankInfoDetail;
