import { Link, NavLink, Outlet } from "react-router-dom";

export default function DetailLayout() {
  return (
    <>
      <Outlet />

      <NavLink end to=".">Details</NavLink>
      <NavLink to="pricing">Pricing</NavLink>
      <NavLink to="photos">Photos</NavLink>
    </>
  );
}
