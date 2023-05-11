import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <NavLink to=".">Home</NavLink>
          <NavLink to="host">Host</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="vans">Vans</NavLink>
        </nav>
      </header>
    </>
  );
}
