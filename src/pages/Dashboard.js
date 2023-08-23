import { Link } from "react-router-dom";
// CSS
import css from "./Dashboard.module.css";

export default function Dashboard() {
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
        <div className={css.card}>xxx</div>
        <div className={css.card}>xxx</div>
        <div className={css.card}>xxx</div>
      </div>
    </article>
  );
}
