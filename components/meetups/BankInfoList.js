import BankInfoItem from './BankInfoItem';
import MeetupItem from './BankInfoItem';
import classes from './BankInfoList.module.css';

function BankInfoList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <BankInfoItemItem
          key={meetup.meetingId}
          name={meetup.name}
          email={meetup.email}
          password={meetup.password}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default BankInfoList;
