import { NavLink, Outlet } from "react-router-dom";
// CSS
import css from "./HostLayout.module.css"

export default function HostLayout() {
  return (
    <>
      <nav className={css.hostlayout}>
        <NavLink to="." end>Dashboard</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      <Outlet />
    </>
  );
}
