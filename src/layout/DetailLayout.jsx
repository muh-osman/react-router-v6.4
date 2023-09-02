import React, { useEffect, useState } from "react";
import css from "./DetailLayout.module.css";
import {
  useParams,
  useLoaderData,
  Link,
  NavLink,
  Outlet,
  defer,
  Await,
} from "react-router-dom";
// Fetch Data
import { getHostVans } from "../api";
// Protect Route
import { requireAuth } from "../utils";
// import { getVan } from "../api/firebase";

// export function loader({ params }) {
//   return defer({ van: getVan(params.id) });
// }

// export async function loader({ params }) {
//   await requireAuth()
//   return getHostVans(params.id);
// }

export default function DetailLayout() {
  // const currentVan = useLoaderData();

  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      const vansData = await getHostVans(id);
      setCurrentVan(vansData);
    }

    fetchData();
  }, []);


  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section className={css.container}>
      <Link to="/host/vans" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {/* <React.Suspense fallback={<h2>Loading...</h2>}> */}
      {/* <Await resolve={loaderData.van}> */}
      {/* {(currentVan) => ( */}

      {currentVan? (
        <div className={css.host_van_detail_layout_container}>
          <div className={css.host_van_detail}>
            <img src={currentVan.imageUrl} alt="" />
            <div className={css.host_van_detail_info_text}>
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>

          <nav className={css.host_van_detail_nav}>
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </nav>

          <Outlet context={{ currentVan }} />
        </div>
      ) : (
        <h1 style={{textAlign: "center"}}>Loading..</h1>
      )}

      {/* )} */}
      {/* </Await> */}
      {/* </React.Suspense> */}
    </section>
  );
}
