import React, { useEffect, useState } from "react";
import css from "./HostVans.module.css"
import { Link, defer, useLoaderData, Await } from "react-router-dom";
import { getHostVans } from "../../api"
// Protect Route
import { requireAuth } from "../../utils";
// import { getHostVans } from "../../api/firebase";

// export function loader() {
//   return defer({ vans: getHostVans() });
// }

// export const loader = async ({request}) => {
//   await requireAuth({request})
//   return getHostVans();
// };


export default function HostVans() {
  // const loaderData = useLoaderData();

  // function RenderVanElements(vans) {

  const [vans, setVans] = useState([]);


    useEffect(() => {
    
      async function fetchData() {
        const vansData = await getHostVans();
        setVans(vansData);
      }
  
      fetchData();
    }, [])

    
    const hostVansEls = vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className={css.host_van_single} key={van.id}>
          <img src={van.imageUrl} alt="" />
          <div className={css.host_van_info}>
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));


  // }

  return (
    <section className={css.container}>
      <h1 className="host-vans-title">Your listed vans</h1>

      {/* <React.Suspense fallback={<h2>Loading vans...</h2>}> */}
        {/* <Await resolve={loaderData.vans}>{RenderVanElements}</Await> */}
      {/* </React.Suspense> */}

      <div className={css.host_vans_list}>
        <section>{vans.length > 0? hostVansEls : <h1 style={{textAlign: "center"}}>Loading..</h1>}</section>
      </div>

    </section>
  );
}
