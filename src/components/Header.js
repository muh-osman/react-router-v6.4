import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css"

export default function Header() {
  return (
      <header>
            <Link to="/" className={css.logo} >#VANLIFE</Link>

            <nav className={css.main_nav}>
              {/* <NavLink to=".">Home</NavLink> */}
              <NavLink to="host" className={css.nav_link}>Host</NavLink>
              <NavLink to="about" className={css.nav_link} >About</NavLink>
              <NavLink to="vans" className={css.nav_link} >Vans</NavLink>
            </nav>
      </header>
  );
}
