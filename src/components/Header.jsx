import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css"
// Login user icon
// import userIcon from "../assets/images/user-solid.svg"
import icon from "../assets/images/avatar-icon.png"

export default function Header() {
  return (
      <header>
            <Link to="/" className={css.logo} >#VANLIFE</Link>

            <nav className={css.main_nav}>
              <NavLink to="host" className={css.nav_link}>Host</NavLink>
              <NavLink to="about" className={css.nav_link} >About</NavLink>
              <NavLink to="vans" className={css.nav_link} >Vans</NavLink>
              <NavLink to="login" className={css.nav_link} ><img src={icon} width="17px" height= "17px" alt="login icon"/></NavLink>
            </nav>
      </header>
  );
}
