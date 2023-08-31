import { Link } from "react-router-dom";
// CSS
import css from "./NotFound.module.css"

export default function NotFound() {
  return (
    <section className={css.container}>
      <h1 className={css.title}>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className={css.link}>Return to home</Link>
    </section>
  );
}
