import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// CSS
import css from "./Vans.module.css";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map(
    ({ id, name, price, description, imageUrl, type, hostId }) => (
      <Link to={id} key={id} className={css.card}>
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
    )
  );

  return (
    <article className={css.vans_page}>
      <h1 className={css.title}>Explore our van options</h1>
      <div className={css.card_container}>{vanElements}</div>
    </article>
  );
}
