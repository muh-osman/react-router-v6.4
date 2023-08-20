import { createContext, useState } from "react";
import Home from "../pages/Home";

export const NamesContext = createContext();

export default function NamesProvider(props) {
  const [names, setNames] = useState({
    name: "Muhammed",
  });

  return (
    <>
      <NamesContext.Provider value={{ names, setNames }}>
        {props.children}
      </NamesContext.Provider>
    </>
  );
}
