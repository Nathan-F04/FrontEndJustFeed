import classes from "./Sidebar.module.css"
import Link from 'next/link'
import { GiShoppingCart } from 'react-icons/gi'

export default function Popup(props) {
  return (
    <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}> 
      <div className={classes.thePopup}>
        <ul className={classes.sideLink}>
          <li><GiShoppingCart/><Link href="/new-meetup">Orders</Link></li>
          <li><GiShoppingCart/><Link href="/bank-info">Bank details</Link></li>
          <li><GiShoppingCart/><Link href="index.js">Restaurants</Link></li>
          <li><GiShoppingCart/><Link href="index.js" >Settings </Link></li>
        </ul>
      </div>
    </div>
  )
}