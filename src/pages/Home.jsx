import { Link } from "react-router-dom";
import { useContext } from "react";
import { NamesContext } from "../context/NamesProvider";
// CSS Module
import css from "./Home.module.css"

export default function Home() {

  const { names, setNames } = useContext(NamesContext);

  return (
    <article className={css.img_bg}>
      <h1 className={css.title}>You got the travel plans, we got the travel vans.</h1>
      <p className={css.description}>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to="vans" className={css.btn}>Find your van</Link>



      {/* <h1>Hello {names.name}</h1>

      <button onClick={() => setNames(prev => ({ ...prev, name: "Ahmed" }))}>
        Change Name
      </button> */}
    </article>
  );
}
