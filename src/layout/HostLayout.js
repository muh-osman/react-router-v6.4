import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <div className="hostlayout">
        <NavLink to="." end>Dashboard</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>

      <Outlet />
    </>
  );
}
