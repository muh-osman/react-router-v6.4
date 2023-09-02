// React & React router
import { Suspense, useEffect, useState } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
// CSS
import css from "./Dashboard.module.css";
// API
import { getHostVans } from "../../api";
// Protect Route
import { requireAuth } from "../../utils";

// export const loader = async ({ request }) => {
//   await requireAuth({ request });
//   return defer({ vans: getHostVans() });
// };

export default function Dashboard() {
  // const dataPromise = useLoaderData();

  const [vans, setVans] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      const vansData = await getHostVans();
      setVans(vansData);
    }

    fetchData();
  }, []);

  // function renderVanElements(vans) {
  const hostVansEls = vans.map((van) => (
    <div className={css.host_van_single} key={van.id}>
      <img src={van.imageUrl} alt={van.name} />
      <div className={css.host_van_info}>
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
      <Link to={`vans/${van.id}`}>View</Link>
    </div>
  ));

  // }

  return (
    <article className={css.container}>
      <div className={css.wellDiv}>
        <h1>Welcome!</h1>
        <h2>$2,260</h2>
        <div className={css.spaceBetween}>
          <p>Income last 30 days</p>
          <Link to="income">Details</Link>
        </div>
      </div>

      <div className={`${css.spaceBetween} ${css.score}`}>
        <h3>Review score ⭐5.0/5</h3>
        <Link to="reviews">Details</Link>
      </div>

      <div className={css.list}>
        <div className={css.spaceBetween}>
          <h4>Your listed vans</h4>
          <Link to="vans">View all</Link>
        </div>

        {/* <Suspense fallback={<h1>Loading...</h1>} >
                <Await resolve={dataPromise.vans}>
                  {renderVanElements}
                </Await>
          </Suspense> */}

        <div className={css.card}>
          {vans.length > 0 ? hostVansEls : <h1 style={{textAlign: "center"}}>Loading..</h1>}
        </div>
      </div>
    </article>
  );
}
