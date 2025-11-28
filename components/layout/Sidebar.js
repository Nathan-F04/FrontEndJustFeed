import classes from "./Sidebar.module.css"
import Link from 'next/link'
import { IoHomeSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";

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
        <div className={classes.sideLink}>
          <span className={classes.sidebarItem}><IoHomeSharp className={classes.sidebarIcon}/><div className={classes.gap}></div><Link href="index.js">Home</Link></span>
          <span className={classes.sidebarItem}><TbListDetails className={classes.sidebarIcon}/><div className={classes.gap}></div><Link href="/new-meetup">Orders</Link></span>
          <span className={classes.sidebarFinalItem}><IoMdSettings className={classes.sidebarIcon}/><div className={classes.gap}></div><Link href="index.js" >Settings</Link></span>
        </div>
      </div>
    </div>
  )
}