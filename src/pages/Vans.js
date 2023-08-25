import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
// CSS
import css from "./Vans.module.css";

export default function Vans() {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  // Filter
  const [searchParams, setSearchParams] = useSearchParams();
  let typeFilter = searchParams.get("type"); //ex: simple

  let vansAfterFiltered = typeFilter
    ? vans?.filter((van) => van.type === typeFilter)
    : vans;

  // Map on Vans
  const vanElements = vans ? (
    vansAfterFiltered.map(({ id, name, price, imageUrl, type }) => (
      <Link
        to={id}
        key={id}
        className={css.card}
        state={{ paramType: typeFilter }}
      >
        <div className={css.img_box}>
          <img src={imageUrl} alt={name} className={css.card_img} />
        </div>
        <div className={css.name_price_box}>
          <p className={css.name}>{name}</p>
          <p className={css.price}>${price}</p>
        </div>
        <div className={css.type_day_box}>
          <button
            style={{
              backgroundColor:
                type === "simple"
                  ? "#E17654"
                  : type === "rugged"
                  ? "#115E59"
                  : "#161616",
            }}
          >
            {type}
          </button>

          <p>/day</p>
        </div>
      </Link>
    ))
  ) : (
    <h1>Loading...</h1>
  );

  return (
    <article className={css.vans_page}>
      <h1 className={css.title}>Explore our van options</h1>

      <section className={css.filterBtnBox}>
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`${css.filterBtn} ${css.simple} ${
            typeFilter === "simple" ? css.selected : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`${css.filterBtn} ${css.rugged} ${
            typeFilter === "rugged" ? css.selected : ""
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`${css.filterBtn} ${css.luxury} ${
            typeFilter === "luxury" ? css.selected : ""
          }`}
        >
          Luxury
        </button>

        {typeFilter && (
          <button
            onClick={() => setSearchParams({})}
            className={`${css.filterBtn} ${css.all}`}
          >
            Clear
          </button>
        )}
      </section>

      <div className={css.card_container}>{vanElements}</div>
    </article>
  );
}
